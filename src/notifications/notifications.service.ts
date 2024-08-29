// src/notifications/notifications.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Notification } from './schemas/notification.schema';

@Injectable()
export class NotificationsService {
  constructor(@InjectModel('Notification') private readonly notificationModel: Model<Notification>) {}

  async createNotification(message: string, userId: string): Promise<Notification> {
    const createdNotification = new this.notificationModel({
      message,
      userId,
      isRead: false,
    });
    return createdNotification.save();
  }

  async getUserNotifications(userId: string): Promise<Notification[]> {
    return this.notificationModel.find({ userId }).sort({ createdAt: -1 }).exec();
  }

  async markAsRead(notificationId: string): Promise<Notification> {
    const notification = await this.notificationModel.findById(notificationId).exec();
    if (!notification) {
      throw new NotFoundException('Notification not found');
    }
    notification.isRead = true;
    return notification.save();
  }

  async deleteNotification(notificationId: string): Promise<void> {
    const result = await this.notificationModel.deleteOne({ _id: notificationId }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException('Notification not found');
    }
  }
}
