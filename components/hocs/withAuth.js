import React from 'react'
import {connect} from 'react-redux'
import Router from 'next/router'
import * as actions from '../../store/actions/userAction'
import cookie from 'js-cookie';
const withAuth = WrappedComponent => {
  class AuthorizedComponent extends React.Component {
    componentDidMount() {
      if(cookie.get('token') && !this.props.loggedIn) {
        this.props.fetchCurrentUser();
      }
      if(!cookie.get('token')) {
        Router.push('/login')
      }
    }

    render() {
      if (cookie.get('token') && this.props.loggedIn) {
        return <WrappedComponent />;
      } if (cookie.get('token') && (this.props.authenticatingUser || !this.props.loggedIn)) {
        return <div className="otherPages">
          <div className='pd-5 pt-5'></div>
          <div className="modelLoader"></div>
        </div>
      }
      return <div className='otherPages'>
        <div className="modelLoader"></div>
        <h2 className='text-center pt-5'>Время вашего сеанса истекло</h2>
      </div>;
      return null
    }
  }

  const mapStateToProps = reduxStoreState => ({
    loggedIn: reduxStoreState.userReducer.loggedIn,
    authenticatingUser: reduxStoreState.userReducer.authenticatingUser,
  });

  const mapDispatchToProps = dispatch => ({
    fetchCurrentUser: () => dispatch(actions.fetchCurrentUser()),
  });

  return connect(
    mapStateToProps,
    actions,
  )(AuthorizedComponent);
}

export default withAuth;


