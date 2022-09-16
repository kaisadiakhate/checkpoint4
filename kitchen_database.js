const dotenv = require("dotenv");
dotenv.config();

const { Pool } = require("pg");
const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
});

async function createTableware(tableware) {
  try {
    const res = await pool.query(
      `INSERT INTO tableware (name, qty) VALUES ($1, $2)`,
      [tableware.name, tableware.qty]
    );
  } catch (err) {
    console.log(err?.stack);
  }
}

async function readAllTableware() {
  try {
    const res = await pool.query(`SELECT * FROM tableware`);
    console.log(res.rows);
    return res.rows;
  } catch (err) {
    console.log(err?.stack);
  }
}

/*
createTableware({ name: "Lautanen", qty: 50 });
createTableware({ name: "Lasi", qty: 35 });
createTableware({ name: "Haarukka", qty: 46 });
createTableware({ name: "Veitsi", qty: 55 });
*/
readAllTableware();
