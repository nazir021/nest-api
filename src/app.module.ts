import { Module } from '@nestjs/common';
import { from } from 'rxjs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';


import {ProfileModule} from './Profile/profile.module'
import {ContactModule} from './Contact/contact.module'
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';


@Module({
  imports: [ContactModule,ProfileModule,
    TypeOrmModule.forRoot({
    type: 'mongodb',
    url:
      'mongodb://localhost/nest-intro',
    entities: [join(__dirname, '**/**.entity{.ts,.js}')],
    synchronize: true,
    useNewUrlParser: true,
    logging: true,
  }), AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

