import React from 'react';
import axios from 'axios';
import {fetchAnsweredMsg, fetchNonAnsweredMsg} from '../store/actions/telegram'
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import {connect} from 'react-redux'
import MessageDetail from '../components/shared/messageDetailed'
import {helloUser} from '../defaults/hello'
import disableScroll from 'disable-scroll';
import cookie from 'js-cookie'
const mapStateToProps = state => {
  return {nonanswered: state.nonanswered, answered: state.answered}
}

const mapDispatchToProps = (dispatch) => ({
  fetchAnsweredMsg: () => dispatch(fetchAnsweredMsg()),
  fetchNonAnsweredMsg: () => dispatch(fetchNonAnsweredMsg()),
})
 
class Telegram extends React.Component {
  componentDidMount() {
    this.props.fetchNonAnsweredMsg();
    this.props.fetchAnsweredMsg();
  }

  state = {
    collapse: "",
    message: '',
    answer: '',
    code: '',
    loading: false,
    answers: true,
  }
  
  handleSubmit = (msgid,question,iin, id) => {
    const groupText = `
Ответили на вопрос: ${question}%0A 
ИИН: ${iin}%0A%0A
${helloUser()}!%0A
${this.state.answer.split('%0A')}%0A%0A
С уважением I-credit.kz%0A%0A
   #ответили `

    const errorMessage =  `Не удалось отправить ответ. Пользователь блокировал наш телеграм бот-> ИИН: ${iin}%0A%0A;Вопрос: ${question}%0A #ошибка`
    const answerText = `
${helloUser()}!%0A
${this.state.answer.split('%0A')}%0A%0A
С уважением I-credit.kz
    `
        if(this.state.answer) {
            // console.log(this.state.answer.length)
            this.setState({loading: true})
            axios.post(`https://api.telegram.org/bot1464143689:AAHakxNTvvBG9qpzrH8Z-lNNyEjAS2aW8-U/sendMessage?chat_id=${msgid}&text=${answerText}&ie=UTF-8&oe=UTF-8&parse_mode=html`)
            .then(response=> {
                if(response.data.ok) {
                    axios.put(`https://api.money-men.kz/api/telegram/${id}`)
                    .then(response=>{
                        if(response.data.success) {
                            axios.post(`https://api.telegram.org/bot1464143689:AAHakxNTvvBG9qpzrH8Z-lNNyEjAS2aW8-U/sendMessage?chat_id=-438259555&text=${groupText}&ie=UTF-8&oe=UTF-8&parse_mode=html`)
                            this.setState({loading: false})
                            this.setState({message: 'Отправлено',collapse: '', answer: ''})
                            setTimeout(() => {
                                this.setState({message: ''})
                            },1500)
                            this.props.fetchNonAnsweredMsg()
                            this.props.fetchAnsweredMsg()
                        }
                    })
                    
                }else {
                    this.setState({message: 'Не отправлено'})
                    setTimeout(() => {
                        this.setState({message: '', collapse: '', answer: ''})
                    },1500)
                }
            })
            .catch(function(error) {
               if(error.response) {
                   axios.put(`https://api.money-men.kz/api/telegram/${id}`)
                   .then(response=> {
                    axios.post(`https://api.telegram.org/bot1464143689:AAHakxNTvvBG9qpzrH8Z-lNNyEjAS2aW8-U/sendMessage?chat_id=-438259555&text=${errorMessage}&ie=UTF-8&oe=UTF-8&parse_mode=html`)
                        .then(res=> {
                            location.reload()
                        })
                   })
                   
               }
            })
        }
    }

    keypress(event, msgid,question,iin, id) {
      if(event.keyCode == 13 && event.shiftKey){
        this.handleSubmit(msgid,question,iin,id)
      }
    }

    handleRecommend = e => {
        this.setState({answer: e.target.value})
    }
    handleChange = (event) => {
      // const value = event.target.value.replace(/[\r\n\v]+/g, "");
      this.setState({ answer: event.target.value });
    }
    handleCode = (event) => {
      this.setState({code: event.target.value})
    }
    submitCode = () => {
      if(this.state.code === 'icredit21') {
        cookie.set('tgmsg','3215', {expires: 60})
        location.reload();
      }else {
        alert('Ошибка кода')
      }
    }

    toggleCollapse = id => () => {
        if (!this.state.collapse || id !== this.state.collapse) {
            this.setState({
            collapse: id
            });
        } else if (this.state.collapse === id) {
            this.setState({ collapse: false })
        }
    }

    handleAnswered = () => {
      this.setState(prev=>({
          answers: !prev.answers
      }))
    }

