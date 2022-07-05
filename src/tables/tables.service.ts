import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { Table } from './entities/table.entity';

@Injectable()
export class TablesService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateTableDto) {
    return 'This action adds a new table';
  }

  findAll() {
    return this.prisma.table.findMany();
  }

  findOne(id: string) {
    return `This action returns a #${id} table`;
  }

  update(id: string, dto: UpdateTableDto) {
    return `This action updates a #${id} table`;
  }

  remove(id: string) {
    return `This action removes a #${id} table`;
  }
}