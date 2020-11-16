import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
// import { NavLink, withRouter } from 'react-router-dom';
import Link from 'next/link'
const AppLink = ({children, className, href}) =>
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>
class SuccessSubmit extends Component {
state = {
  modal14: false
}

toggle = nr => () => {
  let modalNumber = 'modal' + nr
  this.setState({
    [modalNumber]: !this.state[modalNumber]
  });
}

render() {
  return (
      <MDBContainer>
        <MDBModal isOpen="true" toggle={this.toggle(14)} centered>
          <MDBModalBody className="successMessage text-center text-success">
          <p className="mb-5">Ваша заявка принята в обработку.<br></br> Наш менеджер свяжется с вами в ближайшее время<br></br></p>


          <AppLink className="tohome"  href="/home">Вернуться на главную сайта</AppLink>
          </MDBModalBody>

        </MDBModal>
      </MDBContainer>
    );
  }
}

export default SuccessSubmit;
