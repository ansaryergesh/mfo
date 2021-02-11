import React,{useState,useEffect} from 'react'

const SmsList = (props) => {
  const status = (st) => {
    if(st === '100') {
      return ['danger', 'в ожиданий']
    }
    if(st === '101') {
      return ['info', 'отправлено']
    }
    if(st==='102') {
      return ['success', 'доставлено']
    }
  }
  const indexList = props.toList - 14;
  return (
    <div>
      <p className='text-center mt-2 mb-2'>Найдено: {props.total} записей</p>
      
      <p className='container'>{props.currentPage} <b>стр.</b></p>
        <table className="mt-3 table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Phone</th>
              <th scope="col">Type</th>
              <th scope='col'>Text</th>
              <th scope="col">Status</th>
              <th scope='col'>Date</th>
            </tr>
          </thead>
        <tbody>
          {props.sms.map((s,index) => (
            <tr key={s.id}>
               <th scope="row">{props.toList >15 ? index+indexList : index+1}</th>
               <td>{s.phone}</td>
               <td>{s.type}</td>
               <td>{s.text}</td>
               <td className={`alert alert-${status(s.status)[0]}`}><b>{status(s.status)[1]}</b></td>
               <td>{new Intl.DateTimeFormat('ru', { year: 'numeric', month: 'short', day: '2-digit', hour:'numeric', minute:'numeric' }).format(new Date(Date.parse(s.created_at)))}</td>
            </tr>
          ))}
        </tbody>
        </table>
    </div>
  )
}

export default SmsList;