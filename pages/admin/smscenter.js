import Header from '../../components/admin/Header'
import Footer from '../../components/admin/Footer'
import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux';
import AdminCabinet from '../../components/admin/AdminCabinet';
import SearchSms from '../../components/admin/SearchSms';
import SmsPagination from '../../components/admin/SmsPagination';
import {useRouter} from 'next/router'
import cookie from 'js-cookie'
import axios from 'axios';
import SmsList from '../../components/admin/SmsList';
import InputMask from "react-input-mask";
import { phoneCheck } from '../../defaults/validations';


function mapStateToProps(state) {
  return {adminReducer:state.adminReducer}
}

const AdminSmsCenter = ({adminReducer}) => {
  const router = useRouter();
  const [smsList, setSmsList] = useState([]);
  const [total, setTotal] = useState(null);
  const [lastPage, setLastPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [toList, setToList] = useState(15);
  const [loading, setLoading] = useState(true);
  const adminCookie = cookie.get('admin_token');

  const {phone} = router.query;
  const {start} = router.query;
  const {end} = router.query;
  const {page} = router.query;

  const [phoneNumber, setPhoneNumber] = useState(phone ? phone : '')
  const [dateFrom, setDateFrom] = useState(start ? start : '')
  const [dateTo, setDateTo] = useState(end ? end : '')
  

  
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

  const requestUpdate = (res) => {
    setCurrentPage(res.data.current_page)
    setSmsList(res.data.data);
    setLastPage(res.data.last_page)
    setTotal(res.data.total);
    setToList(res.data.to);
  }
  const onClear = () => {
    if(phone === undefined && start === undefined && end === undefined) {
      if(page !== undefined) {
        axios.get('http://localhost:8000/api/sms', {params: {token: adminCookie, page: page}})
          .then(res => {
            setLoading(false)
            if(!res.data.message) {
              requestUpdate(res)
            }
          })
      }else {
        axios.get('http://localhost:8000/api/sms', {params: {token: adminCookie}})
        .then(res => {
          setLoading(false)
          if(!res.data.message) {
            requestUpdate(res)
          }
        })
      }
    }

    if(phone) {
      const finalPage = () => page=== undefined ? 1 : page
      setLoading(true)
      if(start && !end) {
        axios.get(`http://localhost:8000/api/smsFilter?token=${adminCookie}&phone=${phone}&date_from=${start}&page=${finalPage}`)
          .then(res=> {
            setLoading(false)
            if(!res.data.message) {
              requestUpdate(res)
            }
          })
      }
      if(!start && !end) {
        axios.get(`http://localhost:8000/api/smsFilter?token=${adminCookie}&phone=${phone}&page=${finalPage}`)
          .then(res=> {
            setLoading(false)
            if(!res.data.message) {
              requestUpdate(res)
            }
          })
      }
      if(end && !start) {
        axios.get(`http://localhost:8000/api/smsFilter?token=${adminCookie}&phone=${phone}&date_to=${end}&page=${finalPage}`)
          .then(res=> {
            setLoading(false)
            if(!res.data.message) {
              requestUpdate(res)
            }
          })
      }
      if(start && end) {
        axios.get(`http://localhost:8000/api/smsFilter?token=${adminCookie}&phone=${phone}&date_from=${start}&date_to=${end}&page=${finalPage}`)
          .then(res=> {
            setLoading(false)
            if(!res.data.message) {
              requestUpdate(res)
            }
          })
      }
    } else {
      if(start && end) {
        const finalPage = () => page=== undefined ? 1 : page
        axios.get(`http://localhost:8000/api/smsFilter?token=${adminCookie}&date_from=${start}&date_to=${end}&page=${finalPage}`)
        .then(res=> {
          setLoading(false)
          if(!res.data.message) {
            requestUpdate(res)
          }
        })
      }
      if(start && !end) {
        const finalPage = () => page=== undefined ? 1 : page
        axios.get(`http://localhost:8000/api/smsFilter?token=${adminCookie}&date_from=${start}&page=${finalPage}`)
        .then(res=> {
          setLoading(false)
          if(!res.data.message) {
            requestUpdate(res)
          }
        })
      }
      if(end && !start) {
        const finalPage = () => page=== undefined ? 1 : page
        axios.get(`http://localhost:8000/api/smsFilter?token=${adminCookie}&date_to=${end}&page=${finalPage}`)
        .then(res=> {
          setLoading(false)
          if(!res.data.message) {
            requestUpdate(res)
          }
        })
      }
    }
   
  }
  const changePage = (n) => {
    if(phone ===undefined && start === undefined && end === undefined) {
      setLoading(true)
      axios.get(`http://localhost:8000/api/sms?token=${adminCookie}&page=${n}`)
        .then(res=> {
          setLoading(false)
          if(!res.data.message) {
            requestUpdate(res)
            router.push(`/admin/smscenter?page=${n}`)
          }
        })
    }
    if(phone !==undefined && start === undefined && end === undefined) {
      setLoading(true)
      axios.get(`http://localhost:8000/api/smsFilter?token=${adminCookie}&page=${n}&phone=${phone}`)
        .then(res=> {
          setLoading(false)
          if(!res.data.message) {
            requestUpdate(res)
            router.push(`/admin/smscenter?phone=${phone}&page=${n}`)
          }
        })
    }
    if(phone !==undefined && start !== undefined && end === undefined) {
      setLoading(true)
      axios.get(`http://localhost:8000/api/smsFilter?token=${adminCookie}&page=${n}&phone=${phone}&dateFrom=${start}`)
        .then(res=> {
          setLoading(false)
          if(!res.data.message) {
            requestUpdate(res)
            router.push(`/admin/smscenter?phone=${phone}&start=${start}&page=${n}`)
          }
        })
    }
    if(phone !==undefined && start === undefined && end !== undefined) {
      setLoading(true)
      axios.get(`http://localhost:8000/api/smsFilter?token=${adminCookie}&page=${n}&phone=${phone}&date_to=${end}`)
        .then(res=> {
          setLoading(false)
          if(!res.data.message) {
            requestUpdate(res)
            router.push(`/admin/smscenter?phone=${phone}&end=${end}&page=${n}`)
          }
        })
    }
    if(phone !==undefined && start !== undefined && end !== undefined) {
      setLoading(true)
      axios.get(`http://localhost:8000/api/smsFilter?token=${adminCookie}&page=${n}&phone=${phone}&date_to=${end}&date_from=${start}`)
        .then(res=> {
          setLoading(false)
          if(!res.data.message) {
            requestUpdate(res)
            router.push(`/admin/smscenter?phone=${phone}&start=${start}&end=${end}&page=${n}`)
          }
        })
    }
    if(phone ===undefined && start !== undefined && end !== undefined) {
      setLoading(true)
      axios.get(`http://localhost:8000/api/smsFilter?token=${adminCookie}&page=${n}&date_to=${end}&date_from=${start}`)
        .then(res=> {
          setLoading(false)
          if(!res.data.message) {
            requestUpdate(res)
            router.push(`/admin/smscenter?start=${start}&end=${end}&page=${n}`)
          }
        })
    }
    if(phone ===undefined && start === undefined && end !== undefined) {
      setLoading(true)
      axios.get(`http://localhost:8000/api/smsFilter?token=${adminCookie}&page=${n}&date_to=${end}`)
        .then(res=> {
          setLoading(false)
          if(!res.data.message) {
            requestUpdate(res)
            router.push(`/admin/smscenter?end=${end}&page=${n}`)
          }
        })
    }
    if(phone ===undefined && start !== undefined && end === undefined) {
      setLoading(true)
      axios.get(`http://localhost:8000/api/smsFilter?token=${adminCookie}&date_from=${start}&page=${n}`)
        .then(res=> {
          setLoading(false)
          if(!res.data.message) {
            requestUpdate(res)
            router.push(`/admin/smscenter?start=${start}&page=${n}`)
          }
        })
    }
  }
  
  const onSearch = (e) => {
    function replaceDate(val) {
      return String(val).replace(/[^A-Z0-9]/g, '')
    }
    if(!phoneCheck(phoneNumber)) {
      setPhoneNumber('')
    }
    if(!phoneNumber && !dateFrom && !dateTo) {
      setLoading(true)
      axios.get(`http://localhost:8000/api/sms?token=${adminCookie}`)
        .then(res=> {
          setLoading(false)
          if(!res.data.message) {
            requestUpdate(res)
            router.push(`/admin/smscenter`)
          }
        })
    }
    if(phoneNumber) {
      setLoading(true)
      let ph = replaceDate(phoneNumber)
      if(dateFrom && !dateTo) {
        axios.get(`http://localhost:8000/api/smsFilter?token=${adminCookie}&phone=${ph}&date_from=${dateFrom}`)
          .then(res=> {
            setLoading(false)
            if(!res.data.message) {
              requestUpdate(res)
              router.push(`/admin/smscenter?phone=${ph}&start=${dateFrom}`)
            }
          })
      }
      if(dateTo && !dateFrom) {
        axios.get(`http://localhost:8000/api/smsFilter?token=${adminCookie}&phone=${ph}&date_to=${dateTo}`)
          .then(res=> {
            setLoading(false)
            if(!res.data.message) {
              requestUpdate(res)
              router.push(`/admin/smscenter?phone=${ph}&end=${dateTo}`)
            }
          })
      }
      if(dateFrom && dateTo) {
        axios.get(`http://localhost:8000/api/smsFilter?token=${adminCookie}&phone=${ph}&date_from=${dateFrom}&date_to=${dateTo}`)
          .then(res=> {
            setLoading(false)
            if(!res.data.message) {
              requestUpdate(res)
              router.push(`/admin/smscenter?phone=${ph}&start=${dateFrom}&end=${dateTo}`)
            }
          })
      }

      if(!dateFrom && !dateTo) {
        axios.get(`http://localhost:8000/api/smsFilter?token=${adminCookie}&phone=${ph}`)
          .then(res=> {
            setLoading(false)
            if(!res.data.message) {
              requestUpdate(res)
              router.push(`/admin/smscenter?phone=${ph}`)
            }
          })
      }
    } else {
      setLoading(true)
      if(dateFrom && dateTo) {
        axios.get(`http://localhost:8000/api/smsFilter?token=${adminCookie}&date_from=${dateFrom}&date_to=${dateTo}`)
        .then(res=> {
          setLoading(false)
          if(!res.data.message) {
            requestUpdate(res)
            router.push(`/admin/smscenter?start=${dateFrom}&end=${dateTo}`)
          }
        })
      }
      if(dateFrom && !dateTo) {
        axios.get(`http://localhost:8000/api/smsFilter?token=${adminCookie}&date_from=${dateFrom}`)
        .then(res=> {
          setLoading(false)
          if(!res.data.message) {
            requestUpdate(res)
            router.push(`/admin/smscenter?start=${dateFrom}`)
          }
        })
      }
      if(dateTo && !dateFrom) {
        axios.get(`http://localhost:8000/api/smsFilter?token=${adminCookie}&date_to=${dateTo}`)
        .then(res=> {
          setLoading(false)
          if(!res.data.message) {
            requestUpdate(res)
            router.push(`/admin/smscenter?end=${dateTo}`)
          }
        })
      }
    }

    
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
          </div>
          <div className='text-center'>
          <button  type='submit' className='mr-2 mt-3 btn btn-dark'>Искать</button>
          <a href='/admin/smscenter' type='button' className='mr-2 mt-3 btn btn-light' onClick={() => {props.onClear}}>Сбросить</a>
          </div>
        </form>


        <button className='btn'>Выгрузить результат</button>
        {/* Search bar sms end */}



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