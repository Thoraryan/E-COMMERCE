import React from 'react'

const Footer = () => {
  return (
        <footer className="footer mt-4 py-3 bg-white text-center">
            <div className="container">
                <span className="text-muted">
                Copyright ©
                <span id="year">2024</span>
                <a href className="text-dark fw-semibold">Admin Home</a>
                . Designed with
                <span className="fa fa-heart text-danger" />
                by
                <a href>
                    <span className="fw-semibold text-primary text-decoration-underline">Admin</span>
                </a>
                All rights reserved
                </span>
            </div>
        </footer>
  )
}

export default Footer