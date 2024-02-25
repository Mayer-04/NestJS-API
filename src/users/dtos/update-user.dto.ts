import { IsString, IsInt } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  readonly name?: string;

  @IsString()
  readonly lastname?: string;

  @IsInt()
  readonly age?: number;
}
