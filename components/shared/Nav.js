import Link from 'next/link'
import {Collapse} from 'reactstrap';
import $ from 'jquery'
import React, { Fragment } from 'react';
const AppLink = ({children, className, href}) =>
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>
class Navbar extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
        isNavOpen: false,
    };

    this.toggleNav = this.toggleNav.bind(this);
    this.toggleClose = this.toggleClose.bind(this);
  }

  toggleNav() {
    this.setState ({
        isNavOpen: !this.state.isNavOpen
    });
}
toggleClose() {
  this.setState ({
      isNavOpen: false
  });
}
componentDidMount() {
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
}

  render() {
  return (
    <div>
    <nav className=" mb-2 navbar navbar-expand-lg navbar-light  transparent ">
    <div className="container">
    <AppLink href="/" className="navbar-brand logo">
        <h2>zaymi.kz</h2>
    </AppLink>
    <AppLink href='/payment' className="text-center paymentCenter ">Внести оплату</AppLink>
      <button  onClick={this.toggleNav} className="navbar-toggler burger" type="button" data-toggle="collapse" data-target="#navigationBar" aria-controls="navigationBar" aria-expanded="false" aria-label="Toggle navigation">
        <div className="animated-icon1"><span /><span /><span /></div>
      </button>
      <ul className="phone-numbers">
        <li><i className="fa fa-phone" /><h1><a href="tel:+77272501500">+7 727 <b className="black">250 15 00</b></a></h1></li>
        <li><i className="fa fa-phone" /><h1><a href="tel:+77007501500">+7 700 <b className="black">750 15 00</b></a></h1></li>
      </ul>
      <Collapse navbar isOpen={this.state.isNavOpen} className="text-center justify-content-end" id="navigationBar">
        <ul className="navbar-nav links">
          <li className="nav-item mx-1">

            <AppLink  onClick={this.toggleClose} className="nav-link align-items-center d-flex"  href='/payment_methods'> Способ
              оплаты</AppLink>
          </li>
          <li className="nav-item mx-1">
            <AppLink  onClick={this.toggleClose} className="nav-link align-items-center d-flex font-weight-bold" href="/payment">
              Внести оплату</AppLink>
          </li>
          <li className="nav-item mx-1">
            <AppLink  onClick={this.toggleClose} className="nav-link mainnavphone" href="/complaint">
              Оставить жалобу</AppLink>
          </li>
          <li className="nav-item mx-1"  onClick={this.toggleClose}>
            <a className="nav-link align-items-center d-flex" href="https://i-credit.kz/login/"> Личный кабинет</a>
          </li>
          <li  onClick={this.toggleClose} className="nav-item mx-1 phonenav firstphonenav"><i className="fa fa-phone" /><h1><a href="tel:+77272501500">+7 727 <b className="black">250 15 00</b></a></h1></li>
          <li  onClick={this.toggleClose} className="nav-item mx-1 phonenav"><i className="fa fa-phone" /><h1><a href="tel:+77007501500">+7 700 <b className="black">750 15 00</b></a></h1></li>
        </ul>
      </Collapse>
    </div>
  </nav>
  </div>
  );}
};

export default Navbar;
