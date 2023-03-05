import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}


// TODO: para proteger las rutas colocamos el siguiente código: @UseGuards(JwtAuthGuard)