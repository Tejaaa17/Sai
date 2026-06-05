const dashboardHtml = `
<div class="page-layout">

  <!-- begin::GXON Page Header -->
  <header class="app-header">
    <div class="app-header-inner">
      <button class="app-toggler" type="button" aria-label="app toggler">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div class="app-header-start d-none d-md-flex">
        <form class="d-flex align-items-center h-100 w-lg-250px w-xxl-300px position-relative" action="#">
          <button type="button" class="btn btn-sm border-0 position-absolute start-0 ms-3 p-0">
            <i class="fi fi-rr-search"></i>
          </button>
          <input type="text" class="form-control rounded-5 ps-5" placeholder="Search anything's" data-bs-toggle="modal" data-bs-target="#searchResultsModal">
        </form>
        <ul class="navbar-nav gap-4 flex-row d-none d-xxl-flex">
          <li class="nav-item">
            <a class="nav-link" href="/analytics">Reports & Analytics</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/pages/faq">Help</a>
          </li>
        </ul>
      </div>
      <div class="app-header-end">
        <div class="px-lg-3 px-2 ps-0 d-flex align-items-center">
          <div class="dropdown">
            <button class="btn btn-icon btn-action-gray rounded-circle waves-effect waves-light position-relative" id="ld-theme" type="button" data-bs-auto-close="outside" aria-expanded="false" data-bs-toggle="dropdown">
              <i class="fi fi-rr-brightness scale-1x theme-icon-active"></i>
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li>
                <button type="button" class="dropdown-item d-flex gap-2 align-items-center" data-bs-theme-value="light" aria-pressed="false">
                  <i class="fi fi-rr-brightness scale-1x" data-theme="light"></i> Light
                </button>
              </li>
              <li>
                <button type="button" class="dropdown-item d-flex gap-2 align-items-center" data-bs-theme-value="dark" aria-pressed="false">
                  <i class="fi fi-rr-moon scale-1x" data-theme="dark"></i> Dark
                </button>
              </li>
              <li>
                <button type="button" class="dropdown-item d-flex gap-2 align-items-center" data-bs-theme-value="auto" aria-pressed="true">
                  <i class="fi fi-br-circle-half-stroke scale-1x" data-theme="auto"></i> Auto
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div class="vr my-3"></div>
        <div class="d-flex align-items-center gap-sm-2 gap-0 px-lg-4 px-sm-2 px-1">
          <a href="/email/inbox" class="btn btn-icon btn-action-gray rounded-circle waves-effect waves-light position-relative">
            <i class="fi fi-rr-envelope"></i>
            <span class="position-absolute top-0 end-0 p-1 mt-1 me-1 bg-danger border border-3 border-light rounded-circle">
              <span class="visually-hidden">New alerts</span>
            </span>
          </a>
          <div class="dropdown text-end">
            <button type="button" class="btn btn-icon btn-action-gray rounded-circle waves-effect waves-light" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">
              <i class="fi fi-rr-bell"></i>
            </button>
            <div class="dropdown-menu dropdown-menu-lg-end p-0 w-300px mt-2">
              <div class="px-3 py-3 border-bottom d-flex justify-content-between align-items-center">
                <h6 class="mb-0">Notifications <span class="badge badge-sm rounded-pill bg-primary ms-2">9</span>
                </h6>
                <i class="bi bi-x-lg cursor-pointer"></i>
              </div>
              <div class="p-2" style="height: 300px;" data-simplebar>
                <ul class="list-group list-group-hover list-group-smooth list-group-unlined">
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    <div class="avatar avatar-xs avatar-status-success rounded-circle me-1">
                      <img src="assets/images/avatar/avatar2.webp" alt="">
                    </div>
                    <div class="ms-2 me-auto">
                      <h6 class="mb-0">Emma Smith</h6>
                      <small class="text-body d-block">Need to update the details.</small>
                      <small class="text-muted position-absolute end-0 top-0 mt-2 me-3">7 hr ago</small>
                    </div>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    <div class="avatar avatar-xs bg-success rounded-circle text-white">D</div>
                    <div class="ms-2 me-auto">
                      <h6 class="mb-0">Design Team</h6>
                      <small class="text-body d-block">Check your shared folder.</small>
                      <small class="text-muted position-absolute end-0 top-0 mt-2 me-3">6 hr ago</small>
                    </div>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    <div class="avatar avatar-xs bg-dark rounded-circle text-white">
                      <i class="fi fi-rr-lock"></i>
                    </div>
                    <div class="ms-2 me-auto">
                      <h6 class="mb-0">Security Update</h6>
                      <small class="text-body d-block">Password successfully set.</small>
                      <small class="text-muted position-absolute end-0 top-0 mt-2 me-3">5 hr ago</small>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="p-2">
                <a href="javascript:void(0);" class="btn w-100 btn-primary waves-effect waves-light">View all notifications</a>
              </div>
            </div>
          </div>
          <a href="/calendar" class="btn btn-icon btn-action-gray rounded-circle waves-effect waves-light">
            <i class="fi fi-rr-calendar"></i>
          </a>
        </div>
        <div class="vr my-3"></div>
        <div class="dropdown text-end ms-sm-3 ms-2 ms-lg-4">
          <a href="#" class="d-flex align-items-center py-2" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">
            <div class="text-end me-2 d-none d-lg-inline-block">
              <div class="fw-bold text-dark">Robert Brown</div>
              <small class="text-body d-block lh-sm">
                <i class="fi fi-rr-angle-down text-3xs me-1"></i> Manager
              </small>
            </div>
            <div class="avatar avatar-sm rounded-circle avatar-status-success">
              <img src="assets/images/avatar/avatar1.webp" alt="">
            </div>
          </a>
          <ul class="dropdown-menu dropdown-menu-end w-225px mt-1">
            <li class="d-flex align-items-center p-2">
              <div class="avatar avatar-sm rounded-circle">
                <img src="assets/images/avatar/avatar1.webp" alt="">
              </div>
              <div class="ms-2">
                <div class="fw-bold text-dark">Robert Brown </div>
                <small class="text-body d-block lh-sm">robert@gmail.com</small>
              </div>
            </li>
            <li>
              <div class="dropdown-divider my-1"></div>
            </li>
            <li>
              <a class="dropdown-item d-flex align-items-center gap-2" href="/profile">
                <i class="fi fi-rr-user scale-1x"></i> View Profile
              </a>
            </li>
            <li>
              <a class="dropdown-item d-flex align-items-center gap-2 text-danger" href="/authentication/login-basic">
                <i class="fi fi-sr-exit scale-1x"></i> Log Out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  <!-- end::GXON Page Header -->

  <div class="modal fade" id="searchResultsModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header py-1 px-3">
          <form class="d-flex align-items-center position-relative w-100" action="#">
            <button type="button" class="btn btn-sm border-0 position-absolute start-0 p-0 text-sm ">
              <i class="fi fi-rr-search"></i>
            </button>
            <input type="text" class="form-control form-control-lg ps-4 border-0 shadow-none" id="searchInput" placeholder="Search anything's">
          </form>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body pb-2" style="height: 300px;" data-simplebar>
          <div id="recentlyResults">
            <span class="text-uppercase text-2xs fw-semibold text-muted d-block mb-2">Recently Searched:</span>
            <ul class="list-inline search-list">
              <li>
                <a class="search-item" href="/">
                  <i class="fi fi-rr-apps"></i> Dashboard
                </a>
              </li>
            </ul>
          </div>
          <div id="searchContainer"></div>
        </div>
      </div>
    </div>
  </div>

  <!-- begin::GXON Sidebar Menu -->
  <aside class="app-menubar" id="appMenubar">
    <div class="app-navbar-brand">
      <a class="navbar-brand-logo" href="/">
        <img src="assets/images/logo.svg" alt="GXON Admin Dashboard Logo">
      </a>
      <a class="navbar-brand-mini visible-light" href="/">
        <img src="assets/images/logo-text.svg" alt="GXON Admin Dashboard Logo">
      </a>
      <a class="navbar-brand-mini visible-dark" href="/">
        <img src="assets/images/logo-text-white.svg" alt="GXON Admin Dashboard Logo">
      </a>
    </div>
    <nav class="app-navbar" data-simplebar>
      <ul class="menubar">
        <li class="menu-item menu-arrow">
          <a class="menu-link" href="javascript:void(0);" role="button">
            <i class="fi fi-rr-apps"></i>
            <span class="menu-label">Dashboard</span>
          </a>
          <ul class="menu-inner">
            <li class="menu-item">
              <a class="menu-link" href="/">
                <span class="menu-label">Dashboard</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    <div class="app-footer">
      <a href="/pages/faq" class="btn btn-outline-light waves-effect btn-shadow btn-app-nav w-100">
        <i class="fi fi-rs-interrogation text-primary"></i>
        <span class="nav-text">Help and Support</span>
      </a>
    </div>
  </aside>
  <!-- end::GXON Sidebar Menu -->

  <main class="app-wrapper">
    <div class="container">
      <div class="app-page-head d-flex flex-wrap gap-3 align-items-center justify-content-between">
        <div class="clearfix">
          <h1 class="app-page-title">Dashboard</h1>
          <span>Mon, Aug 01, 2024 - Sep 01, 2024 </span>
        </div>
        <button type="button" class="btn btn-primary waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#addEmployeeModal">
          <i class="fi fi-rr-plus me-1"></i> Add Employee
        </button>
      </div>

      <div class="row">
        <div class="col-xxl-7 col-lg-6">
          <div class="card">
            <div class="card-header d-flex align-items-center justify-content-between border-0 pb-0">
              <h6 class="card-title mb-0">Employee Structure</h6>
              <button type="button" class="btn btn-sm btn-outline-light btn-shadow waves-effect">Download Report</button>
            </div>
            <div class="card-body p-2">
              <div id="chartEmployee"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="addEmployeeModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header py-3">
              <h5 class="modal-title">Add Employee</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="fullName" class="form-label">Full Name</label>
                  <input type="text" class="form-control" id="fullName" placeholder="Enter full name">
                </div>
                <div class="text-end">
                  <button type="submit" class="btn btn-success">Add Employee</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <!-- begin::GXON Footer -->
  <footer class="footer-wrapper bg-body">
    <div class="container">
      <div class="row g-2">
        <div class="col-lg-6 col-md-7 text-center text-md-start">
          <p class="mb-0">© <span class="currentYear">2025</span> GXON. Proudly powered by <a href="javascript:void(0);">LayoutDrop</a>.</p>
        </div>
        <div class="col-lg-6 col-md-5">
          <ul class="d-flex list-inline mb-0 gap-3 flex-wrap justify-content-center justify-content-md-end">
            <li>
              <a class="text-body" href="/">Home</a>
            </li>
            <li>
              <a class="text-body" href="/pages/faq">Faq's</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  <!-- end::GXON Footer -->

</div> 
`;
import HtmlRenderer from "./_components/HtmlRenderer";

export default function HomePage() {
  return <HtmlRenderer html={dashboardHtml} />;
}

