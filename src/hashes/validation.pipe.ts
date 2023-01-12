import { Injectable } from '@nestjs/common';
import {
  IsString,
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { HashesService } from './hashes.service';

@ValidatorConstraint({ name: 'UniqueUser', async: true })
@Injectable()
export class UniqueUserConstraint implements ValidatorConstraintInterface {
  constructor(private readonly hashService: HashesService) {}

  @IsString()
  async validate(value: any): Promise<boolean> {
    const hashExists = await this.hashService.findOneByUsername(value);

    if (!hashExists) return true;

    return false;
  }

  defaultMessage?(args?: ValidationArguments | undefined): string {
    return `That ${args?.property} already exist.`;
  }
}

export function HashUnique(
  username: string,
  validationOptions?: ValidationOptions,
) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [username],
      validator: UniqueUserConstraint,
    });
  };
}
