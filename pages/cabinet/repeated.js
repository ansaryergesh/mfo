import React from 'react'
import {connect} from 'react-redux'
import withAuth from '../../components/hocs/withAuth'
import usersReducer from '../../store/reducers/userReducer'
import {helloUser} from '../../defaults/hello'
import ProgressBar from '../../components/shared/Progressbar'
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
    axios.get(`https://api.money-men.kz/api/repeatUser?iin=${this.props.userReducer.user.UF_4}`)
    .then((response) => {
      this.setState ({
        btnLoading: true
      })
      if(response.data.success === false) {
        Router.push('/cabinet/loans')
      }else {
        this.setState ({
          btnLoading: false
        })
      }
    })
  }
  render() {
    return (
      <div className='otherPages'>
          <Head>
            <title>Повторный займ</title>
          </Head>
          {this.state.btnLoading ? ( <div className="modelLoader"></div>) : (<div className="modelLoader loaded"></div>)}
        <h3 className=' text-center'>{helloUser()}   {this.props.userReducer.user.UF_5} {this.props.userReducer.user.UF_6} !</h3>
        <p className='container mt-3 repeatedinfo alert alert-info'>Выберите срок и сумма. Затем нажмите на кнопку "Получить деньги" чтобы совершить повторный заим</p>
        <div className="repeatBtn form-group" >
        </div>
        <div className='repeatedProgress'>
        <ProgressBar />
        </div>
      </div>
    )
  }
}

export default withAuth(connect(mapStateToProps)(Cabinet));
