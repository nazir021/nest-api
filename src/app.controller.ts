// import { Controller, Get } from '@nestjs/common';
import { Controller, Request, Post, UseGuards,Get } from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AppService} from './app.service'
@Controller()
export class AppController {
  //constructor(private readonly appService: AppService) {}
  constructor(private authService: AuthService,private readonly appService: AppService) {}
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profiles')
  getProfile(@Request() req) {
    return req.user;
  }

}



