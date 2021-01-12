using Bogus;
using GenerateMockinData.Entities;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms.VisualStyles;

namespace GenerateMockinData
{
    public class MockRuuvi
    {
        private static readonly HttpClient clientTest = new HttpClient()
        {
            BaseAddress = new Uri("https://ruuvitest.jordihuntjens.nl")
        };

        private static readonly HttpClient clientSpa = new HttpClient()
        {
            BaseAddress = new Uri("https://ruuvispa.jordihuntjens.nl")
        };

        public List<Asset> assets = new List<Asset>();
        private Random random = new Random();

        private string mockingId = "mocking_data_";
        // /api/ruuvidata

        public async Task<List<Asset>> GetAssetsAsync()
        {
            HttpResponseMessage response = await clientSpa.GetAsync("/api/assets");
            response.EnsureSuccessStatusCode();
            string result = response.Content.ReadAsStringAsync().Result;
            assets = JsonConvert.DeserializeObject<List<Asset>>(result);

            return assets;
        }

        public async void GenerateAssets()
        {
            var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            var stringChars = new char[8];
            var random = new Random();

            for (int i = 0; i < stringChars.Length; i++)
            {
                stringChars[i] = chars[random.Next(chars.Length)];
            }

            var finalString = new String(stringChars);

            var fakerAsset = new Faker<Asset>().RuleFor(o => o.Name, f => f.Company.CompanyName());
            
            Asset asset = fakerAsset.Generate();
            asset.Id = 0;
            asset.DeviceId = mockingId + finalString;

            HttpResponseMessage response = await clientSpa.PostAsync("/api/assets", new StringContent(JsonConvert.SerializeObject(asset),
                Encoding.UTF8, "application/json"));
            response.EnsureSuccessStatusCode();
            string result = response.Content.ReadAsStringAsync().Result;

            asset = JsonConvert.DeserializeObject<Asset>(result);
            newRuuviInputData(asset);

            assets.Add(asset);
        }

        public void GenerateRuuviData()
        {
            foreach (Asset asset in assets)
            {
                if (asset.DeviceId.StartsWith(mockingId))
                {
                    updateRuuviInputData(asset);
                }
            }
        }

        private async void setRuuviData(RuuviInputData ruuviInput)
        {
            HttpResponseMessage response = await clientTest.PostAsync("/api/ruuvidata", new StringContent(
                    JsonConvert.SerializeObject(ruuviInput),
                    Encoding.UTF8, "application/json"));
        }

        private void newRuuviInputData(Asset asset)
        {
            Location location = new Location().RandomLocation();

            Tags tags = new Tags()
            {
                accelX = 0,
                accelY = 0,
                accelZ = 0,
                humidity = random.Next(30, 50),
                pressure = 100994,
                temperature = random.Next(0, 30),
            };

            RuuviInputData ruuviInput = new RuuviInputData()
            {
                deviceId = asset.DeviceId,
                batteryLevel = 100,
                location = location,
                tags = new List<Tags>(),
                time = DateTime.Now
            };

            ruuviInput.tags.Add(tags);

            setRuuviData(ruuviInput);
            
        }

        private async void updateRuuviInputData(Asset asset)
        {
            HttpResponseMessage response = await clientSpa.GetAsync("/api/assets/" + asset.Id);
            response.EnsureSuccessStatusCode();
            string result = response.Content.ReadAsStringAsync().Result;
            dynamic test = JsonConvert.DeserializeObject<dynamic>(result);

            List<dynamic> temperatureList = new List<dynamic>(test["temperature"]);
            List<dynamic> humidityList = new List<dynamic>(test["humidity"]);
            List<dynamic> pressureList = new List<dynamic>(test["pressure"]);
            List<dynamic> locationList = new List<dynamic>(test["route"]);


            double lastTemperature = temperatureList[temperatureList.Count - 1]["value"];
            double lastHumidity = humidityList[humidityList.Count - 1]["value"];
            double lastPressure = pressureList[pressureList.Count - 1]["value"];

            double lastLatitude = locationList[locationList.Count - 1]["latitude"];
            double lastlongitude = locationList[locationList.Count - 1]["longitude"];

            Location location = new Location()
            {
                accuracy = 1,
                latitude = lastLatitude,
                longitude = lastlongitude
            };

            Tags tags = new Tags()
            {
                accelX = 0,
                accelY = 0,
                accelZ = 0,
                humidity = Math.Round(random.NextDouble() * ((lastHumidity + 1) - (lastHumidity - 1)) + (lastHumidity - 1), 2),
                pressure = Math.Round(random.NextDouble() * ((lastPressure + 1) - (lastPressure - 1)) + (lastPressure - 1), 2),
                temperature = Math.Round(random.NextDouble() * ((lastTemperature + 1) - (lastTemperature - 1)) + (lastTemperature - 1), 2),
            };

            RuuviInputData ruuviInput = new RuuviInputData()
            {
                deviceId = asset.DeviceId,
                batteryLevel = 100,
                location = location,
                tags = new List<Tags>(),
                time = DateTime.Now
            };

            ruuviInput.tags.Add(tags);

            setRuuviData(ruuviInput);
        }
    }  
}