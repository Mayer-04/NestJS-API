import {
  Body,
  Controller,
  Delete,
  Get,
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
      return user;
    } catch (error) {}
  }

  @Post()
  async createUser(@Body() data: CreateUserDto): Promise<UserEntity> {
    try {
      const user = await this.userService.createUser(data);
      console.log({ create: user });
      return user;
    } catch (error) {}
  }

  @Put(':id')
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateUserDto,
  ): Promise<UserEntity> {
    try {
      const user = await this.userService.updateUser(id, data);
      console.log({ update: user });
      return user;
    } catch (error) {}
  }

  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: number): Promise<UserEntity> {
    try {
      const user = await this.userService.deleteUser(id);
      console.log({ delete: user });
      return user;
    } catch (error) {}
  }
}
