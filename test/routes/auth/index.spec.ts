import request from 'supertest'
import { expect } from 'chai'

import createServer from 'server'

const app = createServer()

describe('auth routes', () => {
  it('/auth responds with 200', () => {
    request(app).get('/auth').expect(200)
  })
})
