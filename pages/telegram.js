import React from 'react';
import axios from 'axios';
import {fetchAnsweredMsg, fetchNonAnsweredMsg} from '../store/actions/telegram'
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import {connect} from 'react-redux'
import MessageDetail from '../components/shared/messageDetailed'
const mapStateToProps = state => {
  return {nonanswered: state.nonanswered}
}

const mapDispatchToProps = (dispatch) => ({
    fetchAnsweredMsg: () => dispatch(fetchAnsweredMsg()),
    fetchNonAnsweredMsg: () => dispatch(fetchNonAnsweredMsg()),
  })
  
class Telegram extends React.Component {
    componentDidMount() {
        this.props.fetchNonAnsweredMsg()
    }
    

    state = {
        collapse: "",
        message: '',
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

    render() {
        if (this.props.nonanswered.nonanswered.length === 0 && this.props.nonanswered.isLoading=== false) {
            return (<div className='container otherPages'><h4 className='mb-3 text-center'>Неотвеченные вопросы</h4>
                <p>Нету неотвеченных вопросов..</p>
            </div>)
        }
        if(this.props.nonanswered.isLoading) {
            return (
                <div className='container  otherPages text-center'>
                    Загрузка.......
                </div>
            )
        }
        else 
        return ( 
            <div className='container otherPages'>
                <h4 className='mb-3 text-center'>Неотвеченные вопросы</h4>
             <div className='row'>
                 {this.props.nonanswered.nonanswered.map(elem=>(
                     <div className='col-md-4'>
                         <div className='card' key={elem.id} onClick={this.toggleCollapse(elem.id)}>
                            <div className='card-body'>
                                <p className='card-text'>
                                    Имя: {elem.name} <br></br>ИИН: {elem.iin}
                                </p>
                                <i>Вопрос: {elem.question}</i>
                                <a href="#" class="mt-3 d-block btn btn-primary">Ответить</a>
                            </div>
                         </div>
                     </div>
                 ))}
                 
             </div>
             
             <Modal  isOpen={this.state.collapse} toggle={this.toggleCollapse(this.state.collapse)}   size="md">
                 <ModalBody>
                    <MessageDetail msg={this.props.nonanswered.nonanswered.filter(el => el.id === parseInt(this.state.collapse))[0]} />
                 </ModalBody>
			</Modal>
            </div>
        )
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Telegram)