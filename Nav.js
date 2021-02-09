import Link from 'next/link'
import {Collapse} from 'reactstrap';
import $ from 'jquery'
import cookie from 'js-cookie';
import React, { Fragment, useState, useEffect } from 'react';
import Router,{useRouter} from 'next/router'
import axios from 'axios'
// const router = useRouter()
const isLogged = () => {
  var bollean = false
  if(cookie.get('token')) {
     bollean = true
  }
  return bollean
}

const AppLink = ({children, className, href}) =>
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>
const Navbar = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [loader, setLoader] = useState(false)
  const router = useRouter()
  useEffect(() => {
    var $win = $(window);

    $win.scroll(function () {
    if ($(window).width() > 550) {
      if ($win.scrollTop() == 0) {
        $(".navbar").removeClass("fade-color");
      } else if (!$win.scrollTop() == 0) {
        $(".navbar").addClass("fade-color");
      }
    }
    });
  },[])
  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  }

  const toggleClose = () => {
    setNavOpen(false)
  }

  const toggleLogOut = () => {
    setNavOpen(false)
    setLoader(true)
    cookie.remove('token')

    setTimeout(() => {
      Router.push('/login')
      setLoader(false)
    },300)
  }

  return (
    <div className={router.pathname.includes('admin') ? 'd-none' : ''}>
       {loader === true
          ? <div className="modelLoader">

            </div>
          : <div className="modelLoader loaded">

          </div>
        }
    <nav className=" mb-2 navbar navbar-expand-lg navbar-light  transparent ">
    <div className="container">
 
    <AppLink href="/" className="navbar-brand logo">
      <img className='icreditlogo' src={require("../../img/logo.png")} alt="" />
    </AppLink>

    <AppLink href='/payment' className="text-center paymentCenter ">Внести оплату</AppLink>
      <button  onClick={toggleNav} className="navbar-toggler burger" type="button" data-toggle="collapse" data-target="#navigationBar" aria-controls="navigationBar" aria-expanded="false" aria-label="Toggle navigation">
        <div className="animated-icon1"><span /><span /><span /></div>
      </button>
     
      <ul className="phone-numbers">
        <li className='phonenotworking'><h1><i className="fa fa-phone" /><a href="tel:+77272501500">+7 727 <b className="black">250 15 00</b></a></h1><b className='phoneInfo'></b></li>
        <li><i className="fa fa-phone" /><h1><a href="tel:+77007501500">+7 700 <b className="black">750 15 00</b></a></h1></li>
      </ul>
      <Collapse navbar isOpen={isNavOpen} className="text-center justify-content-end" id="navigationBar">
        <ul className="navbar-nav links">
          <li className="nav-item mx-1"  onClick={toggleClose} >
            <AppLink className="nav-link align-items-center d-flex"  href='/payment_methods'> Способ
              оплаты</AppLink>
          </li>
          <li className="nav-item mx-1"  onClick={toggleClose}>
            <AppLink  className="nav-link align-items-center d-flex font-weight-bold" href="/payment">
              Внести оплату</AppLink>
          </li>

          <li className="nav-item mx-1" onClick={toggleClose} >
            <AppLink className="nav-link mainnavphone" href="/guides">
              Вопрос-ответ</AppLink>
          </li>
          <li className="nav-item mx-1" onClick={toggleClose} >
            <AppLink className="nav-link mainnavphone" href="/complaint">
              Оставить жалобу</AppLink>
          </li>

          {isLogged() === true ? (
            <Fragment>
              <li className="nav-item mx-1"  onClick={toggleClose}>
                <AppLink  className="nav-link align-items-center d-flex"  href='/cabinet/loans'>Личный кабинет</AppLink>
              </li>
              <li className="nav-item mx-1" onClick={toggleLogOut}>
                <a className="nav-link align-items-center d-flex">Выйти</a>
              </li>

            </Fragment>)
            :
            (
            <Fragment>
              <li className="nav-item mx-1"  onClick={toggleClose}>
                <AppLink  className="nav-link align-items-center d-flex"  href='/login'>Личный кабинет</AppLink>
              </li>
            </Fragment>)}

            <div className='mobphones mt-2'>
            <li className="nav-item mx-1 mobphonenotworking" onClick={toggleClose} >
            <a href='tel:+77272501500' className='nav-link mainnavphone'><i className="fa fa-phone" /> +77272501500</a>
            {/* <b className='phoneInfo'>Этот номер временно не работает</b> */}
          </li>
          <li className="nav-item mx-1" onClick={toggleClose} >
            <a href='tel:+77007501500' className='nav-link mainnavphone'><i className="fa fa-phone" /> +77007501500</a>
          </li>
            </div>

          {/* <li  onClick={this.toggleClose} className="nav-item mx-1 "><i className="fa fa-phone" /><h1><a href="tel:+77272501500">+7 727 <b className="black">250 15 00</b></a></h1></li>
          <li  onClick={this.toggleClose} className="nav-item mx-1 phonenav"><i className="fa fa-phone" /><h1><a href="tel:+77007501500">+7 700 <b className="black">750 15 00</b></a></h1></li> */}

        </ul>
      </Collapse>
    </div>
  </nav>
  </div>
  )
};



export default Navbar;
