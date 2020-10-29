import { Injectable } from '@nestjs/common';
import { MongoRepository} from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Auth } from './users.entity';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(Auth)
        private readonly userRepository: MongoRepository<Auth>
  ) {

  }

  async findOne(username: string){
    return  await this.userRepository.find({username: username})
  }
}