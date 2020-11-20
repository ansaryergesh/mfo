import React from 'react';
import Link from 'next/link'
import Head from 'next/head'
const AppLink = ({children, className, href}) =>
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>
function Stepmoney() {
    return (

              <section className="otherPages">
                <Head><title>Как получить деньги</title></Head>
        <div className="otherPages--top hidden">
          <div className="container">
            <h1>Как получить деньги</h1>
            <AppLink href="/get_money"><button className="takebtn" data-toggle="modal" data-target="#modalmoney">Получить деньги</button></AppLink>
          </div>

        </div>
        <div className="container hidden">
          <section className="stepmoney kakoplatit">
            <div className="steps mt-5">
              <div className="row">
                <div className="step mb-5 col-md-6">
                  <img src={require("../../img/svg/icon 1.svg")} className="mb-5"/>
                  <h4>Заполнить анкету на <span> сайте онлайн</span></h4>
                </div>
                <div className="step mb-5 col-md-6">
                  <img src={require("../../img/svg/icon 2.svg")} className="mb-5"/>
                  <h4>Ждать решение в течение 10 минут!</h4>
                </div>
              </div>
            </div>
            <p>
              В случае одобрения Вашего займа наш кредитный менеджер свяжется с Вами.
            </p>
            <h1 className=" mt-5 mb-5">Служба заботы о клиентах</h1>
            <p className="mb-5">Мы с радостью дадим любое разъяснение на все ваши вопросы по следующим <br />телефонам,
              время обработки
              звонков Пн-Пт 09:00-18:00</p>
            <div className="phones mb-5 mt-5">
              <div className="phone-list">
                <a href="tel: +77272501500"> <i className="fa fa-phone" />+7 727 250 15 00</a>
                </div>
              <div className="phone-list">
                <a href="tel: +77007501500"><i className="fa fa-phone" />+7 700 750 15 00</a>
              </div>
            </div>
            <a className="infomail " href="mailto:info@i-credit.kz"> info@i-credit.kz</a>
          </section>
        </div>
        </section>
    )
}
export default Stepmoney;
