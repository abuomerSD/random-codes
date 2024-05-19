import { Injectable, Res } from '@nestjs/common';
import { Response } from 'express';

@Injectable()
export class CatsService {
  findAll():  string{
    return 'all cats';
  }

  create(@Res() res: Response): void{
    res.json({message: 'cat saved'});
  }

  findOne(@Res() res: Response, id) {
    console.log(id);
    res.status(200).json({status: 'ok', data: {id:1, name: 'cat 1'}});
  }
  
}
