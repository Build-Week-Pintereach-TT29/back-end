const supertest = require('supertest');
const server = require('./server');

describe('server.js', () => {
    describe('GET /', () => {
        it('should return 200 code and api message', () => {
            return supertest(server)
            .get('/')
            .then(res => {
                expect(res.status).toBe(200);
                expect(res.text).toBe('{"api":"up and running"}')
            });
        })
    })
})

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