/* eslint-disable array-callback-return */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  createProject,
  updateProject,
} from '../../../Store/Actions/ProjectsActions'
import { Redirect } from 'react-router-dom'
import './Styles/CreateProject.scss'
import AuthNavlinks from '../../Navigation/AuthNavlinks'
import { BarLoader } from 'react-spinners'
import Dropzone from 'react-dropzone'
import axios from 'axios'
import { withFormik, Form, Field } from 'formik'
import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_UPLOAD_PRESET,
  CLOUDINARY_UPLOAD_URL,
} from '../../../Config/CloudInary'
import * as Yup from 'yup'
import MyFooter from '../MyFooter/MyFooter'
import { toast } from 'react-toastify'

const INIT_PROPS = {
  projectName: '',
  projectLink: '',
  description: '',
}

class MyCreateProject extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imSrc: null,
      imageDropArray: [],
      projectLogos: [],
      isLoading: false,
      ...INIT_PROPS,
    }
    this.handleDrop = this.handleDrop.bind(this)
  }
  handleDrop = (acceptedFiles, rejectedFiles) => {
    this.setState({
      isLoading: true,
    })
    if (acceptedFiles && acceptedFiles.length > 0) {
      if (acceptedFiles[0].size < 8000000) {
        const uploaders = acceptedFiles.map((file) => {
          let myarrayx = []
          let formData
          // Initial FormData
          formData = new FormData()
          formData.append('file', file)
          formData.append('tags', `codeinfuse, small, gist`)
          formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)
          formData.append('api_key', CLOUDINARY_API_KEY) // Replace API key with your own Cloudinary key
          formData.append('timestamp', Date.now() / 1000 || 0) // Replace API key with your own Cloudinary key
          return axios
            .post(CLOUDINARY_UPLOAD_URL, formData, {
              headers: { 'X-Requested-With': 'XMLHttpRequest' },
            })
            .then((response) => {
              toast.success(`Images Upload Was Successful`)
              const data = response.data
              this.state.imageDropArray.push(data)
              this.state.imageDropArray.map((sup) => {
                myarrayx.push(sup.secure_url)
                this.props.setValues({
                  ...this.props.values,
                  projectLogos: myarrayx,
                })
              })
            })
            .catch((err) => {
              toast.error("Sorry, Images Didn't Upload!")
              console.error(err)
            })
        })
        axios
          .all(uploaders)
          .then(() => {
            this.setState({
              isLoading: false,
            })
            this.props.setValues({
              ...this.props.values,
            })
          })
          .catch((err) => {
            console.error(err)
          })
      }
    }
    if (rejectedFiles && rejectedFiles.length > 0) {
      if (rejectedFiles[0].Size > 8000000) {
        alert('This File is too big')
      }
    }
  }

  render() {
    const { imageDropArray, isLoading } = this.state
    const {
      errors,
      touched,
      isSubmitting,
      auth,
      project,
      handleChange,
      description,
      projectLink,
      projectName,
    } = this.props
    let loader = isLoading || isSubmitting
    return (
      <div>
        {!auth.uid ? (
          <Redirect to="/signin" />
        ) : (
          <div className="CreateProject">
            <AuthNavlinks title={'Create Project'} />
            <h1>Create New Project</h1>
            <div className="wrapper-container">
              {imageDropArray.length !== 0 ? (
                <div className="maping">
                  {imageDropArray.map((link, ky) => {
                    return <img alt="" key={ky} src={link.url} />
                  })}
                </div>
              ) : null}
              <Form id="createProject">
                <Dropzone
                  onDrop={this.handleDrop}
                  accept="image/*"
                  multiple
                  maxSize={8000000}
                >
                  {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps()} className="drop-zone-styles">
                      <span>drop image(s)</span>
                      <input type="file" {...getInputProps()} />
                    </div>
                  )}
                </Dropzone>
                <div className="field-container">
                  <Field
                    type="text"
                    value={projectName}
                    placeholder={project ? project.projectName : 'Project Name'}
                    name="projectName"
                  />
                </div>
                {errors.projectName && touched.projectName ? (
                  <p className="error-message">{errors.projectName}</p>
                ) : null}
                <div className="field-container">
                  <Field
                    type="url"
                    value={projectLink}
                    placeholder={project ? project.projectLink : 'Project Link'}
                    name="projectLink"
                  />
                </div>
                <textarea
                  placeholder={
                    project ? project.description : 'Project Description'
                  }
                  name="description"
                  value={description}
                  onChange={handleChange}
                  // required
                />
                <button type="submit" disabled={isSubmitting}>
                  {project ? 'Edit' : 'Create'} Project
                </button>
              </Form>
            </div>
            {loader ? (
              <div className="my-spinner-container">
                <BarLoader
                  className="my-spinner"
                  sizeUnit={'px'}
                  size={150}
                  color={'#d4dff6'}
                  loading={loader}
                />
                Loading...
              </div>
            ) : null}
            <MyFooter />
          </div>
        )}
      </div>
    )
  }
}
const ContactMeSchema = withFormik({
  validationSchema: Yup.object().shape({
    projectName: Yup.string(),
    // .required('Required'),
    description: Yup.string(),
  }),
  enableReinitialize: true,
  mapPropsToValues: (props) => ({
    ...props,
  }),
  mapValuesToPayload: (x) => x,
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
const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project)),
    updateProject: (project) => dispatch(updateProject(project)),
  }
}
const CreateProject = ContactMeSchema(MyCreateProject)
export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
