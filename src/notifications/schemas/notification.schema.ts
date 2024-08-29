// src/notifications/schemas/notification.schema.ts
import { Schema, Document } from 'mongoose';

export interface Notification extends Document {
  message: string;
  userId: string; // 사용자 ID
  isRead: boolean;
  createdAt: Date;
}

export const NotificationSchema = new Schema<Notification>({
  message: { type: String, required: true },
  userId: { type: String, required: true },
  isRead: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});
