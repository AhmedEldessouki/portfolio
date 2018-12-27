import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createProject } from '../../../Store/Actions/ProjectsActions'
import {Redirect} from "react-router-dom";
import './Styles/CreateProject.scss'
import AuthNavlinks from '../../Navigation/AuthNavlinks'
import {BarLoader} from "react-spinners";
// import Dropzone from "react-dropzone";
// import classNames from 'classnames'
// import axios from 'axios';

import { withFormik, Form, Field } from 'formik'
// import {
//   CLOUDINARY_API_KEY,
//   CLOUDINARY_UPLOAD_PRESET,
//   CLOUDINARY_UPLOAD_URL
// } from "../../../Config/CloudInary";
import * as Yup from "yup";

// const dropzoneStyle = {};
class MyCreateProject extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     imSrc: null,
  //     imageDropArray: []
  //   };
  // }
  // handleDrop=(acceptedFiles, rejectedFiles)=>{
  //   console.log(acceptedFiles)
  //   if(acceptedFiles && acceptedFiles.length >0){
  //     if(acceptedFiles[0].size < 8000000) {
  //       const reader = new FileReader()
  //       reader.addEventListener("load", ()=>{
  //         console.log( reader.result)
  //         this.setState({
  //           imgSrc : reader.result
  //         })
  //       }, false)
  //
  //       reader.readAsDataURL(acceptedFiles[0])
  //       const uploaders = acceptedFiles.map(file => {
  //         let formData;
  //         // Initial FormData
  //         formData = new FormData();
  //         formData.append("file", file);
  //         formData.append("tags", `codeinfuse, small, gist`);
  //         formData.append(
  //           "upload_preset",
  //           CLOUDINARY_UPLOAD_PRESET
  //         ); // Replace the preset name with your own
  //         formData.append("api_key", CLOUDINARY_API_KEY); // Replace API key with your own Cloudinary key
  //         formData.append("timestamp", Date.now() / 1000 || 0); // Replace API key with your own Cloudinary key
  //
  //         // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
  //         return axios
  //         .post(CLOUDINARY_UPLOAD_URL, formData, {
  //           headers: { "X-Requested-With": "XMLHttpRequest" }
  //         })
  //         .then(response => {
  //           const data = response.data;
  //           // You should store this URL for future references in your app
  //           this.setState({
  //             imageDropArray: [
  //               ...this.state.imageDropArray,
  //               data
  //             ]
  //           });
  //
  //           this.props.setValues({
  //             ...this.props.values,
  //             files: this.state.imageDropArray
  //           });
  //         })
  //         .catch(e => {});
  //       });
  //       axios
  //       .all(uploaders)
  //       .then(() => {
  //         console.log('success')
  //         // ... perform after upload is successful operation
  //       })
  //       .catch(function(error) {
  //         console.log('error', error)
  //       });
  //
  //     }
  //
  //   }if(rejectedFiles && rejectedFiles.length >0){
  //     if(rejectedFiles[0].Size> 8000000) {
  //       alert('This File is too big')
  //     }
  //   }
  // }

  render() {
    // const {imgSrc} = this.state
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
              {/*{imgSrc ? <img src={imgSrc}/> : '' }*/}
              {/*<Dropzone onDrop={this.handleDrop} accept="image/*" multiple maxSize={8000000}>*/}
                {/*{({ getRootProps, getInputProps }) => (*/}
                  {/*<div*/}
                    {/*{...getRootProps()}*/}
                    {/*className={classNames}*/}
                  {/*>*/}
                    {/*<span>drop image(s)</span>*/}
                    {/*<input {...getInputProps()} />*/}
                  {/*</div>*/}
                {/*)}*/}
              {/*</Dropzone>*/}
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
      values.createProject(values)
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
    auth:state.firebase.auth
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    createProject: (project) => dispatch(createProject(project))
  }
};
const CreateProject = ContactMeSchema(MyCreateProject);
export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);