import axios from "axios"
import { useEffect, useState } from "react"
import { connect } from "react-redux"
import Router from 'next/router'
import ContinueStep2 from "../../components/continue/ContinueStep2"
import ContinueStep3 from "../../components/continue/ContinueStep3"
import withAuth from "../../components/hocs/withAuth"
import Progressbar from "../../components/shared/Progressbar"

const mapStateToProps = state => {
  return {userReducer: state.userReducer, userStatus: state.userStatus, userHistory: state.userHistory}
}

const Continue = ({userReducer}) => {
  const [stepResult,setStepResult] = useState(1)
  const [summa,setSumma] = useState(55000)
  const [srok,setSrok] = useState(20)
  const [step, setStep]  = useState(stepResult)
  const [sendRepeat, setSendRepeat] = useState(true)

  const canSendRepeat = () => {
    axios
    .get(`https://api.money-men.kz/api/repeatUser?iin=${userReducer.user.UF_4}`)
    .then((response) => {
      console.log(response)
      if (response.data.success == true) {
        // getCurrentStep()
      }
      if (response.data.success == false) {
        Router.push('/cabinet/loans');
      } else {
        console.log(response)
      }
    })
  }
  const getCurrentStep =() => {
    axios.get(`https://api.money-men.kz/api/notFull?iin=${userReducer.user.UF_4}`, {headers: {
      "Access-Control-Allow-Origin": "*",
    }})
      .then(res => {
        console.log(res)
        if(res.data.success) {
          if(res.data.step===3) {
            Router.push('/cabinet/loans')
          }else {
            setStep(parseInt(res.data.step))
            setStepResult(parseInt(res.data.step))
          }
        }
      })
      .catch (
        console.log('log')
      )
  }
  
  useEffect(() => {
    canSendRepeat()
    getCurrentStep()
  },[])
  const StepReg = () => {
    return(
      <>
      {step=== 1? 
       <ContinueStep2 next={step} setNext={setStep} userDate={userReducer.user}/> : <ContinueStep3 step={step} setStep={setStep} stepResult={stepResult} userDate={userReducer.user} summa={summa} srok={srok}/>}
      </>
    )
  }
  return(
      <div className='otherPages container'>
        <div className='alert alert-info'><b>{userReducer.user.UF_5} {userReducer.user.UF_6}, вам необходимо дозаполнить анкету, чтобы получить повторный займ</b></div>
        <div className='inputs_continue '>
          <div className='range-group'>
          <label>Сумма : {summa} тг</label>
          <input value={summa} onChange={e=>setSumma(e.target.value)} type='range' step='5000' min='10000' max='145000' className='range'></input>
          </div>
          <div className='range-group'>
          <label>Срок : {srok} дней</label>
          <input value={srok} onChange={e=>setSrok(e.target.value)} type='range' min='15' max='30' className='range'></input>
          </div>
        </div>
      <br></br><br></br>
        <h3 className='mt-5 mb-3 text-center'>Продолжить анкету</h3>
        

        {stepResult === 1 ? <StepReg /> : <ContinueStep3 userDate={userReducer.user} summa={summa} srok={srok}/>}
       {/* <ContinueStep3 /> */}
      {/* <ContinueStep3 /> */}

      </div>
  )
}

export default withAuth(connect(mapStateToProps,null)(Continue));