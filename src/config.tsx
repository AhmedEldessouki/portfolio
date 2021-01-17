// const dotenv = require('dotenv')
// dotenv.config()
// const result = dotenv.config()
// if (result.error) {
//   throw result.error
// }
// const {parsed: envs} = result
// console.log(envs)
// require('dotenv').config({debug: process.env.DEBUG})
export const cloudinaryPRESET = process.env.CLOUDINARY_UPLOAD_PRESET
export const cloudinaryURL = process.env.CLOUDINARY_UPLOAD_URL
export const cloudinaryApiKey = process.env.REACT_APP_CLOUDINARY_API_KEY
export const apiKey = process.env.REACT_APP_FIREBASE_API_KEY
export const databaseURL = process.env.REACT_APP_DB_URL
export const storageBucket = process.env.REACT_APP_STORAGE_BUCKET
export const storage = process.env.REACT_APP_STORAGE
export const messagingSenderId = process.env.REACT_APP_MESSAGING_SENDER_ID
