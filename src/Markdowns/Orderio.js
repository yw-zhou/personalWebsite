import React from "react";
import order from "../Pictures/OrderioOrder.PNG";
import product from "../Pictures/OrderioProduct.PNG";

export default function Orderio(width) {
  return (
    <div>
      <h1 className="smallBottomMargin">Orderio</h1>
      <h3>Inspirations</h3>
      <p>
        Orderio's idea started when I saw the fast growing popularity of ipads
        and kiosks in restaurants. However, as the daughter of a buffet manager,
        I realized that alot of money would be needed to invest and purchase
        these devices. Since then, the idea of customers using their own device
        have always in the back of my mind.
      </p>
      <h3>Making restaurant ordering efficient and safe.</h3>
      <p>
        Summer 2020, as Canada announces patio only for all restaurants, various
        stores started opening back up. However, store devices were no longer
        used in procaution of Covid. I watched as the few servers that are still
        working ran between tables —now twice the distance apart— and realized
        this is the time that Orderio would be needed the most. I started
        spending a vast majority of my time on Orderio, making it a web app that
        is accessible by all customers, so users will never have the need to
        download any apps or other dependencies.
      </p>

      <div
        className={`flexContainer pixelArt flexCenter ${
          width > 960 ? "" : "flexWrapReverse"
        }`}
      >
        <div className="sideWidth">
          <h3>Partnering with SalesPlus</h3>
          <p>
            In August I was able to partner with SalesPlus a restaurant POS
            startup. They will be introducing Orderio as their newest option on
            top of their POS system, set to launch in October. Currently, I've
            pitched the idea to a couple of their clients and it has been very
            well recieved. I've taken their various feedback and continued to
            upgrade features on the web app, using real restaurant databases
            (provided by SalesPlus) to test.
          </p>
          <h3>Using Orderio</h3>
          <ul>
            <li>Scan the QR code on the table</li>
            <li>
              Order items that are in custom categories (set by restaurants on
              the POS)
            </li>
            <li>
              Checkout easily at front desk with a unique barcode in the app
            </li>
          </ul>
        </div>
        <img src={order} alt="orderPage" />
      </div>
      <div
        className={`flexContainer pixelArt flexCenter ${
          width > 960 ? "" : "flexWrap"
        }`}
      >
        <img src={product} alt="pixelArt" />
        <div className="sideWidth">
          <h2>Features</h2>
          <ul>
            <li>
              <strong>Customizeable single and multi options</strong>{" "}
              Restaurants can easily set any options in the POS system, and the
              web app will automatically update the changes. This is done
              through fetching with Axios as well as querying using NodeJS and
              SQL.
            </li>
            <li>
              <strong>Search Input</strong> using an recursive algorithm to sift
              through products in various categories and sub categories.
            </li>
            <li>
              <strong>Cart</strong> displaying the number of items using React
              hooks. Your shopping is saved to local storage so that your orders
              remain even when you close the page.
            </li>

            <li>
              <strong>Offers and discounts</strong> can be selected and will be
              applied at checkout.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
