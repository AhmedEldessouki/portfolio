/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-shadow */
/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import {useLayoutEffect, useState} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import Dropzone from 'react-dropzone'
import {toast} from 'react-toastify'
import {Image} from 'cloudinary-react'

import Layout from '../../Layout'
import {
  btnStyle,
  colors,
  h1XL,
  labelWrapper,
  mq,
  signWrapper,
  signWrapperInput,
  spinner,
  textArea,
} from '../../../Styles'
import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_UPLOAD_PRESET,
  CLOUDINARY_UPLOAD_URL,
} from '../../../Config/CloudInary'
import {
  createProject,
  updateProject,
} from '../../../Store/Actions/ProjectsActions'

function CreateProject({auth, project, updateProject, createProject, match}) {
  const [projectLogos, setProjectLogos] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [projectName, setProjectName] = useState('')
  const [projectLink, setProjectLink] = useState('')
  const [description, setDescription] = useState('')

  const [projectNameErr, setProjectNameErr] = useState('')
  const [projectLinkErr, setProjectLinkErr] = useState('')
  const [descriptionErr, setDescriptionErr] = useState('')

  const urls = []

  useLayoutEffect(() => {
    if (project) {
      setProjectName(project.projectName)
      setDescription(project.description)
      setProjectLink(project.projectLink)
    }
    return () => {
      setProjectName('')
      setDescription('')
      setProjectLink('')
    }
  }, [project])

  function handleDrop(acceptedFiles, rejectedFiles) {
    setIsLoading(true)

    if (acceptedFiles && acceptedFiles.length === 1) {
      if (acceptedFiles[0].size < 8000000) {
        // TODO: remove it from here and execute onSubmit
        // TODO: make Tag = projectName
        // TODO: fix urls array (1 then 3 = 3)
        let formData
        // eslint-disable-next-line prefer-const
        formData = new FormData()
        formData.append('file', acceptedFiles[0])
        formData.append('tags', `project imaged`)
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)
        formData.append('api_key', CLOUDINARY_API_KEY)

        axios
          .post(CLOUDINARY_UPLOAD_URL, formData, {
            headers: {'X-Requested-With': 'XMLHttpRequest'},
          })
          .then(response => {
            urls.push(response.data.secure_url)
            setProjectLogos([...projectLogos, ...urls])
            setIsLoading(false)

            toast.success(`Upload Successful`)
            return urls
          })
          .catch(err => {
            toast.error('Upload Failed!')
            console.error(err)
          })
      }
    } else if (acceptedFiles && acceptedFiles.length > 1) {
      acceptedFiles.map((file, i) => {
        if (acceptedFiles[i].size < 8000000) {
          // TODO: remove it from here and execute onSubmit
          // TODO: make Tag = projectName
          let formData
          // eslint-disable-next-line prefer-const
          formData = new FormData()
          formData.append('file', file)
          formData.append('tags', `project imaged`)
          formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)
          formData.append('api_key', CLOUDINARY_API_KEY)

          axios
            .post(CLOUDINARY_UPLOAD_URL, formData, {
              headers: {'X-Requested-With': 'XMLHttpRequest'},
            })
            .then(response => {
              urls.push(response.data.secure_url)
              setProjectLogos([...projectLogos, ...urls])
              setIsLoading(false)
              toast.success(`Upload Successful`)
            })
            .catch(err => {
              toast.error('Upload Failed!')
              setIsLoading(false)
              console.error(err)
            })
        }
        return urls
      })
    } else if (rejectedFiles && rejectedFiles.length > 0) {
      setIsLoading(false)
      if (rejectedFiles[0].Size > 8000000) {
        toast.error('This File is too big')
      }
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setIsSubmitting(true)
    if (project) {
      const arr = {
        id: match.params.id,
        projectName,
        projectLink,
        description,
        projectLogos,
      }
      await updateProject(arr)
    } else {
      const arr = {
        id: match.params.id,
        projectName,
        projectLink,
        description,
        projectLogos,
      }
      await createProject(arr)
    }

    setIsSubmitting(false)
  }

  return (
    <Layout>
      {!auth.uid ? (
        <Redirect to="/signin" />
      ) : (
        <div className="CreateProject">
          <h1>{project ? `Edit` : `Create`} Project</h1>
          <div
            css={css`
              display: grid;
              grid-template: 1fr/1fr 2fr;
              width: 100%;
              place-items: center;
              ${mq.s} {
                grid-template: none;
              }
            `}
          >
            <div>
              {projectLogos.map((link, ky) => (
                <Image alt="" crop="lpad" width={200} key={link} src={link} />
              ))}
            </div>
            <form id="createProject" css={signWrapper} onSubmit={handleSubmit}>
              <Dropzone
                onDrop={handleDrop}
                accept="image/*"
                multiple
                maxSize={8000000}
              >
                {({getRootProps, getInputProps}) => (
                  <label
                    htmlFor="dropZone"
                    css={[
                      labelWrapper,
                      css`
                        border: 10px dashed ${colors.darkBlue};
                        width: 87%;
                        height: 200px;
                        text-align: center;
                        cursor: pointer;
                        margin-bottom: 20px;
                        align-self: flex-end;
                      `,
                    ]}
                    {...getRootProps()}
                  >
                    <span
                      css={[
                        h1XL,
                        css`
                          color: ${colors.aliceLightBlue};
                        `,
                      ]}
                    >
                      Drop Image(s)
                    </span>
                    <input
                      id="dropZone"
                      type="file"
                      css={[
                        textArea,
                        css`
                          width: initial;
                          margin: 0;
                        `,
                      ]}
                      {...getInputProps()}
                    />
                  </label>
                )}
              </Dropzone>
              <label htmlFor="projectName" css={labelWrapper}>
                <input
                  onChange={e => setProjectName(e.target.value)}
                  onBlur={e =>
                    e.target.validity.valid
                      ? setProjectNameErr('inherit')
                      : setProjectNameErr(colors.burgundyRed)
                  }
                  css={[
                    signWrapperInput,
                    css`
                      border-color: ${projectNameErr};
                    `,
                  ]}
                  id="projectName"
                  name="projectName"
                  value={projectName}
                  placeholder="Name"
                  required
                  minLength={3}
                  maxLength={15}
                />
              </label>
              <label htmlFor="projectLink" css={labelWrapper}>
                <input
                  type="url"
                  css={[
                    signWrapperInput,
                    css`
                      border-color: ${projectLinkErr};
                    `,
                  ]}
                  required
                  value={projectLink}
                  placeholder="Project Link"
                  onChange={e => setProjectLink(e.target.value)}
                  onBlur={e =>
                    e.target.validity.valid
                      ? setProjectLinkErr('inherit')
                      : setProjectLinkErr(colors.burgundyRed)
                  }
                  name="projectLink"
                  id="projectLink"
                />
              </label>
              <label htmlFor="description" css={labelWrapper}>
                <textarea
                  css={[
                    textArea,
                    css`
                      margin: 0;
                      border-color: ${descriptionErr};
                    `,
                  ]}
                  placeholder="Project Description"
                  name="description"
                  value={description}
                  minLength={10}
                  onChange={e => setDescription(e.target.value)}
                  onBlur={e =>
                    e.target.validity.valid
                      ? setDescriptionErr('inherit')
                      : setDescriptionErr(colors.burgundyRed)
                  }
                  id="description"
                  required
                />
              </label>
              {isLoading || isSubmitting ? (
                <div css={spinner} />
              ) : (
                <button
                  type="submit"
                  css={btnStyle}
                  onSubmit={handleSubmit}
                  disabled={isSubmitting}
                >
                  {project ? 'Edit' : 'Create'} Project
                </button>
              )}
            </form>
          </div>
        </div>
      )}
    </Layout>
  )
}

const mapStateToProps = (state, ownProps) => {
  const {id} = ownProps.match.params
  const {projects} = state.firestore.data
  const project = projects ? projects[id] : null
  return {
    auth: state.firebase.auth,
    project,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project)),
    updateProject: project => dispatch(updateProject(project)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
