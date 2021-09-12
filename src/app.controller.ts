import { Controller, Get } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';
import { AppService } from './app.service';
import { Market } from './interfaces/market.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get('markets')
  // getAllMarkets(): Observable<Market[]> {
  //   return this.appService.getAllMarkets().pipe(map((res) => res.data));
  // }

  @Get('markets')
  async getMarkets(): Promise<Market[]> {
    const data = await this.appService.getAllMarkets();
    return data.data;
  }
}
