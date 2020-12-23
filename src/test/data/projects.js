import projectsData from './projects-data.json'

let projects = [...projectsData]

async function create(project) {
  projects.push(project)
  return project
}

async function update(project) {
  const i = projects.findIndex(proj => proj.id === project.id)
  projects.splice(i, 1, project)
  return project
}

async function remove(project) {
  const i = projects.findIndex(proj => proj.name === project.name)
  delete projects[i]
}

export {create, update, remove, projects}
