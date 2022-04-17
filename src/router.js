const express = require('express')
const PageController = require('./controllers/PageController')
const ContactsController = require('./controllers/ContactsController')
const SqlClient = require('./lib/SqlClient')

const router = express.Router()

const sqlClient = new SqlClient()

// Controllers
const pageController = new PageController()
const contactsController = new ContactsController(sqlClient)

// Routes
router.get('/', pageController.renderHome)

router.get('/create', contactsController.renderCreate)
router.post('/create', contactsController.renderInsertContact)

router.get('/start', contactsController.renderStartAllContacts)

router.get('/edit/:id', contactsController.renderEditContact)
router.post('/edit/:id', contactsController.renderUpdateContact)

router.get('/delete/:id', contactsController.renderDeleteContact)

router.get('*', pageController.renderNotFound)

module.exports = router
