import {
  IsString,
  IsInt,
  IsPositive,
  IsNotEmpty,
  IsEmail,
} from 'class-validator';

export class UpdateUserDto {
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
