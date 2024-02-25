import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserEntity } from './entities/user.entity';
import { CreateUserDto, UpdateUserDto } from './dtos';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  async usersAll(): Promise<UserEntity[]> {
    try {
      return this.prismaService.users.findMany({
        select: {
          id: true,
          name: true,
          lastname: true,
          age: true,
        },
      });
    } catch (error) {}
  }

  async user(id: number): Promise<UserEntity | null> {
    try {
      return this.prismaService.users.findUnique({
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
    } catch (error) {}
  }

  async createUser(data: CreateUserDto): Promise<UserEntity> {
    try {
      return this.prismaService.users.create({
        data,
      });
    } catch (error) {}
  }

  async updateUser(id: number, data: UpdateUserDto): Promise<UserEntity> {
    try {
      return this.prismaService.users.update({
        where: {
          id,
        },
        data,
      });
    } catch (error) {}
  }

  async deleteUser(id: number): Promise<UserEntity> {
    try {
      return this.prismaService.users.delete({
        where: { id },
      });
    } catch (error) {}
  }
}
