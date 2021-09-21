import type {ProjectInterface} from '../../../types/interfaces'
import projectsData from './projects-data'

const projects: Array<ProjectInterface> = [...projectsData]

function create(project: ProjectInterface) {
  projects.push(project)
  return project
}

function update(project: ProjectInterface) {
  const i = projects.findIndex(proj => proj.id === project.id)
  projects.splice(i, 1, project)
  return project
}

function remove(projectId: Pick<ProjectInterface, 'id'>) {
  const i = projects.findIndex(project => project.id === projectId)
  projects.splice(i, 1)
}
function read(projectId: Pick<ProjectInterface, 'id'>) {
  return projects.find(project => project.id === projectId)
}
export {create, update, remove, projects, read}
