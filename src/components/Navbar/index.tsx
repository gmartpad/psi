'use client'

import InstaIcon from '@components/InstaIcon'
import PhoneIcon from '@components/PhoneIcon'
import React from 'react'
import formatPhoneNumber from '@utils/formatPhoneNumber'

function Navbar() {
  const handleScrollIntoView = (id: string) => {
    // get the element you want to scroll to
    const element = document.getElementById(id)

    // calculate the offset in pixels.
    // Since 1 rem is equal to the fontsize of the root element
    // and the header height is 4rem, multiply the rootFontSize by 4
    const rootFontSize = parseFloat(
      getComputedStyle(document.documentElement).fontSize,
    )
    const offset = 4 * rootFontSize

    // get the element's position relative to the viewport and
    // add the current page scroll position to get the absolute position
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset

    // subtract the desired offset (4 rem) from the element's position
    const offsetPosition = elementPosition - offset

    // then navigate to it smoothly
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }

  return (
    <div className="navbar w-screen top-0 fixed bg-base-100 h-16 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-60"
          >
            <li>
              <a onClick={() => handleScrollIntoView('1')}>Sobre</a>
            </li>
            <li>
              <a onClick={() => handleScrollIntoView('2')}>FAQ</a>
            </li>
            <li>
              <a onClick={() => handleScrollIntoView('3')}>Agendamento</a>
            </li>
            <li>
              <a onClick={() => handleScrollIntoView('4')}>Depoimentos</a>
            </li>
            <li>
              <a onClick={() => handleScrollIntoView('5')}>Contato</a>
            </li>
            <a className="btn my-1">
              <InstaIcon />
            </a>
            <a
              className="btn my-1 flex"
              target="_blank"
              href={`https://api.whatsapp.com/send?phone=${formatPhoneNumber(
                '+55 48 99921-1237',
              )}`}
              rel="noreferrer"
            >
              <p>+55 48 99921-1237</p> <PhoneIcon />
            </a>
          </ul>
        </div>
        <a
          onClick={() => handleScrollIntoView('1')}
          className="btn btn-ghost normal-case text-xl"
        >
          Dedeco
        </a>
      </div>
      <div style={{ width: 1500 }} className="justify-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a onClick={() => handleScrollIntoView('1')}>Sobre</a>
          </li>
          <li>
            <a onClick={() => handleScrollIntoView('2')}>FAQ</a>
          </li>
          <li>
            <a onClick={() => handleScrollIntoView('3')}>Agendamento</a>
          </li>
          <li>
            <a onClick={() => handleScrollIntoView('4')}>Depoimentos</a>
          </li>
          <li>
            <a onClick={() => handleScrollIntoView('5')}>Contato</a>
          </li>
        </ul>
        <a className="btn mx-1">
          <InstaIcon />
        </a>
        <a
          className="btn mx-1"
          target="_blank"
          href={`https://api.whatsapp.com/send?phone=${formatPhoneNumber(
            '+55 48 99921-1237',
          )}`}
          rel="noreferrer"
        >
          +55 48 99921-1237 <PhoneIcon />
        </a>
      </div>
    </div>
  )
}

export default Navbar
