import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm";
import { SportsDbSchema } from "../constants/system";

const tableName = `${SportsDbSchema.MOTOCRS}.rounds`;

export class modifyMotocrsRounds1685098586513 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const table: Table = await queryRunner.getTable(tableName);

    await queryRunner.addColumn(
      table,
      new TableColumn({
        name: "roundStatus",
        type: "int",
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table: Table = await queryRunner.getTable(tableName);

    await queryRunner.dropColumn(table, "roundStatus");
  }
}
