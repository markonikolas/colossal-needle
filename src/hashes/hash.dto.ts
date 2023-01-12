import { IsString } from 'class-validator';
import { HashUnique } from './validation.pipe';

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
