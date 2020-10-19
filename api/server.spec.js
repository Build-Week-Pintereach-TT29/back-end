const supertest = require('supertest');
const server = require('./server');

const db = require('../database/db-config');
const users = require('../users/users-model');

describe('server.js', () => {
    // it('has testing env', () => {
    //     console.log('process env', process.env.DB_ENV)
    // expect(process.env.DB_ENV).toBe('testing');
    // });

    describe('GET /', () => {
        it('should return 200 code and api message', () => {
            return supertest(server)
            .get('/')
            .then(res => {
                expect(res.status).toBe(200);
                expect(res.body.api).toBe('up and running')
            });
        })
    })
});

describe('users-router.js', () => {
    describe('GET /', () => {
        it('should return users in db', () => {

            const user = {
                username: "janedoe",
                password: "password"
            }

            return supertest(server)
            .get('/')
            .then(res => {
                expect(res.status).toBe(200);

            });
        })
    })
})

describe('boards-router.js', () => {
    describe('GET /', () => {
        it('should return boards in db', () => {

            const user = {
                username: "janedoe",
                password: "password"
            }

            return supertest(server)
            .get('/')
            .then(res => {
                expect(res.status).toBe(200);

            });
        })
    })
})