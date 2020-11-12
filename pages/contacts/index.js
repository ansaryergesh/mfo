import React from 'react';
import Link from 'next/link'

const AppLink = ({children, className, href}) =>
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>
function Contacts() {
    return (
        <div>
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
                <br />ул. Ауэзова 112/15 н.п 8</h2>
              <div className="phones mb-3">
                <a href="tel: +77272501500"> <i className="fa fa-phone" />+7 727 250 15 00</a>
                <a href="tel: +77002501500"><i className="fa fa-phone" />+7 700 750 15 00</a>
              </div>
            </div>
            <div className="mapping--map col-md-7 col-lg-8">
              <iframe className="mb-5" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.9057454006493!2d76.90309831535193!3d43.23243577913801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388369260b0c39d7%3A0xc724725dc3c87eb6!2z0YPQu9C40YbQsCDQkNGD0Y3Qt9C-0LLQsCAxMTIsINCQ0LvQvNCw0YLRiyAwNTAwNTc!5e0!3m2!1sru!2skz!4v1601456337351!5m2!1sru!2skz" width="100%" height={450} frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
            </div>
          </div>
        </div></section>
        </div>
    );
}

export default Contacts;
