import React from 'react'
import MdButton from 'muicss/lib/react/button'
import avatar from 'gradient-avatar'
import { MdMoreHoriz, MdCheck } from 'react-icons/md'
import { compose, getContext } from 'recompose'
import { 
  withAnswer, 
  withAnswered,
  withSubmitted,
  withAnswers,
} from './Enhancers/QuestionEnhancer'
import Chart from './Chart'
import PropTypes from 'prop-types'
import base64 from 'base64-js'

const a = base64.fromByteArray(Buffer.from(avatar('tsiry'), 'utf8'))
const avatarIcon = `data:image/svg+xml;base64,${a}`

const Question = (props) => (
  <div>
    <div style={{ display: 'flex', minHeight: 200, alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ flex: 0.7 }}>
        <div style={{ display: 'flex', marginTop: props.submitted ? 50 : 0 }}>
          <div style={{ marginRight: 15 }}>
            <img style={{ width: 56, height: 56, borderRadius: 28 }} alt='' src={avatarIcon} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', marginLeft: 10 }}>
              <div style={{ flex: 1 }}>
                <span style={{ fontWeight: 500 }}>{props.author}</span>
                <span style={{ color: '#657786', fontSize: 15, marginLeft: 10, marginRight: 10 }}>&middot;</span>
                <span style={{ color: '#657786', fontSize: 15 }}>{props.date}</span>
              </div>
              <div>
                <span style={{ cursor: 'pointer' }}>
                  <MdMoreHoriz size={25} color='#657786' />
                </span>
              </div>
            </div>
            <div style={{ marginLeft: 10 }}>
              <p>
                {props.question}
              </p>
            </div>
            {
              !props.answered && (
                <div style={{ display: 'flex', flex: 1, marginTop: 25, marginLeft: 10 }}>
                  <MdButton onClick={() => props.onAnswer('yes')} color="primary" style={{ width: 100 }} variant="raised">OUI</MdButton>
                  <MdButton onClick={() => props.onAnswer('no')} color="primary" style={{ width: 100 }} variant="flat">NON</MdButton>
                </div>
              )
            }
            {
              props.answered && !props.submitted && (
                <div>
                  <div style={{ display: 'flex', flex: 1, marginTop: 25, marginLeft: 10 }}>
                    <MdCheck color={'#2196F3'} size={24} />
                    <div>
                      <span style={{ color: '#2196F3', marginLeft: 5 }}>
                      {props.answers.get(props.answer)}
                      </span>
                    </div>
                  </div>
                  <div>
                    <MdButton  onClick={() => props.setSubmitted(true)} color="primary" style={{ marginTop: 15 }} variant="raised">
                      Soumettre
                    </MdButton>
                    <MdButton onClick={() => props.setAnswered(false)} color="primary" style={{ marginTop: 15 }} variant="flat">
                      Annuler
                    </MdButton>
                  </div>
                </div>
              )
            }
            {
              props.submitted && (
                <Chart />
              )
            }
          </div>
        </div>
      </div>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ flex: 0.7, borderBottom: '1px solid #e5e5e5' }}></div>
    </div>
  </div>
)

const withDrizzle = getContext({
  drizzle: PropTypes.object
})

const withData = compose(
  withDrizzle,
  withAnswer,
  withAnswered,
  withSubmitted,
  withAnswers,
)

export default withData(Question)