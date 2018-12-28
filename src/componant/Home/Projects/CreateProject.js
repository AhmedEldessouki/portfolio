import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createProject } from '../../../Store/Actions/ProjectsActions'
import {Redirect} from "react-router-dom";
import './Styles/CreateProject.scss'
import AuthNavlinks from '../../Navigation/AuthNavlinks'
import {BarLoader} from "react-spinners";
import Dropzone from "react-dropzone";
import classNames from 'classnames'
import axios from 'axios';


import { withFormik, Form, Field } from 'formik'
import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_UPLOAD_PRESET,
  CLOUDINARY_UPLOAD_URL
} from "../../../Config/CloudInary";
import * as Yup from "yup";

// const dropzoneStyle = {};
class MyCreateProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imSrc: null,
      imageDropArray: []
    };
  }
  handleUploadImages = images => {
    // uploads is an array that would hold all the post methods for each image to be uploaded, then we'd use axios.all()
    const uploads = images.map(image => {
      // our formdata
      const formData = new FormData();
      formData.append("file", image);
      formData.append("tags", '{TAGS}'); // Add tags for the images - {Array}
      formData.append("upload_preset", "{jf4ou0bk}"); // Replace the preset name with your own
      formData.append("api_key", "{579628475278557}"); // Replace API key with your own Cloudinary API key
      formData.append("timestamp", (Date.now() / 1000) | 0);

      // Replace cloudinary upload URL with yours
      return axios.post(
        "https://api.cloudinary.com/v1_1/ahmedeldessouki}/image/upload",
        formData,
        { headers: { "X-Requested-With": "XMLHttpRequest" }})
      .then(response => console.log(response.data))
    });

    // We would use axios `.all()` method to perform concurrent image upload to cloudinary.
    axios.all(uploads).then(() => {
      // ... do anything after successful upload. You can setState() or save the data
      console.log('Images have all being uploaded')
    });
  }

  render() {
    const {imgSrc} = this.state
    const {errors, touched, isSubmitting, handleChange,auth} = this.props
    return (
      <div>
        {!auth.uid ? <Redirect to='/signin'/> :
          <div className="CreateProject">
            <header>
              <AuthNavlinks/>
            </header>
            <h1>Create New Project</h1>
            <Form id="createProject">
              {imgSrc ? <img src={imgSrc}/> : '' }
              <Dropzone onDrop={this.handleUploadImages} accept="image/*" multiple maxSize={8000000}>
                {({ getRootProps, getInputProps }) => (
                  <div
                    {...getRootProps()}
                    className={classNames}
                  >
                    <span>drop image(s)</span>
                    <input {...getInputProps()} />
                  </div>
                )}
              </Dropzone>
              {/*<ProfilePage*/}
                {/*hidden*/}
                {/*accept="image/*"*/}
                {/*storageRef={this.props.firestore.collection('projects').add('img')}*/}
                {/*onUploadStart={this.handleUploadStart}*/}
                {/*onUploadError={this.handleUploadError}*/}
                {/*onUploadSuccess={this.handleUploadSuccess}*/}
                {/*onProgress={this.handleProgress}/>*/}

              <div className="field-container">
                <Field type="text"  placeholder="Project Name" name="projectName" />
              </div>
              {errors.projectName && touched.projectName ? (
                <p className="error-message">{errors.projectName}</p>
              ) : null}
              <textarea  placeholder="Project Description" name="description" onChange={handleChange} required/>
              <button type="submit" disabled={isSubmitting}>CreateProject</button>
            </Form>
            {isSubmitting ?  <div className="my-spinner-container">
              <BarLoader
                className="my-spinner"
                sizeUnit={"px"}
                size={150}
                color={'#d4dff6'}
                loading={isSubmitting}
              />Loading...</div> : null}
          </div>
        }
      </div>
    )
  }
}
const ContactMeSchema = withFormik({
  validationSchema: Yup.object().shape({
    projectName: Yup.string()
    .required('Required'),
    description: Yup.string()
  }),
  enableReinitialize: true,
  mapPropsToValues: props => ({
    ...props
  }),
  mapValuesToPayload: x => x,
  handleSubmit: (values, bag) => {
    setTimeout(() => {
      console.log('values',values)
      values.createProject(values)
      axios
      .all(values.uploaders)
      .then(() => {
        console.log('success')
        // ... perform after upload is successful operation
      })
      .catch(function(error) {
        console.log('error', error)
      });

      bag.resetForm()
      document.getElementById("createProject").reset();
      bag.setSubmitting(false);
    }, 2000)
  },
  displayName: 'createProject',
});
const mapStateToProps = (state) =>{
  console.log(state)
  return{
    auth:state.firebase.auth,

  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    createProject: (project) => dispatch(createProject(project))
  }
};
const CreateProject = ContactMeSchema(MyCreateProject);
export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);