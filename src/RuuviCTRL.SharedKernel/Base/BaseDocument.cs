using System;
using MongoDB.Bson;
using RuuviCTRL.SharedKernel.Interfaces;

namespace RuuviCTRL.SharedKernel.Base
{
    public abstract class BaseDocument : IDocument
    {
        public ObjectId Id { get; set; }

        public DateTime CreatedAt => Id.CreationTime;
    }
}
