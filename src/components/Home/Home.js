import React from "react";
import "./Home.scss";
import MyInfo from "./MyInfo/MyInfo";
import Projects from "./Projects/Projects";
import ContactMe from "./ContactMe/ContactMe";
import ScrollUpButton from "react-scroll-up-button";
import { connect } from "react-redux";

import Layout from "../Layout";

function Home({ projectsData }) {
  return (
    <Layout>
      <div className='Home'>
        <div className='Home-header' id='1'>
          <MyInfo />
        </div>
        <ScrollUpButton
          StopPosition={0}
          ShowAtPosition={150}
          EasingType='easeOutCubic'
          AnimationDuration={500}
          ContainerClassName='ScrollUpButton__Container'
          TransitionClassName='ScrollUpButton__Toggled'
        />
        <div id='projects'>
          <Projects projectsData={projectsData} />
        </div>
        <div id='contactMe'>
          <ContactMe />
          {/* <MyFooter /> */}
        </div>
      </div>
    </Layout>
  );
}
const mapStateToProps = state => {
  return {
    projectsData: state.firestore.ordered.projects,
  };
};

export default connect(mapStateToProps)(Home);
