import { IsString } from 'class-validator';

export class GetHashDto {
  @IsString()
  username: string;
}

export class CreateHashDto extends GetHashDto {
  @IsString()
  hash: string;
}
