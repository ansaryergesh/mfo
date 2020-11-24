import React from 'react'
import {connect} from 'react-redux'
import withAuth from '../../components/hocs/withAuth'
import usersReducer from '../../store/reducers/userReducer'
import {helloUser} from '../../defaults/hello'
import Spinner from 'react-spinner-material';
import Router from 'next/router'
import swal from "sweetalert";
import Head from 'next/head'
import axios from 'axios'
const mapStateToProps = state => {
  return {
    userReducer: state.userReducer
  }
}



class Cabinet extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      btnLoading: false
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  async handleRepeated() {
    this.setState ({
      btnLoading: true
    })
    await axios.get(`https://api.money-men.kz/api/repeatUser?iin=${this.props.userReducer.user.UF_4}`)
      .then((response) => {
        if(response.data.success == true) {
          Router.push('/cabinet/repeated')
          this.setState ({
            btnLoading: false
          })
        }
        if(response.data.success == false) {
          this.setState({
            btnLoading: false
          })
          swal("Oops!", `${response.data.message || "Заполнение анкета не завершена. свяжитесь с нами по телефону +7 700 750 15 00" } `, "error");
        }
        else {
          console.log(response)
          swal("Oops!", `${response.data.message}`, "error");
          this.setState({
            btnLoading: false
          })
        }
      })
  }

  render() {
    return (
      <div className='otherPages'>
        <Head>
          <title>Кабинет | I-credit.kz</title>
        </Head>
        {this.state.btnLoading ? ( <div className="modelLoader"></div>) : (<div className="modelLoader loaded"></div>)}
        {this.props.userReducer.authenticatingUser === true ? ( <div className="modelLoader"></div>) : (<div className="modelLoader loaded"></div>)}
        <p className='welcome text-center'>{helloUser()}   {this.props.userReducer.user.UF_5} {this.props.userReducer.user.UF_6} !</p>
        <div className='zayavkaBlock container col-md-8 col-11 mt-2'>
          <h5>Мои заявки</h5>
          <h5 className='text-center'>Ваша заявка еще на обработке</h5>
          <div className="repeatBtn form-group" >
          <button className='mt-3' onClick={() => this.handleRepeated()}>Повторный займ</button>
          </div>
        </div>
      </div>
    )
  }
}

// const mapStateToProps = ({ usersReducer: { user: { UF9} } }) => ({
//   username: UF9
// })

export default withAuth(connect(mapStateToProps)(Cabinet));
