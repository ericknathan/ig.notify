import { Notification } from '@/app/entities';

export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
}
