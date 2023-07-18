module.exports.isAuth = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect('/login');
  }
};
module.exports.isHere = (req, res, next) => {
  if (req.session.user) {
    res.redirect('/');
  } else {
    next();
  }
};
