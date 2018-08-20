const { db, pgp } = require('../config/conn');

// This brings in our "project3_db" database
// Where we can refer to as "db"
// In order to execute sql query functions

module.exports = {

  // Find all users method
  index() {
    return db.many(`
        SELECT *
        FROM users
    `);
  },

  // Find user information for logged-in user
  findById(id) {
    return db.one(`
        SELECT *
        FROM users
        WHERE id = $1`, id)
  },

  //register user in DB
  create(user) {
    return db.one(`
        INSERT INTO users (first_name, last_name, cohort, horoscope)
        VALUES ($/first_name/, $/last_name/, $/cohort/, $/horoscope/)
        RETURNING *`, user);
  },

  update(user) {
  
    return db.one(`
      UPDATE users
      SET 
      first_name = $/first_name/,
      last_name = $/last_name/,
      cohort = $/cohort/,
      horoscope = $/horoscope/
      WHERE users.id = $/id/
      RETURNING *`, user);
  }

      
}