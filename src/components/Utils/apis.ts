/* eslint-disable @typescript-eslint/no-redeclare */
import {useQuery} from 'react-query'
import {db} from './firebase'
import {toast} from 'react-toastify'

import type {Tag} from '../Tags/tagsTypes'
import type {ErrorType, Message, Project, CollectionTypes} from './interfaces'

const placeholderData = [
  {
    email: 'XXXXX@XXXX.com',
    id: 'xXXXXXXXXXXXXXx',
    phoneNumber: 'XXXXXXXXX',
    description: 'XXXXXXXXXXXXXXXXXXXX',
    name: 'XXXXXXX',
    link: 'https://www.xxxxxxxxxxx.co',
    url: 'https://www.xxxxxxxxxxx.co',
    projectLogo: [],
    date: {
      seconds: 1599235638,
      nanoseconds: 137000000,
    },
  },
]

const useClientFetch = (
  collection: CollectionTypes,
): Project | Message | Tag | unknown => {
  const {data} = useQuery(
    collection,
    async () =>
      await db
        .collection(collection)
        .get()
        .then(
          querySnapshot => {
            const data = querySnapshot.docs.map(doc => {
              return {...doc.data(), id: doc.id}
            })
            return data
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
    await db
      .collection(collection)
      .doc(`${data.id}`)
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
    await db
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
    let isResolved: boolean = false
    let error: ErrorType = undefined
    await db
      .collection(collection)
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
        error = err.message
      })
    return {isResolved, error}
  }
}

const createNewProject = handleCreate<Omit<Project, 'date' | 'id'>>('projects')
const updateProject = handleUpdate<Partial<Project>>('projects')
const deleteProject = handleDelete<Partial<Project>>('projects')

const createNewMessage = handleCreate<Omit<Message, 'date' | 'id'>>(
  'contactedMe',
)
const updateMessage = handleUpdate<Partial<Message>>('contactedMe')
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
  updateMessage,
  deleteMessage,
  createNewTag,
  updateTag,
  deleteTag,
}
