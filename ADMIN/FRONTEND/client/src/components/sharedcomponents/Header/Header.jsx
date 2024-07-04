import React from 'react'

const Header = () => {
    const dashboardToggle = () => {
    document.getElementsByClassName('custom-col')[0].classList.toggle('side-bar-dashboard')
    document.getElementsByClassName('custom-col-2')[0].classList.toggle('side-dashboard-home')
    const icon = document.getElementsByClassName('side-bar-icon')[0]
    if (icon.classList.contains("fa-bars")) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-close');
    } else {
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-close');
    }
}
  return (
        <div className="header">
            <div className="row">
                <div className="col-lg-8 col-4">
                    <div className="d-flex w-100">
                        <div className>
                        <button className="bg-white border-0 px-3 d-lg-block d-sm-none d-xs-none" onClick={dashboardToggle}>
                            <i className="fa fa-bars side-bar-icon" id="side-icon" />
                            </button>
                        <button className="bg-white border-0 px-3 mt-lg-2 d-sm-block d-lg-none d-xs-block" onClick="dashboardToggleMobile">
                            <i className="fa fa-bars side-bar-icon" id="side-icon" /></button>
                        </div>
                        <div className="search w-100 d-lg-block d-none">
                        <div className="input-group pt-2 pb-1 w-100">
                            <input type="text" className=" form-control" placeholder="Search......." aria-label="Search......." aria-describedby="basic-addon2" />
                            <span className="input-group-text btn-icon-text" id="basic-addon2">Search</span>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-8 Admin-profile pt-2 pb-2">
                    <div className="notification">
                        <i className="fa fa-flag-o icon" />
                    </div>
                    <div className="notification">
                        <i className="fa fa-bell icon" />
                    </div>
                    <div className="notification">
                        <i className="fa fa-shopping-cart icon" />
                    </div>
                    <div className="profile">
                        <div className><i className="fa fa-user side-icon" /></div>
                        <div className><i className="fa fa-angle-down arrow-icon" /></div>
                        <div className="dropdown-content">
                        <ul className="profile-info">
                        <li>
                        <div className="header-navheading border-bottom">
                            <h6 className="main-notification-title">Aryan saini</h6>
                            <p className="main-notification-text mb-0">Web Designer</p>
                        </div>
                        </li>
                        <li>
                        <a className="dropdown-item d-flex border-bottom">
                            <i className="fe fe-user fs-16 align-middle" />
                            Profile
                        </a>
                        </li>
                        <li><a className="dropdown-item d-flex border-bottom">
                            <i className="fe fe-inbox fs-16 align-middle" />
                            Inbox
                            <span className="badge bg-success ms-auto">25</span>
                        </a>
                        </li>
                        <li>
                        <a className="dropdown-item d-flex border-bottom border-block-end">
                            <i className="fe fe-compass fs-16 align-middle" />
                            Activity
                        </a>
                        </li>
                        <li>
                        <a className="dropdown-item d-flex border-bottom">
                            <i className="fe fe-settings fs-16 align-middle" />
                            Settings
                        </a>
                        </li>
                        <li>
                        <a className="dropdown-item d-flex border-bottom">
                            <i className="fe fe-headphones fs-16 align-middle" />
                            Support
                        </a>
                        </li>
                        <li>
                        <a className="dropdown-item d-flex">
                            <i className="fe fe-power fs-16 align-middle" />
                            LogOut
                        </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Header