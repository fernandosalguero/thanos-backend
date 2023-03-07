import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TimeEntity } from './times.entity';
import { UpdateArchivoDTO } from './upDocument.dto';

@Injectable()

export class TimesService {

    constructor(
        @InjectRepository(TimeEntity)
        private readonly timeRepository: Repository<TimeEntity>,
        ){}
      
  async processCsvFile(data: any): Promise<any> {
    const rows = data.split('\n');
    const headers = rows[0].split(',');
    const csvData = [];

    for (let i = 1; i < rows.length; i++) {
      const values = rows[i].split(',');
      const row = {};

      for (let j = 0; j < headers.length; j++) {
        let value = values[j];

        // Convierte valores numéricos como strings a números
        if (!isNaN(parseFloat(value))) {
          value = parseFloat(value);
        }

        row[headers[j]] = value;
      }

      csvData.push(row);
    }

    return csvData;
  }

  async cargarTiemposAvaya(data: any): Promise<any> {
    const csvData = new TimeEntity();
    csvData.agente = data.agente;
    csvData.avayaID = data.avayaID;
    csvData.extencion = data.extencion;
    csvData.fecha = data.fecha;
    csvData.fechaCargaArchivo = data.fechaCargaArchivo;
    csvData.horaAcceso = data.horaAcceso;
    csvData.horaDesconeccion = data.horaDesconeccion;
    csvData.id = data.id;
    csvData.motivo = data.motivo;
    csvData.Skill1 = data.Skill1;
    csvData.Skill2 = data.Skill2;
    csvData.Skill3 = data.Skill3;
    csvData.Skill4 = data.Skill4;
    csvData.Skill5 = data.Skill5;
    csvData.Skill6 = data.Skill6;
    csvData.Skill7 = data.Skill7;
    csvData.Skill8 = data.Skill8;
    csvData.Skill9 = data.Skill9;
    csvData.Skill10 = data.Skill10;
    csvData.Skill11 = data.Skill11;
    csvData.Skill12 = data.Skill12;
    csvData.Skill13 = data.Skill13;
    csvData.Skill14 = data.Skill14;
    csvData.Skill15 = data.Skill15;

    await this.timeRepository.save(csvData);
  }


 
}



