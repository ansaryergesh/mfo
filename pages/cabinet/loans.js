import React from 'react'
import {connect} from 'react-redux'
import withAuth from '../../components/hocs/withAuth'
import usersReducer from '../../store/reducers/userReducer'
import {helloUser} from '../../defaults/hello'
import Spinner from 'react-spinner-material';
import {fetchUserStatus, fetchUserHistory} from '../../store/actions/userAction'
import Router from 'next/router'
import swal from "sweetalert";
import Head from 'next/head'
import axios from 'axios'
import Status from '../../components/shared/userStatus'
import History from '../../components/shared/userHistory'
const mapStateToProps = state => {
  return {userReducer: state.userReducer, userStatus: state.userStatus, userHistory: state.userHistory}
}

const mapDispatchToProps = (dispatch) => ({
  fetchUserStatus: () => dispatch(fetchUserStatus()),
  fetchUserHistory: () => dispatch(fetchUserHistory())
})

class Cabinet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btnLoading: false
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this
      .props
      .fetchUserStatus()
    this
      .props
      .fetchUserHistory()
  }
  async handleRepeated() {
    this.setState({btnLoading: true})
    await axios
      .get(`https://api.money-men.kz/api/repeatUser?iin=${this.props.userReducer.user.UF_4}`)
      .then((response) => {
        if (response.data.success == true) {
          Router.push('/cabinet/repeated')
          this.setState({btnLoading: false})
        }
        if (response.data.success == false) {
          this.setState({btnLoading: false})
          swal("Oops!", `${response.data.message || "Заполнение анкета не завершена. свяжитесь с нами по телефону +7 700 750 15 00"} `, "error");
        } else {
          console.log(response)
        }
      })
  }

  render() {
    return (
      <div className='otherPages'>
        <Head>
          <title>Кабинет | I-credit.kz</title>
        </Head>
       
        {this.state.btnLoading
          ? (
            <div className="modelLoader"></div>
          )
          : (
            <div className="modelLoader loaded"></div>
          )}
        {this.props.userReducer.authenticatingUser === true
          ? (
            <div className="modelLoader"></div>
          )
          : (
            <div className="modelLoader loaded"></div>
          )}
           
        <p className='welcome text-center'>{helloUser()} {this.props.userReducer.user.UF_5}
          {" "+this.props.userReducer.user.UF_6}
          !</p>
        {this.props.userStatus.userStatus.success === false
          ? (
            <div>
              <div className="repeatBtn form-group">
              <button className='mt-5' onClick={() => this.handleRepeated()}>Повторный займ</button>
            </div>
            </div>
            
          )
          : (
            <div></div>
          )}

        {this.props.userStatus.isLoading
          ? (
            <div className='mt-5'>
              <div class="placeholder">
                <div class="loader"></div>
                <div class="loader"></div>
                <div class="loader"></div>
              </div>
            </div>
          )
          : <Status/>}
        {this.props.userHistory.isLoading
          ? (
            <div>
              <div class="placeholder mt-5">
                <div class="loader"></div>
                <div class="loader"></div>
                <div class="loader"></div>
              </div>
            </div>
          )
          : <History/>}

      </div>
    )
  }
}

// const mapStateToProps = ({ usersReducer: { user: { UF9} } }) => ({
// username: UF9 })

export default withAuth(connect(mapStateToProps, mapDispatchToProps)(Cabinet));
