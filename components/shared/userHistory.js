import React from 'react'
import {connect} from 'react-redux'
const mapStateToProps = state => {
  return {userHistory: state.userHistory}
}

class History extends React.Component {
  render() {
    if(this.props.userHistory.userHistory.data) {
    return (
      <div>
        {this.props.userHistory.userHistory.data.length>0 ? (<div>
        <h5 className='text-center mt-5'>Моя история ({" "+this.props.userHistory.userHistory.data.length+ " "} )</h5><table className='userHistory'>
            <thead>
                <tr>
                  <th>
                    Сумма заима
                  </th>
                  <th>
                    Дата выдачи
                  </th>
                  <th>Дата возврата</th>
                </tr>
              </thead>
        {this.props.userHistory.userHistory.data.map(elem => (
              <tbody>
                <tr>
                  <td>{elem.amount}</td>
                  <td>{elem.start}</td>
                  <td>{elem.close}</td>
                </tr>
              </tbody>
          ))}
          
          </table></div>) : (<div className='text-center mt-5'><h5></h5></div>)}
        
      </div>
    )
    }
    else {
        return(
            <div>Загрузка..</div>
        )
    }
  }
}

export default(connect(mapStateToProps)(History));