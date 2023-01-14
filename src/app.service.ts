import { Injectable } from '@nestjs/common';
import configuration from './config/configuration';

@Injectable()
export class AppService {
  getHello(): string {
    const { appName } = configuration();
    return `Hello from ${appName}`;
  }
}
