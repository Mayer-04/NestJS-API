import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserEntity } from './entities/user.entity';
import { CreateUserDto, UpdateUserDto } from './dtos';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  async usersAll(): Promise<UserEntity[]> {
    return this.prismaService.users.findMany({
      select: {
        id: true,
        name: true,
        lastname: true,
        age: true,
      },
    });
  }

  async user(id: number): Promise<UserEntity | null> {
    const user = await this.prismaService.users.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        lastname: true,
        age: true,
      },
    });

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }

  async createUser(data: CreateUserDto): Promise<UserEntity> {
    return this.prismaService.users.create({
      data,
    });
  }

  async updateUser(id: number, data: UpdateUserDto): Promise<UserEntity> {
    return this.prismaService.users.update({
      where: {
        id,
      },
      data,
    });
  }

  async deleteUser(id: number): Promise<UserEntity> {
    return this.prismaService.users.delete({
      where: { id },
    });
  }
}
