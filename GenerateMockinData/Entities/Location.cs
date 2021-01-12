using System;

namespace GenerateMockinData.Entities
{
    public class Location
    {
        public double accuracy { get; set; }
        public double latitude { get; set; }
        public double longitude { get; set; }

        public Location Maastricht()
        {
            return new Location()
            {
                accuracy = 1,
                latitude = 50.821705,
                longitude = 5.7250953,
            };
        }

        public Location Stevensbeek()
        {
            return new Location()
            {
                accuracy = 1,
                latitude = 51.6034193,
                longitude = 5.9160981,
            };
        }

        public Location Bladel()
        {
            return new Location()
            {
                accuracy = 1,
                latitude = 51.362963,
                longitude = 5.2136395,

            };
        }

        public Location Eindhoven()
        {
            return new Location()
            {
                accuracy = 1,
                latitude = 51.441642,
                longitude = 5.4697225,

            };
        }

        public Location RandomLocation()
        {
            Random random = new Random();

            var maxLatNL = 50.851368;
            var minLatNL = 52.9562808;

            var maxLonNL = 5.690973;
            var minLonNL = 4.7607972;
            
            return new Location()
            {
                accuracy = 1,
                latitude = random.NextDouble() *(maxLatNL - minLatNL) + minLatNL,
                longitude = random.NextDouble() * (maxLonNL - minLonNL) + minLonNL,
            };
        }
    }
}