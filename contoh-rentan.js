// File: contoh-rentan.js
// (Sengaja dibuat untuk demo - jangan ditiru!)

const jwt = require('jsonwebtoken')
const express = require('express')
const app = express()

// MASALAH 1: Hardcoded secret (akan ditangkap Semgrep)
const SECRET = "password-rahasia-jwt-saya-123"

// MASALAH 2: SQL Injection (akan ditangkap Semgrep)
app.get('/user', (req, res) => {
    const nama = req.query.nama
    const query = `SELECT * FROM users WHERE nama = '${nama}'`
    // Seharusnya: parameterized query
})

// MASALAH 3: Tidak ada rate limiting
app.post('/login', (req, res) => {
    // Bisa dicoba login berkali-kali tanpa batas!
})