import { Schema, model } from 'mongoose'

const userSchema = new Schema({
  user: {type: String, required: true, trim: true},
  password: {type: String, required: true},
  cuenta: [{
    name_crypto: {type: String, default: "usd"},
    saldo: {type: Number, default: 1000}
  }]
})

export default model('user', userSchema)