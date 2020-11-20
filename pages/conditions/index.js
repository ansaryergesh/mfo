import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
const AppLink = ({children, className, href}) =>
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>

function Conditions() {
    return (
        <div>
          <Head>
            <title>
              Условия предоставления займов
            </title>
          </Head>
              <section className="otherPages">
        <div className="otherPages--top">
          <div className="container">
            <h1>Условия предоставления займов</h1>
            <AppLink href="get_money">
            <button className="takebtn">Получить деньги</button>
            </AppLink>
          </div>
        </div>
        <div className="container">
          <section className="conditions">
            <div className="condition row">
              <div className="condition--head col-md-7">
                <img src={require("../../img/svg/icon 3.svg")} className="mb-5" />
                <p>Срок займа и ставка <br />вознаграждения</p>
              </div>
              <div className="condition--info col-md-5">
                <p>Льготный период под 0% до 7 дней. Максимальная ставка вознаграждения с 8го дня 1% в день,
                  годовая ставка вознаграждения - 360%. Срок займа – до 90 дней.</p>
              </div>
            </div>
          </section>
          <section className="conditions">
            <div className="condition row">
              <div className="condition--head col-md-7">
                <img src={require("../../img/svg/icon 4.svg")} className="mb-5" />
                <p>Штрафные санкции</p>
              </div>
              <div className="condition--info col-md-5">
                <p>В случае нарушения установленного срока платежа по займу, заемщик будет обязан оплатить
                  неустойку, состоящую из штрафа в размере 10% от суммы основного долга уплачиваемого
                  единовременно и пени в размере 0,5% от суммы основного долга за каждый день просрочки.</p>
              </div>
            </div>
          </section>
          <section className="conditions">
            <div className="condition row">
              <div className="condition--head col-md-7">
                <img src={require("../../img/svg/icon 5.svg")} className="mb-5" />
                <p>Методы взыскания <br />задолженности</p>
              </div>
              <div className="condition--info col-md-5">
                <p>В случае просрочки, будет применены все законные средства взыскания задолженности. А также
                  все данные по займу будут переданы в кредитные бюро, что может повлиять на кредитную историю
                  заемщика.</p>
              </div>
            </div>
          </section>
        </div>
      </section>
        </div>
    );
}

export default Conditions;
