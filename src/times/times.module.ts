import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TimesController } from "./times.controller";
import { TimeEntity } from "./times.entity";
import { TimesService } from "./times.service";


@Module({
    imports: [TypeOrmModule.forFeature([TimeEntity])],
    controllers: [TimesController],
    providers: [TimesService],
    exports: []
})

export class TimesModule {}