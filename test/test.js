const chai = require('chai')
const expect = chai.expect
const config = require('../knexfile').test
const users = require('../src/models/users.model')

describe('whatta-meal-backend', () => {
  before(() => {
    const tmpConnection = require('knex')({
      client: 'pg',
      connection: config.connection
    })
    return tmpConnection
      .raw(`CREATE DATABASE ${config.connection.database};`)
      .catch(err => {
        // console.log(err)
        Promise.resolve('Everything is OK')
      })
      .then(() => (global.knex = require('../src/queries/db')))
      .then(() => knex.migrate.rollback())
      .then(() => knex.migrate.latest(config))
      .then(() => knex.seed.run())
      .catch(() => console.log(`Migrations or seeds failed.`))
  })

  describe('#fetchUsers()', () => {
    let result;
    let user;

    before(async () => {
      result = await users.fetchUsers()
      user = result[0]
    })

    it('should return an array of all the users in the database', () => {
      expect(result).to.be.an('array')
    })

    it('one user should contain these keys, "id", "name", "email", "password"', () => {
      expect(user).to.contain.keys(
        'id',
        'name',
        'email',
        'password'
      )
    })

    it('name of first user should be "aj"', () => {
      expect(user.name).to.be.equal('aj')
    })
  })

  describe('#fetchUser()', () => {
    let result;
    let user;

    before(async () => {
      result = await users.fetchUser(1)
      user = result[0]
    })
    
    it('should verify user email with id 1', () => {
      expect(user.email).to.equal('aj@gmail.com')
    })

    it('result should only return 1 user', () => {
      expect(result.length).to.be.equal(1)
    })

    it('one user should contain these keys, "name", "email", "password"', () => {
      expect(user).to.contain.keys(
        'id',
        'email',
        'password'
      )
    })
  })

  describe('#createUser()', () => {
    let result;
    let user;

    let data = {
      name: 'test',
      email: 'test@email.com',
      password: 'password'
    }

    before(async () => {
      result = await users.createUser(data)
      user = result[0]
    })

    it('result of new user should be the length of 1', () => {
      expect(result.data.length).to.equal(1)
    })

    it('new user should contain these keys, "id", "name", "email", "password"', () => {
      expect(result.data[0]).to.contain.keys(
        'id',
        'name',
        'email',
        'password'
      )
    })

    it('should have the name of "test"', () => {
      expect(result.data[0].name).to.be.equal('test')
    })

  })

})