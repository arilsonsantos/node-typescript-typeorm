import { v4 as uudV4 } from 'uuid'
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryColumn,
} from "typeorm"
import {
    Role
} from "@roles/entities/Roles"

@Entity('users')
export class User {
    @PrimaryColumn()
    id?: string

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    avatar?: string

    @Column()
    isAdmin: boolean

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date


    @ManyToOne(() => Role,  {
        cascade : true
    })
    @JoinColumn({ name: 'role_id' })
    role: Role

    constructor() {
        if (!this.id){
            this.id = uudV4()
        }
    }
}
