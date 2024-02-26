import {
  IsString,
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsEmail,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly lastname: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  readonly age: number;
}
