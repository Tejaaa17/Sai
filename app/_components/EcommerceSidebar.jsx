import Link from "next/link";

export default function EcommerceSidebar() {
  return (
    <aside className="app-menubar-tabs" id="appMenubar">
      <div className="app-navbar-brand">
        <Link className="navbar-brand-logo" href="/">
          <img src="/assets/images/ecommerce/logo.svg" alt="GXON Admin Dashboard Logo" />
        </Link>
      </div>
      <div className="app-navbar-tabs" data-simplebar>
        <ul className="nav" id="appMenubarTabs" role="tablist" aria-orientation="vertical">
          <li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Dashboard">
            <a className="menu-link active" href="#dashboardTab" role="tab" aria-controls="dashboardTab" aria-selected="true" data-bs-toggle="tab">
              <i className="fi fi-rr-apps"></i>
            </a>
          </li>
          <li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Apps">
            <a className="menu-link" href="#appsTab" role="tab" aria-controls="appsTab" aria-selected="false" data-bs-toggle="tab">
              <i className="fi fi-rr-window-alt"></i>
            </a>
          </li>
          <li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Pages">
            <a className="menu-link" href="#pagesTab" role="tab" aria-controls="pagesTab" aria-selected="false" data-bs-toggle="tab">
              <i className="fi fi-rr-file"></i>
            </a>
          </li>
          <li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Authentication">
            <a className="menu-link" href="#authenticationTab" role="tab" aria-controls="authenticationTab" aria-selected="false" data-bs-toggle="tab">
              <i className="fi fi-rr-user-key"></i>
            </a>
          </li>
          <li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Components">
            <a className="menu-link" href="#componentsTab" role="tab" aria-controls="componentsTab" aria-selected="false" data-bs-toggle="tab">
              <i className="fi fi-rr-flux-capacitor"></i>
            </a>
          </li>
          <li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Extended UI">
            <a className="menu-link" href="#extendedTab" role="tab" aria-controls="extendedTab" aria-selected="false" data-bs-toggle="tab">
              <i className="fi fi-rr-apps-add"></i>
            </a>
          </li>
          <li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Forms & Tables">
            <a className="menu-link" href="#formElementsTab" role="tab" aria-controls="formElementsTab" aria-selected="false" data-bs-toggle="tab">
              <i className="fi fi-rr-form"></i>
            </a>
          </li>
          <li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Charts & Maps">
            <a className="menu-link" href="#chartsTab" role="tab" aria-controls="chartsTab" aria-selected="false" data-bs-toggle="tab">
              <i className="fi fi-rr-chart-pie-alt"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="app-tab-content">
        <div className="app-side-brands">
          <Link className="navbar-brand-mini visible-light" href="/">
            <img src="/assets/images/logo-text.svg" alt="GXON Admin Dashboard Logo" />
          </Link>
          <Link className="navbar-brand-mini visible-dark" href="/">
            <img src="/assets/images/logo-text-white.svg" alt="GXON Admin Dashboard Logo" />
          </Link>
        </div>
        <div className="tab-content" id="appMenubarTabsContent">
          <div className="tab-pane fade show active" id="dashboardTab" role="tabpanel" tabIndex={0}>
            <nav className="app-navbar" data-simplebar>
              <ul className="side-menubar">
                <li className="menu-heading">
                  <span className="menu-label">Dashboard</span>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/ecommerce/ecommerce" role="button">
                    <span className="menu-label">Ecommerce</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/ecommerce/ecommerce-rtl" role="button">
                    <span className="menu-label">Ecommerce RTL</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/" role="button">
                    <span className="menu-label">HR Dashboard</span>
                  </Link>
                </li>
                <li>
                  <div className="menu-divider"></div>
                </li>
                <li className="menu-heading">
                  <span className="menu-label">Orders</span>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/ecommerce/orders">
                    <span className="menu-label">Orders</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/ecommerce/order-details">
                    <span className="menu-label">Order Details</span>
                  </Link>
                </li>
                <li>
                  <div className="menu-divider"></div>
                </li>
                <li className="menu-heading">
                  <span className="menu-label">Products Management</span>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/ecommerce/products">
                    <span className="menu-label">Products</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/ecommerce/add-product">
                    <span className="menu-label">Add Product</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/ecommerce/edit-product">
                    <span className="menu-label">Product Edit</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/ecommerce/categories">
                    <span className="menu-label">Categories</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/ecommerce/product-list">
                    <span className="menu-label">Product List</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/ecommerce/product-details">
                    <span className="menu-label">Product Details</span>
                  </Link>
                </li>
                <li>
                  <div className="menu-divider"></div>
                </li>
                <li className="menu-heading">
                  <span className="menu-label">Customers</span>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/ecommerce/customers">
                    <span className="menu-label">Customers</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/ecommerce/customer-details">
                    <span className="menu-label">Customer Details</span>
                  </Link>
                </li>
                <li>
                  <div className="menu-divider"></div>
                </li>
                <li className="menu-heading">
                  <span className="menu-label">Sales & Payments</span>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/ecommerce/transactions">
                    <span className="menu-label">Transactions</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/ecommerce/invoices">
                    <span className="menu-label">Invoices</span>
                  </Link>
                </li>
                <li>
                  <div className="menu-divider"></div>
                </li>
                <li className="menu-heading">
                  <span className="menu-label">Marketing</span>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/ecommerce/coupons">
                    <span className="menu-label">Coupons</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/ecommerce/email-campaigns">
                    <span className="menu-label">Email Campaigns</span>
                  </Link>
                </li>
                <li>
                  <div className="menu-divider"></div>
                </li>
                <li className="menu-heading">
                  <span className="menu-label">Settings</span>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/settings">
                    <span className="menu-label">Settings</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/profile">
                    <span className="menu-label">Profile</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/roles-permissions">
                    <span className="menu-label">Roles Permissions</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="tab-pane fade" id="appsTab" role="tabpanel" tabIndex={0}>
            <nav className="app-navbar" data-simplebar>
              <ul className="side-menubar">
                <li className="menu-heading">
                  <span className="menu-label">Apps</span>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/chat">
                    <span className="menu-label">Chat</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/calendar">
                    <span className="menu-label">Calendar</span>
                  </Link>
                </li>
                <li>
                  <div className="menu-divider"></div>
                </li>
                <li className="menu-heading">
                  <span className="menu-label">Email</span>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/email/inbox">
                    <span className="menu-label">Inbox</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/email/compose">
                    <span className="menu-label">Compose</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/email/read-email">
                    <span className="menu-label">Read email</span>
                  </Link>
                </li>
                <li>
                  <div className="menu-divider"></div>
                </li>
                <li className="menu-heading">
                  <span className="menu-label"> File Manager</span>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/file-manager/folders">
                    <span className="menu-label">Folders</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/file-manager/files">
                    <span className="menu-label">Files</span>
                  </Link>
                </li>
                <li>
                  <div className="menu-divider"></div>
                </li>
                <li className="menu-heading">
                  <span className="menu-label">Invoice</span>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/invoices/invoice1">
                    <span className="menu-label">Invoice 1</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/invoices/invoice2">
                    <span className="menu-label">Invoice 2</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/invoices/create-invoice">
                    <span className="menu-label">Create Invoice</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="tab-pane fade" id="pagesTab" role="tabpanel" tabIndex={0}>
            <nav className="app-navbar" data-simplebar>
              <ul className="side-menubar">
                <li className="menu-heading">
                  <span className="menu-label">Pages</span>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/pages/pricing">
                    <span className="menu-label">Pricing</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/pages/pricing-two">
                    <span className="menu-label">Pricing 2</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/pages/faq">
                    <span className="menu-label">FAQ's</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/pages/coming-soon">
                    <span className="menu-label">Coming Soon</span>
                  </Link>
                </li>
                <li>
                  <div className="menu-divider"></div>
                </li>
                <li className="menu-heading">
                  <span className="menu-label">Blog</span>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/pages/blog">
                    <span className="menu-label">Blog Grid</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/pages/blog-list">
                    <span className="menu-label">Blog List</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/pages/blog-details">
                    <span className="menu-label">Blog Details</span>
                  </Link>
                </li>
                <li>
                  <div className="menu-divider"></div>
                </li>
                <li className="menu-heading">
                  <span className="menu-label">Error</span>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/pages/error-404">
                    <span className="menu-label">Basic</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/pages/error-404-cover">
                    <span className="menu-label">Cover</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/pages/error-404-full">
                    <span className="menu-label">Full</span>
                  </Link>
                </li>
                <li>
                  <div className="menu-divider"></div>
                </li>
                <li className="menu-heading">
                  <span className="menu-label">Under Construction</span>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/pages/under-construction">
                    <span className="menu-label">Basic</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/pages/under-construction-cover">
                    <span className="menu-label">Cover</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/pages/under-construction-full">
                    <span className="menu-label">Full</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/pages/blank-page">
                    <span className="menu-label">Blank Page</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/pages/activity">
                    <span className="menu-label">Activity</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="tab-pane fade" id="authenticationTab" role="tabpanel" tabIndex={0}>
            <nav className="app-navbar" data-simplebar>
              <ul className="side-menubar">
                <li className="menu-heading">
                  <span className="menu-label">Login</span>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/authentication/login-basic">
                    <span className="menu-label">Basic</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/authentication/login-cover">
                    <span className="menu-label">Cover</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/authentication/login-frame">
                    <span className="menu-label">Frame</span>
                  </Link>
                </li>
                <li>
                  <div className="menu-divider"></div>
                </li>
                <li className="menu-heading">
                  <span className="menu-label">Register</span>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/authentication/register-basic">
                    <span className="menu-label">Basic</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/authentication/register-cover">
                    <span className="menu-label">Cover</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/authentication/register-frame">
                    <span className="menu-label">Frame</span>
                  </Link>
                </li>
                <li>
                  <div className="menu-divider"></div>
                </li>
                <li className="menu-heading">
                  <span className="menu-label">Forgot Password</span>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/authentication/forgot-password-basic">
                    <span className="menu-label">Basic</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/authentication/forgot-password-cover">
                    <span className="menu-label">Cover</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/authentication/forgot-password-frame">
                    <span className="menu-label">Frame</span>
                  </Link>
                </li>
                <li>
                  <div className="menu-divider"></div>
                </li>
                <li className="menu-heading">
                  <span className="menu-label">New Password</span>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/authentication/new-password-basic">
                    <span className="menu-label">Basic</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/authentication/new-password-cover">
                    <span className="menu-label">Cover</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/authentication/new-password-frame">
                    <span className="menu-label">Frame</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="tab-pane fade" id="componentsTab" role="tabpanel" tabIndex={0}>
            <nav className="app-navbar" data-simplebar>
              <ul className="side-menubar">
                <li className="menu-heading">
                  <span className="menu-label">UI Components</span>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/components/accordion">
                    <span className="menu-label">Accordion</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/components/alerts">
                    <span className="menu-label">Alerts</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/components/badge">
                    <span className="menu-label">Badge</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/components/breadcrumb">
                    <span className="menu-label">Breadcrumb</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/components/buttons">
                    <span className="menu-label">Buttons</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/components/typography">
                    <span className="menu-label">Typography</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/components/button-group">
                    <span className="menu-label">Button Group</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/components/card">
                    <span className="menu-label">Card</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/components/collapse">
                    <span className="menu-label">Collapse</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/components/carousel">
                    <span className="menu-label">Carousel</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/components/dropdowns">
                    <span className="menu-label">Dropdowns</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/components/modal">
                    <span className="menu-label">Modal</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/components/navbar">
                    <span className="menu-label">Navbar</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/components/list-group">
                    <span className="menu-label">List Group</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/components/tabs">
                    <span className="menu-label">Tabs</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/components/offcanvas">
                    <span className="menu-label">Offcanvas</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/components/pagination">
                    <span className="menu-label">Pagination</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/components/popovers">
                    <span className="menu-label">Popovers</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/components/progress">
                    <span className="menu-label">Progress</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/components/scrollspy">
                    <span className="menu-label">Scrollspy</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/components/spinners">
                    <span className="menu-label">Spinners</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/components/toasts">
                    <span className="menu-label">Toasts</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/components/tooltips">
                    <span className="menu-label">Tooltips</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="tab-pane fade" id="extendedTab" role="tabpanel" tabIndex={0}>
            <nav className="app-navbar" data-simplebar>
              <ul className="side-menubar">
                <li className="menu-heading">
                  <span className="menu-label">Extended UI</span>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/extended-ui/avatar">
                    <span className="menu-label">Avatar</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/extended-ui/card-action">
                    <span className="menu-label">Card action</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/extended-ui/drag-and-drop">
                    <span className="menu-label">Drag & drop</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/extended-ui/simplebar">
                    <span className="menu-label">Simplebar</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/extended-ui/swiper">
                    <span className="menu-label">Swiper</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/extended-ui/team">
                    <span className="menu-label">Team</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/extended-ui/flags">
                    <span className="menu-label">Flags</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="tab-pane fade" id="formElementsTab" role="tabpanel" tabIndex={0}>
            <nav className="app-navbar" data-simplebar>
              <ul className="side-menubar">
                <li className="menu-heading">
                  <span className="menu-label">Forms</span>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/forms/form-elements">
                    <span className="menu-label">Form Elements</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/forms/form-floating">
                    <span className="menu-label">Form Floating</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/forms/form-input-group">
                    <span className="menu-label">Form Input Group</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/forms/form-layout">
                    <span className="menu-label">Form Layout</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/forms/form-validation">
                    <span className="menu-label">Form Validation</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/forms/flatpickr">
                    <span className="menu-label">Flatpickr</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/forms/tagify">
                    <span className="menu-label">Tagify</span>
                  </Link>
                </li>
                <li>
                  <div className="menu-divider"></div>
                </li>
                <li className="menu-heading">
                  <span className="menu-label">Table</span>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/table/tables-basic">
                    <span className="menu-label">Table</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/table/tables-datatable">
                    <span className="menu-label">Datatable</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="tab-pane fade" id="chartsTab" role="tabpanel" tabIndex={0}>
            <nav className="app-navbar" data-simplebar>
              <ul className="side-menubar">
                <li className="menu-heading">
                  <span className="menu-label">Charts</span>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/chart/apexchart">
                    <span className="menu-label">Apex Chart</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/chart/chartjs">
                    <span className="menu-label">Chart JS</span>
                  </Link>
                </li>
                <li>
                  <div className="menu-divider"></div>
                </li>
                <li className="menu-heading">
                  <span className="menu-label">Maps</span>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/maps/jsvectormap">
                    <span className="menu-label">JS Vector Map</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" href="/maps/leaflet">
                    <span className="menu-label">Leaflet</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </aside>
  );
}
