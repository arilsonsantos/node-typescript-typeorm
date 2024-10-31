import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { UserType } from '../types/UserType';
import { User } from '@users/entities/Users';
import { Role } from '@roles/entities/Roles';
import { RoleInput } from '@shared/types/RoleInput';
import { dataSource } from '@shared/db';

@Resolver(() => UserType)
export class UserResolver {
    private userRepository = dataSource.getRepository(User);

    @Query(() => [UserType])
    async users() {
        return await this.userRepository.find({ relations: ["role"] });
    }

    @Query(() => UserType, { nullable: true })
    async user(@Arg('id') id: string) {
        return await this.userRepository.findOne({
            where: { id },
            relations: ["role"]
        });
    }

    @Mutation(() => UserType)
    async createUser(
        @Arg('name') name: string,
        @Arg('email') email: string,
        @Arg('password') password: string,
        @Arg('isAdmin') isAdmin: boolean,
        @Arg('avatar') avatar: string,
        @Arg('role', () => RoleInput) role: RoleInput
    ): Promise<User> {
        const user = this.userRepository.create({
            name,
            email,
            password,
            isAdmin,
            avatar,
            role,
            createdAt: new Date(),
        });

        return await this.userRepository.save(user);
    }
}
