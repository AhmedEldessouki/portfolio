import { rest } from 'msw'
import * as projectsDB from '../data/projects'
import * as tagsDB from '../data/tags'
import * as messagesDB from '../data/messages'
import * as usersDB from '../data/user'

let sleep
if (process.env.CI) {
  sleep = () => Promise.resolve()
} else if (process.env.NODE_ENV === 'test') {
  sleep = () => Promise.resolve()
} else {
  sleep = (
    t = Math.random() * ls('__bookshelf_variable_request_time__', 400) +
      ls('__bookshelf_min_request_time__', 400),
  ) => new Promise(resolve => setTimeout(resolve, t))
}
function ls(key, defaultVal) {
  const lsVal = window.localStorage.getItem(key)
  let val
  if (lsVal) {
    val = Number(lsVal)
  }
  return Number.isFinite(val) ? val : defaultVal
}

const apiUrl = process.env.REACT_APP_API_URL

const handlers = [
  rest.get('/login', async (req, res, ctx) => {
    const { username, password } = req.body
    const user = await usersDB.authenticate({ username, password })
    return res(ctx.json({ user }))
  }),

  rest.post(`/signup`, async (req, res, ctx) => {
    const { username, password } = req.body
    const userFields = { username, password }
    await usersDB.create(userFields)
    let user
    try {
      user = await usersDB.authenticate(userFields)
    } catch (error) {
      return res(
        ctx.status(400),
        ctx.json({ status: 400, message: error.message }),
      )
    }
    return res(ctx.json({ user }))
  }),

  rest.get(`${apiUrl}/projects`, async (req, res, ctx) => {
    if (!req.url.searchParams.has('query')) {
      return ctx.fetch(req)
    }

    let projectsData = []
    projectsData = await projectsDB.projects.slice(0, 10)

    return res(ctx.json({ projects: projectsData }))
  }),

  rest.get(`${apiUrl}/messages`, async (req, res, ctx) => {
    if (!req.url.searchParams.has('query')) {
      return ctx.fetch(req)
    }

    let messagesData = []
    messagesData = await messagesDB.messages.slice(0, 10)

    return res(ctx.json({ messages: messagesData }))
  }),

  rest.get(`${apiUrl}/tags`, async (req, res, ctx) => {
    if (!req.url.searchParams.has('query')) {
      return ctx.fetch(req)
    }

    let tagsData = []
    tagsData = await tagsDB.tags.slice(0, 10)

    return res(ctx.json({ tags: tagsData }))
  }),

  rest.delete(`/`, async (req, res, ctx) => {
    const { id } = req.params
    await projectsDB.remove(id)
    return res(ctx.json({ success: true }))
  }),

  rest.delete(`/dashboard`, async (req, res, ctx) => {
    const { id } = req.params
    await projectsDB.remove(id)
    return res(ctx.json({ success: true }))
  }),

  rest.delete(`/dashboard`, async (req, res, ctx) => {
    const { id } = req.params
    await messagesDB.remove(id)
    return res(ctx.json({ success: true }))
  }),

  rest.delete(`/tags`, async (req, res, ctx) => {
    const { id } = req.params
    await tagsDB.remove(id)
    return res(ctx.json({ success: true }))
  }),
].map(handler => {
  return {
    ...handler,
    async resolver(req, res, ctx) {
      try {
        const result = await handler.resolver(req, res, ctx)
        return result
      } catch (error) {
        const status = error.status || 500
        return res(
          ctx.status(status),
          ctx.json({ status, message: error.message || 'Unknown Error' }),
        )
      } finally {
        await sleep()
      }
    },
  }
})


export { handlers }
