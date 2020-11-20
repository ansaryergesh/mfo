import React from 'react';
import {Collapse} from 'reactstrap';
import Link from 'next/link'
import Head from 'next/head'

const AppLink = ({children, className, href}) =>
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>

var scrollToElement = require('scroll-to-element');
class Questionans extends React.Component {
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

    scrollToElement(`.${id}`, {
			offset: 0,
			align: 'middle',
			ease: 'outExpo',
			duration: 600
		});
  }
  render() {
    return (
        <div>
          <Head>
            <title>Вопрос-ответ</title>
          </Head>
            <section className="otherPages">
        <div className="otherPages--top">
          <div className="container">
            <h1>Вопрос ответ</h1>
            <AppLink href="/get_money"><button className="takebtn">Получить деньги</button></AppLink>
          </div>
        </div>
        <div className="container">
          <div className="voprosi voprosi1">
            <div className="voprosi--top" data-toggle="collapse" data-target="#voprosi" onClick={this.toggleCollapse("voprosi1")}>
              <h2>Кто может взять заем?</h2>
              <a className="more" type="button" />
            </div>
            <Collapse isOpen={this.state.collapse === 'voprosi1'} id="voprosi1">
              <div className="voprosi--otvet">
                <p className="otvet mb-5">
                  * Отправить заявку вы можете в любое удобное для вас время, но рассмотрение и ответ по
                  заявке
                  будут осуществлены в рабочее время компании.
                </p>
                <div className="polezen">
                  <h3 className="mb-3">Был ли полезен вам ответ?</h3>
                  <div className="polezen--buttons">
                    <a type="button">
                      <h5>Да</h5>
                    </a>
                    <a type="button">
                      <h5>Нет</h5>
                    </a>
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
          <div className="voprosi voprosi2">
            <div className="voprosi--top" data-toggle="collapse" data-target="#voprosi2" onClick={this.toggleCollapse("voprosi2")}>
              <h2>Какие документы понадобятся для того чтобы оформить заем?</h2>
              <a className="more" type="button" />
            </div>
            <Collapse isOpen={this.state.collapse === 'voprosi2'}  id="voprosi2">
              <div className="voprosi--otvet">
                <p className="otvet mb-5">
                  * Для того, чтобы получить заем, достаточно удостоверения личности или паспорта.
                </p>
                <div className="polezen">
                  <h3 className="mb-3">Был ли полезен вам ответ?</h3>
                  <div className="polezen--buttons">
                    <a type="button">
                      <h5>Да</h5>
                    </a>
                    <a type="button">
                      <h5>Нет</h5>
                    </a>
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
          <div className="voprosi voprosi3">
            <div className="voprosi--top" data-toggle="collapse" data-target="#voprosi3" onClick={this.toggleCollapse("voprosi3")}>
              <h2>В какое время я могу отправить заявку и получить деньги?</h2>
              <a className="more" type="button" />
            </div>
            <Collapse isOpen={this.state.collapse === 'voprosi3'}  id="voprosi3">
              <div className="voprosi--otvet">
                <p className="otvet mb-5">
                  * Отправить заявку вы можете в любое удобное для вас время, но рассмотрение и ответ по заявке будут осуществлены в рабочее время компании.
                </p>
                <div className="polezen">
                  <h3 className="mb-3">Был ли полезен вам ответ?</h3>
                  <div className="polezen--buttons">
                    <a type="button">
                      <h5>Да</h5>
                    </a>
                    <a type="button">
                      <h5>Нет</h5>
                    </a>
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
          <div className="voprosi voprosi4">
            <div className="voprosi--top" data-toggle="collapse" data-target="#voprosi" onClick={this.toggleCollapse("voprosi4")}>
              <h2>Как узнать,дадут ли мне заем?</h2>
              <a className="more" type="button" />
            </div>
            <Collapse isOpen={this.state.collapse === 'voprosi4'} id="voprosi4">
              <div className="voprosi--otvet">
                <p className="otvet mb-5">
                  * После подачи заявки вы получите смс сообщение на ваш номер и электронную почту, где будет указано одобрена или отказана ваша заявка.
                  В случае одобрения займа, деньги будут перечислены на ваш текущий счет в банке.
                </p>
                <div className="polezen">
                  <h3 className="mb-3">Был ли полезен вам ответ?</h3>
                  <div className="polezen--buttons">
                    <a type="button">
                      <h5>Да</h5>
                    </a>
                    <a type="button">
                      <h5>Нет</h5>
                    </a>
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
          <div className="voprosi voprosi5">
            <div className="voprosi--top" data-toggle="collapse" data-target="#voprosi" onClick={this.toggleCollapse("voprosi5")}>
              <h2>В каком городе можно взять заем?</h2>
              <a className="more" type="button" />
            </div>
            <Collapse isOpen={this.state.collapse === 'voprosi5'} id="voprosi5">
              <div className="voprosi--otvet">
                <p className="otvet mb-5">
                  *  «I-credit.kz» осуществляет свою деятельность на всей территории Республики Казахстан.
                             Заявку можно подать в любом населенном пункте, где есть интернет.
                </p>
                <div className="polezen">
                  <h3 className="mb-3">Был ли полезен вам ответ?</h3>
                  <div className="polezen--buttons">
                    <a type="button">
                      <h5>Да</h5>
                    </a>
                    <a type="button">
                      <h5>Нет</h5>
                    </a>
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
          <div className="voprosi voprosi6">
            <div className="voprosi--top" data-toggle="collapse" data-target="#voprosi" onClick={this.toggleCollapse("voprosi6")}>
              <h2> Что надо делать, если на телефон не пришло SMS с кодом?</h2>
              <a className="more" type="button" />
            </div>
            <Collapse isOpen={this.state.collapse === 'voprosi6'} id="voprosi6">
              <div className="voprosi--otvet">
                <p className="otvet mb-5">
                  * Если SMS не пришло в течении 5 минут, необходимо воспользоваться опцией «получить код повторно» в форме заявки.
                  В случае повторной проблемы сообщите нам на info@i-credit.kz, указав ваш номер телефона или позвоните нам на указанный номер 8 727 2501-500.
                </p>
                <div className="polezen">
                  <h3 className="mb-3">Был ли полезен вам ответ?</h3>
                  <div className="polezen--buttons">
                    <a type="button">
                      <h5>Да</h5>
                    </a>
                    <a type="button">
                      <h5>Нет</h5>
                    </a>
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
          <div className="voprosi voprosi7">
            <div className="voprosi--top" data-toggle="collapse" data-target="#voprosi" onClick={this.toggleCollapse("voprosi7")}>
              <h2>Что надо делать если на мою электронную почту не доходят письма?</h2>
              <a className="more" type="button" />
            </div>
            <Collapse isOpen={this.state.collapse === 'voprosi7'} id="voprosi7">
              <div className="voprosi--otvet">
                <p className="otvet mb-5">
                  * Пожалуйста, проверьте папку «Спам» в электронной почте. Если там нет сообщения, то напишите нам
                  на info@i-credit.kz указав, какое именно письмо вам не пришло.
                </p>
                <div className="polezen">
                  <h3 className="mb-3">Был ли полезен вам ответ?</h3>
                  <div className="polezen--buttons">
                    <a type="button">
                      <h5>Да</h5>
                    </a>
                    <a type="button">
                      <h5>Нет</h5>
                    </a>
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
          <div className="voprosi voprosi8">
            <div className="voprosi--top" data-toggle="collapse" data-target="#voprosi" onClick={this.toggleCollapse("voprosi8")}>
              <h2> Что если я не правильно указал банковские реквизиты?</h2>
              <a className="more" type="button" />
            </div>
            <Collapse isOpen={this.state.collapse === 'voprosi8'} id="voprosi8">
              <div className="voprosi--otvet">
                <p className="otvet mb-5">
                * Ф.И.О. владельца банковского счета должны совпадать с Ф.И.О. в профиле на нашем сайте, иначе
                  средства не будут переведены на указанный счет.
                  Если заявка одобрена с неверными реквизитами, то средства будут возвращены нам вашим банком по
                  истечении 1-14 дней, после чего мы закроем заем без дополнительных взысканий, и вы сможете подать новую заявку с верными реквизитами.
                </p>
                <div className="polezen">
                  <h3 className="mb-3">Был ли полезен вам ответ?</h3>
                  <div className="polezen--buttons">
                    <a type="button">
                      <h5>Да</h5>
                    </a>
                    <a type="button">
                      <h5>Нет</h5>
                    </a>
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
          <div className="voprosi voprosi9">
            <div className="voprosi--top" data-toggle="collapse" data-target="#voprosi" onClick={this.toggleCollapse("voprosi9")}>
              <h2> Мою заявку одобрили или нет?</h2>
              <a className="more" type="button" />
            </div>
            <Collapse isOpen={this.state.collapse === 'voprosi9'} id="voprosi9">
              <div className="voprosi--otvet">
                <p className="otvet mb-5">
                * Вам должно прийти смс сообщение на указанный номер. Также информация о статусе
                  заявки отправляется на электронную почту, указанную при оформлении заявки,
                  и вы можете посмотреть статус в личном кабинете.
                </p>
                <div className="polezen">
                  <h3 className="mb-3">Был ли полезен вам ответ?</h3>
                  <div className="polezen--buttons">
                    <a type="button">
                      <h5>Да</h5>
                    </a>
                    <a type="button">
                      <h5>Нет</h5>
                    </a>
                  </div>
                </div>
              </div>
            </Collapse>
          </div>

          <div className="voprosi voprosi10">
            <div className="voprosi--top" data-toggle="collapse" data-target="#voprosi" onClick={this.toggleCollapse("voprosi10")}>
              <h2>Как я могу отменить заявку?</h2>
              <a className="more" type="button" />
            </div>
            <Collapse isOpen={this.state.collapse === 'voprosi10'} id="voprosi10">
              <div className="voprosi--otvet">
                <p className="otvet mb-5">
                Отменить заявку вы сможете в случае если деньги не отправлены на ваш счет,
                по дополнительной информации позвонить по указанному номеру: 8 727 2501-500.
                </p>
                <div className="polezen">
                  <h3 className="mb-3">Был ли полезен вам ответ?</h3>
                  <div className="polezen--buttons">
                    <a type="button">
                      <h5>Да</h5>
                    </a>
                    <a type="button">
                      <h5>Нет</h5>
                    </a>
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
          <div className="voprosi voprosi11">
            <div className="voprosi--top" data-toggle="collapse" data-target="#voprosi" onClick={this.toggleCollapse("voprosi11")}>
              <h2>Как я могу погасить заем?</h2>
              <a className="more" type="button" />
            </div>
            <Collapse isOpen={this.state.collapse === 'voprosi11'} id="voprosi11">
              <div className="voprosi--otvet">
                <p className="otvet mb-5">
                * Чтобы погасить заем Вам необходимо пройти в раздел «Способы оплаты» и выбрать наиболее удобный для вас вариант.
                </p>
                <div className="polezen">
                  <h3 className="mb-3">Был ли полезен вам ответ?</h3>
                  <div className="polezen--buttons">
                    <a type="button">
                      <h5>Да</h5>
                    </a>
                    <a type="button">
                      <h5>Нет</h5>
                    </a>
                  </div>
                </div>
              </div>
            </Collapse>
          </div>

          <div className="voprosi voprosi12">
            <div className="voprosi--top" data-toggle="collapse" data-target="#voprosi" onClick={this.toggleCollapse("voprosi12")}>
              <h2>Могу ли я погасить заем досрочно?</h2>
              <a className="more" type="button" />
            </div>
            <Collapse isOpen={this.state.collapse === 'voprosi12'} id="voprosi12">
              <div className="voprosi--otvet">
                <p className="otvet mb-5">
                * Вы можете в любой момент совершить полное досрочное погашение займа. Ваша задолженность будет указана в личном кабинете.
                </p>
                <div className="polezen">
                  <h3 className="mb-3">Был ли полезен вам ответ?</h3>
                  <div className="polezen--buttons">
                    <a type="button">
                      <h5>Да</h5>
                    </a>
                    <a type="button">
                      <h5>Нет</h5>
                    </a>
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
        </div></section>
        </div>
    );}
}

export default Questionans;
