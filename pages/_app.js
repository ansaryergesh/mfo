import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import Navbar from '../components/shared/Nav'
import Footer from '../components/shared/Footer'
import cookie from 'js-cookie'
import { Provider } from 'react-redux'
import React, {Fragment} from 'react'
import {createWrapper} from "next-redux-wrapper";
import {connect} from 'react-redux'
import store from '../store/store'
import App from 'next/app';

class MyApp extends App {
  componentDidMount() {

    var hours = 1.2;
    var now = new Date().getTime();
    var setupTime = localStorage.getItem('setupTime');
    if (setupTime == null) {
      localStorage.setItem('setupTime', now)
    } else {
      if (now - setupTime > hours * 60 * 60 * 1000) {
        localStorage.clear()
        localStorage.setItem('setupTime', now);
      }
    }

  }
  render() {
      const {Component, pageProps} = this.props;
      const compName = Component.name
      return (
          <Provider store={store}>
             <div className="chatBlock">
            <a href="https://t.me/icredit_kzbot" target="_blank">
            <img className='imgwhatsapp mb-3' src={require("../img/svg/telegram.svg")}></img></a>
            <a href="https://api.whatsapp.com/send?phone=+77015382439" target="_blank"><img className="imgwhatsapp" src={require("../img/svg/whatsapp.svg")} alt="" /></a>
            </div>
            <Navbar />
            <Component {...pageProps}/>
            <Footer />
          </Provider>
      );
  }
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);
const mapStateToProps = state => ({
  loggedIn: state.userReducer.loggedIn
});

const mapDispatchToProps = dispatch => ({
});

MyApp = connect(mapStateToProps,mapDispatchToProps)(MyApp)

export default wrapper.withRedux(MyApp);

