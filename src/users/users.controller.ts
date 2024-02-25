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

@Controller('api')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('users')
  async usersAll(): Promise<UserEntity[]> {
    try {
      return this.userService.getAllUsers();
    } catch (error) {}
  }

  @Get('users/:id')
  async user(@Param('id', ParseIntPipe) id: number): Promise<UserEntity> {
    try {
      return this.userService.getUser(id);
    } catch (error) {}
  }

  @Post('users')
  async createUser(@Body() data: CreateUserDto): Promise<UserEntity> {
    try {
      return this.userService.createUser(data);
    } catch (error) {}
  }

  @Put('users/:id')
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateUserDto,
  ): Promise<UserEntity> {
    try {
      return this.userService.updateUser(id, data);
    } catch (error) {}
  }

  @Patch('users/:Id')
  async partialUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: PartialUserDto,
  ): Promise<UserEntity> {
    try {
      return this.userService.partialUser(id, data);
    } catch (error) {}
  }

  @Delete('users/:id')
  async deleteUser(@Param('id', ParseIntPipe) id: number): Promise<UserEntity> {
    try {
      return this.userService.deleteUser(id);
    } catch (error) {}
  }
}
