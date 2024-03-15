import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import { CacheModule } from "@nestjs/cache-manager";

import CacheConfigService from "../../../../factory/cache.factory";

import TradersService from "./traders.service";

import TraderController from "./traders.controller";

import Events from "../../../../entities/mxgp/events.entity";
import EventParticipants from "../../../../entities/mxgp/eventParticipants.entity";
import PlayerHeadToHeads from "../../../../entities/mxgp/playerHeadToHeads.entity";

import QueueModule from "../../../system/queue/queue.module";

@Module({
  imports: [
    CacheModule.registerAsync({
      useClass: CacheConfigService,
    }),
    ConfigModule.forRoot(),
    TypeOrmModule.forFeature([Events, EventParticipants, PlayerHeadToHeads]),
    QueueModule,
  ],
  providers: [TradersService],
  controllers: [TraderController],
})
export default class TraderModule {}
