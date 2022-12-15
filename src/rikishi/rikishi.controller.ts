import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RikishiService } from './rikishi.service';
import { CreateRikishiDto } from './dto/create-rikishi.dto';
import { UpdateRikishiDto } from './dto/update-rikishi.dto';

@Controller('rikishi')
export class RikishiController {
  constructor(private readonly rikishiService: RikishiService) {}

  @Post()
  create(@Body() createRikishiDto: CreateRikishiDto) {
    return this.rikishiService.create(createRikishiDto);
  }

  @Get()
  findAll() {
    return this.rikishiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rikishiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRikishiDto: UpdateRikishiDto) {
    return this.rikishiService.update(+id, updateRikishiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rikishiService.remove(+id);
  }
}
