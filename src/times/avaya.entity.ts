import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: 'times' })
export class AvayaEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    fechaCargaArchivo: Date

    @Column(  )
    agente: string;

    @Column( )
    avayaid: number;

    @Column( )
    extencion: number;

    @Column( )
    horaacceso: string;

    @Column( )
    horadesconeccion: string;

    @Column( )
    fecha: string;

    @Column( )
    motivo: number;

    @Column( )
    skill1: number;

    @Column( )
    skill2: number;

    @Column( )
    skill3: number;

    @Column( )
    skill4: number;

    @Column( )
    skill5: number;

    @Column( )
    skill6: number;

    @Column( )
    skill7: number;

    @Column( )
    skill8: number;

    @Column( )
    skill9: number;

    @Column( )
    skill10: number;

    @Column( )
    skill11: number;

    @Column( )
    skill12: number;

    @Column( )
    skill13: number;

    @Column()
    skill14: number;

    @Column( )
    skill15: number;

}