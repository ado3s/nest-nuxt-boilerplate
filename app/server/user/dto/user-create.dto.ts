import { Role } from '@/server/shared';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class UserCreateDto {

  @IsNotEmpty()
  readonly username: string;

  @IsNotEmpty()
  @IsString()
  readonly lastName: string;

  @IsNotEmpty()
  @IsString()
  readonly firstName: string;

  @IsNotEmpty()
  @IsEnum(Role)
  readonly role: Role;
}
