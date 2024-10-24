import { v4 as uudV4 } from 'uuid'
import {
    Column,
    CreateDateColumn,
    Entity,
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

    @Column({ name:'role_id' })
    roleId: string

    @ManyToOne(() => Role, role => role.id, {
        cascade : true
    })
    role: Role

    constructor() {
        if (!this.id){
            this.id = uudV4()
        }
    }
}
