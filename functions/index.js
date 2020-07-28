const functions = require('firebase-functions')
const admin = require('firebase-admin')
let firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG)

admin.initializeApp(firebaseConfig)

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const createNotification = (notification) => {
  return admin
    .firestore()
    .collection('notifications')
    .add(notification)
    .then((doc) => console.log('notification added', doc))
}

exports.projectCreated = functions.firestore
  .document('projects/{projectId}')
  .onCreate((doc) => {
    const project = doc.data()
    const notification = {
      content: 'Added a new project',
      user: `${project.authorFirstName} ${project.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp(),
    }

    return createNotification(notification)
  })

exports.userJoined = functions.auth.user().onCreate((user) => {
  return admin
    .firestore()
    .collection('users')
    .doc(user.uid)
    .get()
    .then((doc) => {
      const newUser = doc.data()
      const notification = {
        content: 'Joined The App',
        user: `${newUser.firstName} ${newUser.lastName}`,
        time: admin.firestore.FieldValue.serverTimestamp(),
      }
      return createNotification(notification)
    })
})

exports.messageReceived = functions.firestore
  .document('contactedMe/{contactId}')
  .onCreate((doc) => {
    const contact = doc.data()
    const notification = {
      content: 'message received',
      user: `${contact.contactName}`,
      time: admin.firestore.FieldValue.serverTimestamp(),
    }

    return createNotification(notification)
  })
