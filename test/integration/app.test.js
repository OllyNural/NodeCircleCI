const request = require('supertest')
const app = require('../../src/app')

describe('Our maths endpoint should return correct randomNumber', () => {
    test('Should health check status 200', async () => {
        const response = await request(app).get('/')
        expect(response.statusCode).toBe(200)
    })

    test('Should return randomNumber 4', async () => {
        const response = await request(app).get('/random')
        expect(response.body).toEqual({'number':4})
    })
})