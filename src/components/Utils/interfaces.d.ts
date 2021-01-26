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
  date: Date | any
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
type Status = 'idle' | 'pending' | 'resolved' | 'rejected'
export {NewUser, Project, Message, Status}
