import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import Navbar from '../components/shared/Nav'
import Footer from '../components/shared/Footer'
import ScrollToTop from '../components/shared/ScrollToTop'
import MainComponent from '../components/MainComponent'
import { Provider } from 'react-redux'
import React, {Fragment} from 'react'
import {createWrapper} from "next-redux-wrapper";
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
// import {ConfigureStore} from '../redux/reducers/configureStore'
import store from '../store/store'
import App from 'next/app';
import Head from 'next/head'

class MyApp extends App {
  state = {
    mainMessage: true
  }

  
  mainMessageClose = () => {
    this.setState({
      mainMessage:false
    })
  }

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

    setTimeout(() => {
      this.mainMessageClose()
    },5000)
  }
  render() {
      const {Component, pageProps} = this.props;
      const isGetMoney = () => Component.name==='FormStep'
      return (
          <Provider store={store}>
            {/* <Modal isOpen={this.state.mainMessage} toggle={this.mainMessageClose} size="md">
            <ModalHeader>Просим прощения за доставленные неудобства</ModalHeader>
            <ModalBody>
              По техническим причинам городской номер не доступен. Просим обращаться через Whatsapp или на адрес электронной почты info@i-credit.kz
            </ModalBody>
            </Modal> */}
            {!isGetMoney() &&  <a href="https://api.whatsapp.com/send?phone=+77015382439" target="_blank"><img className="imgwhatsapp" src={require("../img/svg/whatsapp.svg")} alt="" /></a>}
            <Navbar/>
            <Component {...pageProps}/>
            <Footer/>
          </Provider>
      );
  }
}

//makeStore function that returns a new store for every request
const makeStore = () => store;
const wrapper = createWrapper(makeStore);
const mapStateToProps = state => ({
  loggedIn: state.userReducer.loggedIn
});

const mapDispatchToProps = dispatch => ({
  fetchCurrentUser: () => dispatch(actions.fetchCurrentUser()),
});

// //withRedux wrapper that passes the store to the App Component
// // export default makeStore.withRedux(MyApp);
export default wrapper.withRedux(MyApp);

// export default MyApp
