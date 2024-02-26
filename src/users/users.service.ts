import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserEntity } from './entities/user.entity';
import { CreateUserDto, UpdateUserDto } from './dtos';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  async getAllUsers(): Promise<UserEntity[]> {
    return this.prismaService.users.findMany({
      select: {
        id: true,
        name: true,
        lastname: true,
        email: true,
        age: true,
      },
    });
  }

  async getUserById(id: number): Promise<UserEntity | null> {
    return this.prismaService.users.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        lastname: true,
        email: true,
        age: true,
      },
    });
  }

  async getUserByEmail(email: string): Promise<UserEntity | null> {
    return this.prismaService.users.findUnique({ where: { email } });
  }

  async createUser(data: CreateUserDto): Promise<UserEntity> {
    return this.prismaService.users.create({
      data,
    });
  }

  async updateUser(
    id: number,
    data: UpdateUserDto,
  ): Promise<UserEntity | null> {
    return this.prismaService.users.update({
      where: {
        id,
      },
      data,
    });
  }

  async deleteUser(id: number): Promise<UserEntity | null> {
    return this.prismaService.users.delete({
      where: { id },
    });
  }
}
