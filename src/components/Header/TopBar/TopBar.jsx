import React from 'react'
import './TopBar.css'

export default function TopBar() {
  return (
    <>
      <div className='top-header'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 col-6 contact-header'>
              <span className='top-header-span'>
                Hotline:
                <a className='fone' href='tel:19001090'>
                  19001090
                </a>
              </span>
              <span className='d-md-inline-block d-none top-header-span'>
                Email:{' '}
                <a className='fone' href='#'>
                  0306211489@caothang.edu.vn
                </a>
              </span>
            </div>
            <div className='col-md-6 col-6 contact-header'>
              <a className='fone' href='/acount/login'>
                Login
              </a>
              <a className='fone' href='/acount/register'>
                Sign in
              </a>
              <a className='d-md-inline-block d-none fone' href='/acount/contact'>
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
