import { Base } from "../base.entity";
import { Entity, Column, Index, JoinColumn, OneToOne, ManyToOne } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

import EventParticipants from "./eventParticipants.entity";
import RoundHeats from "./roundHeats.entity";
import Events from "./events.entity";

import { SportsDbSchema } from "../../constants/system";

@Entity({
  name: "clientProjectionEventHeatOutcome",
  schema: SportsDbSchema.MOTOCRS,
})
export default class MOTOCRSClientProjectionEventHeatOutcome extends Base {
  @ApiProperty({
    name: "eventId",
    type: "string",
    example: "bc8a2ac2-0111-4b99-b402-08a19a731eda",
  })
  @Column({ type: "uuid" })
  @Index()
  eventId: string;

  @ApiProperty({
    name: "eventParticipantId",
    type: "string",
    example: "bc8a2ac2-0111-4b99-b402-08a19a731eda",
  })
  @Column({ type: "uuid" })
  @Index()
  eventParticipantId: string;

  @ApiProperty({
    name: "roundHeatId",
    type: "string",
    example: "bc8a2ac2-0111-4b99-b402-08a19a731eda",
  })
  @Column({ type: "uuid" })
  @Index()
  roundHeatId: string;

  @ApiProperty({
    name: "position",
    type: "number",
    example: 1,
  })
  @Column({ type: "int" })
  position: number;

  @ApiProperty({
    name: "odds",
    type: "number",
    example: 30.5,
  })
  @Column({ type: "decimal" })
  odds: number;

  @ApiProperty({
    name: "trueProbability",
    type: "number",
    example: 30.5,
  })
  @Column({ type: "decimal" })
  trueProbability: number;

  @ApiProperty({ name: "hasModifiedProbability", type: "boolean", example: "false" })
  @Column({ type: "boolean", default: false })
  hasModifiedProbability: boolean;

  @ApiProperty({
    name: "probability",
    type: "number",
    example: 30.5,
  })
  @Column({ type: "decimal" })
  probability: number;

  @OneToOne(() => EventParticipants)
  @JoinColumn({ name: "eventParticipantId", referencedColumnName: "id" })
  participant: EventParticipants;

  @OneToOne(() => Events)
  @JoinColumn({ name: "eventId", referencedColumnName: "id" })
  event: Events;

  @ManyToOne(() => RoundHeats, (roundHeat) => roundHeat.heatOutcomes)
  @JoinColumn({ name: "roundHeatId", referencedColumnName: "id" })
  heat: RoundHeats;
}
