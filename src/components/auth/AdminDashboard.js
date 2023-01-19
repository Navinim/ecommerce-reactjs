import React from 'react'
import { withRouter } from 'react-router-dom'
import AdminNav from '../../admin/AdminNav'
import AdminSideBar from '../../admin/AdminSideBar'
import { FeaturedInfo } from '../../admin/FeaturedInfo'
import WidgetLg from '../../admin/widgets/WidgetLg'
import WidgetSm from '../../admin/widgets/WidgetSm'


const AdminDashboard = () => {
  return (
    <>
      <AdminNav />
      <div className="container">
        <AdminSideBar />
        <div className='home'>
          <FeaturedInfo />
          {/* <Chart data={data} title="User Analytics" dataKey="Active User" grid /> */}
          <div className='homeWidgets'>
            <WidgetSm />
            <WidgetLg />
          </div>
        </div>
      </div>

    </>
  )
}

export default withRouter(AdminDashboard)