import { Injectable, Res } from '@nestjs/common';
import { Response } from 'express';

@Injectable()
export class AppService {
  findAll():  string{
    return 'all cats';
  }

  create(@Res() res: Response): void{
    res.json({message: 'cat saved'});
  }
}
