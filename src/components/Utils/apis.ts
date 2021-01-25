import {useQuery} from 'react-query'
import {db} from './firebase'

import type {Tag} from '../Tags/tagsTypes'
import type {Message, Project} from './interfaces'

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
  collection: string,
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

export {useClientFetch}
