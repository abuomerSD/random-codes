import { Body, Controller, Get, Param, Post, Put, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.findAll();
  }

  @Post()
  create(@Res() res: Response , @Body() createCatDto: CreateCatDto): void {
    return this.appService.create(res);
  }

  @Get(':id')
  findOne(@Res() res: Response, @Param() params: any): void {
    const id = params.id;
    return this.appService.findOne(res, id);
  }
}
