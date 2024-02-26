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
    const user = await this.userService.getAllUsers();
    return user;
  }

  @Get(':id')
  async getUserById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<UserEntity> {
    const user = await this.userService.getUserById(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  @Post()
  async createUser(@Body() data: CreateUserDto): Promise<UserEntity> {
    const existingUser = await this.userService.getUserByEmail(data.email);
    if (existingUser) {
      throw new ConflictException();
    }

    const newUser = await this.userService.createUser(data);
    return newUser;
  }

  @Put(':id')
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateUserDto,
  ): Promise<UserEntity> {
    const existingUser = await this.userService.getUserById(id);
    if (!existingUser) {
      throw new NotFoundException();
    }
    const updatedUser = await this.userService.updateUser(id, data);
    return updatedUser;
  }

  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: number): Promise<UserEntity> {
    const existingUser = await this.userService.getUserById(id);
    if (!existingUser) {
      throw new NotFoundException();
    }

    const deletedUser = await this.userService.deleteUser(id);
    return deletedUser;
  }
}
