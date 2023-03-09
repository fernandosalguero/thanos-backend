import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AvayaEntity } from './avaya.entity';
import { avayaDTO } from './avayaDTO';



@Injectable()

export class AvayaService {

  constructor(
    @InjectRepository(AvayaEntity) private readonly avayaRepo: Repository<AvayaEntity[]>
  ) { }

 async create(avayaFront: avayaDTO[] = []){

  for (let i = 0; i < avayaFront.length; i++) {
    const newAvaya = new AvayaEntity();
    newAvaya.agente = avayaFront[i].agente;
    newAvaya.avayaid = avayaFront[i].avayaid;
    newAvaya.extencion = avayaFront[i].extencion;
    newAvaya.fecha = avayaFront[i].fecha;
    newAvaya.fechaCargaArchivo = avayaFront[i].fechaCargaArchivo;
    newAvaya.horaacceso = avayaFront[i].horaacceso;
    newAvaya.horadesconeccion = avayaFront[i].horadesconeccion;
    newAvaya.id = avayaFront[i].id;
    newAvaya.motivo = avayaFront[i].motivo;
    newAvaya.skill1 = avayaFront[i].skill1;
    newAvaya.skill2 = avayaFront[i].skill2;
    newAvaya.skill3 = avayaFront[i].skill3;
    newAvaya.skill4 = avayaFront[i].skill4;
    newAvaya.skill5 = avayaFront[i].skill5;
    newAvaya.skill6 = avayaFront[i].skill6;
    newAvaya.skill7 = avayaFront[i].skill7;
    newAvaya.skill8 = avayaFront[i].skill8;
    newAvaya.skill9 = avayaFront[i].skill9;
    newAvaya.skill10 = avayaFront[i].skill10;
    newAvaya.skill11 = avayaFront[i].skill11;
    newAvaya.skill12 = avayaFront[i].skill12;
    newAvaya.skill13 = avayaFront[i].skill13;
    newAvaya.skill14 = avayaFront[i].skill14;
    newAvaya.skill15 = avayaFront[i].skill15;
    
    // TODO: VER COMO HACER PARA QUE PONGA VALORES POR DEFECTO EN LOS CAMPOS QUE SON NULLOS

    const newAvayaFinal = this.avayaRepo.create(avayaFront)
    console.log('ESTO ES LO QUE RECIBE EL PUTO SERVICIO DE MIERDA', newAvayaFinal);
    return this.avayaRepo.save(newAvayaFinal)
  }





 }
}



