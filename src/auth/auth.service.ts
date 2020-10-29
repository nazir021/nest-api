import { Injectable ,UnauthorizedException,HttpException,HttpStatus} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import jwt_decode from "jwt-decode";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username); 
    // console.log(`Error 2: ${user}`);
    if (user && user[0].password == pass) {
      const { ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payobj = {} as any
    if( user ){
        if(user[0].id!="")
          payobj.sub = user[0].id;
        if(user[0].username!="")
          payobj.username = user[0].username;
    }
    
    return {
      access_token: this.jwtService.sign(payobj)
    };
  }
}