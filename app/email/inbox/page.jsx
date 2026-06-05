"use client";

import Link from "next/link";
import { useEffect } from "react";
import Header from "../../_components/Header";
import Sidebar from "../../_components/Sidebar";
import Footer from "../../_components/Footer";

export default function EmailInboxPage() {
  useEffect(() => {
    // Default page settings on mount
    if (typeof window !== "undefined" && window.setAppSettings) {
      window.setAppSettings({
        appColor: "orange",
      });
    }
  }, []);

  const inboxEmails = [
    {
      id: 1,
      sender: "PixelMarket",
      subject: "🎨 Fresh Color Kits Just Dropped!-",
      text: " Add vibrance to your summer projects with pastel gradients and neon palettes.",
      time: "08:40 AM",
      starred: false,
      unread: false,
    },
    {
      id: 2,
      sender: "DesignWave",
      subject: "💰 You Made a Sale!",
      text: " Congrats, layoutWave! Your product “MetroGrid Figma Layout” has sold for $",
      time: "1:02 AM",
      starred: true,
      unread: false,
    },
    {
      id: 3,
      sender: "SiteTracker",
      subject: "📊 1,000 Visitors Reached",
      text: " Great job! Your site is gaining traction — keep the momentum going!",
      time: "Jul 21",
      starred: false,
      unread: true,
    },
    {
      id: 4,
      sender: "ThemeHive",
      subject: "Review Digest – July 20th",
      text: " Hello layoutWave, 2 themes approved:",
      time: "Jul 21",
      starred: false,
      unread: true,
    },
    {
      id: 5,
      sender: "PixelMarket",
      subject: "Must-Have Fonts for Creators",
      text: " Explore our top picks for minimal, bold, and handwritten font styles",
      time: "Jul 20",
      starred: false,
      unread: false,
    },
    {
      id: 6,
      sender: "DesignWave QA",
      subject: "⚠️ Feedback on Recent Upload",
      text: " Please fix responsiveness and padding issues.",
      time: "Jul 20",
      starred: false,
      unread: true,
    },
    {
      id: 7,
      sender: "ThemeHive",
      subject: "🛑 Hard Rejection – July 18",
      text: " our “NewsNow” template did not meet our layout standards. Check feedback.",
      time: "Jul 20",
      starred: true,
      unread: false,
    },
    {
      id: 8,
      sender: "PixelMarket",
      subject: "🌟 Trending Items This Week",
      text: " See what's rising in popularity",
      time: "Jul 20",
      starred: false,
      unread: false,
    },
    {
      id: 9,
      sender: "DesignWave Support",
      subject: "[Published] StudioX Portfolio Template",
      text: " Hi layoutWave, your new template is now live and ready to be purchased.out” has sold for $6.50 USD.",
      time: "Jul 19",
      starred: true,
      unread: false,
    },
    {
      id: 10,
      sender: "TemplateGalaxy Team",
      subject: "✅ Your Template Passed Review",
      text: " ZenBlocks UI System” is now listed on TemplateGalaxy. Congrats",
      time: "Jul 19",
      starred: false,
      unread: false,
    },
  ];

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
                    <Link href="/email/inbox" className="mail-nav-item active">
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
                    <form className="d-flex align-items-center h-100 w-200px w-md-250px position-relative me-auto" action="#">
                      <button type="button" className="btn btn-sm border-0 position-absolute start-0 ms-3 p-0">
                        <i className="fi fi-rr-search"></i>
                      </button>
                      <input type="text" className="form-control ps-5" placeholder="Search" />
                    </form>
                    <div className="d-flex align-items-center gap-3">
                      <span>1 - 10 of 570</span>
                      <div className="d-flex gap-2">
                        <button className="btn btn-white btn-shadow btn-icon waves-effect">
                          <i className="fi fi-rr-angle-left text-2xs"></i>
                        </button>
                        <button class="btn btn-white btn-shadow btn-icon waves-effect">
                          <i className="fi fi-rr-angle-right text-2xs"></i>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="inbox-tab" role="tabpanel" aria-labelledby="inbox-tab">
                      <div className="checkable-wrapper">
                        <div className="d-flex bg-light px-3 py-2 align-items-center gap-2 border-bottom">
                          <div className="form-check m-0 ms-1">
                            <input className="form-check-input checkable-check-all" type="checkbox" />
                          </div>
                          <a href="javascript:void(0);" className="text-body ms-1">
                            <i className="fi fi-rr-rotate-right"></i>
                          </a>
                        </div>
                        <ul className="list-unstyled mail-list m-0 gradient-layer" data-simplebar="true">
                          {inboxEmails.map((email) => (
                            <li
                              className={`mail-list-item checkable-item ${email.unread ? "mail-unread" : ""}`}
                              key={email.id}
                            >
                              <div className="form-check my-0 me-2">
                                <input className="form-check-input checkable-check-input" type="checkbox" />
                              </div>
                              <a className={`mail-item-bookmark ${email.starred ? "active" : ""}`} href="javascript:void(0);">
                                <i className="fi fi-rr-star me-2 me-sm-3"></i>
                              </a>
                              <Link href="/email/read-email" className="mail-item-content ms-2 ms-sm-0 me-2">
                                <span className="mail-item-username me-2">{email.sender}</span>
                                <span className="mail-item-subject">{email.subject}</span>
                                <span className="mail-item-text text-body">{email.text}</span>
                              </Link>
                              <div className="mail-item-meta ms-auto">
                                <small className="mail-item-time">{email.time}</small>
                                <div className="mail-item-actions">
                                  <button className="btn btn-white btn-sm text-danger btn-shadow btn-icon waves-effect">
                                    <i className="fi fi-rr-trash"></i>
                                  </button>
                                  <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect">
                                    <i className="fi fi-rr-box"></i>
                                  </button>
                                  <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect">
                                    <i className="fi fi-rr-menu-dots"></i>
                                  </button>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
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
