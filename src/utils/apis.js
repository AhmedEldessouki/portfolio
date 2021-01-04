import {useQuery} from 'react-query'
import {db} from '../components/Utils/firebase'

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
      seconds: 1599235638,
      nanoseconds: 137000000,
    },
  },
]

function useClientFetch({collection, onSuccess, ...options} = {}) {
  const {data: fetchedData, error} = useQuery({
    queryKey: collection,
    queryFn: async () =>
      await db
        .collection(collection)
        .get()
        .then(querySnapshot => {
          const data = querySnapshot.docs.map(doc => {
            return {...doc.data(), id: doc.id}
          })
          return data
        })
        .catch(err => {
          throw Error(err)
        }),
    config: {
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      ...options,
    },
  })

  if (error) throw Error(error)

  return fetchedData ?? placeholderData
}

export {useClientFetch}
