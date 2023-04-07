import { Injectable } from '@nestjs/common';
import { TextractClient } from 'nestjs-textract';

@Injectable()
export class TextractService {
  constructor(private readonly textractClient: TextractClient) {}
}
