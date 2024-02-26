import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsEmail,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'Name of the user' })
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({ description: 'Lastname of the user' })
  @IsString()
  @IsNotEmpty()
  readonly lastname: string;

  @ApiProperty({ description: 'Email of the user', example: 'mayer@gmail.com' })
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty({ description: 'Age of the user' })
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  readonly age: number;
}
