import { Injectable } from '@nestjs/common';

@Injectable()
export class ScheduleService {
  async get(): Promise<string> {
    return new Promise((resolve, reject) => {
      resolve('test');
    });
  }
}
