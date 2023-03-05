import { Column,Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: 'auth' })
export class AuthEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    fechaAlta: Date

    @Column({ unique: true })
    dni: number

    @Column()
    password: string

    @Column()
    rol: string

    @Column()
    lider: string

    @Column()
    jefe: string

}
