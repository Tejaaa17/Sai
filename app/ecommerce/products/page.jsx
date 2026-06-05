"use client";

import Link from "next/link";
import { useEffect } from "react";
import EcommerceHeader from "../../_components/EcommerceHeader";
import EcommerceSidebar from "../../_components/EcommerceSidebar";
import Footer from "../../_components/Footer";

export default function ProductsPage() {
  useEffect(() => {
    // Apply e-commerce page color settings on mount
    if (typeof window !== "undefined" && window.setAppSettings) {
      window.setAppSettings({
        appColor: "orange",
      });
    }
  }, []);

  const productsList = [
    {
      id: 1,
      name: "Hoodie Tshirt For Men",
      image: "/assets/images/ecommerce/products/grid/pic1.png",
      rating: 4.5,
      reviewsCount: 45,
      oldPrice: 100,
      price: 80,
      discount: "30% Off",
    },
    {
      id: 2,
      name: "Elegant Red Chair",
      image: "/assets/images/ecommerce/products/grid/pic7.png",
      rating: 4.5,
      reviewsCount: 45,
      oldPrice: 50,
      price: 30,
      discount: "30% Off",
    },
    {
      id: 3,
      name: "Kids School Bag",
      image: "/assets/images/ecommerce/products/grid/pic14.png",
      rating: 4.5,
      reviewsCount: 45,
      oldPrice: 40,
      price: 25,
      discount: "20% Off",
    },
    {
      id: 4,
      name: "Luxury Men’s Watch",
      image: "/assets/images/ecommerce/products/grid/pic10.png",
      rating: 4.5,
      reviewsCount: 45,
      oldPrice: 199,
      price: 99,
      discount: "50% Off",
    },
    {
      id: 5,
      name: "Trendy Ladies Purse",
      image: "/assets/images/ecommerce/products/grid/pic13.png",
      rating: 4.5,
      reviewsCount: 45,
      oldPrice: 70,
      price: 35,
      discount: "50% Off",
    },
    {
      id: 6,
      name: "Makeup Kit Gift Set",
      image: "/assets/images/ecommerce/products/grid/pic6.png",
      rating: 4.5,
      reviewsCount: 45,
      price: 80,
    },
    {
      id: 7,
      name: "Elegant Yellow Chair",
      image: "/assets/images/ecommerce/products/grid/pic11.png",
      rating: 4.5,
      reviewsCount: 45,
      oldPrice: 100,
      price: 80,
      discount: "30% Off",
    },
    {
      id: 8,
      name: "Vintage Table Clock",
      image: "/assets/images/ecommerce/products/grid/pic8.png",
      rating: 4.5,
      reviewsCount: 45,
      oldPrice: 25,
      price: 20,
      discount: "30% Off",
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
              <h1 className="app-page-title">Products</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link href="/">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Products
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          <div className="row">
            {productsList.map((product) => (
              <div className="col-lg-3 col-sm-6 mb-4" key={product.id}>
                <div className="bg-light rounded-3 position-relative">
                  <div className="d-block p-3 border-bottom">
                    <Link href="/ecommerce/product-details">
                      <img className="img-fluid" src={product.image} alt={product.name} />
                    </Link>
                  </div>
                  <div className="d-block p-3">
                    <h6 className="mb-2 text-sm">
                      <Link href="/ecommerce/product-details" className="text-dark">
                        {product.name}
                      </Link>
                    </h6>
                    <div className="d-flex gap-1 align-items-center">
                      <ul className="d-flex text-warning m-0 text-3xs list-unstyled">
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                      </ul>
                      <p className="mb-0 fw-semibold text-3xs text-dark">
                        {product.rating} <span className="text-body">({product.reviewsCount} Review)</span>
                      </p>
                    </div>
                    <h6 className="fw-semibold mt-1 mb-3 d-flex align-items-center gap-1">
                      {product.oldPrice && <del className="text-body">${product.oldPrice}</del>} ${product.price}
                      {product.discount && <small className="text-body"> ({product.discount})</small>}
                    </h6>
                    <a href="javascript:void(0);" className="btn btn-white w-100">
                      <i className="fi fi-rr-shopping-cart me-1"></i> Add to Cart
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="javascript:void(0);" aria-label="Previous">
                  <i className="fi fi-rr-angle-double-left"></i>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="javascript:void(0);">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="javascript:void(0);">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="javascript:void(0);">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="javascript:void(0);" aria-label="Next">
                  <i className="fi fi-rr-angle-double-right"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </main>

      {/* Shared Footer */}
      <Footer />
    </div>
  );
}
