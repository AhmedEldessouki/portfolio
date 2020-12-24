import {useQuery} from 'react-query'
import {db} from '../components/Utils/firebase'

const placeholderData = [
  {
    email: 'XXXXX@XXXX.com',
    id: 'xXXXXXXXXXXXXXx',
    phoneNumber: 'XXXXXXXXX',
    description: 'XXXXXXXXXXXXXXXXXXXX',
    name: 'XXXXXXX',
    link: 'https://XXXX-XXX.XXX.XXX/',
    url: 'https://XXXX-XXX.XXX.XXX/XXX.png',
    projectLogo: [],
    date: {
      seconds: 1599235638,
      nanoseconds: 137000000,
    },
  },
]

function useClientFetch({collection, onSuccess, ...options} = {}) {
  const {data: fetchedData} = useQuery({
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
        }),
    config: {
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      ...options,
    },
  })

  return fetchedData ?? placeholderData
}

export {useClientFetch}