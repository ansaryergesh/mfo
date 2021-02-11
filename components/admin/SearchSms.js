import axios from 'axios'
import React,{useState,useEffect} from 'react'
import InputMask from "react-input-mask";



const SearchSms = (props) => {

  const [phone, setPhone] = useState('')
  const [dateFrom, setDateFrom] = useState('')
  const [dateTo, setDateTo] = useState('')
  

  
  const beforeMaskedValueChange = (newState, oldState, userInput) => {
    var { value } = newState;
    var selection = newState.selection;
    var cursorPosition = selection ? selection.start : null;
  
    // keep minus if entered by user
    if (value.endsWith('-') && userInput !== '-' && !this.state.value.endsWith('-')) {
      if (cursorPosition === value.length) {
        cursorPosition--;
        selection = { start: cursorPosition, end: cursorPosition };
      }
      value = value.slice(0, -1);
    }
  }
  const onChange = (e) => {
    setPhone(e.target.value)
  }
  return (
    <div>
      <form className='text-center'>
        <div className='d-flex justify-content-center' onSubmit={(e) => onSearch(e)}>
        <div className='input-groups d-flex flex-column mr-2'>
        <label>Номер телефона:</label>
          <InputMask placeholder="+7" mask="+7(999)-999-9999" maskChar={null} value={phone} onChange={onChange} beforeMaskedValueChange={beforeMaskedValueChange} />
        </div>
        <div className='input-groups d-flex flex-column mr-2'>
          <label>Дата от:</label>
          <input type='date' value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} />
        </div>
        <div className='input-groups d-flex flex-column mr-2'>
          <label>Дата до:</label>
          <input type='date' value={dateTo} onChange={(e) => setDateTo(e.target.value)} />
        </div>
        </div>
        <div className='text-center'>
        <button  type='submit' className='mr-2 mt-3 btn btn-dark'>Искать</button>
        <a href='/admin/smscenter' type='button' className='mr-2 mt-3 btn btn-light' onClick={() => {props.onClear}}>Сбросить</a>
        </div>
      </form>
    </div>
  )
}

export default SearchSms