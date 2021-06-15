import type {Project} from '../../../types/interfaces'
import projectsData from './projects-data'

const projects: Array<Project> = [...projectsData]

function create(project: Project) {
  projects.push(project)
  return project
}

function update(project: Project) {
  const i = projects.findIndex(proj => proj.id === project.id)
  projects.splice(i, 1, project)
  return project
}

function remove(projectId: Pick<Project, 'id'>) {
  const i = projects.findIndex(project => project.id === projectId)
  projects.splice(i, 1)
}
function read(projectId: Pick<Project, 'id'>) {
  return projects.find(project => project.id === projectId)
}
export {create, update, remove, projects, read}
