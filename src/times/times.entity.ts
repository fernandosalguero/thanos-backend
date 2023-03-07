import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: 'times' })
export class TimeEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    fechaCargaArchivo: Date

    @Column()
    agente: string;

    @Column()
    avayaID: number;

    @Column()
    extencion: number;

    @Column()
    horaAcceso: string;

    @Column()
    horaDesconeccion: string;

    @Column()
    fecha: number;

    @Column()
    motivo: number;

    @Column()
    Skill1: number;

    @Column()
    Skill2: number;

    @Column()
    Skill3: number;

    @Column()
    Skill4: number;

    @Column()
    Skill5: number;

    @Column()
    Skill6: number;

    @Column()
    Skill7: number;

    @Column()
    Skill8: number;

    @Column()
    Skill9: number;

    @Column()
    Skill10: number;

    @Column()
    Skill11: number;

    @Column()
    Skill12: number;

    @Column()
    Skill13: number;

    @Column()
    Skill14: number;

    @Column()
    Skill15: number;

}