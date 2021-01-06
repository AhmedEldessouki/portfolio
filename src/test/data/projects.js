import {projectsData} from './projects-data'

let projects = [...projectsData]

async function create(project) {
  projects.push(project)
  return project
}

async function update(project) {
  const i = projects.findIndex(proj => proj.uid === project.id)
  projects.splice(i, 1, project)
  return project
}

async function remove(projectId) {
  const i = projects.findIndex(project => project.uid === projectId)
  delete projects[i]
}
async function read(projectId) {
  return projects.find(project => project.uid === projectId)
}
export {create, update, remove, projects, read}
