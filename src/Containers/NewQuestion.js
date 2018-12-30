import React from 'react'
import { MdArrowBack } from 'react-icons/md'
import { Container } from 'reactstrap'
import { withRouter } from 'react-router-dom'
import Textarea from 'muicss/lib/react/textarea'
import Button from 'muicss/lib/react/button'
import avatar from 'gradient-avatar'

const a = avatar('tsiry')
const avatarIcon = `data:image/svg+xml;charset=utf-8,${a}`

const NewQuestion = (props) => (
  <div>
    <Container style={{ marginTop: 50 }}>
      <div>
        <span onClick={() => props.history.goBack()} style={{ cursor: 'pointer' }}>
          <MdArrowBack size={34} color='rgb(135, 33, 243)'></MdArrowBack>
        </span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 100 }}>
        <div style={{ flex: '0.8' }}>
          <div style={{ display: 'flex', marginBottom: 25 }}>
            <div style={{ marginRight: 15 }}>
              <img style={{ width: 56, height: 56, borderRadius: 28 }} alt='' src={avatarIcon} />
            </div>
            <div style={{ display: 'flex' }}>
              <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 10 }}>
                <span style={{ fontWeight: 500 }}>Tsiry Sandratraina</span>
                <span style={{ color: '#657786', fontSize: 15 }}>@tsiry</span>
              </div>
            </div>
          </div>
          <Textarea placeholder="Poser une question" />
          <Button color="primary" variant="raised">Publier</Button>
        </div>
      </div>
    </Container>
  </div>
)

export default withRouter(NewQuestion)