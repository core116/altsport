import {
  IsUUID,
  IsOptional,
  IsString,
  IsInt,
  Min,
  Max,
  IsArray,
  IsEnum,
  IsNotEmpty,
} from "class-validator";
import { Type } from "class-transformer";

import { API_SORT_ORDER } from "../../../../../constants/system";
import { WSLPublicStatsSortColumns } from "../../../../../constants/wsl";

export class YearItemDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  public year: number;
}

export class TourIdItemDto {
  @IsOptional()
  @IsUUID()
  public tourId: string;
}

export class EventNameItemDto {
  @IsOptional()
  @IsString()
  public eventName: string;
}

export class EventLocationItemDto {
  @IsOptional()
  @IsString()
  public eventLocation: string;
}

export class AthleteListing {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  public page: number = 1;

  @IsOptional()
  @IsEnum(WSLPublicStatsSortColumns)
  @IsString()
  public sortColumn: WSLPublicStatsSortColumns = WSLPublicStatsSortColumns.HEAT_SCORE;

  @IsOptional()
  @IsEnum(API_SORT_ORDER)
  @IsString()
  public sortOrder: API_SORT_ORDER = API_SORT_ORDER.DESC;

  @IsOptional()
  @IsArray()
  @IsNotEmpty({ each: true })
  @Type(() => TourIdItemDto)
  public tourIds: TourIdItemDto[];

  @IsOptional()
  @IsArray()
  @IsNotEmpty({ each: true })
  @Type(() => EventNameItemDto)
  public eventNames: EventNameItemDto[];

  @IsOptional()
  @IsArray()
  @IsNotEmpty({ each: true })
  @Type(() => YearItemDto)
  public years: YearItemDto[];

  @IsOptional()
  @IsArray()
  @IsNotEmpty({ each: true })
  @Type(() => EventLocationItemDto)
  public eventLocations: EventLocationItemDto[];

  @IsOptional()
  @IsString()
  public query: string;
}
