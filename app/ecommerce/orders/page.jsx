"use client";

import Link from "next/link";
import { useEffect } from "react";
import Script from "next/script";
import EcommerceHeader from "../../_components/EcommerceHeader";
import EcommerceSidebar from "../../_components/EcommerceSidebar";
import Footer from "../../_components/Footer";

export default function OrdersPage() {
  useEffect(() => {
    // Apply e-commerce page color settings on mount
    if (typeof window !== "undefined" && window.setAppSettings) {
      window.setAppSettings({
        appColor: "orange",
      });
    }
  }, []);

  return (
    <div className="page-layout">
      {/* Shared E-commerce Header */}
      <EcommerceHeader />

      {/* Shared E-commerce Sidebar */}
      <EcommerceSidebar />

      {/* Main Page Specific Wrapper */}
      <main className="app-wrapper">
        <div className="container">
          <div className="app-page-head d-flex flex-wrap gap-3 align-items-center justify-content-between">
            <div className="clearfix">
              <h1 className="app-page-title">Orders</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link href="/">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Orders
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="card overflow-hidden">
                <div className="card-header d-flex gap-3 flex-wrap align-items-center justify-content-between border-0 pb-0">
                  <h6 className="card-title mb-0">Recent Orders</h6>
                  <div className="d-flex gap-3 flex-wrap">
                    <button type="button" className="btn btn-sm btn-outline-light btn-shadow waves-effect">
                      Download Report
                    </button>
                    <select className="selectpicker" data-style="btn-sm btn-outline-light btn-shadow waves-effect">
                      <option value="All Status">All Status</option>
                      <option>Last Month</option>
                      <option>Category</option>
                      <option>Published</option>
                      <option>Date Modifed</option>
                    </select>
                    <div id="dt_RecentOrders_Search"></div>
                  </div>
                </div>
                <div className="card-body p-2">
                  <table id="dt_RecentOrders" className="table display table-row-rounded data-row-checkbox">
                    <thead className="table-light">
                      <tr>
                        <th className="pe-0">
                          <div className="form-check">
                            <input className="form-check-input" data-row-checkbox="" type="checkbox" />
                          </div>
                        </th>
                        <th className="minw-300px">Product</th>
                        <th className="minw-150px">Order ID</th>
                        <th className="minw-100px">QTY</th>
                        <th className="minw-100px">Price</th>
                        <th className="minw-150px">Total Price</th>
                        <th className="minw-150px">Status</th>
                        <th className="minw-150px">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="pe-0">
                          <div className="form-check p-0 w-auto d-inline-block">
                            <input className="form-check-input m-0" data-checkbox="" type="checkbox" />
                          </div>
                        </td>
                        <td className="ps-2">
                          <div className="d-flex align-items-center">
                            <img
                              src="/assets/images/ecommerce/products/list/1.webp"
                              width="70"
                              alt=""
                              className="rounded-3"
                            />
                            <div className="ms-2">
                              <h6 className="mb-0">
                                <Link href="/ecommerce/product-details" className="text-dark">
                                  Smart Home Electronics Kit
                                </Link>
                              </h6>
                              <small className="text-body">12 July 2025</small>
                            </div>
                          </div>
                        </td>
                        <td>#257896</td>
                        <td>x2</td>
                        <td>$58.00</td>
                        <td>
                          <strong>$145.50</strong>
                        </td>
                        <td>
                          <span className="badge badge-lg text-bg-success">Confirmed</span>
                        </td>
                        <td>
                          <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect me-1" type="button">
                            <i className="icon-eye"></i>
                          </button>
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
                                <a className="dropdown-item" href="#">
                                  Edit
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  Delete
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="pe-0">
                          <div className="form-check p-0 w-auto d-inline-block">
                            <input className="form-check-input m-0" data-checkbox="" type="checkbox" />
                          </div>
                        </td>
                        <td className="ps-2">
                          <div className="d-flex align-items-center">
                            <img
                              src="/assets/images/ecommerce/products/list/2.webp"
                              width="70"
                              alt=""
                              className="rounded-3"
                            />
                            <div className="ms-2">
                              <h6 className="mb-0">
                                <Link href="/ecommerce/product-details" className="text-dark">
                                  Modern Wooden Office Chair
                                </Link>
                              </h6>
                              <small className="text-body">12 July 2025</small>
                            </div>
                          </div>
                        </td>
                        <td>#257896</td>
                        <td>x2</td>
                        <td>$58.00</td>
                        <td>
                          <strong>$145.50</strong>
                        </td>
                        <td>
                          <span className="badge badge-lg text-bg-info">Shipped</span>
                        </td>
                        <td>
                          <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect me-1" type="button">
                            <i className="icon-eye"></i>
                          </button>
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
                                <a className="dropdown-item" href="#">
                                  Edit
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  Delete
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="pe-0">
                          <div className="form-check p-0 w-auto d-inline-block">
                            <input className="form-check-input m-0" data-checkbox="" type="checkbox" />
                          </div>
                        </td>
                        <td className="ps-2">
                          <div className="d-flex align-items-center">
                            <img
                              src="/assets/images/ecommerce/products/list/3.webp"
                              width="70"
                              alt=""
                              className="rounded-3"
                            />
                            <div className="ms-2">
                              <h6 className="mb-0">
                                <Link href="/ecommerce/product-details" className="text-dark">
                                  Luxury Fashion Hoodie Wear
                                </Link>
                              </h6>
                              <small className="text-body">12 July 2025</small>
                            </div>
                          </div>
                        </td>
                        <td>#257896</td>
                        <td>x2</td>
                        <td>$58.00</td>
                        <td>
                          <strong>$145.50</strong>
                        </td>
                        <td>
                          <span className="badge badge-lg text-bg-light">Pending</span>
                        </td>
                        <td>
                          <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect me-1" type="button">
                            <i className="icon-eye"></i>
                          </button>
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
                                <a className="dropdown-item" href="#">
                                  Edit
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  Delete
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="pe-0">
                          <div className="form-check p-0 w-auto d-inline-block">
                            <input className="form-check-input m-0" data-checkbox="" type="checkbox" />
                          </div>
                        </td>
                        <td className="ps-2">
                          <div className="d-flex align-items-center">
                            <img
                              src="/assets/images/ecommerce/products/list/4.webp"
                              width="70"
                              alt=""
                              className="rounded-3"
                            />
                            <div className="ms-2">
                              <h6 className="mb-0">
                                <Link href="/ecommerce/product-details" className="text-dark">
                                  Organic Beauty Skincare Set
                                </Link>
                              </h6>
                              <small className="text-body">12 July 2025</small>
                            </div>
                          </div>
                        </td>
                        <td>#257896</td>
                        <td>x2</td>
                        <td>$58.00</td>
                        <td>
                          <strong>$145.50</strong>
                        </td>
                        <td>
                          <span className="badge badge-lg text-bg-info">Shipped</span>
                        </td>
                        <td>
                          <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect me-1" type="button">
                            <i className="icon-eye"></i>
                          </button>
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
                                <a className="dropdown-item" href="#">
                                  Edit
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  Delete
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="pe-0">
                          <div className="form-check p-0 w-auto d-inline-block">
                            <input className="form-check-input m-0" data-checkbox="" type="checkbox" />
                          </div>
                        </td>
                        <td className="ps-2">
                          <div className="d-flex align-items-center">
                            <img
                              src="/assets/images/ecommerce/products/list/5.webp"
                              width="70"
                              alt=""
                              className="rounded-3"
                            />
                            <div className="ms-2">
                              <h6 className="mb-0">
                                <Link href="/ecommerce/product-details" className="text-dark">
                                  Professional Sports Fitness Gear
                                </Link>
                              </h6>
                              <small className="text-body">12 July 2025</small>
                            </div>
                          </div>
                        </td>
                        <td>#257896</td>
                        <td>x2</td>
                        <td>$58.00</td>
                        <td>
                          <strong>$145.50</strong>
                        </td>
                        <td>
                          <span className="badge badge-lg text-bg-light">Pending</span>
                        </td>
                        <td>
                          <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect me-1" type="button">
                            <i className="icon-eye"></i>
                          </button>
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
                                <a className="dropdown-item" href="#">
                                  Edit
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  Delete
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="pe-0">
                          <div className="form-check p-0 w-auto d-inline-block">
                            <input className="form-check-input m-0" data-checkbox="" type="checkbox" />
                          </div>
                        </td>
                        <td className="ps-2">
                          <div className="d-flex align-items-center">
                            <img
                              src="/assets/images/ecommerce/products/list/6.webp"
                              width="70"
                              alt=""
                              className="rounded-3"
                            />
                            <div className="ms-2">
                              <h6 className="mb-0">
                                <Link href="/ecommerce/product-details" className="text-dark">
                                  Trendy Travel Luggage Bag
                                </Link>
                              </h6>
                              <small className="text-body">12 July 2025</small>
                            </div>
                          </div>
                        </td>
                        <td>#257896</td>
                        <td>x2</td>
                        <td>$58.00</td>
                        <td>
                          <strong>$145.50</strong>
                        </td>
                        <td>
                          <span className="badge badge-lg text-bg-success">Confirmed</span>
                        </td>
                        <td>
                          <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect me-1" type="button">
                            <i className="icon-eye"></i>
                          </button>
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
                                <a className="dropdown-item" href="#">
                                  Edit
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  Delete
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="pe-0">
                          <div className="form-check p-0 w-auto d-inline-block">
                            <input className="form-check-input m-0" data-checkbox="" type="checkbox" />
                          </div>
                        </td>
                        <td className="ps-2">
                          <div className="d-flex align-items-center">
                            <img
                              src="/assets/images/ecommerce/products/list/1.webp"
                              width="70"
                              alt=""
                              className="rounded-3"
                            />
                            <div className="ms-2">
                              <h6 className="mb-0">
                                <Link href="/ecommerce/product-details" className="text-dark">
                                  Smart Home Electronics Kit
                                </Link>
                              </h6>
                              <small className="text-body">12 July 2025</small>
                            </div>
                          </div>
                        </td>
                        <td>#257896</td>
                        <td>x2</td>
                        <td>$58.00</td>
                        <td>
                          <strong>$145.50</strong>
                        </td>
                        <td>
                          <span className="badge badge-lg text-bg-success">Confirmed</span>
                        </td>
                        <td>
                          <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect me-1" type="button">
                            <i className="icon-eye"></i>
                          </button>
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
                                <a className="dropdown-item" href="#">
                                  Edit
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  Delete
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="pe-0">
                          <div className="form-check p-0 w-auto d-inline-block">
                            <input className="form-check-input m-0" data-checkbox="" type="checkbox" />
                          </div>
                        </td>
                        <td className="ps-2">
                          <div className="d-flex align-items-center">
                            <img
                              src="/assets/images/ecommerce/products/list/2.webp"
                              width="70"
                              alt=""
                              className="rounded-3"
                            />
                            <div className="ms-2">
                              <h6 className="mb-0">
                                <Link href="/ecommerce/product-details" className="text-dark">
                                  Modern Wooden Office Chair
                                </Link>
                              </h6>
                              <small className="text-body">12 July 2025</small>
                            </div>
                          </div>
                        </td>
                        <td>#257896</td>
                        <td>x2</td>
                        <td>$58.00</td>
                        <td>
                          <strong>$145.50</strong>
                        </td>
                        <td>
                          <span className="badge badge-lg text-bg-info">Shipped</span>
                        </td>
                        <td>
                          <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect me-1" type="button">
                            <i className="icon-eye"></i>
                          </button>
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
                                <a className="dropdown-item" href="#">
                                  Edit
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  Delete
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="pe-0">
                          <div className="form-check p-0 w-auto d-inline-block">
                            <input className="form-check-input m-0" data-checkbox="" type="checkbox" />
                          </div>
                        </td>
                        <td className="ps-2">
                          <div className="d-flex align-items-center">
                            <img
                              src="/assets/images/ecommerce/products/list/3.webp"
                              width="70"
                              alt=""
                              className="rounded-3"
                            />
                            <div className="ms-2">
                              <h6 className="mb-0">
                                <Link href="/ecommerce/product-details" className="text-dark">
                                  Luxury Fashion Hoodie Wear
                                </Link>
                              </h6>
                              <small className="text-body">12 July 2025</small>
                            </div>
                          </div>
                        </td>
                        <td>#257896</td>
                        <td>x2</td>
                        <td>$58.00</td>
                        <td>
                          <strong>$145.50</strong>
                        </td>
                        <td>
                          <span className="badge badge-lg text-bg-light">Pending</span>
                        </td>
                        <td>
                          <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect me-1" type="button">
                            <i className="icon-eye"></i>
                          </button>
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
                                <a className="dropdown-item" href="#">
                                  Edit
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  Delete
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
          </div>
        </div>
      </main>

      {/* Shared Footer */}
      <Footer />

      {/* Datatables scripts loaded dynamically */}
      <Script src="/assets/libs/datatables/datatables.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/ecommerce.js" strategy="afterInteractive" />
    </div>
  );
}

