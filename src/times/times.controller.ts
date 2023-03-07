import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { TimesService } from './times.service';
import { UpdateArchivoDTO } from './upDocument.dto';

@Controller('times')
export class TimesController {

    constructor(
        private timeService: TimesService
    ) { }


    @Post()
   async updateFileCSV(@Body() newFile: any) {
        console.log('LOG DE LO QUE RECIBE EL BACKEND', newFile);
        await this.timeService.cargarTiemposAvaya(newFile)
    }

    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    async uploadCsv(@UploadedFile() file) {
      const data = await this.timeService.processCsvFile(file.buffer.toString());
      await this.timeService.cargarTiemposAvaya(data);
      return { message: 'CSV file uploaded and processed successfully' };
    }
    
}