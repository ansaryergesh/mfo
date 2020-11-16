import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import Navbar from '../components/shared/Nav'
import Footer from '../components/shared/Footer'
import { Provider } from 'react-redux'
import React, {Fragment} from 'react'
import {createWrapper} from "next-redux-wrapper";
// import {ConfigureStore} from '../redux/reducers/configureStore'
import store from '../store/store'
import App from 'next/app';
import Head from 'next/head'

class MyApp extends App {

  // static async getInitialProps({Component, ctx}) {
  //   const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

  //   //Anything returned here can be accessed by the client
  //   return {pageProps: pageProps};
  // }
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
      //pageProps that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
      const {Component, pageProps} = this.props;

      return (
          <Provider store={store}>
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
// //withRedux wrapper that passes the store to the App Component
// // export default makeStore.withRedux(MyApp);
export default wrapper.withRedux(MyApp);

// export default MyApp
