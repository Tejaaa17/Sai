"use client";

import Link from "next/link";
import { useEffect } from "react";
import Script from "next/script";
import Header from "../../_components/Header";
import Sidebar from "../../_components/Sidebar";
import Footer from "../../_components/Footer";

export default function EmailComposePage() {
  useEffect(() => {
    // Default page settings on mount
    if (typeof window !== "undefined" && window.setAppSettings) {
      window.setAppSettings({
        appColor: "orange",
      });
    }
  }, []);

  return (
    <div className="page-layout">
      {/* Standard Header */}
      <Header />

      {/* Standard Sidebar */}
      <Sidebar />

      {/* Main Page Specific Wrapper */}
      <main className="app-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card card-body overflow-hidden mail-wrapper p-0">
                <div className="sidebar-mobile-overlay"></div>
                <div className="mail-sidebar bg-light">
                  <div className="px-3 pt-3 mb-2">
                    <Link href="/email/compose" className="btn btn-primary waves-effect waves-light w-100">
                      Compose
                    </Link>
                  </div>
                  <div className="d-grid gap-2 p-2 mail-nav" id="myTab" role="tablist" data-simplebar="true">
                    <Link href="/email/inbox" className="mail-nav-item">
                      <i className="fi fi-rr-inbox-in me-2"></i> Inbox
                      <span className="badge badge-sm bg-primary-subtle text-primary ms-auto">247</span>
                    </Link>
                    <Link href="/email/inbox" className="mail-nav-item">
                      <i className="fi fi-rr-paper-plane-top me-2"></i> Sent
                    </Link>
                    <Link href="/email/inbox" className="mail-nav-item">
                      <i className="fi fi-rr-blueprint me-2"></i> Drafts
                    </Link>
                    <Link href="/email/inbox" className="mail-nav-item">
                      <i className="fi fi-rr-trash me-2"></i> Trash
                    </Link>
                    <Link href="/email/inbox" className="mail-nav-item">
                      <i className="fi fi-rr-star me-2"></i> Starred
                    </Link>
                    <Link href="/email/inbox" className="mail-nav-item">
                      <i className="fi fi-rr-box me-2"></i> Archive
                    </Link>
                    <Link href="/calendar" className="mail-nav-item">
                      <i className="fi fi-rr-calendar me-2"></i> Scheduled
                    </Link>
                  </div>
                </div>
                <div className="mail-body">
                  <div className="mail-header">
                    <button className="btn btn-white btn-shadow btn-icon waves-effect mail-sidebar-toggler d-lg-none">
                      <i className="fi fi-rs-list"></i>
                    </button>
                    <h6 className="mb-0 me-auto">New Message</h6>
                  </div>
                  <div className="px-4 py-3">
                    <ul className="list-group list-group-flush border-bottom">
                      <li className="list-group-item d-flex align-items-center px-0 py-0">
                        <span className="text-body minw-100px">To</span>
                        <input
                          className="form-control border-0 shadow-none tagify-input px-2"
                          name="basic"
                          defaultValue="sales@example.com"
                        />
                      </li>
                      <li className="list-group-item d-flex align-items-center px-0 py-0">
                        <span className="text-body minw-100px">CC</span>
                        <input
                          className="form-control border-0 shadow-none tagify-input px-2"
                          name="basic"
                          defaultValue="sales@example.com, info@example.com"
                        />
                      </li>
                      <li class="list-group-item d-flex align-items-center px-0 py-2">
                        <span className="text-body minw-100px">Subject</span>
                        <input
                          type="text"
                          className="form-control border-0 shadow-none text-dark"
                          defaultValue="You Made a Sale! – MetroGrid Figma Portfolio"
                        />
                      </li>
                    </ul>
                  </div>
                  <textarea
                    className="form-control mail-textarea"
                    defaultValue={`Hi layoutWave,

🎉 Great news — your product has just been sold!
Your design file "MetroGrid – Figma Portfolio Layout" was purchased with a Single License. You've earned $6.50

USD from this sale.

Warm regards,
Team LayoutDrop`}
                  />
                  <div className="d-flex px-4 py-2">
                    <button type="button" className="btn btn-primary waves-effect waves-light">
                      Send Message
                    </button>
                    <button type="button" class="btn btn-action-gray text-dark btn-icon waves-effect waves-light ms-3">
                      <i className="fi fi-rr-link-alt"></i>
                    </button>
                    <button type="button" class="btn btn-action-gray text-dark btn-icon waves-effect waves-light ms-1">
                      <i className="fi fi-rr-add-image"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Shared Footer */}
      <Footer />

      {/* Dynamic Tagify scripts */}
      <Script src="/assets/libs/tagify/tagify.js" strategy="afterInteractive" />
      <Script src="/assets/js/tagify.js" strategy="afterInteractive" />
    </div>
  );
}
