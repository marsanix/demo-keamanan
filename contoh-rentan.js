// File: contoh-rentan.js
// (Sengaja dibuat untuk demo - jangan ditiru!)

const jwt = require('jsonwebtoken')
const express = require('express')
const app = express()

// MASALAH 1: Hardcoded secret (akan ditangkap Semgrep & Gitleaks)
// Password sengaja dibuat hardcode di file code program untuk demo
const SECRET = "password-rahasia-jwt-saya-123"

// MASALAH 2: Hardcoded credentials 
const DB_USER = "admin"
const DB_PASSWORD = "SuperSecretP@ssw0rd!2026"
const API_SECRET_KEY = "sk_secret_a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6"

// MASALAH 3: Database connection string dengan password
const DB_CONNECTION = "mongodb://admin:SuperSecretP@ssw0rd@localhost:27017/myapp"

// MASALAH 4: SQL Injection (akan ditangkap Semgrep)
app.get('/user', (req, res) => {
    const nama = req.query.nama
    const query = `SELECT * FROM users WHERE nama = '${nama}'`
    // Seharusnya: parameterized query
})

// MASALAH 5: Tidak ada rate limiting
app.post('/login', (req, res) => {
    // Bisa dicoba login berkali-kali tanpa batas!
})

// MASALAH 6: XSS - Menyisipkan input user langsung ke HTML
app.get('/search', (req, res) => {
    const keyword = req.query.q
    res.send(`<h1>Hasil pencarian: ${keyword}</h1>`)
    // Seharusnya: sanitize/escape input sebelum render ke HTML
})

app.listen(3000, () => {
    console.log('Server berjalan di port 3000')
})