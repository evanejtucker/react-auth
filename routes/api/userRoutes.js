const router = require("express").Router();

// Matches with "/api/users"
router.route("/")
  .get(function(req, res) {
    res.send("/api/users")
  });



module.exports = router;
