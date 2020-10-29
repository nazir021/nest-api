import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import {Auth} from './users.entity';
import { TypeOrmModule } from '@nestjs/typeorm'; 

@Module({
  imports: [TypeOrmModule.forFeature([Auth])],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
