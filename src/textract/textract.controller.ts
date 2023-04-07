import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('textract')
export class TextractController {
  @Post('/')
  @UseInterceptors(FileInterceptor('file'))
  public upload(@UploadedFile('file') file: Express.Multer.File) {}
}
