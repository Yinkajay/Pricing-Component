/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import checkImage from '../images/icon-check.svg'
import backgroundPattern from '../images/pattern-circles.svg'

function App() {
  const [price, setPrice] = useState(12)
  const [billingMode, setBillingMode] = useState('monthly')

  const toggleMode = (mode) => {
    if (mode === 'monthly') {
      setBillingMode('yearly')
    } else {
      setBillingMode('monthly')
    }
  }

  function formatNumber(number) {
    if (number >= 1000000) {
      return (number / 1000000).toFixed(1).replace(".0", "") + "M";
    } else if (number >= 1000) {
      return (number / 1000).toFixed(1).replace(".0", "") + "K";
    } else {
      return number.toString();
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

  const changeModeHandler = (e) => {
    console.log(e.target.checked)
    const isYearly = e.target.checked
    if (isYearly) {
      setBillingMode('yearly')
    } else {
      setBillingMode('monthly')
    }
  }


  return (
    <div className="container">
      <img src={backgroundPattern} alt="background-pattern" className='bg-pattern' />
      <div className="header">
        <h1>
          Simple, traffic-based pricing
        </h1>
        <p>Sign-up for our 30-day trial. No credit card required.</p>
      </div>
      <div className="card">
        <div className='stats'>
          <p>
            {getPageviews(price)} Pageviews
          </p>
          <p>
            <span className='price-value'>${billingMode === 'monthly' ? (price * 1).toFixed(2) : (price * 0.75).toFixed(2)}</span>/ month
          </p>
        </div>
        <div className="input-area">
          <input type="range" name="" id="" min='8' max='36' step='4' value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div className="billing">
          <p>
            Monthly Billing
          </p>
          <div className="">
            <label className="toggle-switch">
              <input type="checkbox" id="switch" onChange={(e) => changeModeHandler(e)} />
              <span className="slider"></span>
            </label>
          </div>
          <p>
            Yearly Billing <span className='annual-discount'>25% discount</span>
          </p>
        </div>
        <hr className='divider' />
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src={checkImage} alt="check" />
              <p>Unlimited websites</p>
            </div>
            <div className="feature">
              <img src={checkImage} alt="check" />
              <p>100% data ownership</p>
            </div>
            <div className="feature">
              <img src={checkImage} alt="check" />
              <p>Email reports</p>
            </div>
          </div>
          <div className="start">
            <button className=''>
              Start my trial
            </button>
          </div>
        </div>
      </div>
      {/* <div className="attribution">
              Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
              Coded by <a href="#">Your Name Here</a>.
            </div> */}
    </div>
  )
}

export default App
