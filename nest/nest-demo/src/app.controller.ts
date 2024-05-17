import { Controller, Get, Post, Put, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.findAll();
  }

  @Post()
  create(@Res() res: Response): void {
    return this.appService.create(res);
  }
}
