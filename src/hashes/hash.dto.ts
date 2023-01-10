import { IsString } from 'class-validator';

export class GetHashDTO {
  @IsString()
  username: string;
}

export class CreateHashDTO extends GetHashDTO {
  @IsString()
  hash: string;
}