    render() {
        if(cookie.get('tgmsg') !== '3215') {
            return (
                <div className='container text-center otherPages'>
                    <form onSubmit={this.submitCode}>
                        <input type='password' value={this.state.code} onChange={this.handleCode} />
                        <div className='repeatBtn'>
                            
                        <button type='submit'  value='Отправить' className='mt-2 d-flex'> Отправить</button>
                        </div>
                    </form>
                </div>
            )
        }
        // if (this.props.nonanswered.nonanswered.length === 0 && this.props.nonanswered.isLoading=== false) {
        //     return (<div className='mb-5 container otherPages'>
        //          {this.state.answers ?  <button active className='btn btn-dark mb-3' onClick={() => this.handleAnswered()}>Получить неотвеченные</button> 
                
        //         :   <button active className='btn btn-dark mb-3 mr-3' onClick={() => this.handleAnswered()}>Получить отвеченные</button>}
        //         <h4 className='mb-3 text-center'>Неотвеченные вопросы</h4>
        //         <p className='text-center'>Нет вопросов</p>
        //     </div>)
        // }
        if(this.props.nonanswered.isLoading) {
            return (
                <div className='container  otherPages text-center'>
                    Загрузка.......
                </div>
            )
        }
        if(!this.state.answers && !this.props.answered.isLoading) {
            return (
              <div className='container otherPages'>
                {this.state.answers ?  <button active className='btn btn-dark mb-3' onClick={() => this.handleAnswered()}>Получить отвеченные</button> 
                
                :   <button active className='btn btn-dark mb-3 mr-3' onClick={() => this.handleAnswered()}>Получить неотвеченные</button>}
                {this.state.message.length>0 ? <div className='tlgmsg alert alert-info'>{this.state.message}</div>: <div></div>}
                <h4 className='mb-3 text-center'>Отвеченные вопросы за неделю ({this.props.answered.answered.length})</h4>
               <div className='row'>
                 {this.props.answered.answered.map(elem=>(
                     <div className='col-md-4' >
                         <div className='card mt-2 answeredCard' key={elem.id}>
                            <div className='card-body'>
                            <p className='tinydate'>Задано: {new Intl.DateTimeFormat('ru', { year: 'numeric', month: 'short', day: '2-digit', hour:'numeric', minute:'numeric' }).format(new Date(Date.parse(elem.created_at)))}</p>
                            <p className='tinydate'>Отвечено: {new Intl.DateTimeFormat('ru', { year: 'numeric', month: 'short', day: '2-digit', hour:'numeric', minute:'numeric' }).format(new Date(Date.parse(elem.updated_at)))}</p>
                                <p className='card-text'>
                                    Имя: {elem.name} <br></br>ИИН: {elem.iin}
                                </p>
                                <i>Вопрос: {elem.question}</i>

                            </div>
                         </div>
                     </div>
                 ))}
                </div>
             </div>
            )
        }
        else 
        return (
            <div className='container otherPages'>
                {this.state.answers ?  <button active className='btn btn-dark mb-3' onClick={() => this.handleAnswered()}>Получить отвеченные</button> 
                
                :   <button active className='btn btn-dark mb-3 mr-3' onClick={() => this.handleAnswered()}>Получить неотвеченные</button>}
              
               
                {this.state.message.length>0 ? <div className='tlgmsg alert alert-info'>{this.state.message}</div>: <div></div>}
                <h4 className='mb-3 text-center'>Неотвеченные вопросы ({this.props.nonanswered.nonanswered.length})</h4>
             <div className='row'>
                 {this.props.nonanswered.nonanswered.map(elem=>(
                     <div className='col-md-4'>
                         <div className='card mt-2' key={elem.id} onClick={this.toggleCollapse(elem.id)}>
                            <div className='card-body'>
                            <p className='tinydate'>{new Intl.DateTimeFormat('ru', { year: 'numeric', month: 'short', day: '2-digit', hour:'numeric', minute:'numeric' }).format(new Date(Date.parse(elem.created_at)))}</p>
                                <p className='card-text'>
                                    Имя: {elem.name} <br></br>ИИН: {elem.iin}
                                </p>
                                <i>Вопрос: {elem.question}</i>

                            </div>
                         </div>
                     </div>
                 ))}
                 
             </div>
             <Modal  isOpen={this.state.collapse} toggle={this.toggleCollapse(this.state.collapse)}   size="md">
                 <ModalBody>
                    <MessageDetail 
                        msg={this.props.nonanswered.nonanswered.filter(el => el.id === parseInt(this.state.collapse))[0]} 
                        answer = {this.state.answer}
                        handleChange = {this.handleChange}
                        handleRecommend={this.handleRecommend}
                        handleSubmit = {this.handleSubmit}
                        keypress = {this.keypress}
                        loading = {this.state.loading}
                    />
                 </ModalBody>
			</Modal>
            </div>
        )
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Telegram)