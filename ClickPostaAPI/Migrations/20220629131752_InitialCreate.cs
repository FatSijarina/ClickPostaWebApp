using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ClickPostaAPI.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
          /*  migrationBuilder.CreateTable(
                name: "Q_A",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Question = table.Column<string>(type: "varchar(150)", unicode: false, maxLength: 150, nullable: true),
                    Answer = table.Column<string>(type: "varchar(1000)", unicode: false, maxLength: 1000, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Q_A", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Qyteti",
                columns: table => new
                {
                    QytetiZipCode = table.Column<int>(type: "int", nullable: false),
                    EmriQytetit = table.Column<string>(type: "varchar(30)", unicode: false, maxLength: 30, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Qyteti_5EC2763866B27A01", x => x.QytetiZipCode);
                });

            migrationBuilder.CreateTable(
                name: "Role",
                columns: table => new
                {
                    RoleID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RoleName = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Role", x => x.RoleID);
                });

            migrationBuilder.CreateTable(
                name: "Sektori",
                columns: table => new
                {
                    SektoriID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Emertimi = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sektori", x => x.SektoriID);
                });

            migrationBuilder.CreateTable(
                name: "StatusiPorosise",
                columns: table => new
                {
                    StatusiPorosiseID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Statusi = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StatusiPorosise", x => x.StatusiPorosiseID);
                });

            migrationBuilder.CreateTable(
                name: "Depo",
                columns: table => new
                {
                    DepoID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "varchar(40)", unicode: false, maxLength: 40, nullable: true),
                    AddressNumber = table.Column<int>(type: "int", nullable: true),
                    StreetName = table.Column<string>(type: "varchar(30)", unicode: false, maxLength: 30, nullable: true),
                    ZipCode = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Depo", x => x.DepoID);
                    table.ForeignKey(
                        name: "FK_DepoZipCode_398D8EEE",
                        column: x => x.ZipCode,
                        principalTable: "Qyteti",
                        principalColumn: "QytetiZipCode",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Useri",
                columns: table => new
                {
                    UserID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Emri = table.Column<string>(type: "varchar(25)", unicode: false, maxLength: 25, nullable: false),
                    Mbiemri = table.Column<string>(type: "varchar(25)", unicode: false, maxLength: 25, nullable: false),
                    Email = table.Column<string>(type: "varchar(60)", unicode: false, maxLength: 60, nullable: false),
                    Password = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: false),
                    NrTelefonit = table.Column<string>(type: "varchar(15)", unicode: false, maxLength: 15, nullable: false),
                    HomeNumber = table.Column<int>(type: "int", nullable: true),
                    StreetName = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    ZipCode = table.Column<int>(type: "int", nullable: true),
                    AddressDetails = table.Column<string>(type: "varchar(200)", unicode: false, maxLength: 200, nullable: true),
                    RoleID = table.Column<int>(type: "int", nullable: true),
                    Orari = table.Column<string>(type: "varchar(10)", unicode: false, maxLength: 10, nullable: true),
                    DitetEPushimit = table.Column<int>(type: "int", nullable: true),
                    NrPorosive = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Useri_1788CCAC95425909", x => x.UserID);
                    table.ForeignKey(
                        name: "FK_UseriRoleID_46E78A0C",
                        column: x => x.RoleID,
                        principalTable: "Role",
                        principalColumn: "RoleID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_UseriZipCode_45F365D3",
                        column: x => x.ZipCode,
                        principalTable: "Qyteti",
                        principalColumn: "QytetiZipCode",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Depo_Sektori",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Depo_Id = table.Column<int>(type: "int", nullable: false),
                    Sektori_Id = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Depo_Sektori", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Depo_SektDepo__3E52440B",
                        column: x => x.Depo_Id,
                        principalTable: "Depo",
                        principalColumn: "DepoID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Depo_SektSekto_3F466844",
                        column: x => x.Sektori_Id,
                        principalTable: "Sektori",
                        principalColumn: "SektoriID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Vetura",
                columns: table => new
                {
                    VeturaID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Brendi = table.Column<string>(type: "varchar(15)", unicode: false, maxLength: 15, nullable: false),
                    Modeli = table.Column<string>(type: "varchar(10)", unicode: false, maxLength: 10, nullable: false),
                    Targa = table.Column<string>(type: "varchar(10)", unicode: false, maxLength: 10, nullable: false),
                    Tipi = table.Column<string>(type: "varchar(10)", unicode: false, maxLength: 10, nullable: false),
                    Vellimi = table.Column<decimal>(type: "decimal(4,2)", nullable: true),
                    DepoID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vetura", x => x.VeturaID);
                    table.ForeignKey(
                        name: "FK_VeturaDepoID_4CA06362",
                        column: x => x.DepoID,
                        principalTable: "Depo",
                        principalColumn: "DepoID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Pushimi",
                columns: table => new
                {
                    PushimiID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DataFilimit = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: false),
                    DataMbarimit = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: false),
                    UserID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pushimi", x => x.PushimiID);
                    table.ForeignKey(
                        name: "FK_PushimiUserID_49C3F6B7",
                        column: x => x.UserID,
                        principalTable: "Useri",
                        principalColumn: "UserID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Porosia",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserID = table.Column<int>(type: "int", nullable: false),
                    Emertimi = table.Column<string>(type: "varchar(30)", unicode: false, maxLength: 30, nullable: false),
                    Detajet = table.Column<string>(type: "varchar(1000)", unicode: false, maxLength: 1000, nullable: false),
                    Vellimi = table.Column<decimal>(type: "decimal(3,2)", nullable: false),
                    Materiali = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: false),
                    Sender_Emri = table.Column<string>(type: "varchar(30)", unicode: false, maxLength: 30, nullable: true),
                    Sender_Mbiemri = table.Column<string>(type: "varchar(30)", unicode: false, maxLength: 30, nullable: true),
                    Sender_NrTelefonit = table.Column<string>(type: "varchar(15)", unicode: false, maxLength: 15, nullable: true),
                    Sender_HomeNumber = table.Column<int>(type: "int", nullable: true),
                    Sender_StreetName = table.Column<string>(type: "varchar(40)", unicode: false, maxLength: 40, nullable: true),
                    Sender_ZipCode = table.Column<int>(type: "int", nullable: true),
                    Sender_AddressDetails = table.Column<string>(type: "varchar(200)", unicode: false, maxLength: 200, nullable: true),
                    Receiver_Emri = table.Column<string>(type: "varchar(30)", unicode: false, maxLength: 30, nullable: false),
                    Receiver_Mbiemri = table.Column<string>(type: "varchar(30)", unicode: false, maxLength: 30, nullable: false),
                    Receiver_NrTelefonit = table.Column<string>(type: "varchar(15)", unicode: false, maxLength: 15, nullable: true),
                    Receiver_HomeNumber = table.Column<int>(type: "int", nullable: true),
                    Receiver_StreetName = table.Column<string>(type: "varchar(40)", unicode: false, maxLength: 40, nullable: true),
                    Receiver_ZipCode = table.Column<int>(type: "int", nullable: true),
                    Receiver_AddressDetails = table.Column<string>(type: "varchar(200)", unicode: false, maxLength: 200, nullable: true),
                    MarresiID = table.Column<int>(type: "int", nullable: true),
                    DepoSektoriID = table.Column<int>(type: "int", nullable: true),
                    DerguesiID = table.Column<int>(type: "int", nullable: true),
                    StatusiPorosiseID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Porosia", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PorosiaDepoSek_6754599E",
                        column: x => x.DepoSektoriID,
                        principalTable: "Depo_Sektori",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_PorosiaDergues_68487DD7",
                        column: x => x.DerguesiID,
                        principalTable: "Useri",
                        principalColumn: "UserID");
                    table.ForeignKey(
                        name: "FK_PorosiaMarresi_66603565",
                        column: x => x.MarresiID,
                        principalTable: "Useri",
                        principalColumn: "UserID");
                    table.ForeignKey(
                        name: "FK_PorosiaReceive_656C112C",
                        column: x => x.Receiver_ZipCode,
                        principalTable: "Qyteti",
                        principalColumn: "QytetiZipCode");
                    table.ForeignKey(
                        name: "FK_PorosiaSender__6383C8BA",
                        column: x => x.Sender_ZipCode,
                        principalTable: "Qyteti",
                        principalColumn: "QytetiZipCode",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PorosiaStatusi_693CA210",
                        column: x => x.StatusiPorosiseID,
                        principalTable: "StatusiPorosise",
                        principalColumn: "StatusiPorosiseID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PorosiaUserID_619B8048",
                        column: x => x.UserID,
                        principalTable: "Useri",
                        principalColumn: "UserID");
                });

            migrationBuilder.CreateTable(
                name: "RezervoVeturen",
                columns: table => new
                {
                    RezervimiID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DataRezervimit = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: false),
                    DataKthimit = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: true),
                    UserID = table.Column<int>(type: "int", nullable: true),
                    VeturaID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RezervoV_6F6B8C2BEA3FE425", x => x.RezervimiID);
                    table.ForeignKey(
                        name: "FK_RezervoVeUserI_4F7CD00D",
                        column: x => x.UserID,
                        principalTable: "Useri",
                        principalColumn: "UserID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_RezervoVeVetur_5070F446",
                        column: x => x.VeturaID,
                        principalTable: "Vetura",
                        principalColumn: "VeturaID");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Depo_ZipCode",
                table: "Depo",
                column: "ZipCode");

            migrationBuilder.CreateIndex(
                name: "IX_Depo_Sektori_Depo_Id",
                table: "Depo_Sektori",
                column: "Depo_Id");

            migrationBuilder.CreateIndex(
                name: "IX_Depo_Sektori_Sektori_Id",
                table: "Depo_Sektori",
                column: "Sektori_Id");

            migrationBuilder.CreateIndex(
                name: "IX_Porosia_DepoSektoriID",
                table: "Porosia",
                column: "DepoSektoriID");

            migrationBuilder.CreateIndex(
                name: "IX_Porosia_DerguesiID",
                table: "Porosia",
                column: "DerguesiID");

            migrationBuilder.CreateIndex(
                name: "IX_Porosia_MarresiID",
                table: "Porosia",
                column: "MarresiID");

            migrationBuilder.CreateIndex(
                name: "IX_Porosia_Receiver_ZipCode",
                table: "Porosia",
                column: "Receiver_ZipCode");

            migrationBuilder.CreateIndex(
                name: "IX_Porosia_Sender_ZipCode",
                table: "Porosia",
                column: "Sender_ZipCode");

            migrationBuilder.CreateIndex(
                name: "IX_Porosia_StatusiPorosiseID",
                table: "Porosia",
                column: "StatusiPorosiseID");

            migrationBuilder.CreateIndex(
                name: "IX_Porosia_UserID",
                table: "Porosia",
                column: "UserID");

            migrationBuilder.CreateIndex(
                name: "IX_Pushimi_UserID",
                table: "Pushimi",
                column: "UserID");

            migrationBuilder.CreateIndex(
                name: "IX_RezervoVeturen_UserID",
                table: "RezervoVeturen",
                column: "UserID");

            migrationBuilder.CreateIndex(
                name: "IX_RezervoVeturen_VeturaID",
                table: "RezervoVeturen",
                column: "VeturaID");

            migrationBuilder.CreateIndex(
                name: "IX_Useri_RoleID",
                table: "Useri",
                column: "RoleID");

            migrationBuilder.CreateIndex(
                name: "IX_Useri_ZipCode",
                table: "Useri",
                column: "ZipCode");

            migrationBuilder.CreateIndex(
                name: "UQ_Useri_A9D1053442E0C7D8",
                table: "Useri",
                column: "Email",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Vetura_DepoID",
                table: "Vetura",
                column: "DepoID");*/
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Porosia");

            migrationBuilder.DropTable(
                name: "Pushimi");

            migrationBuilder.DropTable(
                name: "Q_A");

            migrationBuilder.DropTable(
                name: "RezervoVeturen");

            migrationBuilder.DropTable(
                name: "Depo_Sektori");

            migrationBuilder.DropTable(
                name: "StatusiPorosise");

            migrationBuilder.DropTable(
                name: "Useri");

            migrationBuilder.DropTable(
                name: "Vetura");

            migrationBuilder.DropTable(
                name: "Sektori");

            migrationBuilder.DropTable(
                name: "Role");

            migrationBuilder.DropTable(
                name: "Depo");

            migrationBuilder.DropTable(
                name: "Qyteti");
        }
    }
}
