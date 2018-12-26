import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createProject } from '../../../Store/Actions/ProjectsActions'
import {Redirect} from "react-router-dom";
import './Styles/CreateProject.scss'
import AuthNavlinks from '../../Navigation/AuthNavlinks'
import {BarLoader} from "react-spinners";
import { withFormik, Form, Field } from 'formik'
import * as Yup from "yup";


class MyCreateProject extends Component {
  render() {
    const {errors, touched, isSubmitting, handleChange,auth} = this.props
    return (
      <div>
        {!auth.uid ? <Redirect to='/signin'/> :
          <div className="CreateProject">
            <header>
              <AuthNavlinks/>
            </header>
            <h1>Create New Project</h1>
            <Form >
              <div className="field-container">
              <Field type="text"  placeholder="Project Name" name="projectName" />
              {errors.projectName && touched.projectName ? (
                <p className="error-message">{errors.projectName}</p>
              ) : null}
              </div>
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
      bag.setSubmitting(false);
    }, 2000)
  },
  displayName: 'createProject',
});
const mapStateToProps = (state) =>{
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