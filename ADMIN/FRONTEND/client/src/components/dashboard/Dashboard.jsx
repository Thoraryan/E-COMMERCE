import React from 'react'

const Dashboard = () => {
  return (
    <>
    <div className="home-content">
  <div className="container-fluid mt-4 pl-25">
    <div className="filter pb-0 px-lg-0 px-2">
      <div className="row p-0">
        <div className="col-lg-6 col-md-6 px-0">
          <h2 className="main-content-title fs-24 mb-1">Welcome To Dashboard</h2>
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item"><a>Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
          </ol>
        </div>
        <div className="col-lg-6 col-md-6 px-0 d-flex align-items-center">
          <div className="w-100">
            <div className="w-100 text-end">
              <button type="button" className="btn btn-light bg-white border-0 me-2">
                <i className="fa fa-download me-2 fs-14" />
                Import
              </button>
              <button type="button" className="btn btn-light bg-white border-0  me-2">
                <i className="fa fa-filter me-2 fs-14" />
                Filter
              </button>
              <button type="button" className="btn  btn-icon-text">
                <i className="fa fa-download me-2 fs-14" />
                Download Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      {/* item card start */}
      <div className="col-lg-3 col-md-6 mt-md-4 px-md-0 dashboard-card px-lg-0 pr-1">
        <div className="card custom-card">
          <div className="card-body">
            <div className="card-item">
              <div className="card-item-title mb-2">
                <label className="main-content-label fs-13 fw-bold mb-1">
                  Total Revenue
                </label>
                <span className="d-block fs-12 mb-0 text-muted">
                  Previous month vs this months
                </span>
              </div>
              <div className="card-item-body">
                <div className="card-item-text">
                  <h4 className="fw-bold">$5,900.00</h4> <small><b className="text-success">55%</b> higher</small>
                </div>
                <div className="card-icon">
                  <i className="fa fa-credit-card" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mt-md-4 px-md-0 dashboard-card px-lg-0 pr-1 pr-md-1">
        <div className="card custom-card">
          <div className="card-body">
            <div className="card-item">
              <div className="card-item-title mb-2">
                <label className="main-content-label fs-13 fw-bold mb-1">
                  Number of Users
                </label>
                <span className="d-block fs-12 mb-0 text-muted">
                  Previous month vs this months
                </span>
              </div>
              <div className="card-item-body">
                <div className="card-item-text">
                  <h4 className="fw-bold">200.00</h4> <small><b className="text-success">55%</b> higher</small>
                </div>
                <div className="card-icon">
                  <i className="fa fa-users" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mt-md-4 px-md-0 dashboard-card px-lg-0 pr-1">
        <div className="card custom-card">
          <div className="card-body">
            <div className="card-item">
              <div className="card-item-title mb-2">
                <label className="main-content-label fs-13 fw-bold mb-1">
                  Total subscription plans
                </label>
                <span className="d-block fs-12 mb-0 text-muted">
                  Previous month vs this months
                </span>
              </div>
              <div className="card-item-body">
                <div className="card-item-text">
                  <h4 className="fw-bold">22.2K</h4> <small><b className="text-success">66%</b> higher</small>
                </div>
                <div className="card-icon">
                  <i className="fa fa-line-chart" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mt-md-4 px-md-0 dashboard-card px-lg-0">
        <div className="card custom-card">
          <div className="card-body">
            <div className="card-item">
              <div className="card-item-title mb-2">
                <label className="main-content-label fs-13 fw-bold mb-1">
                  The number of tickets
                </label>
                <span className="d-block fs-12 mb-0 text-muted">
                  Previous month vs this months
                </span>
              </div>
              <div className="card-item-body">
                <div className="card-item-text">
                  <h4 className="fw-bold">22+</h4> <small><b className="text-success">66%</b>
                    higher</small>
                </div>
                <div className="card-icon">
                  <i className="fa fa-ticket" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* item card end */}
      {/* item bar chart start */}
      <div className="col-lg-7 mt-4 px-lg-0 pr-1 pr-md-1">
        <div className="bar-chart">
          <h4 className="text-dark px-2 pt-4">Project Budget</h4>
          <p className="text-color px-2">The Project Budget is a tool used by project
            managers
            to
            estimate the total cost of a project
          </p>
          <div className="row">
            <div className="col-12">
              <canvas id="myLineChart" />
            </div>
          </div>
        </div>
        <div className="sm-card mt-4">
          <div className="row ml-1">
            <div className="col-lg-6 col-md-6 px-md-0 px-lg-0 pr-1 task-wrapper">
              <div className="card custom-card overflow-hidden ">
                <div className="card-header d-block border-bottom-0 pb-0">
                  <div>
                    <div className="d-md-flex">
                      <label className="main-content-label my-auto pt-2">Today
                        tasks</label>
                      <div className="ms-auto mt-3 d-flex">
                        <div className="me-3 d-flex text-muted fs-13">
                          <span className="legend rounded-circle" />
                          Project
                        </div>
                        <div className="d-flex text-muted fs-13">
                          <span className="legend rounded-circle" />
                          Inprogress
                        </div>
                      </div>
                    </div>
                    <span className="d-block fs-12 mt-2 mb-0 text-muted">
                      UX UI &amp; Backend Developement. </span>
                  </div>
                </div>
                <div className="card-body px-2">
                  <div className="row px-lg-0">
                    <div className="col-sm-6 my-auto">
                      <h6 className="mb-3 fs-14 fw-normal">Project-Budget</h6>
                      <div className="text-start">
                        <h3 className="fw-bold me-3 mb-2 text-color-custom">$5,240
                        </h3>
                        <p className="fs-12 my-auto text-muted">May 28 - June 01
                          (2018)
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 ">
                      <div className="px-3">
                        <div className="pie" style={{"-p": 50}}> 50%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 px-md-0 px-lg-0 project-wrapper">
              <div className="card custom-card ">
                <div className="card-header  border-bottom-0 pb-0">
                  <div>
                    <div className="d-flex">
                      <label className="main-content-label my-auto pt-2">
                        Top Inquiries</label>
                    </div>
                    <span className="d-block fs-12 mt-2 mb-0 text-muted">
                      project work involves a group of students investigating .
                    </span>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row mt-2 ml-1">
                    <div className="col-5 px-lg-0">
                      <span className="card-text-ux">Brand identity</span>
                    </div>
                    <div className="col-3 my-auto px-lg-0 pr-1 pr-md-1">
                      <div className="progress border">
                        <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{width: '90%'}}>
                          {/* <span className="sr-only">70% Complete</span> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-4 px-lg-0">
                      <div className="d-flex"> <span className="fs-13">
                          <i className="text-success fe fe-arrow-up" />
                          <b>24.75%</b>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4 ml-1">
                    <div className="col-5 px-lg-0">
                      <span className="card-text-ux">UI &amp; UX design</span>
                    </div>
                    <div className="col-3 my-auto px-lg-0 pr-1 pr-md-1">
                      <div className="progress border">
                        <div className="progress-bar" role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} style={{width: '20%'}}>
                          {/* <span className="sr-only">70% Complete</span> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-4 px-lg-0">
                      <div className="d-flex"> <span className="fs-13">
                          <i className="text-danger fe fe-arrow-down" />
                          <b>12.34%</b>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4 ml-1">
                    <div className="col-5 px-lg-0">
                      <span className="card-text-ux">Product design</span>
                    </div>
                    <div className="col-3 my-auto px-lg-0 pr-1 pr-md-1">
                      <div className="progress border">
                        <div className="progress-bar" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '50%'}}>
                          {/* <span className="sr-only">70% Complete</span> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-4 px-lg-0">
                      <div className="d-flex"> <span className="fs-13">
                          <i className="text-success  fe fe-arrow-up" />
                          <b>12.75%</b>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className=" gradient-custom-2">
          <div className="mt-4">
            <div className="card">
              <div className="card-body text-white">
                <table className="table text-white mb-0">
                  <thead>
                    <tr>
                      <th scope="col">Team Member</th>
                      <th scope="col">Task</th>
                      <th scope="col">Priority</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="fw-normal">
                      <th>
                        <div className="d-flex align-items-center gap-2">
                          <img src="img/Users/5.jpg" alt="avatar 1" style={{width: 45, height: 'auto', borderRadius: '100%'}} />
                          <span className="text-custom fs-12">Danny
                            McChain</span>
                        </div>
                      </th>
                      <td className="align-middle">Office rent</td>
                      <td className="align-middle">
                        <h6 className="mb-0"><span className="badge bg-warning">Middle
                            priority</span></h6>
                      </td>
                      <td className="align-middle">
                        <div className="d-flex align-item-center">
                          <button className="btn btn-light bg-white border-0">
                            <i className="fa fa-check fa-lg text-success me-3" />
                          </button>
                          <button className="btn btn-light bg-white border-0">
                            <i className="fa fa-trash fa-lg text-warning" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="fw-normal">
                      <th>
                        <div className="d-flex align-items-center gap-2">
                          <img src="img/Users/4.jpg" alt="avatar 1" style={{width: 45, height: 'auto', borderRadius: '100%'}} />
                          <span className="text-custom fs-12">Alexa Chung</span>
                        </div>
                      </th>
                      <td className="align-middle">Office grocery shopping
                      </td>
                      <td className="align-middle">
                        <h6 className="mb-0"><span className="badge bg-danger">High
                            priority</span></h6>
                      </td>
                      <td className="align-middle">
                        <div className="d-flex align-item-center">
                          <button className="btn btn-light bg-white border-0">
                            <i className="fa fa-check fa-lg text-success me-3" />
                          </button>
                          <button className="btn btn-light bg-white border-0">
                            <i className="fa fa-trash fa-lg text-warning" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="fw-normal">
                      <th className="border-0">
                        <div className="d-flex align-items-center  gap-2">
                          <img src="img/Users/8.jpg" alt="avatar 1" style={{width: 45, height: 'auto', borderRadius: '100%'}} />
                          <span className="text-custom fs-12">Ben Smith</span>
                        </div>
                      </th>
                      <td className="border-0 align-middle">Ask for Lunch to
                        Clients</td>
                      <td className="border-0 align-middle">
                        <h6 className="mb-0"><span className="badge bg-success">Low
                            priority</span></h6>
                      </td>
                      <td className="border-0 align-middle">
                        <div className="d-flex align-item-center">
                          <button className="btn btn-light bg-white border-0">
                            <i className="fa fa-check fa-lg text-success me-3" />
                          </button>
                          <button className="btn btn-light bg-white border-0">
                            <i className="fa fa-trash fa-lg text-warning" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="col-lg-5 mt-4 px-lg-0 pb-0">
        <div className="users-card-list">
          <div className="card custom-card table-responsive card-dashboard-calendar">
            <label className="main-content-label mb-2 pt-1">
              Recent transactions
            </label>
            <span className="d-block fs-12 mb-2 text-muted">
              Projects where development work is on completion
            </span>
            <table className="table m-b-0 transcations mt-2">
              <tbody>
                <tr>
                  <td className="wd-5p">
                    <div className="main-img-user avatar-lg">
                         <img alt="avatar" className="rounded-circle me-3" src="img/Users/5.jpg" />
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-middle ms-3">
                      <div className="d-inline-block">
                        <h6 className="mb-1">Flicker</h6>
                        <p className="mb-0 fs-13 text-muted">App improvement</p>
                      </div>
                    </div>
                  </td>
                  <td className="text-end">
                    <div className="d-inline-block">
                      <h6 className="mb-2 fs-15 fw-semibold">$45.234
                        <i className="fa fa-arrow-down ms-2 text-success m-l-10" />
                      </h6>
                      <p className="mb-0 tx-11 text-muted">12 Jan 2020</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="wd-5p">
                    <div className="main-img-user avatar-lg"> <img alt="avatar" className="rounded-circle me-3" src="/img/Users/6.jpg" />
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-middle ms-3">
                      <div className="d-inline-block">
                        <h6 className="mb-1">Intoxica</h6>
                        <p className="mb-0 fs-13 text-muted">Milestone</p>
                      </div>
                    </div>
                  </td>
                  <td className="text-end">
                    <div className="d-inline-block">
                      <h6 className="mb-2 fs-15 fw-semibold">$23.452
                        <i className="fa fa-arrow-down ms-2 text-danger m-l-10" />
                      </h6>
                      <p className="mb-0 tx-11 text-muted">23 Jan 2020</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="wd-5p">
                    <div className="main-img-user avatar-lg"> <img alt="avatar" className="rounded-circle me-3" src="img/Users/7.jpg" />
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-middle ms-3">
                      <div className="d-inline-block">
                        <h6 className="mb-1">Digiwatt</h6>
                        <p className="mb-0 fs-13 text-muted">Sales executive</p>
                      </div>
                    </div>
                  </td>
                  <td className="text-end">
                    <div className="d-inline-block">
                      <h6 className="mb-2 fs-15 fw-semibold">$78.001<i className="fa fa-arrow-down ms-2 text-danger m-l-10" />
                      </h6>
                      <p className="mb-0 tx-11 text-muted">4 Apr 2020</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="wd-5p">
                    <div className="main-img-user avatar-lg"> <img alt="avatar" className="rounded-circle me-3" src="img/Users/8.jpg" />
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-middle ms-3">
                      <div className="d-inline-block">
                        <h6 className="mb-1">Flicker</h6>
                        <p className="mb-0 fs-13 text-muted">Milestone2</p>
                      </div>
                    </div>
                  </td>
                  <td className="text-end">
                    <div className="d-inline-block">
                      <h6 className="mb-2 fs-15 fw-semibold">$37.285
                        <i className="fa fa-arrow-down ms-2 text-success m-l-10" />
                      </h6>
                      <p className="mb-0 tx-11 text-muted">4 Apr 2020</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="wd-5p pb-0">
                    <div className="main-img-user avatar-lg"> <img alt="avatar" className="rounded-circle me-3" src="img/Users/4.jpg" />
                    </div>
                  </td>
                  <td className="pb-0">
                    <div className="d-flex align-middle ms-3">
                      <div className="d-inline-block">
                        <h6 className="mb-1">Flicker</h6>
                        <p className="mb-0 fs-13 text-muted">App improvement</p>
                      </div>
                    </div>
                  </td>
                  <td className="text-end pb-0">
                    <div className="d-inline-block">
                      <h6 className="mb-2 fs-15 fw-semibold">$25.341
                        <i className="fa fa-arrow-down ms-2 text-danger m-l-10" />
                      </h6>
                      <p className="mb-0 tx-11 text-muted">4 Apr 2020</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="card custom-card-2 mt-4">
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <div className="card-item-title"> <label className="main-content-label fs-13 fw-bold mb-2">Project
                    Launch</label>
                  <span className="d-block fs-12 mb-0 text-muted">
                    the project is going to launch
                  </span>
                </div>
                <p className="mb-0 fs-24 mt-2"><b className="text-custom">145 days</b></p>
                <a href className="text-muted">12 Monday, Oct 2020
                </a>
              </div>
              <div className="col-6">
                <img src="img/home/28.png" alt="image" className="best-emp" />
              </div>
            </div>
          </div>
        </div>
        <div className="card custom-card mt-4">
          <div className="card-body">
            <div className="d-flex"> <label className="main-content-label my-auto">Website
                Design</label>
              <div className="ms-auto  d-flex">
                <div className="me-3 d-flex text-muted fs-13">Running</div>
              </div>
            </div>
            <div className="card-bar-chart">
              <div className="wrapper">
                <div style={{left: '0%', height: '22%'}} />
                <div style={{left: '10%', height: '11%'}} />
                <div style={{left: '20%', height: '6%'}} />
                <div style={{left: '30%', height: '49%'}} />
                <div style={{left: '40%', height: '28%'}} />
                <div style={{left: '50%', height: '78%'}} />
                <div style={{left: '60%', height: '88%'}} />
                <div style={{left: '70%', height: '66%'}} />
                <div style={{left: '80%', height: '70%'}} />
                <div style={{left: '90%', height: '60%'}} />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="mt-4">
                  <div className="d-flex mb-2">
                    <h5 className="fs-15 my-auto text-muted fw-normal">Client : </h5>
                    <h5 className="fs-15 my-auto ms-3">John Deo</h5>
                  </div>
                  <div className="d-flex mb-0">
                    <h5 className="fs-13 my-auto text-muted fw-normal">Deadline : </h5>
                    <h5 className="fs-13 my-auto text-muted ms-2">25 Dec 2020</h5>
                  </div>
                </div>
              </div>
              <div className="col col-auto">
                <div className="mt-3">
                  <div className>
                    <img alt className="ht-50" src="img/Users/6.jpg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* item bar chart start */}
    </div>
  </div>
</div>

    </>
  )
}

export default Dashboard