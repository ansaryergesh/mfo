import React from 'react'
import {connect} from 'react-redux'
const mapStateToProps = state => {
  return {userStatus: state.userStatus, userHistory: state.userHistory}
}

class Status extends React.Component {
  render() {
    switch (this.props.userStatus.userStatus.stage) {
      case 1:
        return (
          <div className='mt-5'>
            <h5 className='text-center'>Текущая завяка</h5>
            <div className='cabinetmessage text-center'>
              У вас заим в статусе
              <b>
                "Льготный период"</b>
            </div>
            <div>
              <table className='lperiod'>
                <thead>
                  <tr>
                    <th>
                      Дата выдачи 📅
                    </th>
                    {/* <th>
                      Сумма на руки 💰
                    </th> */}
                    <th>
                      Дата окончания льготного периода 📅
                    </th>
                    <th>Основной долг 💸</th>
                    <th>Cумма погашения льготный период 💸</th>
                    <th>Сумма задолженности на текущую дату</th>
                    <th>Дата погашения 📅</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.props.userStatus.userStatus.givenDate}</td>
                    {/* <td>{this.props.userStatus.userStatus.amount}</td> */}
                    <td>{this.props.userStatus.userStatus.lp}</td>
                    <td>{this.props.userStatus.userStatus.mainAmount}</td>
                    <td>{this.props.userStatus.userStatus.lpAmount}</td>
                    <td>{this.props.userStatus.userStatus.todayAmount}</td>
                    <td>{this.props.userStatus.userStatus.endDate}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )
      case 2:
        return (
          <div className='mt-5'>
              <h5 className='text-center'>Текущая завяка</h5>
            <div className='cabinetmessage text-center'>
              У вас заим в статусе
              <b>
                "Стандартный заим"</b>
            </div>
            <div>
              <table className='vdolge'>
                <thead>
                  <tr>
                    <th>
                      Дата выдачи 📅
                    </th>
                    {/* <th>
                      Сумма на руки 💰
                    </th> */}

                    <th>Основной долг 💸</th>
                    <th>Сумма задолженности на текущую дату</th>
                    <th>Дата погашения 📅</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.props.userStatus.userStatus.givenDate}</td>
                    {/* <td>{this.props.userStatus.userStatus.amount}</td> */}
                    <td>{this.props.userStatus.userStatus.mainAmount}</td>
                    <td>{this.props.userStatus.userStatus.todayAmount}</td>
                    <td>{this.props.userStatus.userStatus.endDate}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )
      case 3:
        return (
          <div className='mt-5'>
            <div className='container alert alert-primary'>
              <h4 className='alert-heading'>Статус вашего текущего заима</h4>
              <hr/>
              <p className='mb-0'><b>Вы в просрочке.</b> Уточните сумму долга по номеру <b><a href="tel:+77272501500">+7 727 250 1500</a></b>, <b><a href="tel:+77007501500">+7 700 750 1500</a></b> или напишите в
                <b><a classname="whatsapptext" href='https://api.whatsapp.com/send?phone=+77015382439' target="_blank"> WhatsApp <i class="fa fa-whatsapp" aria-hidden="true"></i></a></b> </p>
            </div>
            <div className='cabinetmessage text-center'>
              У вас заим в статусе
              <b>
                 "Просрочен"</b>
            </div>
            <div>
              {/* <table className='vdolge'>
                <thead>
                  <tr>
                    <th>
                      Дата выдачи 📅
                    </th>
                    <th>
                      Сумма на руки 💰
                    </th>

                    <th>Основной долг 💸</th>
                    <th>Сумма задолженности на текущую дату</th>
                    <th>Дата погашения 📅</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.props.userStatus.userStatus.givenDate}</td>
                    <td>{this.props.userStatus.userStatus.amount}</td>
                    <td>{this.props.userStatus.userStatus.mainAmount}</td>
                    <td>{this.props.userStatus.userStatus.todayAmount}</td>
                    <td>{this.props.userStatus.userStatus.endDate}</td>
                  </tr>
                </tbody>
              </table> */}
            </div>
          </div>
        )
      case 4:
        return (
          <div className='container'>
            <div className='alert alert-primary'>
              <h4 className='alert-heading'>Статус вашего текущего заима</h4>
              <hr/>
              <p className='mb-0'><b>Вы в просрочке.</b> Уточните сумма долга по номеру <a classname="whatsapp" href='https://api.whatsapp.com/send?phone=+77015382439' target="_blank"><i class="fa fa-whatsapp" aria-hidden="true"></i>  +7 701 538 2439 (WhatsApp)</a></p>
            </div>
            <div className='cabinetmessage text-center'>
              У вас заим в статусе
              <b>
                "Просрочен"</b>
            </div>
          </div>
        )
      case 5:
        return (
          <div className='container'>
            <div className='alert alert-primary'>
              <h4 className='alert-heading'>Статус вашего последного заима</h4>
              <hr/>
              <p className='mb-0'>{this.props.userStatus.userStatus.message}</p>
            </div>
          </div>
        )
      case 6:
        return (
          <div className='container'>
            <div className='alert alert-primary'>
              <h4 className='alert-heading'>Статус вашего последного заима</h4>
              <hr/>
              <p className='mb-0'>{this.props.userStatus.userStatus.message}</p>
            </div>
          </div>
        )
      default:
        return (
          <div></div>
        )
    }

    // return (   <div>     <table>       <thead>         <tr>           <th> Дата
    // выдачи 📅           </th>           <th>             Сумма на руки 💰 </th>
    //       <th>             Основной долг 💸 </th> <th>Example</th>
    // <th>Example</th> <th>Example</th> <th>Example</th>         </tr> </thead>
    // <tbody>         <tr> <td>12.12.2020</td>           <td>10000</td>
    // <td>15000</td>  <td>1/2"</td>           <td>Kangal / Coil</td> </tr> </tbody>
    //    </table>   </div> )
  }
}

export default(connect(mapStateToProps)(Status));