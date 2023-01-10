import { IsString } from 'class-validator';

export class CreateHashDTO {
  @IsString()
  username: string;

  @IsString()
  hash: string;
}
