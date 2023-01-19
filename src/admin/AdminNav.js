import React from 'react'
import { NotificationsNone, Language, Settings } from "@mui/icons-material"
import "./admin-css/adminnavbar.css"
import { isAuthenticated, signout } from '../components/auth'
import { withRouter } from 'react-router-dom'

const AdminNav = ({ history }) => {
    const { user: { name} } = isAuthenticated()
    return (
        <div className='topbar'>
            <div className='topbarWraper'>
                <div className='topleft'>
                    <span className='logo'>EverestPasal</span>
                </div>
                <div className='topRight'>
                    <div className='topbarIconContainer'>
                       <h5>{name}</h5> 
                        
                    </div>
                    <div className='topbarIconContainer'>
                        <NotificationsNone />
                        <span className='topIconBadge'>2</span>
                    </div>
                    <div className='topbarIconContainer'>
                        <Language />
                    </div>
                    <div className='topbarIconContainer'>
                        <Settings />
                    </div>
                     <div className='topAvatar'>
                        {isAuthenticated() && (
                            <button  onClick={()=>signout(()=>{
                                history.push('/')
                            })}>Logout</button>
                        )}
                        
                      </div>
                    </div>
                </div>
            </div>
            )
}

            export default withRouter(AdminNav)