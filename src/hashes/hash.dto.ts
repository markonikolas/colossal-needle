import { IsString } from 'class-validator';
import { HashUnique } from './constraints/unique.constraint';

export class GetHashDto {
  @IsString()
  username: string;
}

export class CreateHashDto {
  @IsString()
  @HashUnique('username')
  username: string;

  @IsString()
  hash: string;
}

export class UpdateHashDto extends GetHashDto {
  @IsString()
  hash: string;
}
