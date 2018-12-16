const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/api/form', (req, res) => {
  // console.log('this is the sent message: ', req.body)
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
  <h3> COntact Details ${req.body}</h3>
  <ul>
    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
    <li>Phone Number: ${req.body.phoneNumber}</li>
  </ul>
  <h3>Message</h3>
  <p>${req.body.description}</p>
  `

    let transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: 'cy66udr3gbl537os@ethereal.email',
        pass: '1H81RkHCprms7ECrKX'
      }
    })

    let mailOptions = {
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: 'cy66udr3gbl537os@ethereal.email', // list of receivers
      replyTo: 'cy66udr3gbl537os@ethereal.email',
      subject: 'new message from my website ✔', // Subject line
      text: req.body.description, // plain text body
      html: htmlEmail // html body
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err)
      } else {
        console.log('email sent: %s', info.description)
        console.log('email url: %s', nodemailer.getTestMessageUrl(info))

      }
    })
  })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`)
})