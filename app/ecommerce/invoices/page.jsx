"use client";

import Link from "next/link";
import { useEffect } from "react";
import EcommerceHeader from "../../_components/EcommerceHeader";
import EcommerceSidebar from "../../_components/EcommerceSidebar";
import Footer from "../../_components/Footer";

export default function InvoicesPage() {
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
              <h1 className="app-page-title">Invoices</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link href="/">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Invoices
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center border-0 pb-0">
                  <h2 className="card-title">Invoice</h2>
                  <div>
                    <button className="btn btn-primary btn-sm">Download Invoice</button>
                    <button className="btn btn-info btn-sm ms-2">Print</button>
                  </div>
                </div>
                <div className="card-body">
                  <div className="border bg-light rounded p-4 mb-4 bg-opacity-25">
                    <div className="row g-3">
                      <div className="col-lg-3 col-sm-6">
                        <div className="d-flex gap-4">
                          <h6>Invoice No:</h6>
                          <p className="mb-0">#FLR978282</p>
                        </div>
                        <div className="d-flex gap-4">
                          <h6>Invoice Date:</h6>
                          <p className="mb-0">19.06.2019</p>
                        </div>
                        <div className="d-flex gap-4">
                          <h6>GST Reg No:</h6>
                          <p className="mb-0">IX9878123TC</p>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="d-flex gap-4">
                          <h6>Order No:</h6>
                          <p className="mb-0">A-8934792734</p>
                        </div>
                        <div className="d-flex gap-4">
                          <h6>Order Date:</h6>
                          <p className="mb-0">19.06.2025</p>
                        </div>
                        <div className="d-flex gap-4">
                          <h6>PAN No:</h6>
                          <p className="mb-0">XVCJ963782008</p>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <h6>Billing Address :</h6>
                        <p className="mb-0">
                          John Doe,
                          <br />
                          36, Gree Downtown,
                          <br />
                          Golden road, FL
                          <br />
                          johndoe@jeemail.com
                          <br />
                          +001234567890
                        </p>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <h6>Shipping Address :</h6>
                        <p className="mb-0">
                          John Doe,
                          <br />
                          36, Gree Downtown,
                          <br />
                          Golden road, FL
                          <br />
                          johndoe@jeemail.com
                          <br />
                          +001234567890
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="table-responsive">
                    <table className="table table-row-rounded align-middle">
                      <thead className="table-light">
                        <tr>
                          <th className="minw-100px">SL NO.</th>
                          <th className="minw-300px">Products</th>
                          <th className="minw-100px">Color</th>
                          <th className="minw-100px">Size</th>
                          <th className="minw-100px">Quantity</th>
                          <th className="minw-100px">Price</th>
                          <th className="minw-100px">Tax Rate</th>
                          <th className="minw-100px">Tax Type</th>
                          <th className="minw-100px">Tax</th>
                          <th className="minw-100px">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Fitbit Sense Advanced Smartwatch with Tools for Heart...</td>
                          <td>Glossy black</td>
                          <td>XL</td>
                          <td>2</td>
                          <td>$299</td>
                          <td>2.5%</td>
                          <td>VAT</td>
                          <td>$199</td>
                          <td>$398</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>2021 Apple 12.9-inch iPad Pro (Wi-Fi, 128GB) - Space...</td>
                          <td>Black</td>
                          <td>Pro</td>
                          <td>1</td>
                          <td>$199</td>
                          <td>2.75%</td>
                          <td>VAT</td>
                          <td>$199</td>
                          <td>$398</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>PlayStation 5 DualSense Wireless Controller</td>
                          <td>White</td>
                          <td>Regular</td>
                          <td>1</td>
                          <td>$185</td>
                          <td>3.5%</td>
                          <td>VAT</td>
                          <td>$199</td>
                          <td>$398</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="row justify-content-end">
                    <div className="col-lg-5 col-md-8">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td className="fw-bold">Subtotal</td>
                            <td className="text-end">$398</td>
                          </tr>
                          <tr>
                            <td>Shipping Cost</td>
                            <td className="text-end">$50</td>
                          </tr>
                          <tr>
                            <td>Discount/Voucher</td>
                            <td className="text-end text-danger">- $50</td>
                          </tr>
                          <tr className="table-light">
                            <td className="fw-bold">Grand Total</td>
                            <td className="fw-bold text-end">Three Hundred and Ninety Eight USD</td>
                          </tr>
                        </tbody>
                      </table>
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
    </div>
  );
}
