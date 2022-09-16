const dotenv = require("dotenv");
dotenv.config();

const { Pool } = require("pg");
const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
});

async function updateTableware(id) {
  try {
    const res = await pool.query(
      `UPDATE tableware SET office_id = $1 WHERE office_id IS NULL;`,
      [id]
    );
    return;
  } catch (err) {
    console.log(err?.stack);
  }
}

/*
async function getAllTableware() {
  try {
    const res = await pool.query(`SELECT * FROM tableware`);
    console.log(res.rows);
    return res.rows;
  } catch (err) {
    console.log(err?.stack);
  }
}
*/

async function readAllTableware() {
  try {
    const res = await pool.query(
      `SELECT office.location, tableware.name, tableware.qty FROM tableware INNER JOIN office ON tableware.office_id=office.id`
    );
    console.log(res.rows);
    return res.rows;
  } catch (err) {
    console.log(err?.stack);
  }
}

async function createTableware(tableware) {
  try {
    const res = await pool.query(
      `INSERT INTO tableware (name, qty, office_id) VALUES ($1, $2, $3)`,
      [tableware.name, tableware.qty, tableware.office_id]
    );
  } catch (err) {
    console.log(err?.stack);
  }
}
/*
createTableware({ name: "Lautanen", qty: 50 });
createTableware({ name: "Lasi", qty: 35 });
createTableware({ name: "Haarukka", qty: 46 });
createTableware({ name: "Veitsi", qty: 55 });
createTableware({ name: "Lusikka", qty: 20, office_id: 2 });
*/
//updateTableware(1);
//readAllTableware();
//getAllTableware();
