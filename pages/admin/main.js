import Header from '../../components/admin/Header'
import Footer from '../../components/admin/Footer'
import React, {useState} from 'react'
import {connect} from 'react-redux';
import AdminCabinet from '../../components/admin/AdminCabinet';

function mapStateToProps(state) {
  return {adminReducer:state.adminReducer}
}

const AdminMain = ({adminReducer}) => {
  
const [active,setActive] = useState('info')
  return(
   <div>
     <Header />
     <main role="main">
     <section class="panel important">
       <div className='d-flex mb-3'>
       <button onClick = {() => setActive('info')} className={active==='info' ? 'btn btn-secondary  mr-2' : 'btn btn-dark mr-2' }>Личные данные</button>
       <button onClick = {() => setActive('password')} className={active==='password' ? 'btn btn-secondary  mr-2' : 'btn btn-dark mr-2' }>Изменить пароль</button>
       </div>
      {adminReducer.authenticatingUser ? <div>Загрузка..</div> : <AdminCabinet active={active} user={adminReducer.user}/>  }
     </section>
     </main>
     <Footer />
   </div>   
  )
}

export default connect(mapStateToProps)(AdminMain)