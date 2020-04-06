const request = require('supertest')
const app = require( '../../src/app')
const connection = require('../../src/database/connection')

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback()
    await connection.migrate.latest()
  })

  afterAll(async() => {
    await connection.destroy()
  })

  it('shold be able to create a new ONG', async () => {
    const response = await request(app).post('/ongs').send({
      name: "AAACD as",
      email: "aacd@gmail.com",
      whatsapp: "+5595981226135",
      city: "Manaus",
      uf: "AM"
    })

    expect(response.body).toHaveProperty('id')
    expect(response.body.id).toHaveLength(8)
  })
  
})