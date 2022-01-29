import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

// 데코레이터
// 클래스에 함수 기능을 추가할 수 있다.
@Module({
  imports: [MoviesModule],
  // controllers는 기본적으로 url을 가져오고 함수를 실행한다.
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
