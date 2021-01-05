import React from 'react';
import axios from 'axios';

const handleSubmit = (msgid) => {
    axios.post(`https://api.telegram.org/bot1482005915:AAGqjNITUD0hRu95aUZ_zDfk-AP0dvM5l5g/sendMessage?chat_id=${msgid}&text=teasdadsads`)
}
const MessageDetail = props => {
    if(props.msg) {
        return (
            <div>
                <p>ИИН: {props.msg.iin}</p>
                <p>Имя: {props.msg.name}</p>
                <p>Вопрос: {props.msg.question}</p>
                {/* <p>ID: {props.msg.message_id}</p> */}
                <form>
                    <div className='form-group'>
                        <textarea type='textarea' className='form-control' placeholder='Введите ответ'></textarea>
                        <button type="submit" class="mt-3 d-block btn btn-primary" onClick={handleSubmit(props.msg.message_id)}>Отправить</button>
                    </div>
                </form>
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