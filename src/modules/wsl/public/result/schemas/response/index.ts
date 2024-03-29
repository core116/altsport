import { ApiProperty } from "@nestjs/swagger";

export class ResultListingResponse {
  @ApiProperty({
    type: "uuid",
    example: "2127ea10-6110-4ffd-9403-3e33fc0929de",
  })
  id: string;

  @ApiProperty({
    example: "Filipe",
  })
  firstName: string;

  @ApiProperty({
    example: "",
  })
  middleName: string;

  @ApiProperty({
    example: "Toledo",
  })
  lastName: string;

  @ApiProperty({
    example: 3,
  })
  eventRank: number;

  @ApiProperty({
    example: 7.2,
  })
  eventPoints: number;
}
