import { Controller, Get, Post, Body, Patch, Param, Delete, Header } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }
  @Post('register')

  create(@Body() registerAuthDto: RegisterAuthDto) {
    return this.authService.register(registerAuthDto);
  }

  @Post('login')
 
  login(@Body() loginAuthDto: LoginAuthDto) {
    return this.authService.login(loginAuthDto);
  }

}
