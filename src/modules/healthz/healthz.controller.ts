import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Health')
@Controller('healthz')
export class HealthzController {
  @Get()
  getHealthz() {
    return {
      success: true,
    };
  }
}
