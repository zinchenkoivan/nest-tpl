import { Controller, Get } from '@nestjs/common';

@Controller('healthz')
export class HealthzController {
  @Get()
  getHealthz() {
    return {
      success: true,
    };
  }
}
