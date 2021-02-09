import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import Navbar from '../components/shared/Nav'
import Footer from '../components/shared/Footer'
import ScrollToTop from '../components/shared/ScrollToTop'
import MessageInfo from '../components/shared/MessageInfo'
import MainComponent from '../components/MainComponent'
import cookie from 'js-cookie'
import { Provider } from 'react-redux'
import React, {Fragment} from 'react'
import {createWrapper} from "next-redux-wrapper";
import {connect} from 'react-redux'
import { Modal, ModalHeader, ModalBody, Nav } from 'reactstrap';
// import {ConfigureStore} from '../redux/reducers/configureStore'
import store from '../store/store'
import App from 'next/app';
import Head from 'next/head'
import { fetchAdmin } from '../store/actions/adminActions';

class MyApp extends App {
  componentDidMount() {
    if(cookie.get('admin_token') !== undefined) {
      this.props.fetchAdmin()
    }
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
             {/* <MessageInfo /> */}
             <div className="chatBlock">
            <a href="https://t.me/icredit_kzbot" target="_blank">
            <img className='imgwhatsapp mb-3' src={require("../img/svg/telegram.svg")}></img></a>
            <a href="https://api.whatsapp.com/send?phone=+77015382439" target="_blank"><img className="imgwhatsapp" src={require("../img/svg/whatsapp.svg")} alt="" /></a>
            </div>
            <Navbar />
            {/* {compName !== undefined && compName.includes('Admin') ? '' : <Navbar />} */}
            <Component {...pageProps}/>
            {/* {compName !== undefined && compName.includes('Admin') ? '' : <Footer />} */}
            <Footer />
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
  fetchAdmin:() => dispatch(fetchAdmin())
});

MyApp = connect(mapStateToProps,mapDispatchToProps)(MyApp)

// //withRedux wrapper that passes the store to the App Component
// // export default makeStore.withRedux(MyApp);
export default wrapper.withRedux(MyApp);

// export default MyApp
