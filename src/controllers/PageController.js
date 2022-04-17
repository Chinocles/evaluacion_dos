class PageController {
  renderHome (req, res) {
    res.redirect('start')
  }

  renderNotFound (req, res) {
    res.render('404')
  }
}

module.exports = PageController
