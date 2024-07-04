import React from 'react'

const Notification = () => {
  return (
   <>
   <div className="home-content">
  <div className="container-fluid mt-4 custom-p">
    {/* item filter start */}
    <div className="filter">
      <div className="row ml-1">
        <div className="col-md-6 px-0 custom-padding">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item"><a>Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Notification</li>
          </ol>
        </div>
        <div className="col-md-6 px-0 d-flex justify-content-md-end align-item-center">
          <div className="w-100">
            <div className="w-100 text-end">
              <button type="button" className="btn btn-white  me-2">
                <i className="fa fa-download me-2 fs-14" />
                Import
              </button>
              <button type="button" className="btn btn-white me-2">
                <i className="fa fa-filter me-2 fs-14" />
                Filter
              </button>
              <button type="button" className="btn btn-icon-text">
                <i className="fa fa-download me-2 fs-14" />
                Download Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* item filter end */}
    <div className="mt-3">
      <ul className="Notification">
        <li>
          <div className="Notification-time"> <span className="date">Today</span> <span className="time">02:31</span> </div>
          <div className="Notification-icon"> <a /> </div>
          {/* <div class="Notification-time-date mb-2 d-none d-md-none"> <span
                                      class="date">Today</span> <span class="time ms-2">02:31</span> </div> */}
          <div className="Notification-body">
            <div className="media mt-0">
              <div className="main-avatar avatar-md online"> <img alt="avatar" className="rounded-6" src="./assets/img/Users/4.jpg" /> </div>
              <div className="media-body ms-3 d-flex">
                <div className>
                  <p className="tx-14 text-dark mb-0 tx-semibold">Dennis Trexy</p>
                  <p className="mb-0 tx-13 text-muted notification-p">2 Members Accepted
                    your Request.
                  </p>
                </div>
                <div className="notify-time">
                  <p className="mb-0 text-muted tx-11">2 Hrs ago</p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="Notification-time"> <span className="date">Yesterday</span> <span className="time">18:47</span> </div>
          <div className="Notification-icon"> <a /> </div>
          {/* <div class="Notification-time-date mb-2 d-block d-md-none"> <span
                                      class="date">Yesterday</span> <span class="time ms-2">18:47</span> </div> */}
          <div className="Notification-body">
            <div className="media mt-0">
              <div className="main-avatar avatar-md offline"> <img alt="avatar" className="rounded-6" src="./assets/img/Users/5.jpg" /> </div>
              <div className="media-body ms-3 d-flex">
                <div className>
                  <p className="tx-14 text-dark mb-0 tx-semibold">Robbie Ruder</p>
                  <p className="mb-0 tx-13 text-muted notification-p">Created New Template
                    for Designing
                    Department.</p>
                </div>
                <div className="notify-time">
                  <p className="mb-0 text-muted tx-11">18:47</p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="Notification-time"> <span className="date">Yesterday</span> <span className="time">06:43</span> </div>
          <div className="Notification-icon"> <a /> </div>
          {/* <div class="Notification-time-date mb-2 d-block d-md-none"> <span
                                      class="date">Yesterday</span> <span class="time ms-2">06:43</span> </div> */}
          <div className="Notification-body">
            <div className="media mt-0">
              <div className="main-avatar avatar-md online"> <img alt="avatar" className="rounded-6" src="./assets/img/Users/6.jpg" /> </div>
              <div className="media-body ms-3 d-flex">
                <div className>
                  <p className="tx-14 text-dark mb-0 tx-semibold">Elida Distefa</p>
                  <p className="mb-0 tx-13 text-muted notification-p">Shipment is Out for
                    Delivery.</p>
                </div>
                <div className="notify-time">
                  <p className="mb-0 text-muted tx-11">06:43</p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="Notification-time"> <span className="date">23 Oct</span> <span className="time">03:15</span> </div>
          <div className="Notification-icon"> <a /> </div>
          {/* <div class="Notification-time-date mb-2 d-block d-md-none"> <span class="date">23
                                      Oct</span> <span class="time ms-2">03:15</span> </div> */}
          <div className="Notification-body">
            <div className="media mt-0">
              <div className="main-avatar avatar-md online"> <img alt="avatar" className="rounded-6" src="./assets/img/Users/6.jpg" /> </div>
              <div className="media-body ms-3 d-flex">
                <div className>
                  <p className="tx-14 text-dark mb-0 tx-semibold">Harvey Mattos</p>
                  <p className="mb-0 tx-13 text-muted notification-p">Mentioned you in a
                    post.</p>
                </div>
                <div className="notify-time">
                  <p className="mb-0 text-muted tx-11">03:15</p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="Notification-time"> <span className="date">15 Oct</span> <span className="time">12:14</span> </div>
          <div className="Notification-icon"> <a /> </div>
          {/* <div class="Notification-time-date mb-2 d-block d-md-none"> <span class="date">15
                                      Oct</span> <span class="time ms-2">12:14</span> </div> */}
          <div className="Notification-body">
            <div className="media mt-0">
              <div className="main-avatar avatar-md offline"> <img alt="avatar" className="rounded-6" src="./assets/img/Users/7.jpg" /> </div>
              <div className="media-body ms-3 d-flex">
                <div className>
                  <p className="tx-14 text-dark mb-0 tx-semibold">Catrice Doshier</p>
                  <p className="mb-0 tx-13 text-muted notification-p">2 Members Accepted
                    your Request.
                  </p>
                </div>
                <div className="notify-time">
                  <p className="mb-0 text-muted tx-11">12:14</p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="Notification-time"> <span className="date">30 Sep</span> <span className="time">14:04</span> </div>
          <div className="Notification-icon"> <a /> </div>
          {/* <div class="Notification-time-date mb-2 d-block d-md-none"> <span class="date">30
                                      Sep</span> <span class="time ms-2">14:04</span> </div> */}
          <div className="Notification-body">
            <div className="media mt-0">
              <div className="main-avatar avatar-md offline"> <img alt="avatar" className="rounded-6" src="./assets/img/Users/8.jpg" /> </div>
              <div className="media-body ms-3 d-flex">
                <div className>
                  <p className="tx-14 text-dark mb-0 tx-semibold">Mercy Ritia</p>
                  <p className="mb-0 tx-13 text-muted notification-p">Created New Template
                    for Designing
                    Department.</p>
                </div>
                <div className="notify-time">
                  <p className="mb-0 text-muted tx-11">14:04</p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="Notification-time"> <span className="date">18 Sep</span> <span className="time">12:26</span> </div>
          <div className="Notification-icon"> <a /> </div>
          {/* <div class="Notification-time-date mb-2 d-block d-md-none"> <span class="date">18
                                      Sep</span> <span class="time ms-2">12:26</span> </div> */}
          <div className="Notification-body">
            <div className="media mt-0">
              <div className="main-avatar avatar-md online"> <img alt="avatar" className="rounded-6" src="./assets/img/Users/4.jpg" /> </div>
              <div className="media-body ms-3 d-flex">
                <div className>
                  <p className="tx-14 text-dark mb-0 tx-semibold">Mark Jhon</p>
                  <p className="mb-0 tx-13 text-muted notification-p">Shipment is Out for
                    Delivery.</p>
                </div>
                <div className="notify-time">
                  <p className="mb-0 text-muted tx-11">12:26</p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="Notification-time"> <span className="date">03 Sep</span> <span className="time">05:37</span> </div>
          <div className="Notification-icon"> <a /> </div>
          {/* <div class="Notification-time-date mb-2 d-block d-md-none"> <span class="date">03
                                      Sep</span> <span class="time ms-2">05:37</span> </div> */}
          <div className="Notification-body">
            <div className="media mt-0">
              <div className="main-avatar avatar-md offline"> <img alt="avatar" className="rounded-6" src="./assets/img/Users/5.jpg" /> </div>
              <div className="media-body ms-3 d-flex">
                <div className>
                  <p className="tx-14 text-dark mb-0 tx-semibold">Benedict Vallone</p>
                  <p className="mb-0 tx-13 text-muted notification-p">Thanking you for
                    Accepting Request.
                  </p>
                </div>
                <div className="notify-time">
                  <p className="mb-0 text-muted tx-11">05:37</p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="Notification-time"> <span className="date">28 Aug</span> <span className="time">15:24</span> </div>
          <div className="Notification-icon"> <a /> </div>
          {/* <div class="Notification-time-date mb-2 d-block d-md-none"> <span class="date">28
                                      Aug</span> <span class="time ms-2">15:24</span> </div> */}
          <div className="Notification-body">
            <div className="media mt-0">
              <div className="main-avatar avatar-md online"> <img alt="avatar" className="rounded-6" src="./assets/img/Users/6.jpg" /> </div>
              <div className="media-body ms-3 d-flex">
                <div className>
                  <p className="tx-14 text-dark mb-0 tx-semibold">Paul Johny</p>
                  <p className="mb-0 tx-13 text-muted notification-p">Invited you to a
                    Group.</p>
                </div>
                <div className="notify-time">
                  <p className="mb-0 text-muted tx-11">15:24</p>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div className="text-center"> <a className="btn btn-custom w-md" role="button">Load
          more</a>
      </div>
    </div>
  </div>
</div>

   </>
  )
}

export default Notification