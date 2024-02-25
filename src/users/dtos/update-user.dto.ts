import { IsString, IsInt, IsOptional, IsPositive } from 'class-validator';

// TODO: Se puede también expander la clase createUserDto

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  readonly name?: string;

  @IsString()
  @IsOptional()
  readonly lastname?: string;

  @IsInt()
  @IsPositive()
  @IsOptional()
  readonly age?: number;
}
