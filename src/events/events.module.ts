import { Module } from '@nestjs/common';
import { EventsGateway } from './events.gateway';
import { NotificationsModule } from '../notifications/notifications.module';

@Module({
  imports: [NotificationsModule],
  providers: [EventsGateway],
})
export class EventsModule {}
