import React from 'react';
import { Recommendation } from '../../defaults/recomAnswer';

const MessageDetail = props => {

    const RecomendedBtn = () => {
      return (
        <div className='d-flex flex-wrap'>
          {Recommendation.map(r=> (
            <button onClick={props.handleRecommend} className='mt-2 mr-2 btn btn-dark' value={r.answer}>{r.answer}</button>
          ))}
        </div>
      )
    }
    if(props.msg) {
        return (
          <div className='tgmsg'>
            <p>ИИН: {props.msg.iin}</p>
            <p>Имя: {props.msg.name}</p>
            <p>Вопрос: {props.msg.question}</p>
            {/* <p>ID: {props.msg.message_id}</p> */}
            <form >
                <textarea value={props.answer} onChange={props.handleChange} type='textarea' className='form-control' placeholder='Введите ответ' onKeyPress={() => props.keypress(event,props.msg.message_id,props.msg.question,props.msg.iin, props.msg.id)}></textarea>
                {props.loading === true
                  ? <input disabled  type='button' class="mt-3 d-block btn btn-primary" value='Отправка...' />
                  :  <input onClick={()=> props.handleSubmit(props.msg.message_id,props.msg.question,props.msg.iin, props.msg.id)} type='button' class="mt-3 d-block btn btn-primary" value='Отправить' />
                }
            </form>
            <RecomendedBtn />
              
          </div>
        )
    }
    else {
        return (
            <div>
                nothing
            </div>
        )
    }
}

export default MessageDetail;