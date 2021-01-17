import type {Project} from '../../components/Utils/interfaces'
import {projectsData} from './projects-data'

let projects: Array<Partial<Project>> = [...projectsData]

async function create(project: Project) {
  projects.push(project)
  return project
}

async function update(project: Project) {
  const i = projects.findIndex(proj => proj.id === project.id)
  projects.splice(i, 1, project)
  return project
}

async function remove(projectId: Pick<Project, 'id'>) {
  const i = projects.findIndex(project => project.id === projectId)
  delete projects[i]
}
async function read(projectId: Pick<Project, 'id'>) {
  return projects.find(project => project.id === projectId)
}
export {create, update, remove, projects, read}
