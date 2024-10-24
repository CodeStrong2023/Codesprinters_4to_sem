import pg from "pg";

const pool = new pg.Pool({
  port: 5432,
  host: "localhost",
  user: "postgres",
  password: "admin",
  database: "PERN",
});

pool.on("connect", () => {
  console.log("connected to the db");
});

export default pool;
