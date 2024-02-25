import { IsString, IsInt, IsNotEmpty, IsPositive } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly lastname: string;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  readonly age: number;
}
