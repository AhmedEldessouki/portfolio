interface NewUser {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
}

interface Project {
  name: string
  link: string
  repoLink: string
  projectLogo: Array<string>
  tag: Array<string>
  description: string
  id?: string
  date: Date
}

interface Message {
  name: string
  email: string
  phoneNumber: string
  description: string
  // Data is any because firebase uses linux timestamp
  date?: any
  id?: string
}

export {NewUser, Project, Message}
