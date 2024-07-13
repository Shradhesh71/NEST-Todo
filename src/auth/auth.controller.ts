import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Auth")
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @UseGuards(JwtAuthGuard)
  @Post("register")
  @ApiOperation({description:"To Register a new user with email address.",summary:"Register an user with its detail."})
  create(@Body() registerData: RegisterUserDto) {
    return this.authService.register(registerData);
  }

  @Post("login")
  @ApiOperation({description:"Login a user with email address.",summary:"login Endpoint."})
  login(@Body() loginData: LoginDto) {
    return this.authService.login(loginData);
  }
}
