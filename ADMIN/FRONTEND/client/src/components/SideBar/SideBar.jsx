import React from 'react'

const SideBar = () => {
  return (
    <>
         <div className="custom-col p_0 d-lg-block d-sm-none d-md-none">
        {/* Dashboard Start */}
        <div className="dashboard-wrapper pt-3">
            <div className="logo-wrapper">
            <h3 className="text-uppercase logo">Admin Panel</h3>
            </div>
            <div className="dashboard-item-wrapper-1">
            <ul className="dashboard-item-wrapper">
                <li className="list-group-item">
                <div className="dash-hover">
                    <div className="dashboard-item text-capitilize">
                    <a href="./index.html" className>
                        <i className="fa fa-home" />
                        <span className>Dashboard</span>
                    </a>
                    </div>
                    <span className="shape1" />
                    <span className="shape2" />
                    <span className="after" />
                    <span className="before" />
                </div>
                </li>
                <li className="list-group-item">
                <div className="dash-hover">
                    <div className="dashboard-item text-capitilize">
                    <a href="./Event_Management.html" className>
                        <i className="fa fa-industry" />
                        <span className>Event Management</span>
                    </a>
                    </div>
                    <span className="shape1" />
                    <span className="shape2" />
                    <span className="after" />
                    <span className="before" />
                </div>
                </li>
                <li className="list-group-item">
                <div className="dash-hover">
                    <div className="collapsible-list">
                    <div className="dashboard-item">
                        <div className="list-header collapse-trigger text-capitilize">
                        <i className="fa fa-user" />
                        <span className>Users Management</span>
                        </div>
                    </div>
                    </div>
                    <span className="shape1" />
                    <span className="shape2" />
                    <span className="after" />
                    <span className="before" />
                </div>
                <ul className="list">
                    <li className="list-item px-5">
                    <a href="Users.html" className>Users</a>
                    </li>
                </ul>
                </li>
                <li className="list-group-item">
                <div className="dash-hover">
                    <div className="dashboard-item text-capitilize">
                    <a href="referral_program.html" className>
                        <i className="fa fa-user-plus" />
                        <span className>Referral Program Management</span>
                    </a>
                    </div>
                    <span className="shape1" />
                    <span className="shape2" />
                    <span className="after" />
                    <span className="before" />
                </div>
                </li>
                <li className="list-group-item">
                <div className="dash-hover">
                    <div className="dashboard-item text-capitilize">
                    <a href="track_referral_program.html" className>
                        <i className="fa fa-location-arrow" />
                        <span className>Track Referal Program</span>
                    </a>
                    </div>
                    <span className="shape1" />
                    <span className="shape2" />
                    <span className="after" />
                    <span className="before" />
                </div>
                </li>
                <li className="list-group-item">
                <div className="dash-hover">
                    <div className="dashboard-item text-capitilize">
                    <a href="affiliate_markting_management.html" className>
                        <i className="fa fa-buysellads" />
                        <span className>Affiliate Marketing Management</span>
                    </a>
                    </div>
                    <span className="shape1" />
                    <span className="shape2" />
                    <span className="after" />
                    <span className="before" />
                </div>
                </li>
                <li className="list-group-item">
                <div className="dash-hover">
                    <div className="dashboard-item text-capitilize">
                    <a href="moderator_account.html" className>
                        <i className="fa fa-user-circle" />
                        <span className>Moderator Account Management</span>
                    </a>
                    </div>
                    <span className="shape1" />
                    <span className="shape2" />
                    <span className="after" />
                    <span className="before" />
                </div>
                </li>
                <li className="list-group-item">
                <div className="dash-hover">
                    <div className="dashboard-item text-capitilize">
                    <a href="questionnaire_management.html" className>
                        <i className="fa fa-question-circle" />
                        <span className>Questionnaire Management</span>
                    </a>
                    </div>
                    <span className="shape1" />
                    <span className="shape2" />
                    <span className="after" />
                    <span className="before" />
                </div>
                </li>
                <li className="list-group-item">
                <div className="dash-hover">
                    <div className="dashboard-item text-capitilize">
                    <a href="subscription_management.html" className>
                        <i className="fa fa fa-500px" />
                        <span className>Subscriptions Management</span>
                    </a>
                    </div>
                    <span className="shape1" />
                    <span className="shape2" />
                    <span className="after" />
                    <span className="before" />
                </div>
                </li>
                <li className="list-group-item">
                <div className="dash-hover">
                    <div className="dashboard-item text-capitilize">
                    <a href="revenue_management.html" className>
                        <i className="fa fa-money" />
                        <span className>Revenue Management</span>
                    </a>
                    </div>
                    <span className="shape1" />
                    <span className="shape2" />
                    <span className="after" />
                    <span className="before" />
                </div>
                </li>
                <li className="list-group-item">
                <div className="dash-hover">
                    <div className="dashboard-item text-capitilize">
                    <a href="payout_management.html" className>
                        <i className="fa fa-credit-card" />
                        <span className>Payout Affiliate Person Management</span>
                    </a>
                    </div>
                    <span className="shape1" />
                    <span className="shape2" />
                    <span className="after" />
                    <span className="before" />
                </div>
                </li>
                <li className="list-group-item">
                <div className="dash-hover">
                    <div className="dashboard-item text-capitilize">
                    <a href="ticket_management.html" className>
                        <i className="fa fa-ticket" />
                        <span className>Ticket Management/Queries</span>
                    </a>
                    </div>
                    <span className="shape1" />
                    <span className="shape2" />
                    <span className="after" />
                    <span className="before" />
                </div>
                </li>
                <li className="list-group-item">
                <div className="dash-hover">
                    <a href="notification.html" className>
                    <div className="dashboard-item text-capitilize">
                        <i className="fa fa-bell" />
                        <span className>Notification</span>
                    </div>
                    </a>
                    <span className="shape1" />
                    <span className="shape2" />
                    <span className="after" />
                    <span className="before" />
                </div>
                </li>
                <li className="list-group-item">
                <div className="dash-hover">
                    <div className="dashboard-item text-capitilize">
                    <i className="fa fa-sign-out" />
                    <span className>Logout</span>
                    </div>
                    <span className="shape1" />
                    <span className="shape2" />
                    <span className="after" />
                    <span className="before" />
                </div>
                </li>
            </ul>
            </div>
        </div>
        {/* Dashboard End */}
</div>

    </>
  )
}

export default SideBar