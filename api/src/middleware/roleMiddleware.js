const roles = require("../config/roles.json");

function checkRole(role) {
  return (req, res, next) => {
    if (req.user && roles[req.user.role] && roles[req.user.role].includes(role)) {
      next();
    } else {
      res.status(403).json({ message: "Forbidden" });
    }
  };
}

module.exports = checkRole;
