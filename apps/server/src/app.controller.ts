import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
@ApiTags('MyTag')
@ApiBearerAuth()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @ApiExcludeEndpoint()

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
