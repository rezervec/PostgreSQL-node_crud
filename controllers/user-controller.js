const db = require('../db')
const YourUrl = require('../url.js')
const userRouter = require('../routes/user-router')


class UserController {
  async createUser(req, res) {
    // if(!req.body.name || !req.body.surname) return res.sendStatus(400)
    const {name, surname} = req.body
    const newPerson = await db.query(`INSERT INTO person (name, surname) values ($1, $2) RETURNING *`, [name, surname])
    //////////
    const users = await db.query('SELECT * FROM person')
    res.render('index', {param: users.rows, url:YourUrl.url})
  }
  async getUsers(req, res) {
    const users = await db.query('SELECT * FROM person')
    res.render('index', {param: users.rows, url:YourUrl.url})
  }
  async getOneUser(req, res) {
    const id = req.params.id
    const user = await db.query('SELECT * FROM person where id = $1', [id])
    console.log(user.rows)
    //////////
    const users = await db.query('SELECT * FROM person')
    res.render('index', {param: users.rows, url:YourUrl.url, find_user:user})
  }
  async deleteUser(req, res) {
    const id = req.params.id
    const user = await db.query('DELETE FROM person where id = $1', [id])
    //////////
    const users = await db.query('SELECT * FROM person')
    res.render('index', {param: users.rows, url:YourUrl.url})
  }
  async updateUser(req, res) {
    const {id, name, surname} = req.params
    const user = await db.query(
      `UPDATE person set name = $1, surname = $2 where id = $3 RETURNING *`,
      [name, surname, id]
    )
    //////////
    const users = await db.query('SELECT * FROM person')
    res.render('index', {param: users.rows, url:YourUrl.url})
  }
}
  
  module.exports = new UserController()