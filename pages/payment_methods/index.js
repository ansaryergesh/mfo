import React from 'react';
import Link from 'next/link'
import {Collapse} from 'reactstrap';
import Head from 'next/head'

var scrollToElement = require('scroll-to-element');
const AppLink = ({children, className, href}) =>
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>

class Instruction extends React.Component {
    state = {
      collapse: ""
    }

    toggleCollapse = id => () => {
      if (!this.state.collapse || id !== this.state.collapse) {
        this.setState({
          collapse: id
        });
      } else if (this.state.collapse === id) {
          this.setState({ collapse: false })
      }


      setTimeout(() => scrollToElement(`.${id}`, {
        offset: 0,
        align: 'middle',
        ease: 'outExpo',
        duration: 600
      }), 350 )
    }
    render () {
    return (
        <div>
           <Head>
            <title>Способ оплаты</title>
          </Head>
        <section className="otherPages">
          <div className="otherPages--top hidden">
            <div className="container">
              <h1>Погасить кредит можно <br />одним из следующих способов:</h1>
              <AppLink href="/get_money">
              <button className="takebtn" data-toggle="modal" data-target="#modalmoney">Получить деньги</button>
              </AppLink>
            </div>
          </div>
          <div className="container hidden">
            <div className="voprosi pogashenie ">
              <div className="pogasit--logo">
                <img src={require("../../img/qrcode/logo.jpg")} className="pogasit--img qiwiterminal" alt="" onClick={this.toggleCollapse("qrcode")}/>
              </div>
                <div className="">
                  <div className="voprosi--top" onClick={this.toggleCollapse("qrcode")}>
                    <h2>С помощью QR-код</h2>
                    <a className="more" type="button" />
                  </div>
                  <Collapse isOpen={this.state.collapse === 'qrcode'} id="qrcode">
                    <div className="pogasit--otvet">
                      <div className="instruction">
                        <img className='text-center mb-4 instruction--img' src={require("../../img/qrcode/qrcode.jpg")} />
                        <p>Инструкция</p>
                        <p className="instTop">
                        1.	Откройте любое приложение с QR-сканером на Вашем телефоне.
                        </p>
                        {/* <div className="instruction--img mb-5">
                          <img src={require("../../img/qiwi/qw.png")} />
                        </div> */}
                        <p className="instTop">
                          2.	Наведите на QR-код выше. Откроется страница для совершения платежа.
                        </p>
                        {/* <div className="instruction--img mb-5">
                          <img src={require("../../img/qiwi/qw2.png")} />
                        </div> */}
                        <p className="instTop">
                          3.	Выберите метод оплаты и введите Ваши платёжные данные
                        </p>
                        {/* <div className="instruction--img mb-5">
                          <img src={require("../../img/qiwi/qw3.png")} />
                        </div> */}
                        <p className="instTop">
                          4.	Получите подтверждение об оплате и наслаждайтесь
                        </p>
                        {/* <div className="instruction--img mb-5">
                          <img src={require("../../img/qiwi/qw4.png")} />
                        </div> */}

                      </div>
                    </div>
                  </Collapse>
              </div>
            </div>

            <div className="voprosi pogashenie ">
              <div className="pogasit--logo">
                <img src={require("../../img/qiwi.png")} className="pogasit--img qiwiterminal" alt="" onClick={this.toggleCollapse("qiwiterminal")}/>
              </div>
                <div className="">
                  <div className="voprosi--top" onClick={this.toggleCollapse("qiwiterminal")}>
                    <h2>Qiwi терминал</h2>
                    <a className="more" type="button" />
                  </div>
                  <Collapse isOpen={this.state.collapse === 'qiwiterminal'} id="qiwiterminal">
                    <div className="pogasit--otvet">
                      <div className="instruction">
                        <p>Инструкция</p>
                        <p className="instTop">
                        1.	В сенсорной панели Qiwi терминала нажать на «Оплату услуг».
                        </p>
                        <div className="instruction--img mb-5">
                          <img src={require("../../img/qiwi/qw.png")} />
                        </div>
                        <p className="instTop">
                          2.	Нажать на категорию Погашение кредитов/фин. услуги
                        </p>
                        <div className="instruction--img mb-5">
                          <img src={require("../../img/qiwi/qw2.png")} />
                        </div>
                        <p className="instTop">
                          3.	В открывшемся меню нажать на подкатегорию МКО и МФО
                        </p>
                        <div className="instruction--img mb-5">
                          <img src={require("../../img/qiwi/qw3.png")} />
                        </div>
                        <p className="instTop">
                          4.	С помощью кнопки Вперед найти микрофинансовую организацию «I-credit».
                        </p>
                        <div className="instruction--img mb-5">
                          <img src={require("../../img/qiwi/qw4.png")} />
                        </div>
                        <p className="instTop">
                          5.	На 3 странице кликнуть логотип МКО «I-credit».
                        </p>
                        <div className="instruction--img mb-5">
                          <img src={require("../../img/qiwi/qw5.png")} />
                        </div>
                        <p className="instTop">
                          6.	Ввести свой ИИН и нажать на кнопку Вперед
                        </p>
                        <div className="instruction--img mb-5">
                          <img src={require("../../img/qiwi/qw6.png")} />
                        </div>
                        <p className="instTop">
                          7.	Перепроверить верно ли введен ИИН заемщика, для подтверждения данных нажать на кнопку Вперед.
                        </p>
                        <div className="instruction--img mb-5">
                          <img src={require("../../img/qiwi/qw7.png")} />
                        </div>
                        <p className="instTop">
                          8.	Внесите сумму в купюроприемник терминала «Qiwi» и нажать на кнопку Оплатить.
                        </p>
                        <div className="instruction--img mb-5">
                          <img src={require("../../img/qiwi/qw8.png")} />
                        </div>
                      </div>
                    </div>
                  </Collapse>
              </div>
            </div>
            <div className="voprosi pogashenie ">
              <div className="pogasit--logo ">
                <img src={require("../../img/kassa24/kassa24.png")} className="pogasit--img " alt="" onClick={this.toggleCollapse("terkassa24")}/>
              </div>
                <div className="">
                  <div className="voprosi--top " onClick={this.toggleCollapse("terkassa24")}>
                    <h2 className='terkassa24'>Терминал Касса24</h2>
                    <a className="more" type="button" />
                  </div>
                  <Collapse isOpen={this.state.collapse === 'terkassa24'} id="terkassa24">
                    <div className="pogasit--otvet">

                    <p className="instruction font-weight-bold">
                      Инструкция
                    </p>
                      <p className="instTop">
                          1.	В сенсорной панели Касса24 нажать на «Оплату услуг».
                        </p>
                        <div className="instruction--img mb-5">
                          <img src={require("../../img/kassa24/1.png")} />
                        </div>
                        <p className="instTop">
                          2. Нажать на категорию Финансовые организации:
                        </p>
                        <div className="instruction--img mb-5">
                          <img src={require("../../img/kassa24/2.png")} />
                        </div>
                        <p className="instTop">
                          3.	Найдите в списке микрофинансовую организацию «I-credit». Для этого воспользуйтесь инструментом скролла экрана справа.
                        </p>
                        <div className="instruction--img mb-5">
                          <img src={require("../../img/kassa24/3.png")} />
                        </div>
                        <p className="instTop">
                          4.	Кликните на логотип МКО «I-credit»
                        </p>
                        <div className="instruction--img mb-5">
                          <img src={require("../../img/kassa24/4.png")} />
                        </div>
                        <p className="instTop">
                          5.	Введите ИИН заемщика и кнопку Продолжить
                        </p>
                        <div className="instruction--img mb-5">
                          <img src={require("../../img/kassa24/5.png")} />
                        </div>
                        <p className="instTop">
                          6.	Внесите сумму в купюроприемник терминала «Касса24» и нажмите кнопку Оплатить.
                        </p>
                        <div className="instruction--img mb-5">
                          <img src={require("../../img/kassa24/6.png")} />
                        </div>
                    </div>
                  </Collapse>
              </div>
            </div>
            <div className="voprosi pogashenie">
              <div className="pogasit--logo">
                <img src={require("../../img/pogas2.png")} className="pogasit--img plus24 " alt="" onClick={this.toggleCollapse("pogasit2")}/>
              </div>
                <div className="">
                  <div className="voprosi--top" onClick={this.toggleCollapse("pogasit2")}>
                    <h2 className='pogasit2'>Онлайн-оплата через мобильное приложение PLUS 24</h2>
                    <a className="more" type="button" />
                  </div>
                  <Collapse isOpen={this.state.collapse === 'pogasit2'} id="pogasit2">
                    <div className="pogasit--otvet">
                    <p className="instruction font-weight-bold">
                      Инструкция
                    </p>
                      <p className="instTop">
                          1. Прежде необходимо усстановить на телефон мобильное приложение "Plus24".
                        </p>
                        <div className="instruction--img mb-5">
                          <img src={require("../../img/plus24App/inst.jpg")} />
                        </div>
                        <p className="instTop">
                          2.Пройти регистрацию и пополнить баланс Plus24 с помощью банковской карты или других способов.
                        </p>

                        <p className="instTop">
                          3.В поле поиска «Найти услугу или компанию» напишите "I-Credit". И перейти по найденной услуге.
                        </p>
                        <div className="instruction--img mb-5">
                          <img src={require("../../img/plus24App/searchplus.jpg")} />
                        </div>
                        <p className="instTop">
                          3.Заполните данные ИИН и сумма к оплате. И нажать кнопку «Оплатить».
                        </p>
                    </div>
                  </Collapse>
              </div>
            </div>
            <div className="voprosi pogashenie ">
              <div className="pogasit--logo">
                <img src={require("../../img/pogas3.png")} className="pogasit--img pogasit3" alt="" onClick={this.toggleCollapse("pogasit3")}/>
              </div>
                <div className="">
                  <div className="voprosi--top" onClick={this.toggleCollapse("pogasit3")}>
                    <h2 className='pogasit3'>Через приложения Халык банка homebank.kz</h2>
                    <a className="more " type="button" />
                  </div>
                  <Collapse isOpen={this.state.collapse === 'pogasit3'} id="pogasit3">
                    <div className="pogasit--otvet">

                    <p className="instruction font-weight-bold">
                      Инструкция
                    </p>
                      <p className="instTop">
                        1.Откройте приложение Homebank и перейдите во вкладку «Платежи»
                      </p>
                      <div className="instruction--img mb-5">
                        <img src={require("../../img/homebank/halikstep1.jpg")} />
                      </div>
                      <p className="instTop">
                        2.Далее в поиске напишите "I-Credit" и найдете услугу "I-CREDIT.KZ"
                      </p>
                      <div className="instruction--img mb-5">
                        <img src={require("../../img/homebank/haliksearch.jpg")} />
                      </div>
                      <p className="instTop">
                        3.Заполните данные: ваш ФИО и ИИН. Далее в поле «Сумма к оплате» внесите сумму полного погашения вашего микрокредита.
                      </p>
                      <p className="instTop">
                        4. После заполнения суммы необходимо выбрать банковскую карту для оплаты из выпадающего списка. И нажать кнопку «Оплатить».
                      </p>
                    </div>
                  </Collapse>

              </div>
            </div>
            <div className="voprosi pogashenie">
              <div className="pogasit--logo">
                <img src={require("../../img/pogas4.png")} className="pogasit--img" alt="" onClick={this.toggleCollapse("pogasit4")}/>
              </div>
                <div className="">
                  <div className="voprosi--top" onClick={this.toggleCollapse("pogasit4")}>
                    <h2 className='pogasit4'>Банковским платежом через кассу народного банка</h2>
                    <a className="more" type="button" />
                  </div>
                  <Collapse isOpen={this.state.collapse === 'pogasit4'} id="pogasit4">
                    <div className="pogasit--otvet">

                      <div className="instruction">
                      <p className="instruction font-weight-bold">
                        Инструкция
                      </p>
                      <p className="instTop">
                        1.Обратиться в ближайшее отделение Halyk банка
                      </p>
                        <div className="instruction--img">
                        </div>
                      </div>
                    </div>
                  </Collapse>
              </div>
            </div>
          </div></section>
        </div>
    )
    }
}

export default Instruction
