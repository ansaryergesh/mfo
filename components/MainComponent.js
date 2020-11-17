import Navbar from './shared/Nav'
import Footer from './shared/Footer'
import React, {Fragment} from 'react'
import { connect } from 'react-redux';
import {createWrapper} from "next-redux-wrapper";
import cookie from 'js-cookie';
// import {ConfigureStore} from '../redux/reducers/configureStore'
import {fetchCurrentUser} from '../store/actions/userAction'

class Main extends React.Component {

  // static async getInitialProps({Component, ctx}) {
  //   const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

  //   //Anything returned here can be accessed by the client
  //   return {pageProps: pageProps};
  // }
  componentDidMount() {
    if(cookie.get('token') && !this.props.loggedIn) {
      this.props.fetchCurrentUser();
    }
  }
  render() {
      //pageProps that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
      const {Component, pageProps} = this.props;

      return (
          <div>
            <Navbar/>
            <Component {...pageProps}/>
            <Footer/>
          </div>
      );
  }
}
const mapStateToProps = state => ({
  loggedIn: state.userReducer.loggedIn
});

const mapDispatchToProps = dispatch => ({
  fetchCurrentUser: () => dispatch(actions.fetchCurrentUser()),
});

export default (connect(mapStateToProps,mapDispatchToProps)(Main));
// export default MyApp
