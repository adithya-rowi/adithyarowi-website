"use client";

import { useState } from "react";

export default function SupportPage() {
  const [qty, setQty] = useState(1);
  const UNIT = 15;
  const MAX = 100;

  function changeQty(delta: number) {
    setQty((prev) => Math.min(MAX, Math.max(1, prev + delta)));
  }

  function donate() {
    // Replace with your actual PayPal checkout link
    const paypalUrl = `https://www.paypal.com/paypalme/adithyarowi/${qty * UNIT}`;
    window.open(paypalUrl, "_blank");
  }

  return (
    <main className="page">
      <header style={{ paddingBottom: "2rem" }}>
        <a href="/" className="back-link">
          ← Back
        </a>
        <h1 className="name" style={{ marginTop: "2rem" }}>
          Support my work
        </h1>
        <p className="support-intro">
          If you like what I&apos;m building, you can support me here. Each unit is USD 15.
        </p>
      </header>

      <div className="donate-box">
        <div className="donate-row">
          <span className="donate-label">Quantity</span>
          <div className="qty-control">
            <button className="qty-btn" onClick={() => changeQty(-1)}>
              −
            </button>
            <div className="qty-value">{qty}</div>
            <button className="qty-btn" onClick={() => changeQty(1)}>
              +
            </button>
          </div>
        </div>
        <p className="donate-total">
          Total: <span className="donate-amount">USD {qty * UNIT}</span>
        </p>
        <button className="paypal-btn" onClick={donate}>
          Donate via PayPal
        </button>
        <p className="donate-note">Redirects to PayPal checkout. Payments in USD.</p>
      </div>

      <footer style={{ borderTop: "none" }}>
        <p className="footer-note">Thank you.</p>
      </footer>
    </main>
  );
}
