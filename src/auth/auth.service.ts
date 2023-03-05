import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { AuthEntity } from './entities/auth.entity';
import { hash, compare } from 'bcrypt'
import { LoginAuthDto } from './dto/login-auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(AuthEntity) private readonly registroUsuario: Repository<AuthEntity>,
    private jwtService: JwtService
  ) { }


  async register(registerAuthDto: RegisterAuthDto) {
    const userExist = await this.registroUsuario.findOne({
      where: {
        dni: registerAuthDto.dni
      }
    })

    if (userExist) {
      return new HttpException('DNI existente, intenta con otro dni', HttpStatus.CONFLICT);
    } else {
      const { password } = registerAuthDto;
      const plainToHash = await hash(password, 9);
      registerAuthDto = { ...registerAuthDto, password: plainToHash };
      const newRegistro = this.registroUsuario.create(registerAuthDto)
      return this.registroUsuario.save(newRegistro)

    }
  }

  async login(loginAuthDto: LoginAuthDto) {
    // consultamos en la bd si el agente existe
    const { dni, password } = loginAuthDto;
    const findUser = await this.registroUsuario.findOne({
      where: {
        dni: loginAuthDto.dni
      }
    })
    if (!findUser) throw new HttpException('Agente no encontrado', 404);

    const checkPassword = await compare(password, findUser.password);
    if (!checkPassword) throw new HttpException('Contraseña incorrecta', 403)

    // firmamos el token
    const payload = {id:findUser.id, rol: findUser.rol}
    const token =  this.jwtService.sign(payload)


    const data = {
      user: findUser,
      token,
    }
    return data;

  }


}

