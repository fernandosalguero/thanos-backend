import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { AuthEntity } from './entities/auth.entity';

//JWT
import { jwtConstant } from './utils/jwtConstants';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './utils/jwt.strategy';


@Module({
  imports: [
    TypeOrmModule.forFeature([ AuthEntity ]),
    JwtModule.register({
      secret: jwtConstant.secret,
      signOptions: { expiresIn: '6h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy]
})
export class AuthModule {}
