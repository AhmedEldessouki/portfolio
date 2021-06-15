import '@testing-library/jest-dom/extend-expect'
import * as firebaseMocks from 'firebase-mock'

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
}
global.localStorage = localStorageMock

// const mockFirebase = jest.mock('./src/components/Utils/firebase', () => {
//   return mockFirebase
// })

// mockFirebase.database().flush()
// data is logged
const mockAuth = new firebaseMocks.MockAuthentication()
const mockFirestoreCloudDB = new firebaseMocks.MockFirestore()
const mockFirebaseSDK = new firebaseMocks.MockFirebaseSdk(
  // use null if your code does not use RTDB
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _path => null,
  // use null if your code does not use AUTHENTICATION
  () => mockAuth,
  // use null if your code does not use FIRESTORE
  () => {
    const firestore = () =>
      jest.fn().mockReturnValue({
        collection: jest.fn().mockReturnValue({
          doc: jest.fn().mockReturnValue({
            add: jest.fn().mockResolvedValue({
              id: 'abc123',
              name: 'xxxx',
            }),
            get: jest.fn().mockResolvedValue({
              id: 'abc123',
              name: 'xxxx',
            }),
            set: jest.fn().mockResolvedValue({
              uid: 'abc123',
            }),
          }),
        }),
      })
    return firestore
  },
  // use null if your code does not use STORAGE
  () => null,
  // use null if your code does not use MESSAGING
  () => null,
)
jest.mock('./Utils/firebase', () =>
  jest.fn().mockImplementation(() => ({
    firebaseApp: mockFirebaseSDK,
    auth: mockAuth,
    db: mockFirestoreCloudDB,
  })),
)
