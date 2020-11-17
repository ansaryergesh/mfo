import React from 'react'
import {connect} from 'react-redux'
import withAuth from '../../components/hocs/withAuth'
import usersReducer from '../../store/reducers/userReducer'
import {helloUser} from '../../defaults/hello'
import Spinner from 'react-spinner-material';
import Router from 'next/router'
import swal from "sweetalert";
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
        {this.state.btnLoading ? ( <div className="modelLoader"></div>) : (<div className="modelLoader loaded"></div>)}
        <h3 className='text-center'>{helloUser()}   {this.props.userReducer.user.UF_5} {this.props.userReducer.user.UF_6} !</h3>
        <div className='zayavkaBlock container col-md-8 col-8 mt-5'>
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
