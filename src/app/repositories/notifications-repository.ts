import { Notification } from '@app/entities';

export abstract class NotificationsRepository {
  abstract findById(
    notificationId: Notification['id'],
  ): Promise<Notification | null>;
  abstract findManyByRecipientId(
    recipientId: Notification['recipientId'],
  ): Promise<Notification[]>;
  abstract countManyByRecipientId(
    recipientId: Notification['recipientId'],
  ): Promise<number>;
  abstract create(notification: Notification): Promise<void>;
  abstract save(notification: Notification): Promise<void>;
}
