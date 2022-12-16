import { SendNotification } from '@app/use-cases';
import { DatabaseModule } from '@infra/database/database.module';
import { NotificationsController } from '@infra/messaging/kafka/controllers';
import { Module } from '@nestjs/common';
import { KafkaConsumerService } from './kafka';

@Module({
  imports: [DatabaseModule],
  providers: [SendNotification, KafkaConsumerService],
  controllers: [NotificationsController],
})
export class MessagingModule {}
