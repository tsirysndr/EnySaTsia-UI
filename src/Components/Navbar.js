import React from 'react'
import { StatefulInput } from 'baseui/input'
import { Button } from 'baseui/button'
import { StyledLink } from 'baseui/link'
import { withRouter } from 'react-router-dom'
import { compose, getContext } from 'recompose'
import { withPopoverHandler, withGenerateDefaultAddress } from './Enhancers/NavbarEnhancer'
import avatar from 'gradient-avatar'
import PropTypes from 'prop-types'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import AccountCircle from '@material-ui/icons/AccountCircleOutlined'
import Settings from '@material-ui/icons/Settings'
import ExitToApp from '@material-ui/icons/ExitToApp'
import Typography from '@material-ui/core/Typography'

const a = avatar('tsiry')
const avatarIcon = `data:image/svg+xml;charset=utf-8,${a}`

const Navbar = (props) => (
  <div style={{ zIndex: 1, position: 'fixed', top: 0, width: '100%', backgroundColor: '#fff', display: 'flex', borderBottom: '1px solid rgba(212, 218, 223, 0.21)', boxShadow: 'rgba(116, 129, 141, 0.1) 0px 1px 15px 0px' }}>
    <div style={{ flex: 0.2 }}></div>
    <div style={{ display: 'flex', alignItems: 'center', flex: 0.3 }}>
      <StyledLink href="#" style={{ fontSize: 18 }}>
        EnySaTsia
      </StyledLink>
    </div>
    <div style={{ flex: 1 }}>
      <div style={{ padding: 10 }}>
        <div style={{ position: 'absolute', top: 0, bottom: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', width: 40 }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className="icon" style={{ shapeRendering: 'geometricprecision' }}>
            <path fillRule="evenodd" className="" fill="rgba(51, 51, 51, 0.5)" d="M6.1485,10.2969 C4.1335,10.2969 2.5005,8.6639 2.5005,6.6489 C2.5005,4.6339 4.1335,2.9999 6.1485,2.9999 C8.1635,2.9999 9.7965,4.6339 9.7965,6.6489 C9.7965,8.6639 8.1635,10.2969 6.1485,10.2969 M14.2075,12.6429 L11.0995,9.7069 C11.0555,9.6629 10.9995,9.6419 10.9505,9.6079 C11.4835,8.7459 11.7965,7.7339 11.7965,6.6489 C11.7965,3.5339 9.2635,0.9999 6.1485,0.9999 C3.0335,0.9999 0.5005,3.5339 0.5005,6.6489 C0.5005,9.7629 3.0335,12.2969 6.1485,12.2969 C7.1495,12.2969 8.0885,12.0329 8.9045,11.5739 C8.9455,11.6409 8.9765,11.7129 9.0355,11.7709 L12.1435,14.7069 C12.5335,15.0979 13.1665,15.0979 13.5575,14.7069 L14.2075,14.0569 C14.5975,13.6669 14.5975,13.0339 14.2075,12.6429">
            </path>
          </svg>
        </div>
        <div className="input-container" >
        <StatefulInput placeholder='Recherche ...' id='searchbox' />
        </div>
      </div>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', flex: 1, justifyContent: 'flex-end' }}>
      <div style={{ padding: 10 }}>
        <Button onClick={() => props.history.push('/post')}>Poser une question</Button>
      </div>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
      <div style={{ padding: 10, marginLeft: 25 }}>
        <img onClick={props.handleOpen} style={{cursor: 'pointer', width: 40, height: 40, borderRadius: 20 }} alt='' src={avatarIcon} />
      </div>
      <Menu
        id="simple-menu"
        anchorEl={props.anchorEl}
        open={Boolean(props.anchorEl)}
        onClose={props.handleClose}
      >
        <MenuItem onClick={props.handleClose}>
          <ListItemIcon>
            <AccountCircle />
          </ListItemIcon>
          <Typography variant="inherit">
            Profil
          </Typography>
        </MenuItem>
        <MenuItem onClick={props.handleClose}>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <Typography variant="inherit">
            Paramètres
          </Typography>
        </MenuItem>
        <MenuItem onClick={props.handleClose}>
          <ListItemIcon>
            <ExitToApp />
          </ListItemIcon>
          <Typography variant="inherit">
            Se déconnecter
          </Typography>
        </MenuItem>
      </Menu>
    </div>
    <div style={{ flex: 0.2 }}></div>
  </div>
)

const withExtra = getContext({
  extra: PropTypes.object,
})

const withData = compose(
  withExtra,
  withRouter,
  withPopoverHandler,
  withGenerateDefaultAddress,
)

export default withData(Navbar)