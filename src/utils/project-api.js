import {useQuery} from 'react-query'
import {db} from '../components/Utils/firebase'

const placeholderData = [
  {
    id: 'RXKmlQIDg7TFPyNmejMB',
    name: 'XXXXXXX',
    link: 'https://XXXX-XXX.XXX.XXX/',
    description: 'XXXXXXXXXXXXXXXXXXXX',
    projectLogo: [],
    date: {
      seconds: 1599235638,
      nanoseconds: 137000000,
    },
  },
]

function useProjects({onSuccess, ...options} = {}) {
  const {data: projectsData} = useQuery({
    queryKey: 'projects',
    queryFn: async () =>
      await db
        .collection('projects')
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
      suspense: true,
      ...options,
    },
  })

  return projectsData ?? placeholderData
}

export {useProjects}
