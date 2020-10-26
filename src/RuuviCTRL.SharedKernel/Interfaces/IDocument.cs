using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace RuuviCTRL.SharedKernel.Interfaces
{
    public interface IDocument
    {
        [BsonId]
        [BsonRepresentation(BsonType.String)]
        ObjectId Id { get; set; }

        DateTime CreatedAt { get; }
    }
}
