using System;
using System.Collections.Generic;
using ClickPostaAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace ClickPostaAPI.Data
{
    public partial class ClickPostaDBContext : DbContext
    {
        public ClickPostaDBContext()
        {
        }

        public ClickPostaDBContext(DbContextOptions<ClickPostaDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Depo> Depo { get; set; } = null!;
        public virtual DbSet<DepoSektori> DepoSektori { get; set; } = null!;
        public virtual DbSet<Porosia> Porosia { get; set; } = null!;
        public virtual DbSet<Pushimi> Pushimi { get; set; } = null!;
        public virtual DbSet<QA> QA { get; set; } = null!;
        public virtual DbSet<Qyteti> Qyteti { get; set; } = null!;
        public virtual DbSet<RezervoVeturen> RezervoVeturen { get; set; } = null!;
        public virtual DbSet<Role> Role { get; set; } = null!;
        public virtual DbSet<Sektori> Sektori { get; set; } = null!;
        public virtual DbSet<StatusiPorosise> StatusiPorosise { get; set; } = null!;
        public virtual DbSet<Useri> Useri { get; set; } = null!;
        public virtual DbSet<Vetura> Vetura { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=localhost;Database=ClickPostaDB;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Depo>(entity =>
            {
                entity.Property(e => e.DepoId).HasColumnName("DepoID");

                entity.Property(e => e.Name)
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.StreetName)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.HasOne(d => d.ZipCodeNavigation)
                    .WithMany(p => p.Depo)
                    .HasForeignKey(d => d.ZipCode)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_DepoZipCode_398D8EEE");
            });

            modelBuilder.Entity<DepoSektori>(entity =>
            {
                entity.ToTable("Depo_Sektori");

                entity.Property(e => e.DepoId).HasColumnName("Depo_Id");

                entity.Property(e => e.SektoriId).HasColumnName("Sektori_Id");

                entity.HasOne(d => d.Depo)
                    .WithMany(p => p.DepoSektori)
                    .HasForeignKey(d => d.DepoId)
                    .HasConstraintName("FK_Depo_SektDepo__3E52440B");

                entity.HasOne(d => d.Sektori)
                    .WithMany(p => p.DepoSektori)
                    .HasForeignKey(d => d.SektoriId)
                    .HasConstraintName("FK_Depo_SektSekto_3F466844");
            });

            modelBuilder.Entity<Porosia>(entity =>
            {
                entity.Property(e => e.DepoSektoriId).HasColumnName("DepoSektoriID");

                entity.Property(e => e.DerguesiId).HasColumnName("DerguesiID");

                entity.Property(e => e.Detajet)
                    .HasMaxLength(1000)
                    .IsUnicode(false);

                entity.Property(e => e.Emertimi)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.MarresiId).HasColumnName("MarresiID");

                entity.Property(e => e.Materiali)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.ReceiverAddressDetails)
                    .HasMaxLength(200)
                    .IsUnicode(false)
                    .HasColumnName("Receiver_AddressDetails");

                entity.Property(e => e.ReceiverEmri)
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("Receiver_Emri");

                entity.Property(e => e.ReceiverHomeNumber).HasColumnName("Receiver_HomeNumber");

                entity.Property(e => e.ReceiverMbiemri)
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("Receiver_Mbiemri");

                entity.Property(e => e.ReceiverNrTelefonit)
                    .HasMaxLength(15)
                    .IsUnicode(false)
                    .HasColumnName("Receiver_NrTelefonit");

                entity.Property(e => e.ReceiverStreetName)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("Receiver_StreetName");

                entity.Property(e => e.ReceiverZipCode).HasColumnName("Receiver_ZipCode");

                entity.Property(e => e.SenderAddressDetails)
                    .HasMaxLength(200)
                    .IsUnicode(false)
                    .HasColumnName("Sender_AddressDetails");

                entity.Property(e => e.SenderEmri)
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("Sender_Emri");

                entity.Property(e => e.SenderHomeNumber).HasColumnName("Sender_HomeNumber");

                entity.Property(e => e.SenderMbiemri)
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("Sender_Mbiemri");

                entity.Property(e => e.SenderNrTelefonit)
                    .HasMaxLength(15)
                    .IsUnicode(false)
                    .HasColumnName("Sender_NrTelefonit");

                entity.Property(e => e.SenderStreetName)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("Sender_StreetName");

                entity.Property(e => e.SenderZipCode).HasColumnName("Sender_ZipCode");

                entity.Property(e => e.StatusiPorosiseId).HasColumnName("StatusiPorosiseID");

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.Property(e => e.Vellimi).HasColumnType("decimal(3, 2)");

                entity.HasOne(d => d.DepoSektori)
                    .WithMany(p => p.Porosia)
                    .HasForeignKey(d => d.DepoSektoriId)
                    .HasConstraintName("FK_PorosiaDepoSek_6754599E");

                entity.HasOne(d => d.Derguesi)
                    .WithMany(p => p.PorosiaDerguesi)
                    .HasForeignKey(d => d.DerguesiId)
                    .HasConstraintName("FK_PorosiaDergues_68487DD7");

                entity.HasOne(d => d.Marresi)
                    .WithMany(p => p.PorosiaMarresi)
                    .HasForeignKey(d => d.MarresiId)
                    .HasConstraintName("FK_PorosiaMarresi_66603565");

                entity.HasOne(d => d.ReceiverZipCodeNavigation)
                    .WithMany(p => p.PorosiaReceiverZipCodeNavigation)
                    .HasForeignKey(d => d.ReceiverZipCode)
                    .HasConstraintName("FK_PorosiaReceive_656C112C");

                entity.HasOne(d => d.SenderZipCodeNavigation)
                    .WithMany(p => p.PorosiaSenderZipCodeNavigation)
                    .HasForeignKey(d => d.SenderZipCode)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_PorosiaSender__6383C8BA");

                entity.HasOne(d => d.StatusiPorosise)
                    .WithMany(p => p.Porosia)
                    .HasForeignKey(d => d.StatusiPorosiseId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_PorosiaStatusi_693CA210");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.PorosiaUser)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_PorosiaUserID_619B8048");
            });

            modelBuilder.Entity<Pushimi>(entity =>
            {
                entity.Property(e => e.PushimiId).HasColumnName("PushimiID");

                entity.Property(e => e.DataFilimit)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.DataMbarimit)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Pushimi)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_PushimiUserID_49C3F6B7");
            });

            modelBuilder.Entity<QA>(entity =>
            {
                entity.ToTable("Q_A");

                entity.Property(e => e.Answer)
                    .HasMaxLength(1000)
                    .IsUnicode(false);

                entity.Property(e => e.Question)
                    .HasMaxLength(150)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Qyteti>(entity =>
            {
                entity.HasKey(e => e.QytetiZipCode)
                    .HasName("PK_Qyteti_5EC2763866B27A01");

                entity.Property(e => e.QytetiZipCode).ValueGeneratedNever();

                entity.Property(e => e.EmriQytetit)
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<RezervoVeturen>(entity =>
            {
                entity.HasKey(e => e.RezervimiId)
                    .HasName("PK_RezervoV_6F6B8C2BEA3FE425");

                entity.Property(e => e.RezervimiId).HasColumnName("RezervimiID");

                entity.Property(e => e.DataKthimit)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.DataRezervimit)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.Property(e => e.VeturaId).HasColumnName("VeturaID");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.RezervoVeturen)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_RezervoVeUserI_4F7CD00D");

                entity.HasOne(d => d.Vetura)
                    .WithMany(p => p.RezervoVeturen)
                    .HasForeignKey(d => d.VeturaId)
                    .HasConstraintName("FK_RezervoVeVetur_5070F446");
            });

            modelBuilder.Entity<Role>(entity =>
            {
                entity.Property(e => e.RoleId).HasColumnName("RoleID");

                entity.Property(e => e.RoleName)
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Sektori>(entity =>
            {
                entity.Property(e => e.SektoriId).HasColumnName("SektoriID");

                entity.Property(e => e.Emertimi)
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<StatusiPorosise>(entity =>
            {
                entity.Property(e => e.StatusiPorosiseId).HasColumnName("StatusiPorosiseID");

                entity.Property(e => e.Statusi)
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Useri>(entity =>
            {
                entity.HasKey(e => e.UserId)
                    .HasName("PK_Useri_1788CCAC95425909");

                entity.HasIndex(e => e.Email, "UQ_Useri_A9D1053442E0C7D8")
                    .IsUnique();

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.Property(e => e.AddressDetails)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.DitetEpushimit).HasColumnName("DitetEPushimit");

                entity.Property(e => e.Email)
                    .HasMaxLength(60)
                    .IsUnicode(false);

                entity.Property(e => e.Emri)
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.Mbiemri)
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.NrTelefonit)
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.Orari)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.RoleId).HasColumnName("RoleID");

                entity.Property(e => e.StreetName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.Useri)
                    .HasForeignKey(d => d.RoleId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_UseriRoleID_46E78A0C");

                entity.HasOne(d => d.ZipCodeNavigation)
                    .WithMany(p => p.Useri)
                    .HasForeignKey(d => d.ZipCode)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_UseriZipCode_45F365D3");
            });

            modelBuilder.Entity<Vetura>(entity =>
            {
                entity.Property(e => e.VeturaId).HasColumnName("VeturaID");

                entity.Property(e => e.Brendi)
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.DepoId).HasColumnName("DepoID");

                entity.Property(e => e.Modeli)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.Targa)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.Tipi)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.Vellimi).HasColumnType("decimal(4, 2)");

                entity.HasOne(d => d.Depo)
                    .WithMany(p => p.Vetura)
                    .HasForeignKey(d => d.DepoId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_VeturaDepoID_4CA06362");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}