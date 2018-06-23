const Sequelize = require("sequelize");
const DBAuth = require("./config.js")
//const Admin = require("./Schemas/adminSchema");

const sequelize = new Sequelize('postaff', DBAuth.DBUSER, DBAuth.DBPASS, {
    host: 'localhost',
    dialect: 'mysql',
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


module.exports.sequelize = sequelize;