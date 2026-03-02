const express = require('express');
const { Pool } = require('pg');

const app = express();

const pool = new Pool({
    host: process.env.DB_HOST || 'db',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'mydb',
});

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

app.get('/api/data', async (req, res) => {
    const result = await pool.query('SELECT NOW()');
    res.json(result.rows);
});

app.listen(5000, () => console.log('Backend running on port 5000'));