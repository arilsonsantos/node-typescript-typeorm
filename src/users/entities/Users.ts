import { v4 as uudV4 } from 'uuid'
import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn,
} from "typeorm"

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

    constructor() {
        if (!this.id){
            this.id = uudV4()
        }
    }
}
