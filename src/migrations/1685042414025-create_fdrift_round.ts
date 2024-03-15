import { MigrationInterface, QueryRunner, Table } from "typeorm";

import { SportsDbSchema } from "../constants/system";

const tableName = "rounds";

export class createFdriftRound1685042414025 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: tableName,
        schema: SportsDbSchema.FDRIFT,
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            isUnique: true,
            generationStrategy: "uuid",
            default: `uuid_generate_v4()`,
          },
          {
            name: "name",
            type: "text",
          },
          {
            name: "roundNo",
            type: "int",
          },
          {
            name: "roundType",
            type: "text",
            isNullable: true,
          },
          {
            name: "isActive",
            type: "boolean",
            default: true,
          },
          {
            name: "isArchived",
            type: "boolean",
            default: false,
          },
          {
            name: "createdAt",
            type: "timestamptz",
            default: "now()",
          },
          {
            name: "updatedAt",
            type: "timestamptz",
            default: "now()",
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table: Table = await queryRunner.getTable(`${SportsDbSchema.FDRIFT}.${tableName}`);
    await queryRunner.dropTable(table, true);
  }
}
