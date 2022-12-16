import { Replace } from '@helpers/Replace';
import { Content } from '@app/entities';
import { randomUUID } from 'node:crypto';

export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  canceledAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private _id: string;
  private props: NotificationProps;

  constructor(
    props: Replace<NotificationProps, { createdAt?: Date }>,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id(): string {
    return this._id;
  }

  public get recipientId(): NotificationProps['recipientId'] {
    return this.props.recipientId;
  }

  public set recipientId(recipientId: NotificationProps['recipientId']) {
    this.props.recipientId = recipientId;
  }

  public get content(): NotificationProps['content'] {
    return this.props.content;
  }

  public set content(content: NotificationProps['content']) {
    this.props.content = content;
  }

  public get category(): NotificationProps['category'] {
    return this.props.category;
  }

  public set category(category: NotificationProps['category']) {
    this.props.category = category;
  }

  public get readAt(): NotificationProps['readAt'] {
    return this.props.readAt;
  }

  public read() {
    this.props.readAt = new Date();
  }

  public unread() {
    this.props.readAt = null;
  }

  public get canceledAt(): NotificationProps['canceledAt'] {
    return this.props.canceledAt;
  }

  public cancel() {
    this.props.canceledAt = new Date();
  }

  public set createdAt(createdAt: NotificationProps['createdAt']) {
    this.props.createdAt = createdAt;
  }
}
