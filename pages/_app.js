import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import Navbar from '../components/shared/Nav'
import Footer from '../components/shared/Footer'
import { Provider } from 'react-redux'
import React, {Fragment} from 'react'
import withRedux from "next-redux-wrapper";
import {ConfigureStore as store} from '../redux/reducers/configureStore'
import App from 'next/app';

class MyApp extends React.Component {

  // static async getInitialProps({Component, ctx}) {
  //   const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

  //   //Anything returned here can be accessed by the client
  //   return {pageProps: pageProps};
  // }

  render() {
      //pageProps that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
      const {Component, pageProps, store} = this.props;

      return (
          <Fragment>
            <Navbar/>
            <Component {...pageProps}/>
            <Footer/>
          </Fragment>
      );
  }
}

//makeStore function that returns a new store for every request
const makeStore = () => store;

//withRedux wrapper that passes the store to the App Component
// export default makeStore.withRedux(MyApp);
export default MyApp;
