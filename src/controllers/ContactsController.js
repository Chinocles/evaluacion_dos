const ContactsDAO = require('../models/dao/contactsDAO')

class ContactsController {
  constructor (db) {
    this.contactsDao = new ContactsDAO(db)
    this.renderInsertContact = this.renderInsertContact.bind(this)
    this.renderStartAllContacts = this.renderStartAllContacts.bind(this)
    this.renderEditContact = this.renderEditContact.bind(this)
    this.renderUpdateContact = this.renderUpdateContact.bind(this)
    this.renderDeleteContact = this.renderDeleteContact.bind(this)
  }

  renderCreate (req, res) {
    res.render('create')
  }

  async renderInsertContact (req, res) {
    const fname = req.body.fname
    const surname = req.body.surname
    const position = req.body.position
    const email = req.body.email
    const datebirth = req.body.datebirth
    const phone = req.body.phonenumber
    const contact = { fname, surname, position, email, datebirth, phone }
    try {
      await this.contactsDao.create(contact)

      res.redirect('/')
    } catch (error) {
      console.log(error)
      res.status(500).render('500')
    }
  }

  async renderStartAllContacts (req, res) {
    const contacts = await this.contactsDao.getAll()
    contacts.forEach(element => {
      element.date_birth = (element.date_birth).toISOString().slice(0, 10)
    })
    const numelements = contacts.length
    res.render('start', {
      contacts,
      numelements
    })
  }

  async renderEditContact (req, res) {
    const id = req.params.id
    try {
      const contact = await this.contactsDao.getById(id)
      const date = new Date(contact.date_birth).toISOString().slice(0, 10)
      if (!contact) {
        res.status(404).render('404')
        return
      }
      res.render('edit', {
        numeroid: id,
        fname: contact.first_name,
        surname: contact.surname,
        datebirth: date,
        position: contact.position_,
        email: contact.email,
        phonenumber: contact.phone
      })
    } catch (error) {
      console.log(error)
      res.status(500).render('500')
    }
  }

  async renderUpdateContact (req, res) {
    const id = req.params.id
    const fname = req.body.fname
    const surname = req.body.surname
    const position = req.body.position
    const email = req.body.email
    const datebirth = req.body.datebirth
    const phone = req.body.phonenumber
    try {
      const contact = { fname, surname, position, email, datebirth, phone, id }
      await this.contactsDao.editUpdate(contact)
      res.redirect('/')
    } catch (error) {
      console.log(error)
      res.status(500).render('500')
    }
  }

  async renderDeleteContact (req, res) {
    const id = req.params.id
    try {
      const contact = await this.contactsDao.getById(id)
      if (!contact) {
        res.status(404).render('404')
        return
      }
      const name = contact.first_name
      const surname = contact.surname
      const date = new Date(contact.date_birth).toISOString().slice(0, 10)
      const position = contact.position_
      const email = contact.email
      const phone = contact.phone
      await this.contactsDao.delete(id)
      res.render('delete', {
        name,
        surname,
        date,
        position,
        email,
        phone

      })
    } catch (error) {
      console.log(error)
      res.status(500).render('500')
    }
  }
}

module.exports = ContactsController
