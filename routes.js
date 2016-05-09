module.exports = (app, passport) => {

  app.get('/', (req, res) => {
    // evt: check if logged in
    res.render('home'/* HOME TPL*/);
  });

  app.get('/signup', (req, res) => {
    res.render('signup');
  });

  app.get('/login', (req, res) => {
    res.render('login')
  });

  app.get('/create', (req, res) => {
    res.render('new-family');
  });

  app.get('/families/:familyname', (req, res) => {
    // evt: db/cache lookup
    res.render('memorial', { name: req.params.familyname });
  });

}