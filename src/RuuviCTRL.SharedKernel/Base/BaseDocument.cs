using MongoDB.Bson;
using RuuviTest.SharedKernel.Interfaces;
using System;

namespace RuuviTest.SharedKernel.Base
{
    public abstract class BaseDocument : IDocument
    {
        public ObjectId Id { get; set; }

        public DateTime CreatedAt => Id.CreationTime;
    }
}
