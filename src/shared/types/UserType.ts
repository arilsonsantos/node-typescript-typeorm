import { Field, ID, ObjectType } from 'type-graphql';
import { User } from '@users/entities/Users';
import { Role } from '@roles/entities/Roles';

@ObjectType()
export class UserType implements Partial<User> {
    @Field(() => ID)
    id: string;

    @Field()
    name: string;

    @Field()
    email: string;

    @Field({ nullable: true })
    avatar?: string;

    @Field()
    isAdmin: boolean;

    @Field(() => Date)
    createdAt: Date;

    @Field(() => Role)
    role: Role;
}
