const express = require('express');
const router = express.Router();
const crypto = require('crypto');

const { get, run } = require('../db');

function sha256(text) {
  return crypto.createHash('sha256').update(String(text)).digest('hex');
}

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await get(`SELECT * FROM users WHERE username = ?`, [username]);

    if (user && user.passwordHash === sha256(password)) {
      return res.json({
        success: true,
        user: { id: user.id, username: user.username, role: user.role, name: user.name }
      });
    }

    res.status(401).json({ success: false, message: 'بيانات دخول خاطئة' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
