import {
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dtos';
import { UserEntity } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async getAllUsers(): Promise<UserEntity[]> {
    try {
      const user = await this.userService.getAllUsers();
      console.log({ getAll: user });
      return user;
    } catch (error) {}
  }

  @Get(':id')
  async getUserById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<UserEntity> {
    try {
      const user = await this.userService.getUserById(id);

      console.log({ get: user });

      if (!user) {
        throw new NotFoundException();
      }
      return user;
    } catch (error) {}
  }

  @Post()
  async createUser(@Body() data: CreateUserDto): Promise<UserEntity> {
    const existingUser = await this.userService.getUserByEmail(data.email);
    if (existingUser) {
      throw new ConflictException();
    }

    console.log({ exist: existingUser });

    const newUser = await this.userService.createUser(data);
    console.log({ create: newUser });
    return newUser;
  }

  @Put(':id')
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateUserDto,
  ): Promise<UserEntity> {
    try {
      const existingUser = await this.userService.updateUser(id, data);
      if (!existingUser) {
        throw new NotFoundException();
      }
      console.log({ update: existingUser });
      return existingUser;
    } catch (error) {}
  }

  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: number): Promise<UserEntity> {
    try {
      const existingUser = await this.userService.deleteUser(id);
      if (!existingUser) {
        throw new NotFoundException();
      }
      console.log({ delete: existingUser });
      return existingUser;
    } catch (error) {}
  }
}
