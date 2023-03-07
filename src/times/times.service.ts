import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TimeEntity } from './times.entity';
import { UpdateArchivoDTO } from './upDocument.dto';

@Injectable()

export class TimesService {

    constructor(
        @InjectRepository(TimeEntity) private timeRepository: Repository<TimeEntity>,
        ){}
    
   async cargarTiemposAvaya(archivoCargado: UpdateArchivoDTO[]){
    for (const obj of archivoCargado) {
      const myObject = new UpdateArchivoDTO();
      myObject.agente = obj.agente;
      myObject.avayaID = obj.avayaID;
      myObject.extencion = obj.extencion;
      myObject.fecha = obj.fecha;
      myObject.horaAcceso = obj.horaAcceso;
      myObject.horaDesconeccion = obj.horaDesconeccion;
      myObject.motivo = obj.motivo;
      myObject.Skill1 = obj.Skill1;
      myObject.Skill2 = obj.Skill2;
      myObject.Skill3 = obj.Skill3;
      myObject.Skill4 = obj.Skill4;
      myObject.Skill5 = obj.Skill5;
      myObject.Skill6 = obj.Skill6;
      myObject.Skill7 = obj.Skill7;
      myObject.Skill8 = obj.Skill8;
      myObject.Skill9 = obj.Skill9;
      myObject.Skill10 = obj.Skill10;
      myObject.Skill11 = obj.Skill11;
      myObject.Skill12 = obj.Skill12;
      myObject.Skill13 = obj.Skill13;
      myObject.Skill14 = obj.Skill14;
      myObject.Skill15 = obj.Skill15;

      await this.timeRepository.save(myObject)
    }
  }
 
}



