class ContactsDAO {
  constructor (dbClient) {
    this.db = dbClient
    this.getAll = this.getAll.bind(this)
    this.getById = this.getById.bind(this)
    this.create = this.create.bind(this)
    this.editUpdate = this.editUpdate.bind(this)
    this.delete = this.delete.bind(this)
  }

  async getAll () {
    const response = await this.db.query('SELECT id, first_name, surname, position_, email, date_birth, phone FROM contactsuser5')
    return response[0]
  }

  async getById (id) {
    const response = await this.db.query('SELECT id, first_name, surname, position_, email, date_birth, phone FROM contactsuser5 WHERE id = ?', [id])
    const rows = response[0]
    return rows[0]
  }

  async create (contact) {
    const response = await this.db.query('INSERT INTO contactsuser5 (first_name, surname, position_, email, date_birth, phone) VALUES (?, ?, ?, ?, ?, ?)', [contact.fname, contact.surname, contact.position, contact.email, contact.datebirth, contact.phone])
    const result = response[0]
    return result
  }

  async editUpdate (contact) {
    const response = await this.db.query('UPDATE contactsuser5 SET first_name = ?, surname = ?, position_ = ?, email = ?, date_birth = ?, phone = ? WHERE id = ?', [contact.fname, contact.surname, contact.position, contact.email, contact.datebirth, contact.phone, contact.id])
    const result = response[0]
    return result
  }

  async delete (id) {
    const response = await this.db.query('DELETE FROM contactsuser5 WHERE id = ?', [id])
    const result = response[0]
    return result
  }
}

module.exports = ContactsDAO
