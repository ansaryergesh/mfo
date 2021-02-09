const AdminCabinet = () => {
    return(
        <div role="main">
            <form className=''>
                <div className='row col-md-6'>
                <h2 className='text-center mx-auto'>Изменить пароль</h2>
                <div className='row col-12 form-group mx-auto'>
                    <label htmlFor='name'>Новый пароль:</label>
                    <input type='password' className='form-control focus-visible' value={user.name} />
                </div>
                <div className='row col-12 form-group mx-auto'>
                    <label htmlFor='name'>Повторить пароль:</label>
                    <input type='password' className='form-control focus-visible' value={user.email} />
                </div>
               
                </div>
                
            </form>
        </div>
    )
}

export default AdminCabinet;