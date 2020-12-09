// const dotenv = require('dotenv')
// dotenv.config()
// const result = dotenv.config()
// if (result.error) {
//   throw result.error
// }
// const {parsed: envs} = result
// console.log(envs)
// require('dotenv').config({debug: process.env.DEBUG})
module.exports = {
  cloudinaryPRESET: process.env.CLOUDINARY_UPLOAD_PRESET,
  cloudinaryURL: process.env.CLOUDINARY_UPLOAD_URL,
  cloudinaryApiKey: process.env.REACT_APP_CLOUDINARY_API_KEY,
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  databaseURL: process.env.REACT_APP_DB_URL,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  storage: process.env.REACT_APP_STORAGE,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
}
