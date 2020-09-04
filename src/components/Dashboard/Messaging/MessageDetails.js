/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Fragment } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import './Styles/MessageDetails.scss'
import { BarLoader } from 'react-spinners'
import { Redirect } from 'react-router-dom'
import Layout from '../../Layout'
import { h1XL, wrapper, colors, mq } from '../../../Styles'

function MessageDetails({ message, auth }) {
  const container = css`
    display: grid;
    place-content: center;
    place-items: center;
    grid-gap: 0px 17px;
    ${mq.phoneLarge} {
      grid-gap: 0;
    }
    ${mq.s} {
    }
  `
  const phoneAndEmailWrapper = css`
    grid-column: 1;
    grid-row: 2;
    background-color: ${colors.darkBlue};
    padding: 30px 19px;
    margin-left: 17px;

    ${mq.phoneLarge} {
      width: 80%;
      margin-left: 0;
      padding: 20px 10px;
      & > h2 {
        font-size: 124%;
      }
    }
  `
  const midWrapper = css`
    grid-column: 2;
    grid-row: 2;
    place-self: center;
    font-size: 175%;
    width: 61vw;
    background-color: ${colors.darkBlue};
    padding: 10px 26px;
    width: 80%;
    ${mq.phoneLarge} {
      grid-column: 1;
      grid-row: 3;
      padding: 10px 13px;
      font-size: 150%;
    }
  `
  const lowerWrapper = css`
    grid-column: 2 / span 2;
    grid-row: 3;
    place-self: end;
    padding-right: 17px;
    ${mq.phoneLarge} {
      grid-column: 1;
      grid-row: 4;
      font-size: 117%;
    }
  `
  console.log(message)
  return (
    <Layout>
      {message ? (
        <Fragment>
          <div css={container}>
            <h1
              css={[
                h1XL,
                css`
                  grid-column: 1 / span 3;
                  grid-row: 1;
                  place-self: baseline;
                `,
              ]}
            >
              {message.contactName}
            </h1>
            <div css={phoneAndEmailWrapper}>
              <h2>Phone Number: {message.phoneNumber}</h2>
              <h2>
                Email: <a href={`mailto:${message.email}`}>{message.email}</a>
              </h2>
            </div>
            <p css={midWrapper}>{message.description}</p>
            <h3 css={lowerWrapper}>
              Msg Received: {message.sentAt.toDate().toDateString()}
            </h3>
          </div>
        </Fragment>
      ) : (
        <div>
          {auth.uid ? (
            <div className='my-spinner-container'>
              <BarLoader
                className='my-spinner'
                sizeUnit={'px'}
                size={150}
                color={'#d4dff6'}
                loading={true}
              />
              Loading...
            </div>
          ) : (
            <Redirect to='/signin' />
          )}
        </div>
      )}
    </Layout>
  )
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id
  const contactedMe = state.firestore.data.contactedMe
  const message = contactedMe ? contactedMe[id] : null

  return {
    message,
    auth: state.firebase.auth,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'contactedMe' }])
)(MessageDetails)
