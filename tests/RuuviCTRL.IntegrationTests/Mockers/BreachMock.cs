using Bogus;
using RuuviCTRL.Core.Entities;
using System;

namespace RuuviCTRL.IntegrationTests.Mockers
{
    public static class BreachMock
    {
        public static Faker<Breach> GetBreachFaker(int id)
        {
            var fakerBreach = new Faker<Breach>()
                .RuleFor(o => o.Id, id)
                .RuleFor(o => o.LocationBoundary, f => f.Company.CompanyName())
                .RuleFor(o => o.LocationCount, f => f.Random.Float(1, 10))
                .RuleFor(o => o.CreatedAt, f => f.Date.Past())
                .RuleFor(o => o.MinHumidity, f => f.Random.Float(0, 50))
                .RuleFor(o => o.MaxHumidity, f => f.Random.Float(50, 100))
                .RuleFor(o => o.MinTemprature, f => f.Random.Float(0, 50))
                .RuleFor(o => o.MaxTemprature, f => f.Random.Float(50, 100))
                .RuleFor(o => o.MinPressure, f => f.Random.Float(0, 50))
                .RuleFor(o => o.MaxPressure, f => f.Random.Float(50, 100))
                .RuleFor(o => o.HumidityCount, f => f.Random.Float(1, 10))
                .RuleFor(o => o.PressureCount, f => f.Random.Float(1, 10))
                .RuleFor(o => o.TempratureCount, f => f.Random.Float(1, 10))
                .RuleFor(o => o.TempratureTime, f => f.Date.Timespan(TimeSpan.FromMinutes(10)))
                .RuleFor(o => o.PressureTime, f => f.Date.Timespan(TimeSpan.FromMinutes(10)))
                .RuleFor(o => o.HumidityTime, f => f.Date.Timespan(TimeSpan.FromMinutes(10)))
                .RuleFor(o => o.LocationTime, f => f.Date.Timespan(TimeSpan.FromMinutes(10)))
                .RuleFor(o => o.HasTempratureBoundry, true)
                .RuleFor(o => o.HasPressureBoundry, true)
                .RuleFor(o => o.HasHumidityBoundry, true)
                .RuleFor(o => o.HasLocationBoundry, true)
                .RuleFor(o => o.CreatedAt, f => f.Date.Past())
                .RuleFor(o => o.EndDate, f => f.Date.Future())
                .RuleFor(o => o.HasEnded, false)
                .RuleFor(o => o.Humidity, f => f.Random.Float())
                .RuleFor(o => o.Temperature, f => f.Random.Float())
                .RuleFor(o => o.Pressure, f => f.Random.Float())
                .RuleFor(o => o.SlaTitle, f => f.Random.Guid().ToString());

            return fakerBreach;
        }

        public static Breach GenerateRandomBreach(int id)
        {
            var Breach = GetBreachFaker(id).Generate();

            return Breach;
        }
    }
}
