/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import * as React from 'react'
import {FaGithub, FaExternalLinkAlt} from 'react-icons/fa'

import Carousel from '../Utils/Carousel/Carousel'
import {colors, mq, spinner} from '../Styles'

function ProjectDetails({project}) {
  const [description, setDescription] = React.useState(project.description)
  // console.dir(description.length)
  const [heightT, setHeightT] = React.useState(3)

  React.useEffect(() => {
    if (description !== project.description) setDescription(project.description)
  }, [description, project.description])

  React.useLayoutEffect(() => {
    const textField = document.getElementById('textArea')

    if (textField.clientHeight < textField.scrollHeight) {
      setHeightT(textField.scrollHeight + 'px')
      if (textField.clientHeight < textField.scrollHeight) {
        setHeightT(textField.scrollHeight * 2 - textField.clientHeight + 'px')
      }
    }
  }, [project])
  const anc = css`
    color: ${colors.darkBlue};
    text-align: center;
    font-size: 2rem;
    :hover,
    :focus {
      color: ${colors.blueFont};
    }
  `
  // console.dir(document.getElementById('textArea').scrollHeight)

  return project ? (
    <React.Fragment>
      {project.projectLogo.length !== 0 ? (
        <Carousel imgArray={project.projectLogo} imgAlt={project.name} />
      ) : null}
      <div
        css={css`
          display: flex;
          flex-direction: column;
          padding: 10px 50px 33px;
          place-content: center;
          min-height: 241px;
          border-bottom: 24px solid ${colors.darkBlue};
          ${mq.s} {
            padding: 10px;
          }
        `}
      >
        <div
          css={css`
            display: flex;
            place-items: baseline;
            gap: 10px;
            font-size: 2rem;
            flex-wrap: wrap;
            place-content: center;
            margin-bottom: 5px;
            a {
            }
          `}
        >
          <h1
            css={css`
              font-size: 2.75rem;
              font-weight: 900;
              padding-left: 0;
              border-radius: 7.5%;
              ${mq.s} {
                width: 100%;
                text-align: center;
                font-size: 1.75rem;
                margin: 0;
              }
            `}
          >
            {project.name}
          </h1>
          <a
            css={anc}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={project.repoLink ?? null}
            css={[
              anc,
              project.repoLink
                ? null
                : css`
                    cursor: not-allowed;
                    :hover,
                    :focus {
                      color: ${colors.darkBlue};
                    }
                  `,
            ]}
          >
            <FaGithub />
          </a>
        </div>
        <textarea
          disabled
          onWaiting={e => {
            console.log(e)
          }}
          id="textArea"
          // rows={Math.round(description.length / 20)}
          // rows={setRows}
          wrap="hard"
          css={css`
            resize: none;
            place-self: center;
            padding: 10px 1%;
            font-size: 1.45rem;
            letter-spacing: 0.4px;
            background: ${colors.independenceBlue};
            color: ${colors.blueFont};
            border: none;
            height: ${heightT};
            margin-bottom: 23.2px;
            min-width: 80%;
            border-radius: 5%;
          `}
          value={description}
        />
        <div
          css={css`
            display: flex;
            place-content: space-between;
            font-size: 1.1rem;
            letter-spacing: 1.2px;
            font-variant: all-petite-caps;
          `}
        >
          {project.updatedOn ? (
            <span>
              Last Update: {project.updatedOn.toDate().toDateString()}
            </span>
          ) : null}
          <span>
            {/* // ToDo: get date from github */}
            Added On: {project.date?.toDate().toDateString()}
          </span>
        </div>
      </div>
    </React.Fragment>
  ) : (
    <div
      css={[
        spinner,
        css`
          margin: 50px 0 0;
        `,
      ]}
    />
  )
}

export default ProjectDetails
