import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from "@nestjs/mongoose";
import {ConfigModule} from "@nestjs/config";
import { UsersModule } from './users/users.module';
import { DialogsModule } from './dialogs/dialogs.module';
import { MessagesModule } from './messages/messages.module';

@Module({
    controllers: [AppController],
    providers: [AppService],
    imports: [
        ConfigModule.forRoot(),
        MongooseModule.forRoot(process.env.MONGO_URL),
        UsersModule,
        DialogsModule,
        MessagesModule
    ]
})
export class AppModule {}