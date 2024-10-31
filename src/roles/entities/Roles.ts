import { v4 as uudV4 } from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@ObjectType() // Define Role como um tipo GraphQL
@Entity('roles')
export class Role {
    @Field(() => ID) // Define o campo id como um campo GraphQL
    @PrimaryColumn()
    id?: string;

    @Field() // Define o campo name como um campo GraphQL
    @Column()
    name: string;

    @Field(() => Date) // Define o campo createdAt como um campo GraphQL
    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    constructor() {
        if (!this.id) {
            this.id = uudV4();
        }
    }
}
