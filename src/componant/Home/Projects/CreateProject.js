import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createProject } from '../../../Store/Actions/ProjectsActions'
// import {recallLogos, uploadLogo} from '../../../Store/Actions/uploadLogoAction'
import {Redirect} from "react-router-dom";
import './Styles/CreateProject.scss'
import AuthNavlinks from '../../Navigation/AuthNavlinks'
import {BarLoader} from "react-spinners";
import Dropzone from "react-dropzone";
import axios from 'axios';
import { withFormik, Form, Field } from 'formik'
import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_UPLOAD_PRESET,
  CLOUDINARY_UPLOAD_URL
} from "../../../Config/CloudInary";
import * as Yup from "yup";

class MyCreateProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imSrc: null,
      imageDropArray: [],
      downloadLinks: [],
      projectName : null,
      logoDis:[],
      projectLogos: []
    };
    this.handleDrop= this.handleDrop.bind(this)
  }
  handleDrop=(acceptedFiles, rejectedFiles)=>{
    const {projectName, imageDropArray,logoDis} = this.state
    if(acceptedFiles && acceptedFiles.length >0){
      if(acceptedFiles[0].size < 8000000) {
        const reader = new FileReader()
        reader.addEventListener("load", ()=>{
          this.setState({
            imgSrc : reader.result,
            // imageDropArray : acceptedFiles
          })
        })

        const uploaders = acceptedFiles.map(file => {
          // if (projectName === null) {
          //   console.log('project Name is empty', imageDropArray)
          // }else {
          //   this.props.uploadLogo((file) => {
          //     file.name = this.state.projectName
          //     return file
          //   })
          //   console.log('condition true')
          // }
          // this.props.uploadLogo(file)
          let formData;
          // Initial FormData
          formData = new FormData();
          formData.append("file", file);
          formData.append("tags", `codeinfuse, small, gist`);
          formData.append(
            "upload_preset",
            CLOUDINARY_UPLOAD_PRESET
          );
          formData.append("api_key", CLOUDINARY_API_KEY); // Replace API key with your own Cloudinary key
          formData.append("timestamp", Date.now() / 1000 || 0); // Replace API key with your own Cloudinary key
          return axios
          .post(CLOUDINARY_UPLOAD_URL, formData, {
            headers: { "X-Requested-With": "XMLHttpRequest" }
          })
          .then(response => {
            const data = response.data;
            this.state.imageDropArray.push(data)
            this.state.imageDropArray.map((sup) => {
              this.state.downloadLinks.push(sup.url)
            })
            // const downloadLinks = this.state.downloadLinks.filter((val, id, array) => {
            //   return array.indexOf(val) == id;
            // });
            this.props.setValues({
              ...this.props.values,
              projectLogos: this.state.downloadLinks
            });
          })
          .catch((err) => {console.log(err)});
        });
        axios
        .all(uploaders)
        .then(() => {
          this.props.setValues({
            ...this.props.values,
            projectLogos: this.state.imageDropArray
          });
        })
        .catch((err) => {console.log(err)});
      }
    }
    if(rejectedFiles && rejectedFiles.length >0){
      if(rejectedFiles[0].Size> 8000000) {
        alert('This File is too big')
      }
    }
  }

  render() {
    const {imageDropArray,downloadLinks} = this.state
    const {errors, touched, isSubmitting, handleChange,auth,files} = this.props
    return (
      <div>
        {!auth.uid ? <Redirect to='/signin'/> :
          <div className="CreateProject">
            <AuthNavlinks/>
            <h1>Create New Project</h1>
            <div className="wrapper-container">
              {downloadLinks !== null?
                <div className="maping">
                  {imageDropArray.map((link,ky) => {
                    return  <img alt ="" key={ky} src={link.url}/>
                  })}
                </div>
                : null }
              <Form id="createProject">
                <Dropzone onDrop={this.handleDrop} accept="image/*" multiple maxSize={8000000}>
                  {({ getRootProps, getInputProps }) => (
                    <div
                      {...getRootProps()}
                      className="drop-zone-styles"

                    >
                      <span>drop image(s)</span>
                      <input type="file" {...getInputProps()} />
                    </div>
                  )}
                </Dropzone>
                <div className="field-container">
                  <Field type="text"  placeholder="Project Name" name="projectName" />
                </div>
                {errors.projectName && touched.projectName ? (
                  <p className="error-message">{errors.projectName}</p>
                ) : null}
                <textarea  placeholder="Project Description" name="description" onChange={handleChange} required/>
                <button type="submit" disabled={isSubmitting}>CreateProject</button>
              </Form>
            </div>
            {isSubmitting ?
              <div className="my-spinner-container">
                <BarLoader
                  className="my-spinner"
                  sizeUnit={"px"}
                  size={150}
                  color={'#d4dff6'}
                  loading={isSubmitting}
                />
                Loading...
              </div>
              : null}
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
  mapPropsToValues: (props) => ({
    ...props,
  }),
  mapValuesToPayload: x => x,
  handleSubmit: (values, bag) => {
    setTimeout(() => {
      console.log(values)
      values.createProject(values)
        //firebase storage action
      // values.imageDropArray.map((item, i) => {
      //   this.props.uploadLogo((item) => {
      //     item.indexOf[i].name = `${values.projectName}-${i}`
      //     return (item , console.log('from formik: ', item, i))
      //   })
      // })
      console.log('condition true')
      document.getElementById("createProject").reset();
      bag.setSubmitting(false);
    }, 2000)
  },
  displayName: 'createProject',
});
const mapStateToProps = (state) =>{
  return{
    auth:state.firebase.auth,
    downloadLinks: state.projectLogos.downloadUrls,
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    createProject: (project) => dispatch(createProject(project)),
    // uploadLogo: (file) => dispatch(uploadLogo(file)),
  }
};
const CreateProject = ContactMeSchema(MyCreateProject);
export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);