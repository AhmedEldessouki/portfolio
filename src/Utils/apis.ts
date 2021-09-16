/* eslint-disable @typescript-eslint/no-explicit-any */
import {useQuery} from 'react-query'
import {toast} from 'react-toastify'

import type {
  ErrorType,
  Message,
  ProjectInterface,
  CollectionTypes,
  Tag,
} from '../../types/interfaces'
import {
  db,
  getDocs,
  doc,
  collection,
  getDoc,
  updateDoc,
  addDoc,
  deleteDoc,
} from './firebase'

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
  collectionName: CollectionTypes,
): ProjectInterface | Message | Tag | unknown {
  const {data} = useQuery(
    collectionName,
    async () =>
      getDocs(collection(db, collectionName))
        .then(
          (querySnapshot: {docs: any[]}) => {
            const dataRes = querySnapshot.docs.map(
              (dok: {data: () => any; id: any}) => ({
                ...dok.data(),
                id: dok.id,
              }),
            )
            return dataRes
          },
          (err: ErrorType) => toast.error(`Fetch Failed${err?.message}`),
        )
        .catch((err: ErrorType) => {
          toast.error(`Fetch Failed${err?.message}`)
        }),
    {
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    },
  )

  return data ?? placeholderData
}

function handleUpdate<T>(collectionName: CollectionTypes) {
  console.log(` update`, collectionName)
  return async (data: T | any): Promise<void> => {
    console.log(` update`, data)
    await updateDoc(doc(db, collectionName, data.id), {
      ...data,
      updatedOn: new Date(),
    })
      .then(() => {
        console.log(` done`)
        toast.success(`Project "${data.name}" Updated`)
      })
      .catch((err: ErrorType) => {
        console.log(` failed`, err)
        toast.error(`Project Didn't Update ${err?.message}`)
      })
  }
}

function handleDelete<T>(collectionName: CollectionTypes) {
  return async (data: T | any): Promise<void> =>
    deleteDoc(doc(db, collectionName, data.id))
      .then(() => {
        toast.success(`data "${data.name}" deleted`)
      })
      .catch((err: ErrorType) => {
        toast.error(`Project Deletion Failed ${err?.message}`)
      })
}

function handleCreate<T>(collectionName: CollectionTypes) {
  return async (
    data: T | any,
  ): Promise<{isResolved: boolean; error: ErrorType}> => {
    let isResolved = false
    let error: ErrorType
    await addDoc(collection(db, collectionName), {
      ...data,
      date: new Date(),
    })
      .then(() => {
        toast.success(`Project "${data.name}" Created`)
        isResolved = true
      })
      .catch((err: ErrorType) => {
        toast.error(`Project Creation Failed ${err?.message}`)
        error = err as ErrorType
      })
    return {isResolved, error}
  }
}

const createNewProject =
  handleCreate<Omit<ProjectInterface, 'date' | 'id'>>('projects')
const updateProject = handleUpdate<Partial<ProjectInterface>>('projects')
const deleteProject = handleDelete<Partial<ProjectInterface>>('projects')

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
