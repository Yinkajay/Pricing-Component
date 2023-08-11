/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [price, setPrice] = useState(13.00)
  const [billingMode, setBillingMode] = useState('monthly')
  // const [pageviews, setPageviews] = useState('50K')

  function formatNumber(number) {
    if (number >= 1000000) {
      return (number / 1000000).toFixed(1).replace(".0", "") + "M";
    } else if (number >= 1000) {
      return (number / 1000).toFixed(1).replace(".0", "") + "K";
    } else {
      return number.toString();
    }
  }

  const toggleMode = (mode) => {
    if (mode === 'monthly') {
      setBillingMode('yearly')
    } else {
      setBillingMode('monthly')
    }
  }

  const getPageviews = (price) => {
    if (price <= 8) {
      return formatNumber(10000);
    } else if (price <= 12) {
      const pageviews = 10000 + ((price - 8) / (12 - 8)) * (50000 - 10000);
      return formatNumber(Math.round(pageviews));
    } else if (price <= 16) {
      const pageviews = 50000 + ((price - 12) / (16 - 12)) * (100000 - 50000);
      return formatNumber(Math.round(pageviews));
    } else if (price <= 24) {
      const pageviews = 100000 + ((price - 16) / (24 - 16)) * (500000 - 100000);
      return formatNumber(Math.round(pageviews));
    } else if (price <= 36) {
      const pageviews = 500000 + ((price - 24) / (36 - 24)) * (1000000 - 500000);
      return formatNumber(Math.round(pageviews));
    } else {
      return "Invalid price";
    }
  }


  return (
    // <>
    <div className="container">
      <div className="header">
        <h2>{price}</h2>
        Simple, traffic-based pricing
        Sign-up for our 30-day trial. No credit card required.
      </div>
      <div className="card">
        <div className='stats'>
          <p>
            {getPageviews(price)} Pageviews
          </p>
          <p>
            <span className='price-value'>${price}</span>/ month
          </p>
        </div>
        <div className="input-area">
          <input type="range" name="" id="" min='8' max='36' step='4' value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div className="">
          Monthly Billing
          Yearly Billing 25% discount
        </div>
        <div className="">
          <div className="">

            Unlimited websites
            100% data ownership
            Email reports
          </div>
          <button>
            Start my trial
          </button>
        </div>
      </div>
      {/* <div className="attribution">
              Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
              Coded by <a href="#">Your Name Here</a>.
            </div> */}
    </div>
    // </>
  )
}

export default App
