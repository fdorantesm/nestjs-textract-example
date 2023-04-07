import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TextractModule } from './textract/textract.module';

@Module({
  imports: [TextractModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
