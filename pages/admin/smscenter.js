import Header from '../../components/admin/Header'
import Footer from '../../components/admin/Footer'
import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux';
import AdminCabinet from '../../components/admin/AdminCabinet';
import SmsPagination from '../../components/admin/SmsPagination';
import {useRouter} from 'next/router'
import cookie from 'js-cookie'
import axios from 'axios';
import SmsList from '../../components/admin/SmsList';
import InputMask from "react-input-mask";
import { phoneCheck } from '../../defaults/validations';
import { ExportCSV } from '../../components/admin/ExportCSV';
import { date } from 'yup';


function mapStateToProps(state) {
  return {adminReducer:state.adminReducer}
}

const AdminSmsCenter = ({adminReducer}) => {
  const router = useRouter();
  const [smsList, setSmsList] = useState([]);
  const [smsTypes, setSmsTypes] = useState([]);
  const [total, setTotal] = useState(null);
  const [lastPage, setLastPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [toList, setToList] = useState(15);
  const [file, setFile] = useState([])
  const [loading, setLoading] = useState(true);
  const adminCookie = cookie.get('admin_token');

  const {phone} = router.query;
  const {start} = router.query;
  const {end} = router.query;
  const {page} = router.query;
  const {sms_type} = router.query;

  const [phoneNumber, setPhoneNumber] = useState(phone ? phone : '')
  const [dateFrom, setDateFrom] = useState(start ? start : '')
  const [dateTo, setDateTo] = useState(end ? end : '')
  const [smsType, setSmsType] = useState(sms_type ? sms_type : '')

  
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
  const onChangePhone = (e) => {
    setPhoneNumber(e.target.value)
  }

  const sendRequest = () => {
    setLoading(true)
    axios.get(`${process.env.BASE_URL}/exportSms`, {params: {
      token: adminCookie,
      phone: phone,
      date_from: start,
      date_to: end,
      sms_type: sms_type
    }})
      .then(res => {
        setLoading(false)
        setFile(res.data)
      })
  }

  const requestUpdate = (res) => {
    setCurrentPage(res.data.current_page)
    setSmsList(res.data.data);
    setLastPage(res.data.last_page)
    setTotal(res.data.total);
    setToList(res.data.to);
  }

  const clearForm = (e) => {
    setFile([])
    setDateFrom('')
    setDateTo('')
    setPhoneNumber('')
    setSmsType('')

    setLoading(true)
    axios.get(`${process.env.BASE_URL}/smsFilter`, {params: {
      token: adminCookie,
      phone: '',
      page: '',
      date_from: '',
      date_to: '',
      sms_type: '',
      page: '' }
    }, {headers: {'Access-Control-Allow-Origin': '*'}})
        .then(res=> {
          setLoading(false)
          if(!res.data.message) {
            requestUpdate(res)
          }
        })
    router.push('/admin/smscenter')

    e.preventDefault()
  }
  const onClear = () => {
    setFile([]);
    setLoading(true);
    axios.get(`${process.env.BASE_URL}/smsFilter`, {params: {
      token: adminCookie,
      phone: phone,
      page: page,
      date_from: start,
      date_to: end,
      sms_type: sms_type,
      page: page }
    }, {headers: {'Access-Control-Allow-Origin': '*'}})
        .then(res=> {
          setLoading(false)
          if(!res.data.message) {
            requestUpdate(res)
          }
        })

    
    axios.get(`${process.env.BASE_URL}/smsTypes`, {headers:  {'Access-Control-Allow-Origin': '*'}})
        .then(res => {
            setLoading(false)
            setSmsTypes(res.data)
        })
  }
  const changePage = (n) => {
    function replaceDate(val) {
      return String(val).replace(/[^A-Z0-9]/g, '')
    }
    setLoading(true)
    axios.get(`${process.env.BASE_URL}/smsFilter`, {params: {
      token: adminCookie,
      phone: phone,
      page: page,
      date_from: start,
      date_to: end,
      sms_type: sms_type,
      page: n }
    }, {headers: {'Access-Control-Allow-Origin': '*'}})
        .then(res=> {
          setLoading(false)
          if(!res.data.message) {
            requestUpdate(res)
            router.push(`/admin/smscenter?page=${n}&phone=${replaceDate(phoneNumber)}&start=${dateFrom}&end=${dateTo}&sms_type=${smsType}`)
          }
        })
  }
  
  const onSearch = (e) => {
    setFile([])
    function replaceDate(val) {
      return String(val).replace(/[^A-Z0-9]/g, '')
    }
    if(!phoneCheck(phoneNumber)) {
      setPhoneNumber('')
    }
    setLoading(true)
    axios.get(`${process.env.BASE_URL}/smsFilter`, {params: {
      token: adminCookie,
      phone: replaceDate(phoneNumber),
      date_from: dateFrom,
      date_to: dateTo,
      sms_type: smsType,
    }
    }, {headers: {'Access-Control-Allow-Origin': '*'}})
        .then(res=> {
          setLoading(false)
          if(!res.data.message) {
            requestUpdate(res)
            router.push(`/admin/smscenter?phone=${replaceDate(phoneNumber)}&start=${dateFrom}&end=${dateTo}&sms_type=${smsType}`)
          }
        })
    
    e.preventDefault()
  }

  useEffect(() => {
    onClear();
  },[])


  return(
   <div>
     <Header />
     <main role="main">
     <section class="panel important">
        <h2 className='text-center'>SmsCenter</h2>
        {/* Search bar sms start */}
        <form className='text-center' onSubmit={onSearch}>
          <div className='d-flex justify-content-center' >
          <div className='input-groups d-flex flex-column mr-2'>
          <label>Номер телефона:</label>
            <InputMask placeholder="+7" mask="+7(999)-999-9999" maskChar={null} value={phoneNumber} onChange={onChangePhone} beforeMaskedValueChange={beforeMaskedValueChange} />
          </div>
          <div className='input-groups d-flex flex-column mr-2'>
            <label>Дата от:</label>
            <input type='date' value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} />
          </div>
          <div className='input-groups d-flex flex-column mr-2'>
            <label>Дата до:</label>
            <input type='date' value={dateTo} onChange={(e) => setDateTo(e.target.value)} />
          </div>

          <div className='input-groups d-flex flex-column mr-2'>
            <label>Тип сообщений:</label>
            
            <select value={smsType} onChange={(e) => {setSmsType(e.target.value)}}><option value=''>Все</option>
              {smsTypes.map(type=> (
                <option value={type.id}>{type.name}</option>
              ))}
            </select>
          </div>
          </div>
          
          <div className='text-center'>
          <button  type='submit' className='mr-2 mt-3 btn btn-dark'>Искать</button>
          <a href='/admin/smscenter' type='button' className='mr-2 mt-3 btn btn-light' onClick={(e) => {clearForm(e)}}>Сбросить</a>
          </div>
        </form>
        
        {file.length !==0 ?    <ExportCSV fileName={(!phone && !end && !start) ? 'allresult' : 'phone: '+ phone + ' date_from: '+ start+ ' date_to: '+ end } csvData={file}  /> : <button className='btn btn-info' onClick={sendRequest}>Готовить файл для выгрузки</button>}
 



        {loading? 'loading....' : 
        <SmsList toList={toList} sms={smsList} total={total} currentPage={currentPage}/>}

        <SmsPagination max_page = {lastPage} current_page={currentPage} changePage={changePage}/>
     </section>
     </main>
     <Footer />
   </div>   
  )
}

export default connect(mapStateToProps)(AdminSmsCenter)