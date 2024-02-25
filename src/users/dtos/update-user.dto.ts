import { IsString, IsInt, IsPositive, IsNotEmpty } from 'class-validator';

export class UpdateUserDto {
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
