import { Injectable } from '@nestjs/common';
import { Notification } from '@/app/entities';
import { NotificationsRepository } from '@/app/repositories';
import { PrismaService } from '@/infra/database/prisma/prisma.service';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    const { id, content, category, recipientId, readAt, createdAt } =
      notification;
    await this.prismaService.notification.create({
      data: {
        id,
        content: content.value,
        category,
        recipientId,
        readAt,
        createdAt,
      },
    });
  }
}
