import React from 'react';
import Link from 'next/link'
import Head from 'next/head'

const AppLink = ({children, className, href}) =>
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>
function Contacts() {
    return (
        <div>
          <Head>
            <title>
              Контакты
            </title>
          </Head>
      <section className="otherPages">
        <div className="otherPages--top">
          <div className="container">
            <h1>Связаться с нами</h1>
            <AppLink href="/get_money">
            <button className="takebtn mb-2">Получить деньги</button></AppLink>
          </div>

        </div>
        <div className="container">
          <div className="mapping row">
            <div className="col-md-5 col-lg-4 mapping--text">
              <h2 className="mb-5"> РК, г. Алматы,
                <br />ул. Толе би 101, <br />БЦ "Толе би", 3 этаж, блок D</h2>
              <div className="phones mb-3">
                <a href="tel: +77272501500"> <i className="fa fa-phone" />+7 727 250 15 00</a>
                <a href="tel: +77002501500"><i className="fa fa-phone" />+7 700 750 15 00</a>
              </div>
            </div>
            
            <div className="mapping--map col-md-7 col-lg-8">
              <iframe className="mb-5" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1452.9398096937214!2d76.9235713581904!3d43.25394469478424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836eb1530564c9%3A0xcfb73b59f9a751a3!2sBe%20Educated!5e0!3m2!1sru!2skz!4v1616669719967!5m2!1sru!2skz" width="100%" height={450} frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
            </div>
          </div>
        </div></section>
        </div>
    );
}

export default Contacts;
