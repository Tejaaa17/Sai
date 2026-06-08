import Header from "./_components/Header";
import Sidebar from "./_components/Sidebar";
import Footer from "./_components/Footer";

export default function HomePage() {
  return (
    <div className="page-layout">
      {/* Page Header */}
      <Header />

      {/* Sidebar Menu & Sidebar Right */}
      <Sidebar />

      {/* Main Content Wrapper */}
      <main className="app-wrapper">
        <div className="container">
          <div className="app-page-head d-flex flex-wrap gap-3 align-items-center justify-content-between">
            <div className="clearfix">
              <h1 className="app-page-title">Dashboard</h1>
              <span>Mon, Aug 01, 2024 - Sep 01, 2024</span>
            </div>
            <button
              type="button"
              className="btn btn-primary waves-effect waves-light"
              data-bs-toggle="modal"
              data-bs-target="#addEmployeeModal"
            >
              <i className="fi fi-rr-plus me-1"></i> Add Employee
            </button>
          </div>

          <div className="row">
            {/* Stats Cards */}
            <div className="col-xxl-9">
              <div className="row">
                <div className="col-6 col-md-4 col-lg">
                  <div className="card bg-secondary bg-opacity-05 shadow-none border-0">
                    <div className="card-body">
                      <div className="avatar bg-secondary shadow-secondary rounded-circle text-white mb-3">
                        <i className="fi fi-sr-users"></i>
                      </div>
                      <h3>1206</h3>
                      <h6 className="mb-0">Total Employee</h6>
                      <small className="fw-medium">
                        <span className="text-success">
                          <i className="fi fi-rr-arrow-small-up scale-3x"></i> +5%
                        </span>{" "}
                        Last Month
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg">
                  <div className="card bg-info bg-opacity-05 shadow-none border-0">
                    <div className="card-body">
                      <div className="avatar bg-info shadow-info rounded-circle text-white mb-3">
                        <i className="fi fi-sr-user-add"></i>
                      </div>
                      <h3>218</h3>
                      <h6 className="mb-0">New Employee</h6>
                      <small className="fw-medium">
                        <span className="text-success">
                          <i className="fi fi-rr-arrow-small-up scale-3x"></i> +3.2%
                        </span>{" "}
                        Last Month
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg">
                  <div className="card bg-secondary bg-opacity-05 shadow-none border-0">
                    <div className="card-body">
                      <div className="avatar bg-warning shadow-warning rounded-circle text-white mb-3">
                        <i className="fi fi-sr-delete-user"></i>
                      </div>
                      <h3>126</h3>
                      <h6 className="mb-0">On Leave</h6>
                      <small className="fw-medium">
                        <span className="text-danger">
                          <i className="fi fi-rr-arrow-small-down scale-3x"></i> -2%
                        </span>{" "}
                        Last Month
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-6 col-lg">
                  <div className="card bg-success bg-opacity-05 shadow-none border-0">
                    <div className="card-body">
                      <div className="avatar bg-success shadow-success rounded-circle text-white mb-3">
                        <i className="fi fi-sr-shopping-bag"></i>
                      </div>
                      <h3>776</h3>
                      <h6 className="mb-0">Job Applicants</h6>
                      <small className="fw-medium">
                        <span className="text-success">
                          <i className="fi fi-rr-arrow-small-down scale-3x"></i> +8%
                        </span>{" "}
                        Last Month
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg">
                  <div className="card bg-danger bg-opacity-05 shadow-none border-0">
                    <div className="card-body">
                      <div className="avatar bg-danger shadow-danger rounded-circle text-white mb-3">
                        <i className="fi fi-sr-clock-three"></i>
                      </div>
                      <h3>1017</h3>
                      <h6 className="mb-0">Over Time</h6>
                      <small className="fw-medium">
                        <span className="text-danger">
                          <i className="fi fi-rr-arrow-small-down scale-3x"></i> -8%
                        </span>{" "}
                        Last Month
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Announcement Card */}
            <div className="col-xxl-3">
              <div className="card overflow-hidden z-1">
                <div className="card-body">
                  <div className="w-75">
                    <h6 className="card-title">Create Announcement</h6>
                    <p>Make a announcement to your employee</p>
                  </div>
                  <img
                    src="/assets/images/media/svg/media1.svg"
                    alt=""
                    className="position-absolute bottom-0 end-0 z-n1"
                  />
                </div>
                <div className="card-footer border-0 pt-0">
                  <a href="/calendar" className="btn btn-outline-light waves-effect btn-shadow">
                    Create Now
                  </a>
                </div>
              </div>
            </div>

            {/* Charts Row */}
            <div className="col-xxl-7 col-lg-6">
              <div className="card">
                <div className="card-header d-flex align-items-center justify-content-between border-0 pb-0">
                  <h6 className="card-title mb-0">Employee Structure</h6>
                  <button type="button" className="btn btn-sm btn-outline-light btn-shadow waves-effect">
                    Download Report
                  </button>
                </div>
                <div className="card-body p-2">
                  <div id="chartEmployee"></div>
                </div>
              </div>
            </div>

            <div className="col-xxl-5 col-lg-6">
              <div className="card">
                <div className="card-header d-flex align-items-center justify-content-between border-0 pb-0">
                  <h6 className="card-title mb-0">Company Pay</h6>
                  <select
                    className="selectpicker"
                    data-style="btn-sm btn-outline-light btn-shadow waves-effect"
                    defaultValue="2024"
                  >
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                  </select>
                </div>
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-sm-6">
                      <div className="maxw-250px ratio ratio-1x1">
                        <canvas id="companyPayChart"></canvas>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="d-grid gap-2">
                        <div className="d-flex gap-1 align-items-center mx-1">
                          <i className="fa fa-circle text-danger text-2xs me-1"></i>
                          <strong className="text-dark fw-semibold">15%</strong> Salary
                        </div>
                        <div className="d-flex gap-1 align-items-center mx-1">
                          <i className="fa fa-circle text-success text-2xs me-1"></i>
                          <strong className="text-dark fw-semibold">08%</strong> Bonus
                        </div>
                        <div className="d-flex gap-1 align-items-center mx-1">
                          <i className="fa fa-circle text-info text-2xs me-1"></i>
                          <strong className="text-dark fw-semibold">20%</strong> Commission
                        </div>
                        <div className="d-flex gap-1 align-items-center mx-1">
                          <i className="fa fa-circle text-secondary text-2xs me-1"></i>
                          <strong className="text-dark fw-semibold">11%</strong> Overtime
                        </div>
                        <div className="d-flex gap-1 align-items-center mx-1">
                          <i className="fa fa-circle text-primary text-2xs me-1"></i>
                          <strong className="text-dark fw-semibold">28%</strong> Reimbursement
                        </div>
                        <div className="d-flex gap-1 align-items-center mx-1">
                          <i className="fa fa-circle text-warning text-2xs me-1"></i>
                          <strong className="text-dark fw-semibold">18%</strong> Benefits
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="row gy-3 align-items-center">
                    <div className="col-sm-6">
                      <p className="mb-0">2024 Download Report Company Trends and Insights</p>
                    </div>
                    <div className="col-sm-6 text-sm-end">
                      <button type="button" className="btn btn-primary waves-effect waves-light">
                        <i className="fi fi-rr-download me-1"></i> Download Report
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Applications & Leaves */}
            <div className="col-xxl-4 col-lg-5">
              <div className="card">
                <div className="card-header d-flex align-items-center justify-content-between border-0 pb-0">
                  <h6 className="card-title mb-0">Recent Job Application</h6>
                  <a href="/recruitment" className="btn-link">
                    View All
                  </a>
                </div>
                <div className="card-body pb-3">
                  <ul className="list-group list-group-hover list-group-smooth list-group-unlined list-group-outer">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <div className="avatar rounded-circle me-1">
                        <img src="/assets/images/avatar/avatar1.webp" alt="" />
                      </div>
                      <div className="ms-2 me-auto">
                        <h6 className="mb-0">Sophia Hall</h6>
                        <small>Front-End Developer</small>
                      </div>
                      <div className="dropdown select-status">
                        <button
                          className="btn btn-sm btn-secondary dropdown-toggle waves-effect waves-light"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Select Status
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                              data-class="btn-outline-light"
                              data-selected="true"
                            >
                              Pending
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-class="btn-subtle-primary">
                              Approved
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-class="btn-subtle-secondary">
                              Rejected
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <div className="avatar rounded-circle me-1">
                        <img src="/assets/images/avatar/avatar2.webp" alt="" />
                      </div>
                      <div className="ms-2 me-auto">
                        <h6 className="mb-0">Emma Smith</h6>
                        <small>Back-End Developer</small>
                      </div>
                      <div className="dropdown select-status">
                        <button
                          className="btn btn-sm btn-secondary dropdown-toggle waves-effect waves-light"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Select Status
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-class="btn-outline-light">
                              Pending
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                              data-class="btn-subtle-primary"
                              data-selected="true"
                            >
                              Approved
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-class="btn-subtle-secondary">
                              Rejected
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <div className="avatar rounded-circle me-1">
                        <img src="/assets/images/avatar/avatar3.webp" alt="" />
                      </div>
                      <div className="ms-2 me-auto">
                        <h6 className="mb-0">Olivia Clark</h6>
                        <small>UI/UX Designer</small>
                      </div>
                      <div className="dropdown select-status">
                        <button
                          className="btn btn-sm btn-secondary dropdown-toggle waves-effect waves-light"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Select Status
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-class="btn-outline-light">
                              Pending
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-class="btn-subtle-primary">
                              Approved
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                              data-class="btn-subtle-secondary"
                              data-selected="true"
                            >
                              Rejected
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <div className="avatar rounded-circle me-1">
                        <img src="/assets/images/avatar/avatar4.webp" alt="" />
                      </div>
                      <div className="ms-2 me-auto">
                        <h6 className="mb-0">Ava Lewis</h6>
                        <small>Web Designer</small>
                      </div>
                      <div className="dropdown select-status">
                        <button
                          className="btn btn-sm btn-secondary dropdown-toggle waves-effect waves-light"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Select Status
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                              data-class="btn-outline-light"
                              data-selected="true"
                            >
                              Pending
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-class="btn-subtle-primary">
                              Approved
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-class="btn-subtle-secondary">
                              Rejected
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <div className="avatar rounded-circle me-1">
                        <img src="/assets/images/avatar/avatar5.webp" alt="" />
                      </div>
                      <div className="ms-2 me-auto">
                        <h6 className="mb-0">Isabella Walker</h6>
                        <small>Full-Stack Developer</small>
                      </div>
                      <div className="dropdown select-status">
                        <button
                          className="btn btn-sm btn-secondary dropdown-toggle waves-effect waves-light"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Select Status
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-class="btn-outline-light">
                              Pending
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                              data-class="btn-subtle-primary"
                              data-selected="true"
                            >
                              Approved
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-class="btn-subtle-secondary">
                              Rejected
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-xxl-8 col-lg-7">
              <div className="card overflow-hidden">
                <div className="card-header d-flex flex-wrap gap-3 align-items-center justify-content-between border-0 pb-0">
                  <h6 className="card-title mb-0">Employee’s Leave</h6>
                  <div id="dt_EmployeeLeave_Search"></div>
                </div>
                <div className="card-body px-3 pt-2 pb-0 gradient-layer">
                  <table id="dt_EmployeeLeave" className="table display table-row-rounded">
                    <thead className="table-light">
                      <tr>
                        <th className="minw-150px">Name</th>
                        <th className="minw-200px">Department</th>
                        <th className="minw-150px">Days</th>
                        <th className="minw-150px">Date</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>William Johnson</td>
                        <td>Back-End Developer</td>
                        <td>2 Days</td>
                        <td>12 July 2024</td>
                        <td>
                          <div className="dropdown select-status">
                            <button
                              className="btn btn-sm btn-secondary dropdown-toggle waves-effect waves-light"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Select Status
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a className="dropdown-item" href="javascript:void(0);" data-class="btn-outline-light">
                                  Pending
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                  data-class="btn-subtle-primary"
                                  data-selected="true"
                                >
                                  Approved
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                  data-class="btn-subtle-secondary"
                                >
                                  Rejected
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Benjamin Martinez</td>
                        <td>Full-Stack Developer</td>
                        <td>1st Half Day</td>
                        <td>03 July 2024</td>
                        <td>
                          <div className="dropdown select-status">
                            <button
                              className="btn btn-sm btn-secondary dropdown-toggle waves-effect waves-light"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Select Status
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a className="dropdown-item" href="javascript:void(0);" data-class="btn-outline-light">
                                  Pending
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                  data-class="btn-subtle-primary"
                                  data-selected="true"
                                >
                                  Approved
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                  data-class="btn-subtle-secondary"
                                >
                                  Rejected
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Alexander Brown</td>
                        <td>Mobile App Developer</td>
                        <td>4 Days</td>
                        <td>27 July 2024</td>
                        <td>
                          <div className="dropdown select-status">
                            <button
                              className="btn btn-sm btn-secondary dropdown-toggle waves-effect waves-light"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Select Status
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a className="dropdown-item" href="javascript:void(0);" data-class="btn-outline-light">
                                  Pending
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                  data-class="btn-subtle-primary"
                                  data-selected="true"
                                >
                                  Approved
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                  data-class="btn-subtle-secondary"
                                >
                                  Rejected
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Michael Davis</td>
                        <td>UI/UX Designer</td>
                        <td>2nd Half Day</td>
                        <td>05 June 2024</td>
                        <td>
                          <div className="dropdown select-status">
                            <button
                              className="btn btn-sm btn-secondary dropdown-toggle waves-effect waves-light"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Select Status
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a className="dropdown-item" href="javascript:void(0);" data-class="btn-outline-light">
                                  Pending
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                  data-class="btn-subtle-primary"
                                  data-selected="true"
                                >
                                  Approved
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                  data-class="btn-subtle-secondary"
                                >
                                  Rejected
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>David Wilson</td>
                        <td>DevOps Engineer</td>
                        <td>1 Days</td>
                        <td>04 Aug 2024</td>
                        <td>
                          <div className="dropdown select-status">
                            <button
                              className="btn btn-sm btn-secondary dropdown-toggle waves-effect waves-light"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Select Status
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a className="dropdown-item" href="javascript:void(0);" data-class="btn-outline-light">
                                  Pending
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                  data-class="btn-subtle-primary"
                                  data-selected="true"
                                >
                                  Approved
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                  data-class="btn-subtle-secondary"
                                >
                                  Rejected
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Employee Type & Team */}
            <div className="col-xxl-3 col-md-6">
              <div className="card">
                <div className="card-header d-flex align-items-center justify-content-between border-0 pb-0">
                  <h6 className="card-title mb-0">Employee Type </h6>
                  <div className="btn-group">
                    <button
                      className="btn btn-white btn-sm btn-shadow btn-icon waves-effect dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fi fi-rr-menu-dots"></i>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a className="dropdown-item" href="javascript:void(0);">
                          Onsite
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="javascript:void(0);">
                          Remote
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="javascript:void(0);">
                          Hybrid
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body py-0 px-3 d-flex align-items-center justify-content-center">
                  <div className="maxw-250px ratio ratio-1x1">
                    <canvas id="employeeTypeChart"></canvas>
                  </div>
                </div>
                <div className="card-footer pt-0 border-0">
                  <div className="d-flex flex-wrap gap-2 justify-content-center">
                    <div className="d-flex gap-1 align-items-center mx-1">
                      <i className="fa fa-circle text-primary text-2xs"></i>
                      <strong className="text-dark fw-semibold">800</strong> Onsite
                    </div>
                    <div className="d-flex gap-1 align-items-center mx-1">
                      <i className="fa fa-circle text-secondary text-2xs"></i>
                      <strong className="text-dark fw-semibold">105</strong> Remote
                    </div>
                    <div className="d-flex gap-1 align-items-center mx-1">
                      <i className="fa fa-circle text-info text-2xs"></i>
                      <strong className="text-dark fw-semibold">301</strong> Hybrid
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-3 col-md-6">
              <div className="card">
                <div className="card-header d-flex align-items-center justify-content-between border-0 pb-0">
                  <h6 className="card-title mb-0">Team</h6>
                  <div className="clearfix">
                    <a href="/extended-ui/team" className="btn-link">
                      View All
                    </a>
                  </div>
                </div>
                <div className="card-body px-3 pb-3">
                  <ul className="list-group list-group-hover list-group-smooth list-group-space-sm">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <div className="me-auto">
                        <h6 className="mb-0">Marketing</h6>
                        <small className="fw-medium text-body d-block">
                          Member <span className="text-primary">03</span>
                        </small>
                      </div>
                      <div className="avatar-group">
                        <div className="avatar avatar-xs rounded-circle border border-2 border-white">
                          <img src="/assets/images/avatar/avatar1.webp" alt="" />
                        </div>
                        <div className="avatar avatar-xs rounded-circle border border-2 border-white">
                          <img src="/assets/images/avatar/avatar2.webp" alt="" />
                        </div>
                        <div className="avatar avatar-xs rounded-circle border border-2 border-white">
                          <img src="/assets/images/avatar/avatar3.webp" alt="" />
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <div className="me-auto">
                        <h6 className="mb-0">Development</h6>
                        <small className="fw-medium text-body d-block">
                          Member <span className="text-secondary">40</span>
                        </small>
                      </div>
                      <div className="avatar-group">
                        <div className="avatar avatar-xs rounded-circle border border-2 border-white">
                          <img src="/assets/images/avatar/avatar4.webp" alt="" />
                        </div>
                        <div className="avatar avatar-xs rounded-circle border border-2 border-white">
                          <img src="/assets/images/avatar/avatar5.webp" alt="" />
                        </div>
                        <div className="avatar avatar-xs rounded-circle border border-2 border-white">
                          <img src="/assets/images/avatar/avatar1.webp" alt="" />
                        </div>
                        <div className="avatar avatar-xs rounded-circle border border-2 border-white">
                          <img src="/assets/images/avatar/avatar2.webp" alt="" />
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Performance, Attendance, Schedule, Tasks */}
            <div className="col-xxl-6">
              <div className="card-group overflow-hidden">
                <div className="card">
                  <div className="card-header d-flex align-items-center justify-content-between border-0 pb-0">
                    <h6 className="card-title mb-0">Schedule</h6>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-light btn-shadow waves-effect text-primary ms-3"
                    >
                      <i className="fi fi-rr-plus text-2xs me-1"></i> Create New
                    </button>
                  </div>
                  <div className="card-body p-3">
                    <input
                      type="text"
                      className="form-control d-none flatpickr-inline-custom"
                      placeholder="Select Date.."
                      id="dateTimeFlatpickr"
                    />
                  </div>
                </div>
                <div className="card">
                  <div className="card-body gradient-layer" style={{ height: "325px" }} data-simplebar>
                    <div className="p-3 bg-light bg-opacity-50 mb-2 rounded">
                      <div className="d-flex align-items-center justify-content-between">
                        <h6 className="mb-0">Team Stand Up</h6>
                        <div className="clearfix d-flex align-items-center">
                          <div className="btn-group">
                            <button
                              className="btn btn-action-dark btn-sm btn-icon waves-effect dropdown-toggle"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fi fi-rr-menu-dots"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a className="dropdown-item" href="javascript:void(0);">
                                  Edit
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="javascript:void(0);">
                                  Delete
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="text-2xs d-flex gap-1 align-items-center">
                        <img src="/assets/images/icons/google-meet.svg" alt="" />
                        <span>On Google Meet</span>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <span className="badge bg-white text-black fw-semibold">Marketing</span>
                        <span className="text-primary text-2xs fw-semibold d-flex align-items-center">
                          <i className="fi fi-rr-clock-three me-1"></i> 06:00 - 07:00
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="card">
                <div className="card-header d-flex align-items-center justify-content-between border-0">
                  <h6 className="card-title mb-0">Employee Performance</h6>
                  <div className="dropdown">
                    <button
                      className="btn dropdown-toggle btn-white btn-shadow waves-effect btn-sm"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Last Month
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="javascript:void(0);">
                          Last Month
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body px-2 pb-2 pt-0">
                  <table className="table table-sm table-borderless table-row-rounded mb-0">
                    <thead className="table-light">
                      <tr>
                        <th>Name</th>
                        <th>Score</th>
                        <th className="text-end">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="avatar rounded-circle">
                              <img src="/assets/images/avatar/avatar1.webp" alt="" />
                            </div>
                            <div className="ms-2 me-auto">
                              <h6 className="mb-0">Olivia Clark</h6>
                              <small className="text-body">UI/UX Designer</small>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div id="employeeScore1"></div>
                        </td>
                        <td>
                          <div className="btn-group float-end">
                            <button
                              className="btn btn-white btn-sm btn-shadow btn-icon waves-effect dropdown-toggle"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fi fi-rr-menu-dots"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a className="dropdown-item" href="javascript:void(0);">
                                  Edit
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="card">
                <div className="card-header d-flex align-items-center justify-content-between border-0 pb-0">
                  <h6 className="card-title mb-0">Attendance Rate</h6>
                  <a href="javascript:void(0);" className="btn btn-sm btn-outline-light waves-effect btn-shadow">
                    Download Report
                  </a>
                </div>
                <div className="card-body px-1 py-2">
                  <div id="chartAttendanceRate"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add Employee Modal */}
        <div className="modal fade" id="addEmployeeModal" tabIndex="-1" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header py-3">
                <h5 className="modal-title">Add Employee</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">
                      Full Name
                    </label>
                    <input type="text" className="form-control" id="fullName" placeholder="Enter full name" />
                  </div>
                  <div className="text-end">
                    <button type="submit" className="btn btn-success">
                      Add Employee
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
