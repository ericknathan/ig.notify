import { Content, Notification, NotificationProps } from '@app/entities';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}): Notification {
  return new Notification({
    content: new Content('Nova solicitação de amizade'),
    category: 'social',
    recipientId: 'recipient-1',
    ...override,
  });
}
