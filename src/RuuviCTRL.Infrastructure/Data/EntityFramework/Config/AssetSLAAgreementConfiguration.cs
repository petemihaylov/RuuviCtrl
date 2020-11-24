using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RuuviCTRL.Core.Entities;

namespace RuuviCTRL.Infrastructure.Data.EntityFramework.Config
{
    public class AssetSLAAgreementConfiguration : IEntityTypeConfiguration<AssetSLAAgreement>
    {
        public void Configure(EntityTypeBuilder<AssetSLAAgreement> builder)
        {
            builder.HasKey(asla => new { asla.AssetId, asla.SlaAgreementId});
            builder.HasOne(bc => bc.Asset)
                .WithMany(b => b.AssetSlaAgreements)
                .HasForeignKey(bc => bc.AssetId);
            builder.HasOne(bc => bc.SlaAgreement)
                .WithMany(c => c.AssetSlaAgreements)
                .HasForeignKey(bc => bc.SlaAgreementId);
        }
    }
}
