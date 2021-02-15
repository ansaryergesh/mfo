import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Header from '../../components/admin/Header'
import Footer from '../../components/admin/Footer'
import swal from "sweetalert";
import cookie from 'js-cookie'
import {useDispatch, connect} from 'react-redux'
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

function mapStateToProps(state) {
  return {adminReducer:state.adminReducer}
}
const AdminUsers = ({adminReducer}) => {
    const dispatch = useDispatch();
    const [loading,setLoading] = useState(true);
    const [users, setUsers] = useState([])
    const [edit,setEdit] = useState('')
    const [userDate,setUserDate] = useState({id: null,name: null, email: null, role_id: null})
    const [newUser, setNewUser] = useState({name: null, email: null, password: 'icredit123', role_id: 2})
    const [showModal, setShowModal] = useState(false);



    const finalUser = users.filter(user=>user.id !== adminReducer.user.id);
    const handleClose = () => {
      setShowModal(false)
      setNewUser({name: null, email: null, password: 'icredit123', role_id: 2})
    };
    const handleShow = () => setShowModal(true);
    const getUser = () => {
      axios.get(`${process.env.BASE_URL}/users`, {headers: {'Access-Control-Allow-Origin': '*'}})
            .then(res => {
                setUsers(res.data)
                setLoading(false)
            })
    }
    useEffect(() => {
      getUser()
    },[])

    
    const editAccount = (id) => {
      setEdit(id);
      const user = users.filter(user=>user.id === id);
      setUserDate({id: id,name: user[0].name,email: user[0].email, role_id: user[0].role_id})
    }


    const userAdd = (e) => {
      axios.post('${process.env.BASE_URL}/users', {
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
        role_id: newUser.role_id,
        token: cookie.get('admin_token')
      }, {headers: {'Access-Control-Allow-Origin': '*'}})
        .then(res=> {
          if(res.data.success) {
            dispatch({type: 'ADM_SUCCESS_MESSAGE', payload: res.data.message})
            getUser()
            handleClose()
          }else {
              dispatch({type: 'ADM_ERROR_MESSAGE', payload: res.data.message})
          }
        })
     
      e.preventDefault()
    }
    const saveEdit = () => {
      axios.put('${process.env.BASE_URL}/edit', {
        token: cookie.get('admin_token'),
        email: userDate.email,
        name: userDate.name,
        role_id: userDate.role_id,
        user_id: userDate.id
      }, {headers: {'Access-Control-Allow-Origin': '*'}})
        .then(res => {
          if(res.data.success) {
            dispatch({type: 'ADM_SUCCESS_MESSAGE', payload: res.data.message})
            setEdit('')
            getUser()
          }else {
            dispatch({type: 'ADM_ERROR_MESSAGE', payload: res.data.message})
            getUser()
          }
        })
    }
    const deleteAccount = (id) => {
      swal({
          title: 'Вы уверены, что хотите удалить пользователя',
          buttons:{
            catch:{
              text: 'Да',
              value: 'yes'
            },
            cancel: 'Нет'
          }
        }).then(value=>{
          switch (value){
            case 'yes':
              axios.get(`${process.env.BASE_URL}/deleteAccount?token=${cookie.get('admin_token')}&user_id=${id}` ,{headers: {'Access-Control-Allow-Origin': '*'}})
              .then(response => {
                if(response.data.success) {
                  dispatch({type: 'ADM_SUCCESS_MESSAGE', payload: response.data.message})
                  getUser()
                }else {
                    dispatch({type: 'ADM_ERROR_MESSAGE', payload: response.data.message})
                }
              })
          }
        })
    }

    const cancelEdit = () => {
      setEdit('');
      getUser()
    }

    const userTable = (edit, user, index) => {
      if(edit === user.id) {
        return(
          <tr key={userDate.id}>
        <th scope="row">{index+1}</th>
        <td><input onChange={(e) => setUserDate({id: userDate.id,name: e.target.value, email: userDate.email, role_id: userDate.role_id})} value={userDate.name}/></td>
        <td><input onChange={(e) => setUserDate({id: userDate.id,name: userDate.name, email: e.target.value, role_id: userDate.role_id})}  value={userDate.email}/></td>
        <td><select onChange={(e) => setUserDate({id: userDate.id,name: userDate.name, email: userDate.email, role_id: e.target.value})} value={userDate.role_id}><option value='1'>Admin</option><option value='2'>Moderator</option></select></td>
        <td>
            <button className='btn btn-success mr-2' onClick={() => saveEdit()}>Save</button>
            <button className='btn btn-danger' onClick={() => cancelEdit()}>Cancel</button>
        </td>
     </tr>  
        )
      }
      else return(
        <tr key={user.id}>
        <th scope="row">{index+1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.role_id === 1 ? 'Admin'  :'Moderator'}</td>
        <td>
            <button className='btn btn-success mr-2' disabled={adminReducer.user.role_id===1 ? false : true} onClick={() => editAccount(user.id)}>Edit</button>
            <button className='btn btn-danger' disabled={adminReducer.user.role_id===1 ? false : true} onClick={() => deleteAccount(user.id)}>Delete</button>
        </td>
      </tr>
      )
      
    }



    return (
        <div>
            <Header />
            <main role="main">
     <section class="panel important">
         
    {loading ? <div>Загузка...</div> :
    <div className='container'>
      <div className='d-flex mb-3 justify-content-between'>
      <h2>Users</h2>
        <button className='btn btn-info' onClick={handleShow} disabled={adminReducer.user.role_id===1 ? false : true}>Новый пользователь <b>+</b></button>
      </div>
       
            <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Имя</th>
                <th scope="col">Username</th>
                <th scope="col">Роль</th>
                <th scope='col'>Действие</th>
              </tr>
            </thead>
            <tbody>
            {finalUser.map((user,index) => (
                userTable(edit,user,index)
            ))}
         
              
            </tbody>
          </table>
        
    </div>
    }
      <Modal  isOpen={showModal} toggle={()=>handleClose(showModal)}   size="md">
                 <ModalBody>
                    <form className='form-group' onSubmit={e => userAdd(e)}>
                      <input onChange={(e) => setNewUser({password: newUser.password,name: e.target.value, email: newUser.email, role_id: newUser.role_id})} value={newUser.name} className='input-group mb-2' type='text' placeholder='Имя' />
                      <input onChange={(e) => setNewUser({password: newUser.password,name: newUser.name, email: e.target.value, role_id: newUser.role_id})} value={newUser.email} className='input-group mt-2' type='text' placeholder='Username' />
                      <select onChange={(e) => setNewUser({password: newUser.password,name: newUser.name, email: newUser.email, role_id: e.target.value})} value={newUser.email}  value={newUser.role_id} className='input-group mt-2'><option value='1'>Admin</option><option value='2'>Moderator</option></select>
                      <button className='btn btn-info mt-2' disabled={adminReducer.user.role_id===1 ? false : true}>Добавить</button>
                    </form>
                 </ModalBody>
			</Modal>
            
            </section>
            </main>
            <Footer />
        </div>
    )   
}
export default connect(mapStateToProps)(AdminUsers)