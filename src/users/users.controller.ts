import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, PartialUserDto, UpdateUserDto } from './dtos';
import { UserEntity } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async usersAll(): Promise<UserEntity[]> {
    try {
      return this.userService.getAllUsers();
    } catch (error) {}
  }

  @Get(':id')
  async user(@Param('id', ParseIntPipe) id: number): Promise<UserEntity> {
    try {
      return this.userService.getUser(id);
    } catch (error) {}
  }

  @Post()
  async createUser(@Body() data: CreateUserDto): Promise<UserEntity> {
    try {
      return this.userService.createUser(data);
    } catch (error) {}
  }

  @Put(':id')
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateUserDto,
  ): Promise<UserEntity> {
    try {
      return this.userService.updateUser(id, data);
    } catch (error) {}
  }

  @Patch(':id')
  async partialUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: PartialUserDto,
  ): Promise<UserEntity> {
    try {
      return this.userService.partialUser(id, data);
    } catch (error) {}
  }

  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: number): Promise<UserEntity> {
    try {
      return this.userService.deleteUser(id);
    } catch (error) {}
  }
}
