"use client";

import Link from "next/link";
import { useEffect } from "react";
import Script from "next/script";
import EcommerceHeader from "../../_components/EcommerceHeader";
import EcommerceSidebar from "../../_components/EcommerceSidebar";
import Footer from "../../_components/Footer";

export default function ProductListPage() {
  useEffect(() => {
    // Apply e-commerce page color settings on mount
    if (typeof window !== "undefined" && window.setAppSettings) {
      window.setAppSettings({
        appColor: "orange",
      });
    }
  }, []);

  const products = [
    {
      id: "PROD201",
      name: "Smartwatch (Blue Strap)",
      image: "/assets/images/ecommerce/products/pic2.png",
      price: "$149.00",
      quantity: 40,
      sale: "12%",
      status: "In Stock",
      statusClass: "bg-success-subtle text-success",
      date: "02-08-2025",
    },
    {
      id: "PROD202",
      name: "Orange Chair",
      image: "/assets/images/ecommerce/products/pic3.png",
      price: "$179.00",
      quantity: 25,
      sale: "8%",
      status: "In Stock",
      statusClass: "bg-success-subtle text-success",
      date: "06-08-2025",
    },
    {
      id: "PROD203",
      name: "Pink Hoodie",
      image: "/assets/images/ecommerce/products/pic4.png",
      price: "$89.00",
      quantity: 18,
      sale: "14%",
      status: "Low Stock",
      statusClass: "bg-danger-subtle text-danger",
      date: "11-08-2025",
    },
    {
      id: "PROD204",
      name: "Cosmetic Products (Creams & Tubes Set)",
      image: "/assets/images/ecommerce/products/pic5.png",
      price: "$65.00",
      quantity: 85,
      sale: "18%",
      status: "In Stock",
      statusClass: "bg-success-subtle text-success",
      date: "21-08-2025",
    },
    {
      id: "PROD205",
      name: "Handbags (Green and Pink Tote Bags)",
      image: "/assets/images/ecommerce/products/pic6.png",
      price: "$139.00",
      quantity: 55,
      sale: "9%",
      status: "In Stock",
      statusClass: "bg-success-subtle text-success",
      date: "16-08-2025",
    },
    {
      id: "PROD206",
      name: "Backpack (School Bag with books and stationery)",
      image: "/assets/images/ecommerce/products/pic7.png",
      price: "$89.00",
      quantity: 45,
      sale: "11%",
      status: "In Stock",
      statusClass: "bg-success-subtle text-success",
      date: "17-08-2025",
    },
    {
      id: "PROD207",
      name: "Hoodie Jacket (Zipper Hoodie)",
      image: "/assets/images/ecommerce/products/pic8.png",
      price: "$109.00",
      quantity: 38,
      sale: "13%",
      status: "In Stock",
      statusClass: "bg-success-subtle text-success",
      date: "18-08-2025",
    },
    {
      id: "PROD208",
      name: "Beige Armchair (Single Seater Chair)",
      image: "/assets/images/ecommerce/products/pic9.png",
      price: "$229.00",
      quantity: 22,
      sale: "7%",
      status: "Low Stock",
      statusClass: "bg-danger-subtle text-danger",
      date: "19-08-2025",
    },
    {
      id: "PROD209",
      name: "Yellow Modern Armchair",
      image: "/assets/images/ecommerce/products/pic10.png",
      price: "$239.00",
      quantity: 27,
      sale: "6%",
      status: "In Stock",
      statusClass: "bg-success-subtle text-success",
      date: "20-08-2025",
    },
    {
      id: "PROD210",
      name: "Red Wingback Chair",
      image: "/assets/images/ecommerce/products/pic11.png",
      price: "$259.00",
      quantity: 33,
      sale: "9%",
      status: "In Stock",
      statusClass: "bg-success-subtle text-success",
      date: "21-08-2025",
    },
    {
      id: "PROD211",
      name: "Alarm Clock (Analog Table Clock)",
      image: "/assets/images/ecommerce/products/pic12.png",
      price: "$49.00",
      quantity: 65,
      sale: "16%",
      status: "In Stock",
      statusClass: "bg-success-subtle text-success",
      date: "22-08-2025",
    },
    {
      id: "PROD212",
      name: "Classic Wrist Watch (Leather Strap Watch)",
      image: "/assets/images/ecommerce/products/pic13.png",
      price: "$199.00",
      quantity: 42,
      sale: "10%",
      status: "In Stock",
      statusClass: "bg-success-subtle text-success",
      date: "23-08-2025",
    },
    {
      id: "PROD213",
      name: "Smartwatch (Black Strap)",
      image: "/assets/images/ecommerce/products/pic14.png",
      price: "$159.00",
      quantity: 48,
      sale: "14%",
      status: "In Stock",
      statusClass: "bg-success-subtle text-success",
      date: "24-08-2025",
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
              <h1 className="app-page-title">Product List</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link href="/">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Product List
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          <div className="row">
            <div className="col-xx-12 col-12">
              <div className="card">
                <div className="card-header d-flex gap-3 flex-wrap align-items-center justify-content-between border-0 pb-0">
                  <h6 className="card-title mb-0">Product List</h6>
                  <div id="dt_ProductList_Search"></div>
                </div>
                <div className="card-body p-2">
                  <table id="dt_ProductList" className="table display table-row-rounded data-row-checkbox">
                    <thead className="table-light">
                      <tr>
                        <th className="minw-300px">Product Name</th>
                        <th className="minw-150px">Product ID</th>
                        <th className="minw-100px">Price</th>
                        <th className="minw-100px">Quantity</th>
                        <th className="minw-100px">Sale</th>
                        <th className="minw-100px">Stock</th>
                        <th className="minw-150px">Start Date</th>
                        <th className="minw-150px">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((product) => (
                        <tr key={product.id}>
                          <th>
                            <div className="d-flex align-items-center">
                              <div className="d-block me-3 bg-light p-1 rounded-2">
                                <img width="50" src={product.image} alt={product.name} />
                              </div>
                              <div className="clearfix">
                                <Link href="/ecommerce/product-details" className="text-dark">
                                  {product.name}
                                </Link>
                              </div>
                            </div>
                          </th>
                          <td>{product.id}</td>
                          <td>{product.price}</td>
                          <td>{product.quantity}</td>
                          <td>{product.sale}</td>
                          <td>
                            <span className={`badge ${product.statusClass}`}>{product.status}</span>
                          </td>
                          <td>{product.date}</td>
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
