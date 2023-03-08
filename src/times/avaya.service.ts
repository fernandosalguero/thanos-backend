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

 async create(avayaFront: avayaDTO[]){
  const newAvaya = this.avayaRepo.create(avayaFront)
  console.log('ESTO ES LO QUE RECIBE EL PUTO SERVICIO DE MIERDA', newAvaya);
  return this.avayaRepo.save(newAvaya)
 }
}



