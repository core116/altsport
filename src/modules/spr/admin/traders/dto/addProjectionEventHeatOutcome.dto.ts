import { ApiProperty } from "@nestjs/swagger";
import {
  IsNumber,
  IsString,
  IsNotEmpty,
  IsArray,
  IsInt,
  ValidateNested,
  Min,
} from "class-validator";
import { Type, Transform, TransformFnParams } from "class-transformer";

class ProjectionEventHeatOutcomeOddsItem {
  @ApiProperty({
    type: "string",
    required: true,
    example: "Arlington 3",
  })
  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsString()
  @IsNotEmpty()
  event: string;

  @ApiProperty({
    type: "string",
    required: true,
    example: "KTM Junior Supercross",
  })
  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsString()
  @IsNotEmpty()
  tourName: string;

  @ApiProperty({ type: "number", example: 2022, required: true })
  @IsNumber()
  year: number;

  @ApiProperty({ type: "string", required: true, example: "men" })
  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsString()
  gender: string;

  @ApiProperty({
    type: "string",
    required: true,
    example: "Martin Castelo",
  })
  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsString()
  @IsNotEmpty()
  athlete: string;

  @ApiProperty({ type: "string", required: true, example: "Qualifying" })
  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsString()
  @IsNotEmpty()
  round: string;

  @ApiProperty({ type: "number", example: 3, required: true })
  @IsInt()
  @Min(1)
  heatNumber: number;

  @ApiProperty({ type: "number", example: 3, required: true })
  @IsInt()
  @Min(1)
  position: number;

  @ApiProperty({ type: "number", example: 10.2, required: true })
  @IsNumber()
  @Min(0)
  odds: number;

  @ApiProperty({ type: "number", example: 30.4, required: true })
  @IsNumber()
  @Min(0)
  probability: number;
}

export default class ProjectionEventHeatOutcomeOdds {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProjectionEventHeatOutcomeOddsItem)
  @ApiProperty({
    name: "items",
    type: ProjectionEventHeatOutcomeOddsItem,
    required: true,
    isArray: true,
  })
  items: ProjectionEventHeatOutcomeOddsItem[];
}
