module.exports = {
  getApi: function(req, res, next) {
    res.send(200);
  },
  postApi: function(req, res, next) {
    res.send(304);

  },
  putApi: function(req, res, next) {
    res.send(304);

  },
  deleteApi: function(req, res, next) {
    res.send(304);

  }
}