"use client";

import Link from "next/link";
import { useEffect } from "react";
import EcommerceHeader from "../../_components/EcommerceHeader";
import EcommerceSidebar from "../../_components/EcommerceSidebar";
import Footer from "../../_components/Footer";

export default function EmailCampaignsPage() {
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
              <h1 className="app-page-title">Email Campaigns</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link href="/">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Email Campaigns
                  </li>
                </ol>
              </nav>
            </div>
            <button
              className="btn btn-primary waves-effect waves-light"
              data-bs-toggle="modal"
              data-bs-target="#newCampaignModal"
            >
              <i className="fi fi-rr-plus me-1"></i> New Campaign
            </button>
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="card card-action action-border-primary">
                <div className="card-body d-flex gap-3 align-items-center">
                  <div className="avatar bg-primary shadow-primary rounded-circle text-white">
                    <i className="fi fi-rr-megaphone"></i>
                  </div>
                  <div className="clearfix">
                    <span>Total Campaigns</span>
                    <h2 className="fw-bold mb-0 mt-1">24</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="card card-action action-border-success">
                <div className="card-body d-flex gap-3 align-items-center">
                  <div className="avatar bg-success shadow-success rounded-circle text-white">
                    <i className="fi fi-rr-envelope"></i>
                  </div>
                  <div className="clearfix">
                    <span>Emails Sent</span>
                    <h2 className="fw-bold mb-0 mt-1">12,540</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="card card-action action-border-info">
                <div className="card-body d-flex gap-3 align-items-center">
                  <div className="avatar bg-info shadow-info rounded-circle text-white">
                    <i className="fi fi-rr-heart-rate"></i>
                  </div>
                  <div className="clearfix">
                    <span>Open Rate</span>
                    <h2 className="fw-bold mb-0 mt-1">46%</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="card card-action action-border-warning">
                <div className="card-body d-flex gap-3 align-items-center">
                  <div className="avatar bg-warning shadow-warning rounded-circle text-white">
                    <i className="fi fi-rr-cursor-finger"></i>
                  </div>
                  <div className="clearfix">
                    <span>Click Rate</span>
                    <h2 className="fw-bold mb-0 mt-1">18%</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header pb-2 border-0">
              <h6 className="card-title mb-0">Recent Campaigns</h6>
            </div>
            <div className="card-body p-2">
              <div className="table-responsive">
                <table className="table align-middle table-row-rounded">
                  <thead className="table-light">
                    <tr>
                      <th className="minw-200px">Campaign Name</th>
                      <th className="minw-150px">Status</th>
                      <th className="minw-150px">Sent</th>
                      <th className="minw-150px">Open Rate</th>
                      <th className="minw-150px">Click Rate</th>
                      <th className="minw-150px">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Summer Sale 2025</td>
                      <td>
                        <span className="badge bg-success">Completed</span>
                      </td>
                      <td>4,500</td>
                      <td>52%</td>
                      <td>21%</td>
                      <td>
                        <a href="#" className="btn btn-sm btn-outline-primary">
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>New Arrivals</td>
                      <td>
                        <span className="badge bg-warning">In Progress</span>
                      </td>
                      <td>2,340</td>
                      <td>41%</td>
                      <td>17%</td>
                      <td>
                        <a href="#" className="btn btn-sm btn-outline-primary">
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Weekly Newsletter</td>
                      <td>
                        <span className="badge bg-secondary">Draft</span>
                      </td>
                      <td>–</td>
                      <td>–</td>
                      <td>–</td>
                      <td>
                        <a href="#" className="btn btn-sm btn-outline-success">
                          Continue
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Black Friday Promo</td>
                      <td>
                        <span className="badge bg-success">Completed</span>
                      </td>
                      <td>6,800</td>
                      <td>58%</td>
                      <td>24%</td>
                      <td>
                        <a href="#" className="btn btn-sm btn-outline-primary">
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Holiday Deals</td>
                      <td>
                        <span className="badge bg-danger">Failed</span>
                      </td>
                      <td>1,200</td>
                      <td>12%</td>
                      <td>4%</td>
                      <td>
                        <a href="#" className="btn btn-sm btn-outline-primary">
                          Retry
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Create New Campaign Modal */}
        <div
          className="modal fade"
          id="newCampaignModal"
          tabIndex={-1}
          aria-labelledby="newCampaignModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="newCampaignModalLabel">
                  Create New Campaign
                </h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Campaign Name</label>
                    <input type="text" className="form-control" placeholder="Enter campaign name" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Subject Line</label>
                    <input type="text" className="form-control" placeholder="Enter subject line" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Recipients</label>
                    <select className="form-select">
                      <option>All Subscribers</option>
                      <option>Active Customers</option>
                      <option>New Signups</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea className="form-control" rows={4} placeholder="Write your campaign message..."></textarea>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-light" data-bs-modal-dismiss="modal">
                  Cancel
                </button>
                <button type="button" className="btn btn-primary ms-2">
                  Send Campaign
                </button>
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
