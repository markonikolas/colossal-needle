import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/hashes (GET)', () => {
    return request(app.getHttpServer())
      .get('/hashes')
      .expect(200)
      .expect('this is a test!');
  });

  it('/hashes (POST)', () => {
    return request(app.getHttpServer())
      .post('/hashes')
      .expect(201)
      .expect('the hash is saved!');
  });
});
