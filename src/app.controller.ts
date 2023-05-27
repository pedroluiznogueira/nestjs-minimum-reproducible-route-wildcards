import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('ab*cd')
  getHelloWithWildcard(): string {
    return 'this route attempts to use a wildcard in the middle';
  }
}
