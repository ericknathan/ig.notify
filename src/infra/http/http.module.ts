import { Module } from '@nestjs/common';
import { NotificationsController } from '@infra/http/controllers';
import { DatabaseModule } from '@infra/database/database.module';
import {
  SendNotification,
  CancelNotification,
  ReadNotification,
  UnreadNotification,
  CountRecipientNotifications,
  GetRecipientNotifications,
} from '@app/use-cases';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    ReadNotification,
    UnreadNotification,
    CountRecipientNotifications,
    GetRecipientNotifications,
  ],
})
export class HttpModule {}
