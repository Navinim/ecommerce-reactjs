import React from 'react'
import "../admin-css/widgetSm.css"
import {  Visibility} from "@mui/icons-material"

const WidgetSm = () => {
    return (
        <div className='widgetSm'>
            <span className='widgetSmTitle'>New Member</span>
            <ul className='widgetSmList'>
                <li className='widgetSmListItem'>
                    <img src='https://cdn.pixabay.com/photo/2019/09/03/06/15/girl-4448689_960_720.jpg' alt='' className='widgetSmImg' />
                    <div className='widgetSmUser'>
                        <span className='widgetSmUsername'>Navin Paudel</span>
                        <span className='widgetSmUserTitle'>Software Engineer</span>
                    </div>
                    <button className='widgetSmButton'>
                        <Visibility/>View
                    </button>
                </li>
                <li className='widgetSmListItem'>
                    <img src='https://cdn.pixabay.com/photo/2019/09/03/06/15/girl-4448689_960_720.jpg' alt='' className='widgetSmImg' />
                    <div className='widgetSmUser'>
                        <span className='widgetSmUsername'>Navin Paudel</span>
                        <span className='widgetSmUserTitle'>Software Engineer</span>
                    </div>
                    <button className='widgetSmButton'>
                        <Visibility/>View
                    </button>
                </li>
                <li className='widgetSmListItem'>
                    <img src='https://cdn.pixabay.com/photo/2019/09/03/06/15/girl-4448689_960_720.jpg' alt='' className='widgetSmImg' />
                    <div className='widgetSmUser'>
                        <span className='widgetSmUsername'>Navin Paudel</span>
                        <span className='widgetSmUserTitle'>Software Engineer</span>
                    </div>
                    <button className='widgetSmButton'>
                        <Visibility/>
                        View
                    </button>
                </li>
                <li className='widgetSmListItem'>
                    <img src='https://cdn.pixabay.com/photo/2019/09/03/06/15/girl-4448689_960_720.jpg' alt='' className='widgetSmImg' />
                    <div className='widgetSmUser'>
                        <span className='widgetSmUsername'>Navin Paudel</span>
                        <span className='widgetSmUserTitle'>Software Engineer</span>
                    </div>
                    <button className='widgetSmButton'>
                        <Visibility/>
                        View
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default WidgetSm