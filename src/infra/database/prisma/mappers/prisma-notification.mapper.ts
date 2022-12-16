import { Notification as RawNotification } from '@prisma/client';
import { Content, Notification } from '@app/entities';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    const { id, content, category, recipientId, readAt, createdAt } =
      notification;

    return {
      id,
      content: content.value,
      category,
      recipientId,
      readAt,
      createdAt,
    };
  }

  static toDomain(raw: RawNotification) {
    const { id, content, category, recipientId, readAt, createdAt } = raw;

    return new Notification(
      {
        content: new Content(content),
        category,
        recipientId,
        readAt,
        createdAt,
      },
      id,
    );
  }
}
