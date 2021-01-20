import {useQuery} from 'react-query'
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
      seconds: 1599235638,
      nanoseconds: 137000000,
    },
  },
]
// interface useClientFetchProps {
//   collection: string
//   onSuccess: ()=>void
//   options: any
// }

const useClientFetch = ({
  collection = '',
  onSuccess = () => {},
  ...options
}) => {
  const {data} = useQuery({
    queryKey: collection,
    queryFn: async () =>
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
    config: {
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      onError: err => Promise.reject(err),
      ...options,
    },
  })

  return data ?? placeholderData
}

export {useClientFetch}
