const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/user');
const Organisation = require('../src/models/organisation');
const sequelize = require('../src/config/database');

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

describe('Authentication', () => {
  describe('POST /auth/register', () => {
    it('Should Register User Successfully with Default Organisation', async () => {
      const res = await request(app)
        .post('/auth/register')
        .send({
          firstName: 'John',
          lastName: 'Doe',
          email: 'john@example.com',
          password: 'password123',
          phone: '1234567890',
        });

      expect(res.status