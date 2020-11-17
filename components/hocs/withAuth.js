import React from 'react'
import {connect} from 'react-redux'
import Router from 'next/router'
import * as actions from '../../store/actions'
import cookie from 'js-cookie';
const withAuth = WrappedComponent => {
  class AuthorizedComponent extends React.Component {
    componentDidMount() {
      if(cookie.get('token') && !this.props.loggedIn)
    }
}
