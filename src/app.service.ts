import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const { APP_NAME } = process.env;
    return `Hello from ${APP_NAME}`;
  }
}
