"use client";

import Link from "next/link";
import { useEffect } from "react";
import Script from "next/script";
import EcommerceHeader from "../../_components/EcommerceHeader";
import EcommerceSidebar from "../../_components/EcommerceSidebar";
import Footer from "../../_components/Footer";

export default function TransactionsPage() {
  useEffect(() => {
    // Apply e-commerce page color settings on mount
    if (typeof window !== "undefined" && window.setAppSettings) {
      window.setAppSettings({
        appColor: "orange",
      });
    }
  }, []);

  const transactions = [
    {
      invoiceId: "#INV6725",
      customerName: "John Carter",
      avatar: "/assets/images/avatar/avatar1.webp",
      status: "Completed",
      statusClass: "bg-success-subtle text-success",
      amount: "$529.00",
      date: "18 Jul, 2025",
      method: "MasterCard",
    },
    {
      invoiceId: "#INV6726",
      customerName: "Emma Watson",
      avatar: "/assets/images/avatar/avatar2.webp",
      status: "Pending",
      statusClass: "bg-warning-subtle text-warning",
      amount: "$312.00",
      date: "19 Jul, 2025",
      method: "PayPal",
    },
    {
      invoiceId: "#INV6727",
      customerName: "Michael Smith",
      avatar: "/assets/images/avatar/avatar3.webp",
      status: "Cancelled",
      statusClass: "bg-danger-subtle text-danger",
      amount: "$178.00",
      date: "20 Jul, 2025",
      method: "Visa",
    },
    {
      invoiceId: "#INV6728",
      customerName: "Sophia Johnson",
      avatar: "/assets/images/avatar/avatar4.webp",
      status: "Completed",
      statusClass: "bg-success-subtle text-success",
      amount: "$850.00",
      date: "21 Jul, 2025",
      method: "Bank Transfer",
    },
    {
      invoiceId: "#INV6729",
      customerName: "William Brown",
      avatar: "/assets/images/avatar/avatar5.webp",
      status: "Pending",
      statusClass: "bg-warning-subtle text-warning",
      amount: "$245.00",
      date: "22 Jul, 2025",
      method: "UPI",
    },
    {
      invoiceId: "#INV6730",
      customerName: "Olivia Davis",
      avatar: "/assets/images/avatar/avatar6.webp",
      status: "Completed",
      statusClass: "bg-success-subtle text-success",
      amount: "$399.00",
      date: "23 Jul, 2025",
      method: "Credit Card",
    },
    {
      invoiceId: "#INV6731",
      customerName: "James Miller",
      avatar: "/assets/images/avatar/avatar7.webp",
      status: "Cancelled",
      statusClass: "bg-danger-subtle text-danger",
      amount: "$510.00",
      date: "24 Jul, 2025",
      method: "Cash",
    },
    {
      invoiceId: "#INV6732",
      customerName: "Isabella Wilson",
      avatar: "/assets/images/avatar/avatar8.webp",
      status: "Pending",
      statusClass: "bg-warning-subtle text-warning",
      amount: "$685.00",
      date: "25 Jul, 2025",
      method: "PayPal",
    },
    {
      invoiceId: "#INV6733",
      customerName: "Alexander Moore",
      avatar: "/assets/images/avatar/avatar9.webp",
      status: "Completed",
      statusClass: "bg-success-subtle text-success",
      amount: "$920.00",
      date: "26 Jul, 2025",
      method: "Net Banking",
    },
    {
      invoiceId: "#INV6734",
      customerName: "Mia Taylor",
      avatar: "/assets/images/avatar/avatar10.webp",
      status: "Pending",
      statusClass: "bg-warning-subtle text-warning",
      amount: "$370.00",
      date: "27 Jul, 2025",
      method: "Debit Card",
    },
  ];

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
              <h1 className="app-page-title">Transactions</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link href="/">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Transactions
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          <div className="row">
            <div className="col-xxl-12 col-lg-12">
              <div className="card">
                <div className="card-header d-flex gap-3 flex-wrap align-items-center justify-content-between border-0 pb-0">
                  <h6 className="card-title mb-0">Transactions History</h6>
                  <div id="dt_TransactionsHistory_Search"></div>
                </div>
                <div className="card-body p-2">
                  <table id="dt_TransactionsHistory" className="table display table-row-rounded">
                    <thead className="table-light">
                      <tr>
                        <th className="minw-150px">Invoice ID</th>
                        <th className="minw-200px">Customer Name</th>
                        <th className="minw-150px">Status</th>
                        <th className="minw-150px">Total Amount</th>
                        <th className="minw-150px">Order Date</th>
                        <th className="minw-200px">Payment Method</th>
                        <th className="minw-150px">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions.map((tx) => (
                        <tr key={tx.invoiceId}>
                          <td>{tx.invoiceId}</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="avatar avatar-sm me-2 rounded-circle">
                                <img src={tx.avatar} alt="" />
                              </div>
                              <div className="clearfix">
                                <h6 className="mb-0">{tx.customerName}</h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className={`badge ${tx.statusClass}`}>{tx.status}</span>
                          </td>
                          <td>{tx.amount}</td>
                          <td>{tx.date}</td>
                          <td>{tx.method}</td>
                          <td>
                            <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect me-1" type="button">
                              <i className="icon-square-pen"></i>
                            </button>
                            <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect" type="button">
                              <i className="icon-trash-2"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
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

