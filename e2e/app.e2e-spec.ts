import request from 'supertest';
import { app, server } from '../src/app';

describe('VSM Server', () => {
  afterAll(() => {
    server.close();
  });

  it('should return "Hello, World" at root endpoint', async () => {
    const response = await request(app).get('/');

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('<h1>Hello, World</h1>');
  });
});
