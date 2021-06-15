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
  tag: Array<string | Tag>
  description: string
  id?: string
  projectType: `Personal` | `Contribution` | ''
  // Data is any because firebase uses linux timestamp
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  date: Date | any
}

interface Message {
  name: string
  email: string
  phoneNumber: string
  description: string
  // Data is any because firebase uses linux timestamp
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  date?: any
  id?: string
}
type Status = 'idle' | 'pending' | 'resolved' | 'rejected'

type ErrorType = {code: string; message: string} | undefined

type CollectionTypes = 'projects' | 'contactedMe' | 'tags'
interface TitleProps {
  name: string
  onClick: () => void
  highlight?: boolean
  testId: string
  csx?: SerializedStyles
}
interface Tag {
  name: string
  url: string
  id?: string
}
export {
  NewUser,
  Project,
  Message,
  Status,
  ErrorType,
  CollectionTypes,
  TitleProps,
  Tag,
}
