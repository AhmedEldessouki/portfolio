/* eslint-disable @typescript-eslint/no-explicit-any */
import {useQuery} from 'react-query'
import {toast} from 'react-toastify'

import type {
  ErrorType,
  Message,
  Project,
  CollectionTypes,
  Tag,
} from '../../types/interfaces'
import {db} from './firebase'

const placeholderData = [
  {
    email: 'XXXXX@XXXX.com',
    id: 'xXXXXXXXXXXXXXx',
    phoneNumber: 'XXXXXXXXX',
    description: 'XXXXXXXXXXXXXXXXXXXX',
    name: 'XXXXXXX',
    link: '',
    url: '',
    projectLogo: [],
    date: {
      seconds: 0,
      nanoseconds: 0,
    },
  },
]

function useClientFetch(
  collection: CollectionTypes,
): Project | Message | Tag | unknown {
  const {data} = useQuery(
    collection,
    async () =>
      db
        .collection(collection)
        .get()
        .then(
          querySnapshot => {
            const dataRes = querySnapshot.docs.map(doc => ({
              ...doc.data(),
              id: doc.id,
            }))
            return dataRes
          },
          err => Promise.reject(err),
        )
        .catch(err => {
          Promise.reject(err)
        }),
    {
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    },
  )

  return data ?? placeholderData
}

function handleUpdate<T>(collection: CollectionTypes) {
  return async (data: T | any): Promise<void> =>
    db
      .collection(collection)
      .doc(`${data.id}`)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      .update({
        ...data,
        updatedOn: new Date(),
      })
      .then(() => {
        toast.success(`Project "${data.name}" Updated`)
      })
      .catch(err => {
        toast.error(`Project Didn't Update ${err.message}`)
        throw err.message
      })
}

function handleDelete<T>(collection: CollectionTypes) {
  return async (data: T | any): Promise<void> =>
    db
      .collection(collection)
      .doc(`${data.id}`)
      .delete()
      .then(() => {
        toast.success(`data "${data.name}" deleted`)
      })
      .catch(err => {
        toast.error(`Project Deletion Failed ${err.message}`)
        throw err
      })
}

function handleCreate<T>(collection: CollectionTypes) {
  return async (
    data: T | any,
  ): Promise<{isResolved: boolean; error: ErrorType}> => {
    let isResolved = false
    let error: ErrorType
    await db
      .collection(collection)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      .add({
        ...data,
        date: new Date(),
      })
      .then(() => {
        toast.success(`Project "${data.name}" Created`)
        isResolved = true
      })
      .catch(err => {
        toast.error(`Project Creation Failed ${err.message}`)
        error = err as ErrorType
      })
    return {isResolved, error}
  }
}

const createNewProject = handleCreate<Omit<Project, 'date' | 'id'>>('projects')
const updateProject = handleUpdate<Partial<Project>>('projects')
const deleteProject = handleDelete<Partial<Project>>('projects')

const createNewMessage =
  handleCreate<Omit<Message, 'date' | 'id'>>('contactedMe')
const deleteMessage = handleDelete<Partial<Message>>('contactedMe')

const createNewTag = handleCreate<Omit<Tag, 'date' | 'id'>>('tags')
const updateTag = handleUpdate<Partial<Tag>>('tags')
const deleteTag = handleDelete<Partial<Tag>>('tags')

export {
  useClientFetch,
  createNewProject,
  updateProject,
  deleteProject,
  createNewMessage,
  deleteMessage,
  createNewTag,
  updateTag,
  deleteTag,
}
