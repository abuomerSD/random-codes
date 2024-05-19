import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Response } from 'express';
import { Cat } from './dto/cats.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getHello(): string {
    return this.catsService.findAll();
  }

  @Post()
  create(@Res() res: Response , @Body() cat: Cat): void {
    return this.catsService.create(res);
  }

  @Get(':id')
  findOne(@Res() res: Response, @Param() params: any): void {
    const id = params.id;
    return this.catsService.findOne(res, id);
  }
}
