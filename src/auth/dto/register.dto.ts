import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length, IsNotEmpty } from 'class-validator';

export class RegisterUserDto {
  @ApiProperty()
  @IsString()
  @Length(2, 20)
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Length(8, 20)
  password: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
