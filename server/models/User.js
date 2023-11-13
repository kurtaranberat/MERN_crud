const express = require('express');

const mongoose = require('mongoose');

// MongoDB şeması oluştur
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

// Model oluştur
const UserModel  = mongoose.model('users', UserSchema);
 
module.exports = UserModel;