import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AvayaController } from "./avaya.controller";
import { AvayaEntity } from "./avaya.entity";
import { AvayaService } from "./avaya.service";


@Module({
    imports: [TypeOrmModule.forFeature([AvayaEntity])],
    controllers: [AvayaController],
    providers: [AvayaService],
    exports: []
})

export class TimesModule {}