import { WebSocketGateway, SubscribeMessage, OnGatewayInit, WebSocketServer, GatewayMetadata } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { NotificationsService } from '../notifications/notifications.service';
import { Logger } from '@nestjs/common';

@WebSocketGateway({ cors: true })
export class EventsGateway implements OnGatewayInit {
  @WebSocketServer()
  server: Server;
  private readonly logger = new Logger(EventsGateway.name);

  constructor(private readonly notificationsService: NotificationsService) {}

  afterInit(server: Server) {
    this.logger.log('Initialized');
  }

  @SubscribeMessage('sendNotification')
  async handleSendNotification(client: Socket, payload: { message: string; userId: string }) {
    const notification = await this.notificationsService.createNotification(payload.message, payload.userId);
    this.server.emit('notification', notification);
  }

  @SubscribeMessage('getNotifications')
  async handleGetNotifications(client: Socket, userId: string) {
    const notifications = await this.notificationsService.getUserNotifications(userId);
    client.emit('notifications', notifications);
  }

  @SubscribeMessage('markAsRead')
  async handleMarkAsRead(client: Socket, notificationId: string) {
    const notification = await this.notificationsService.markAsRead(notificationId);
    this.server.emit('notificationRead', notification);
  }
}
