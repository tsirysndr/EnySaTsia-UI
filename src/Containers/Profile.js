import React from 'react'
import Navbar from '../Components/Navbar'
import { Container } from 'reactstrap'
import avatar from 'gradient-avatar'
import ContentLoader from 'react-content-loader'
import { compose, getContext } from 'recompose'
import { withAddress } from './Enhancers/ProfileEnhancer'
import PropTypes from 'prop-types'

const a = avatar('tsiry')
const avatarIcon = `data:image/svg+xml;charset=utf-8,${a}`

const Profile = (props) => (
  <div>
    <Navbar />
    <Container style={{ marginTop: 67 }}>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 0.4 }}>
          <div style={{ marginTop: 50, display: 'flex', justifyContent: 'center' }}>
            <img style={{ width: 130, height: 130, borderRadius: 65 }} alt='' src={avatarIcon} />
          </div>
          <div style={{ marginTop: 34 }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <h4>Tsiry Sandratraina</h4>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ width: 150, textOverflow: 'ellipsis', overflow: 'hidden' }}>
                <span style={{ color: '#a0a0a0' }}>{props.address}</span>
              </div>
            </div>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ marginTop: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            <div>
              <div style={{ display: 'flex' }}>
                  <div style={{ flex: 0.7 }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <ContentLoader 
                        rtl
                        speed={2}
                        width={400}
                        primaryColor="#f3f3f3"
                        secondaryColor="#ecebeb"
                        style={{ width: 400, marginTop: 25 }}
                      >
                        <circle cx="30" cy="30" r="30" /> 
                        <rect x="75" y="13" rx="4" ry="4" width="100" height="13" /> 
                        <rect x="75" y="37" rx="4" ry="4" width="50" height="8" /> 
                        <rect x="0" y="70" rx="5" ry="5" width="400" height="10" />
                        <rect x="0" y="90" rx="5" ry="5" width="290" height="10" />
                      </ContentLoader>
                      <ContentLoader 
                        rtl
                        speed={2}
                        width={400}
                        primaryColor="#f3f3f3"
                        secondaryColor="#ecebeb"
                        style={{ width: 400, marginTop: 25 }}
                      >
                        <circle cx="30" cy="30" r="30" /> 
                        <rect x="75" y="13" rx="4" ry="4" width="100" height="13" /> 
                        <rect x="75" y="37" rx="4" ry="4" width="50" height="8" /> 
                        <rect x="0" y="70" rx="5" ry="5" width="400" height="10" />
                        <rect x="0" y="90" rx="5" ry="5" width="290" height="10" />
                      </ContentLoader>
                      <ContentLoader 
                        rtl
                        speed={2}
                        width={400}
                        primaryColor="#f3f3f3"
                        secondaryColor="#ecebeb"
                        style={{ width: 400, marginTop: 25 }}
                      >
                        <circle cx="30" cy="30" r="30" /> 
                        <rect x="75" y="13" rx="4" ry="4" width="100" height="13" /> 
                        <rect x="75" y="37" rx="4" ry="4" width="50" height="8" /> 
                        <rect x="0" y="70" rx="5" ry="5" width="400" height="10" />
                        <rect x="0" y="90" rx="5" ry="5" width="290" height="10" />
                      </ContentLoader>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
)

const withExtra = getContext({
  extra: PropTypes.object,
})

const withData = compose(
  withExtra,
  withAddress,
)

export default withData(Profile)