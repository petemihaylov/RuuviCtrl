using MongoDB.Bson;
using RuuviCTRL.SharedKernel.Interfaces;
using System;

namespace RuuviCTRL.SharedKernel.Base
{
    public abstract class BaseDocument : IDocument
    {
        public ObjectId Id { get; set; }

        public DateTime CreatedAt => Id.CreationTime;
    }
}
