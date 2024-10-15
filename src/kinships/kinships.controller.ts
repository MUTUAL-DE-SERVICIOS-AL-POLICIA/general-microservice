import { Controller, ParseIntPipe } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { KinshipsService } from './kinships.service';

@Controller()
export class KinshipsController {
  constructor(private readonly kinshipsService: KinshipsService) {}

  @MessagePattern('kinships.findAll')
  findAll() {
    return this.kinshipsService.findAll();
  }

  @MessagePattern('kinship.findOne')
  findOne(@Payload('id', ParseIntPipe) id: number) {
    return this.kinshipsService.findOne(id);
  }
}
