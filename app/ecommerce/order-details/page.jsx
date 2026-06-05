"use client";

import Link from "next/link";
import { useEffect } from "react";
import Script from "next/script";
import EcommerceHeader from "../../_components/EcommerceHeader";
import EcommerceSidebar from "../../_components/EcommerceSidebar";
import Footer from "../../_components/Footer";

export default function OrderDetailsPage() {
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
      {/* Leaflet CSS injected dynamically */}
      <link rel="stylesheet" href="/assets/libs/leaflet/leaflet.css" />

      {/* Shared E-commerce Header */}
      <EcommerceHeader />

      {/* Shared E-commerce Sidebar */}
      <EcommerceSidebar />

      {/* Main Page Specific Wrapper */}
      <main className="app-wrapper">
        <div className="container">
          <div className="app-page-head d-flex flex-wrap gap-3 align-items-center justify-content-between">
            <div className="clearfix">
              <h1 className="app-page-title">Order Details</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link href="/">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Order Details
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex flex-wrap gap-3 align-items-center justify-content-between">
                        <div className="clearfix">
                          <div className="d-flex gap-2 mb-2 align-items-center">
                            <h6 className="card-title mb-0">
                              Order No <span className="text-primary">#0255760</span>
                            </h6>
                            <span className="badge badge-sm text-bg-warning">In Progress</span>
                          </div>
                          <p className="mb-0 text-2xs">Order Created : August 25, 2025 12:50 AM</p>
                        </div>
                        <div className="clearfix d-flex gap-2">
                          <a href="javascript:void(0);" className="btn btn-sm btn-outline-light btn-shadow waves-effect">
                            Refund
                          </a>
                          <a href="javascript:void(0);" className="btn btn-sm btn-outline-light btn-shadow waves-effect">
                            Return
                          </a>
                          <a href="javascript:void(0);" className="btn btn-sm btn-primary btn-shadow waves-effect">
                            Edit Order
                          </a>
                        </div>
                      </div>
                      <h6 className="mt-4 mb-3">Progress</h6>
                      <div className="row row-cols-2 row-cols-md-5 g-3">
                        <div className="col">
                          <div className="progress progress-sm bg-light" role="progressbar" aria-label="Progress">
                            <div className="progress-bar progress-bar-striped bg-success" style={{ width: "100%" }}></div>
                          </div>
                          <small>Order Confirming</small>
                        </div>
                        <div className="col">
                          <div className="progress progress-sm bg-light" role="progressbar" aria-label="Progress">
                            <div className="progress-bar progress-bar-striped bg-success" style={{ width: "100%" }}></div>
                          </div>
                          <small>Payment Pending</small>
                        </div>
                        <div className="col">
                          <div className="progress progress-sm bg-light" role="progressbar" aria-label="Progress">
                            <div className="progress-bar progress-bar-striped bg-warning" style={{ width: "50%" }}></div>
                          </div>
                          <small>Shipping</small>
                        </div>
                        <div className="col">
                          <div className="progress progress-sm bg-light" role="progressbar" aria-label="Progress">
                            <div className="progress-bar progress-bar-striped" style={{ width: "0%" }}></div>
                          </div>
                          <small>Delivered</small>
                        </div>
                      </div>
                      <a href="javascript:void(0);" className="btn btn-sm btn-info waves-effect btn-shadow mt-4">
                        Make As Ready To Ship
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="card">
                    <div className="card-header border-0 pb-0">
                      <h6 className="card-title">Product</h6>
                    </div>
                    <div className="card-body p-2 pb-0">
                      <div className="table-responsive">
                        <table className="table table-row-rounded mb-0">
                          <thead className="table-light">
                            <tr>
                              <th className="minw-300px">Product Name & Size</th>
                              <th className="minw-100px">Status</th>
                              <th className="minw-100px">Quantity</th>
                              <th className="minw-100px">Price</th>
                              <th className="minw-100px">Tax</th>
                              <th className="minw-100px">Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div className="d-flex align-items-center">
                                  <div className="d-block me-3 bg-light p-1 rounded-2">
                                    <img className="maxw-50px" src="/assets/images/ecommerce/products/pic2.png" alt="" />
                                  </div>
                                  <div className="clearfix">
                                    <h6 className="mb-1">Smartwatch (Blue Strap)</h6>
                                    <span className="text-body">Size: L</span>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <span className="badge text-bg-success">Ready</span>
                              </td>
                              <td>2</td>
                              <td>$50.00</td>
                              <td>$5.00</td>
                              <td>$55.00</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="d-flex align-items-center">
                                  <div className="d-block me-3 bg-light p-1 rounded-2">
                                    <img className="maxw-50px" src="/assets/images/ecommerce/products/pic3.png" alt="" />
                                  </div>
                                  <div className="clearfix">
                                    <h6 className="mb-1">Orange Chair</h6>
                                    <span className="text-body">Size: XL</span>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <span className="badge text-bg-warning">Pending</span>
                              </td>
                              <td>1</td>
                              <td>$60.00</td>
                              <td>$3.00</td>
                              <td>$63.00</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="d-flex align-items-center">
                                  <div className="d-block me-3 bg-light p-1 rounded-2">
                                    <img className="maxw-50px" src="/assets/images/ecommerce/products/pic4.png" alt="" />
                                  </div>
                                  <div className="clearfix">
                                    <h6 class="mb-1">Pink Hoodie</h6>
                                    <span className="text-body">Size: XS</span>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <span className="badge text-bg-danger">Canceled</span>
                              </td>
                              <td>1</td>
                              <td>$60.00</td>
                              <td>$3.00</td>
                              <td>$63.00</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="d-flex align-items-center">
                                  <div className="d-block me-3 bg-light p-1 rounded-2">
                                    <img className="maxw-50px" src="/assets/images/ecommerce/products/pic5.png" alt="" />
                                  </div>
                                  <div className="clearfix">
                                    <h6 className="mb-1">Cosmetic Products</h6>
                                    <span className="text-body">Size: XXL</span>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <span className="badge text-bg-light">Packaging</span>
                              </td>
                              <td>3</td>
                              <td>$75.00</td>
                              <td>$4.00</td>
                              <td>$79.00</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h6 className="card-title mb-0">Order Timeline</h6>
                    </div>
                    <div className="card-body">
                      <div className="position-relative ms-4">
                        <span className="position-absolute start-0 top-0 border border-light h-100"></span>
                        <div className="position-relative ps-4 mb-5">
                          <div className="position-absolute start-0 avatar avatar-xs bg-light rounded-circle text-white translate-middle-x">
                            <div className="spinner-border spinner-border-sm text-success border-2" role="status">
                              <span className="visually-hidden">Loading...</span>
                            </div>
                          </div>
                          <div className="ms-2">
                            <p className="mb-1 text-2xs fw-semibold">Aug 25, 2025, 11:15 am</p>
                            <h6 className="mb-1 text-dark">The packing has been completed</h6>
                            <p className="mb-0 text-2xs">Confirmed by Sophia Johnson</p>
                          </div>
                        </div>
                        <div className="position-relative ps-4 mb-5">
                          <div className="position-absolute start-0 avatar avatar-xs bg-light rounded-circle text-success translate-middle-x">
                            <i className="fi fi-rs-check-circle"></i>
                          </div>
                          <div className="ms-2">
                            <p className="mb-1 text-2xs fw-semibold">Aug 25, 2025, 11:20 am</p>
                            <h6 className="mb-1 text-dark">The Invoice has been sent to the customer</h6>
                            <p className="mb-2 text-2xs">
                              Invoice email was sent to{" "}
                              <a href="javascript:void(0);" className="text-secondary">
                                customer@abcstore.com
                              </a>
                            </p>
                            <a href="javascript:void(0);" className="badge badge-sm text-bg-info">
                              Resend Invoice
                            </a>
                          </div>
                        </div>
                        <div className="position-relative ps-4 mb-5">
                          <div className="position-absolute start-0 avatar avatar-xs bg-light rounded-circle text-success translate-middle-x">
                            <i className="fi fi-rs-check-circle"></i>
                          </div>
                          <div className="ms-2">
                            <p className="mb-1 text-2xs fw-semibold">Aug 25, 2025, 11:25 am</p>
                            <h6 className="mb-1 text-dark">The Invoice has been generated</h6>
                            <p className="mb-2 text-2xs">Invoice created by Sophia Johnson</p>
                            <a href="javascript:void(0);" className="badge badge-sm text-bg-secondary">
                              Download Invoice
                            </a>
                          </div>
                        </div>
                        <div className="position-relative ps-4 mb-5">
                          <div className="position-absolute start-0 avatar avatar-xs bg-light rounded-circle text-success translate-middle-x">
                            <i className="fi fi-rs-check-circle"></i>
                          </div>
                          <div className="ms-2">
                            <p className="mb-1 text-2xs fw-semibold">Aug 25, 2025, 11:35 am</p>
                            <h6 className="mb-1 text-dark">
                              Order Payment <span className="badge badge-sm text-bg-success">Paid</span>
                            </h6>
                            <p className="mb-0 text-2xs">Using Visa Card</p>
                          </div>
                        </div>
                        <div className="position-relative ps-4">
                          <div className="position-absolute start-0 avatar avatar-xs bg-light rounded-circle text-success translate-middle-x">
                            <i className="fi fi-rs-check-circle"></i>
                          </div>
                          <div className="ms-2">
                            <p className="mb-1 text-2xs fw-semibold">Aug 25, 2025, 11:40 am</p>
                            <h6 className="mb-2 text-dark">3 Orders confirmed by Sophia Johnson</h6>
                            <a href="javascript:void(0);" className="badge badge-sm text-bg-primary">
                              3 Orders
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header border-0 pb-0">
                      <h6 className="card-title mb-0">Order Price</h6>
                    </div>
                    <div className="card-body">
                      <ul className="list-group list-group-flush pb-0">
                        <li className="list-group-item d-flex align-items-center justify-content-between px-0">
                          Sub Total: <span className="text-body">$950.00</span>
                        </li>
                        <li className="list-group-item d-flex align-items-center justify-content-between px-0">
                          Discount: <span className="text-body">-$120.00</span>
                        </li>
                        <li className="list-group-item d-flex align-items-center justify-content-between px-0">
                          Delivery Charge: <span className="text-body">$15.00</span>
                        </li>
                        <li className="list-group-item d-flex align-items-center justify-content-between px-0">
                          Estimated Tax (10%): <span className="text-body">$84.50</span>
                        </li>
                      </ul>
                    </div>
                    <div className="text-dark card-footer border-0 pt-0 d-flex justify-content-between align-items-center">
                      Total Amount: <p className="mb-0 fw-semibold text-md">$929.50</p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="card">
                    <div className="card-header d-flex justify-content-between align-items-center border-0 pb-0">
                      <h6 className="card-title mb-0">Customer Details</h6>
                      <a href="javascript:void(0);" className="btn btn-action-gray btn-sm btn-icon waves-effect waves-light item-delete ms-auto">
                        <i className="fi fi-rr-pencil"></i>
                      </a>
                    </div>
                    <div className="card-body">
                      <div className="d-flex align-items-center gap-3">
                        <div className="avatar rounded-circle">
                          <img src="/assets/images/avatar/avatar4.webp" alt="Ava Lewis" />
                        </div>
                        <div>
                          <h6 className="mb-0">Ava Lewis</h6>
                          <a href="javascript:void(0);" className="text-body text-2xs">
                            johndoe@example.com
                          </a>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mt-4">
                        <h6>Contact Number:</h6>
                      </div>
                      <p className="mb-1 text-2xs">(123) 456-7890</p>
                      <div className="row">
                        <div className="col-6">
                          <div className="d-flex align-items-center justify-content-between mt-4">
                            <h6>Shipping Address:</h6>
                          </div>
                          <p className="mb-1 text-2xs">ABC Store LTD</p>
                          <p className="mb-1 text-2xs">221B Baker Street,</p>
                          <p className="mb-1 text-2xs">London, NW1 6XE,</p>
                          <p className="mb-1 text-2xs">United Kingdom</p>
                          <p className="mb-1 text-2xs">(123) 456-7890</p>
                        </div>
                        <div className="col-6">
                          <div className="d-flex align-items-center justify-content-between mt-4">
                            <h6>Billing Address:</h6>
                          </div>
                          <p className="mb-1 text-2xs">Workplace</p>
                          <p className="mb-1 text-2xs">221B Baker Street,</p>
                          <p className="mb-1 text-2xs">London, NW1 6XE,</p>
                          <p className="mb-1 text-2xs">United Kingdom</p>
                          <p className="mb-1 text-2xs">(123) 456-7890</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-body">
                      <div id="mapLayersControl" style={{ height: "300px" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Shared Footer */}
      <Footer />

      {/* Dynamic script loading for Leaflet maps */}
      <Script src="/assets/libs/leaflet/leaflet.js" strategy="afterInteractive" />
      <Script src="/assets/libs/leaflet/us-states.js" strategy="afterInteractive" />
      <Script src="/assets/js/leaflet.js" strategy="afterInteractive" />
    </div>
  );
}
