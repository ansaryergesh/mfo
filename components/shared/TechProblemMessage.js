import React from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

class TechProblem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainMessage: true
    }

    this.mainMessageClose = this.mainMessageClose.bind(this);
  }
  
    
  mainMessageClose = () => {
    this.setState({
      mainMessage:false
    })
  }
  componentDidMount() {
    setTimeout(() => {
      this.mainMessageClose()
    },5000)

  }
  render() {
      return (
   <Modal isOpen={this.state.mainMessage} toggle={this.mainMessageClose} size="md">
     <ModalHeader>Просим прощения за доставленные неудобства</ModalHeader>
     <ModalBody>
      По техническим причинам городской номер не доступен. Просим обращаться через Whatsapp или на адрес электронной почты info@i-credit.kz
     </ModalBody>
   </Modal>
      )
  }
}

export default TechProblem;