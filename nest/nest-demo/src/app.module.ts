import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CatsMoudule } from './cats/cats.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';



@Module({
  imports: [ CatsMoudule ],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes({path: 'cats', method: RequestMethod.GET});
  }
}
