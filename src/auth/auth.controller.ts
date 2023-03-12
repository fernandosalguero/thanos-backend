import { Controller, Get, Post, Body, Patch, Param, Delete, Header, ParseIntPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { AuthEntity } from './entities/auth.entity';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }
  
  @Get('mostrarAgente')
  getUser(): Promise <AuthEntity[]>{
    return this.authService.mostrarAgente();
  }

  @Post('register')
  create(@Body() registerAuthDto: RegisterAuthDto) {
    return this.authService.register(registerAuthDto);
  }

  @Post('login')
  login(@Body() loginAuthDto: LoginAuthDto) {
    return this.authService.login(loginAuthDto);
  }

  @Delete(':id')
  deleteUser (@Param ('id', ParseIntPipe) id: number){
    return this.authService.eliminarAgente(id)
  }
}
