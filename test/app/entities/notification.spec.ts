import { Notification, Content } from '@app/entities';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Nova solicitação de amizade'),
      category: 'social',
      recipientId: '123',
    });

    expect(notification).toBeTruthy();
  });
});
