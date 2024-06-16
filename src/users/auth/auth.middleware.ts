import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { request } from 'http';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response , next: () => void) {

    const{authorization}= req.headers;
    if(!authorization){
      throw new HttpException('Unauthorized',HttpStatus.UNAUTHORIZED)
    }

    if(authorization==='xz123'){
      throw new HttpException('Forbidden',HttpStatus.FORBIDDEN)
    }
    next();
  }
}