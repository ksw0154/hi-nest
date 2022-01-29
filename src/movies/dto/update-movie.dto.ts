import { IsNumber, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

// export class UpdateMovieDto {
//   // validation 검사 (유효성)
//   @IsString()
//   readonly title?: string;

//   @IsNumber()
//   readonly year?: number;

//   @IsString({ each: true })
//   readonly genres?: string[];
// }

// PartialType 패키지를 이용해서 CreateMovieDto에 있는 유효성 검사 항목들을 optional로 모두 사용할 수 있다.
export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
