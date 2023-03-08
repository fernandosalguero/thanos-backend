import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { AvayaEntity } from './avaya.entity';
import { AvayaService } from './avaya.service';
import { avayaDTO } from './avayaDTO';

@Controller('times')
export class AvayaController {

    constructor(
        private readonly avayaService: AvayaService
    ) { }



    @Post()
    create(@Body() body: any) {
        const { agente, avayaID, extencion, fecha, fechaCargaArchivo, horaAcceso, horaDesconeccion, id, motivo, Skill1, Skill2, Skill3, Skill4, Skill5, Skill6, Skill7, Skill8, Skill9, Skill10, Skill11, Skill12, Skill13, Skill14, Skill15 } = body;
        const avayaFront = body
        return this.avayaService.create(avayaFront)
    }


}