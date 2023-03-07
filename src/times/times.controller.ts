import { Body, Controller, Post } from '@nestjs/common';
import { TimesService } from './times.service';
import { UpdateArchivoDTO } from './upDocument.dto';

@Controller('times')
export class TimesController {

    constructor(
        private timeService: TimesService
    ) { }


    @Post()
   async updateFileCSV(@Body() newFile: any[]) {
        console.log(newFile);
        await this.timeService.cargarTiemposAvaya(newFile)
    }

}