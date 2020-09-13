/**@jsx jsx */
import {jsx, css} from '@emotion/core'
import {useState} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import Dropzone from 'react-dropzone'
import {withFormik, Form, Field} from 'formik'
import * as Yup from 'yup'
import {toast} from 'react-toastify'
import {Image} from 'cloudinary-react'

import {
  createProject,
  updateProject,
} from '../../../Store/Actions/ProjectsActions'
import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_UPLOAD_PRESET,
  CLOUDINARY_UPLOAD_URL,
} from '../../../Config/CloudInary'
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
  warning,
} from '../../../Styles'

import Layout from '../../Layout'

const INIT_PROPS = {
  projectName: '',
  projectLink: '',
  description: '',
}

function MyCreateProject({
  errors,
  touched,
  isSubmitting,
  auth,
  project,
  handleChange,
  projectName,
  description,
  projectLink,
  setValues,
  values,
}) {
  const [imageDropArray, setImageDropArray] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  let urls = []
  function handleDrop(acceptedFiles, rejectedFiles) {
    setIsLoading(true)

    if (acceptedFiles && acceptedFiles.length === 1) {
      if (acceptedFiles[0].size < 8000000) {
        // TODO: remove it from here and execute onSubmit
        // TODO: make Tag = projectName
        // TODO: fix urls array (1 then 3 = 3)
        let formData
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
            setImageDropArray([...imageDropArray, ...urls])
            setValues({
              ...values,
              projectLogos: urls,
            })
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
      const uploaders = acceptedFiles.map((file, i) => {
        if (acceptedFiles[i].size < 8000000) {
          // TODO: remove it from here and execute onSubmit
          // TODO: make Tag = projectName
          let formData
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
              setImageDropArray([...imageDropArray, ...urls])

              setValues({
                ...values,
                projectLogos: urls,
              })

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
  return (
    <Layout>
      {!auth.uid ? (
        <Redirect to="/signin" />
      ) : (
        <div className="CreateProject">
          <h1>{project ? `Update` : `Create`} Project</h1>
          {isLoading || isSubmitting ? <div css={spinner}></div> : null}
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
              {imageDropArray.map((link, ky) => (
                <Image alt="" crop={'lpad'} width={200} key={ky} src={link} />
              ))}
            </div>
            <Form id="createProject" css={signWrapper}>
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
                <Field
                  type="text"
                  css={signWrapperInput}
                  placeholder={project ? project.projectName : 'Project Name'}
                  value={projectName}
                  name="projectName"
                  id="projectName"
                />
              </label>
              {errors.projectName && touched.projectName ? (
                <span css={warning}>{errors.projectName}</span>
              ) : null}
              <label htmlFor="projectLink" css={labelWrapper}>
                <Field
                  type="url"
                  css={signWrapperInput}
                  value={projectLink}
                  placeholder={project ? project.projectLink : 'Project Link'}
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
                    `,
                  ]}
                  placeholder={
                    project ? project.description : 'Project Description'
                  }
                  name="description"
                  value={description}
                  onChange={handleChange}
                  id="description"
                  required
                />
              </label>
              <button type="submit" css={btnStyle} disabled={isSubmitting}>
                {project ? 'Edit' : 'Create'} Project
              </button>
            </Form>
          </div>
        </div>
      )}
    </Layout>
  )
}
const ContactMeSchema = withFormik({
  validationSchema: Yup.object().shape({
    projectName: Yup.string(),
    // .required('Required'),
    description: Yup.string(),
  }),
  enableReinitialize: true,
  mapPropsToValues: props => ({
    ...props,
  }),
  mapValuesToPayload: x => x,
  handleSubmit: (values, bag) => {
    setTimeout(() => {
      values.project
        ? values.updateProject(values)
        : values.createProject(values)

      bag.setSubmitting(false)
      values.history.push('/dashboard')
    }, 2000)
  },
  displayName: 'createProject',
})
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id
  const projects = state.firestore.data.projects
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
const CreateProject = ContactMeSchema(MyCreateProject)
export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
