import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateNotificationBody } from './create-notification-body';
import { PrismaService } from './prisma.service';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notification.findMany();
  }

  @Post()
  create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;

    return this.prisma.notification.create({
      data: {
        content,
        category,
        recipientId,
      },
    });
  }
}
