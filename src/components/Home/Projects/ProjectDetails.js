/** @jsx jsx */

import {jsx, css} from '@emotion/core'
import {Fragment} from 'react'

import ContactMe from '../ContactMe/ContactMe'
import Carousel from '../../Utils/Carousel/Carousel'
import Layout from '../../Layout'
import {colors, spinner} from '../../../Styles'

const ProjectDetails = () => {
  const project = {}
  window.scrollTo(0, 0)

  return (
    <Layout>
      {project ? (
        <Fragment>
          <Carousel
            imgArray={project.projectLogo}
            imgAlt={project.projectName}
          />
          <div
            css={css`
              display: flex;
              flex-direction: column;
              padding: 10px 50px 33px;
              place-content: center;
              min-height: 241px;
              border-bottom: 24px solid ${colors.darkBlue};
            `}
          >
            <h1
              css={css`
                font-size: 2.75rem;
                font-weight: 900;
                color: #e9f1f7;
                padding-left: 0;
                border-radius: 7.5%;
              `}
            >
              <a href={project.projectLink}>{project.projectName}</a>
            </h1>
            <p
              css={css`
                padding: 0 5%;
                font-size: 1.45rem;
                letter-spacing: 2.4px;
              `}
            >
              {project.description}
            </p>
            <div
              css={css`
                display: flex;
                place-content: space-between;
                font-size: 1.1rem;
                letter-spacing: 1.2px;
                font-variant: all-petite-caps;
              `}
            >
              <span>
                Author: {project.authorFirstName} {project.authorLastName}
              </span>
              <span>
                Created At: {project.createdAt.toDate().toDateString()}
              </span>
            </div>
          </div>

          <ContactMe />
        </Fragment>
      ) : (
        <div
          css={[
            spinner,
            css`
              margin: 50px 0 0;
            `,
          ]}
        />
      )}
    </Layout>
  )
}

export default ProjectDetails
