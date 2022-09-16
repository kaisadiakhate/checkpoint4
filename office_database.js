const dotenv = require("dotenv");
dotenv.config();

const { Pool } = require("pg");
const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
});

async function createOffice(office) {
  try {
    const res = await pool.query(
      `INSERT INTO office (name, location, starting_year) VALUES ($1, $2, $3)`,
      [office.name, office.location, office.starting_year]
    );
  } catch (err) {
    console.log(err?.stack);
  }
}

/*
createOffice({
  name: "Academy Finland",
  location: "Espoo",
  starting_year: 2017,
});

createOffice({
  name: "Academy Sweden",
  location: "Kista",
  starting_year: 2015,
});

createOffice({
  name: "Academy Germany",
  location: "Munchen",
  starting_year: 2018,
});
*/
