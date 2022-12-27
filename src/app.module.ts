import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './api/user/user.controller';
import { UserModule } from './api/user/user.module';
import { PostModule } from './api/post/post.module';

@Module({
  imports: [UserModule, PostModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
