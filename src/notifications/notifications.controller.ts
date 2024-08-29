// src/notifications/notifications.controller.ts
import { Controller, Post, Get, Patch, Delete, Param, Body } from '@nestjs/common';
import { NotificationsService } from './notifications.service';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post()
  create(@Body() createNotificationDto: { message: string; userId: string }) {
    return this.notificationsService.createNotification(createNotificationDto.message, createNotificationDto.userId);
  }

  @Get(':userId')
  getUserNotifications(@Param('userId') userId: string) {
    return this.notificationsService.getUserNotifications(userId);
  }

  @Patch(':id/read')
  markAsRead(@Param('id') id: string) {
    return this.notificationsService.markAsRead(id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.notificationsService.deleteNotification(id);
  }
}
