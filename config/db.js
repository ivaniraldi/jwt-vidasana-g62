import pg from 'pg';

const { Pool } = pg

const config ={
    host: 'localhost',
    port: 5433,
    user: 'postgres',
    password: 'iraldi11',
    database: 'vida_sana',
    allowExitOnIdle: true
}
const pool = new Pool(config)

try {
    await pool.query("SELECT NOW()")
    console.log("Database connected successfully")
} catch (error) {
    console.log(error)
}


export default pool