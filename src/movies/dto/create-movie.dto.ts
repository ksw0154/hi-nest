import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMovieDto {
  // validation 검사 (유효성)
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsOptional()
  @IsString({ each: true })
  readonly genres: string[];
}
