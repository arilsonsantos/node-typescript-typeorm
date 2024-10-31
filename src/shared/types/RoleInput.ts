import { InputType, Field } from 'type-graphql';

@InputType()
export class RoleInput {
    @Field()
    id: string;

    @Field()
    name: string;
}
