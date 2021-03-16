import React from 'react'
import Router from 'next/router'
import axios from 'axios'
import swal from 'sweetalert'
import Head from 'next/head'

function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

const userToken = () => {
  if(getUrlParameter('token').length !== 0) {
    return getUrlParameter('token')
  }
  else {
    return null
  }
}

class Aggrement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
      loading: false,
      docs:[],
      id:null,
      id_req:null,
      sign:'',
      isCodeSent:false,
      code_conf:null,
      errorInCode:null,
      phone:null,
      rest:null,
    }
  }
  async getUserDocument(token) {
    this.setState({
      loading: true
    })

    await axios.get(`https://api.money-men.kz/api/getData?token=${token}`)
    .then((response) => {
      if(response.data.success) {
        this.setState({
          docs: response.data.docs,
          id: response.data.id,
          id_req: response.data.id_req,
          loading: false,
          rest: response.data.rest,
          phone: response.data.phone
        })
      }else {
        Router.push('/')
      }

    })
    .catch(error => {
      this.setState({
        loading: false
      })
      Router.push('/')
    })
  }

  async getCode() {
    await axios.get(`https://api.money-men.kz/api/sendSms?phone=${this.state.phone}`,{
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
     }
    })
    .then(response => {
        if(response.success) {
          this.setState({
            isCodeSent: true
          })
        }
    })
    .catch(error=> {
        console.log(error)
    })
  }

  async sendAgreementStatusForRest() {
    if(this.state.code_conf !== null) {
      await axios.get(`https://api.money-men.kz/api/sendSms`,{
        params: {
          id:this.state.id,
          phone:this.state.phone,
          token:this.state.token,
          id_req: this.state.id_req,
          code:this.state.code_conf,
          sign: 'y'
        }
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      })
      .then(response=> {
        if(response.success) {
          swal("Успешно!", `${response.message}`, "success").then(() => {
            Router.push('/')
          })
        }
      })
      .catch(error => {
        console.log(error)
      })
    }
  }

  sendAgreementStatusWithRest() {
    this.setState({
      loading:true
    })
    axios.get(`https://api.money-men.kz/api/prolongationAgreement?sign=y&request_id=${this.state.id}`)
      .then(res=> {
        this.setState({
          loading: false
        })
        if(res.data.success){
          swal("Успешно!", "success").then(()=>{
            Router.push('/')
          })
        }
      })
      .catch(error=>{
        this.setState({
          loading: false
        })
        console.log(error)
        Router.push('/')
      })
  }

  async sendAgreementStatus(){
    this.setState({
      loading: true
    })
    try{
       axios.get('https://api.money-men.kz/api/agreement',{ params:{
        id:this.state.id,
        phone:this.state.phone,
        token:this.state.token,
        id_req: this.state.id_req,
        sign: 'y'
      }})
      .then((response) =>{
        this.setState({
          loading: false
        })

        if(response.data.success){
          swal("Успешно!", "success").then(()=>{
            Router.push('/')
          })
        }
      })
    }catch(error){
      this.setState({
        loading: false
      })
      console.log(error)
      Router.push('/')

    }
}

  componentDidMount(){
    if(getUrlParameter('token').length === 0) {
      Router.push('/')
    }else {
      this.setState ({
        token: getUrlParameter('token')
      })
    }
    this.getUserDocument(userToken())
  }


  render() {
    return (
      <div className="container otherPages">
        <Head><title>Соглашение</title></Head>
        {this.state.loading ? (<div className='modelLoader'></div>) : (<div className='modelLoader loaded'> </div>)}
    <div className="row justify-content-center">
        <div className="col-md-12">
            <div className="agreements-block">
                <h4 align="center">Соглашение пользователя</h4>

                <ul className='complete'>
                {this.state.docs.map(doc=> (
                    <li className={doc.link===null? 'd-none' : ''}><img className='checkedComplete' src={require("../img/checked.png")} /><a href={doc.link} target="_blank">{doc.name}</a></li>
                ))
                }</ul>
          <div className="repeatBtn form-group" >
            {this.state.rest === true ?   <button onClick={() => this.sendAgreementStatusWithRest()} className='mt-5' >Соглашаюсь</button> :
              <button onClick={() => this.sendAgreementStatus()} className='mt-5' >Соглашаюсь</button>
            }

          </div>
            </div>
        </div>
    </div>
</div>
    )
  }
}

export default Aggrement
