import React,{useState,useEffect} from 'react'

const SmsList = (props) => {
  const status = (st) => {
    if(st === '100') {
      return 'danger'
    }
    if(st === '101') {
      return 'info'
    }
    if(st==='102') {
      return 'success'
    }
  }
  return (
    <div>
      <p className='text-center mt-2 mb-2'>Найдено: {props.total} записей</p>
      
      <p className='container'>{props.currentPage} <b>стр.</b></p>
        <table className="mt-3 table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Номер</th>
              <th scope="col">Тип</th>
              <th scope='col'>Текст</th>
              <th scope="col">Статус</th>
              <th scope='col'>Изменен</th>
            </tr>
          </thead>
        <tbody>
          {props.sms.map((s,index) => (
            <tr key={s.id}>
               <th scope="row">{props.from + index}</th>
               <td>{s.phone}</td>
               <td>{s.type}</td>
               <td>{s.text}</td>
               <td className={`alert alert-${status(s.status_id)}`}><b>{s.status}</b></td>
               <td>{new Intl.DateTimeFormat('ru', { year: 'numeric', month: 'short', day: '2-digit', hour:'numeric', minute:'numeric' }).format(new Date(Date.parse(s.created_at)))}</td>
            </tr>
          ))}
        </tbody>
        </table>
    </div>
  )
}

export default SmsList;