import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import React, { useState, useEffect } from 'react';

const MainMessage = () => {
    const [mainMessage, setMainMessage] = useState(true)
    const closeMessage = () => setMainMessage(false);

    useEffect(() => {
        setTimeout(() => {
            closeMessage()
        },8000)
    })
    return (
        <Modal isOpen={mainMessage} toggle={closeMessage} size="md">
        {/* <ModalHeader>Просим прощения за доставленные неудобства</ModalHeader> */}
        <ModalBody >
          <h5>Просим прощения за доставленные неудобства</h5>
          {/* По техническим причинам городской номер не доступен. Просим обращаться через Whatsapp или на адрес электронной почты info@i-credit.kz */}
          Уважаемые клиенты, по техническим причинам платежи, через провайдера КАССА24 не могут быть обработаны. Рекомендуем оплатить через Qiwi терминал, а так же через наш сайт с помощью банковской карты. Приносим свои извинения, за указанное неудобство.
        </ModalBody>
      </Modal>
    )
}

export default MainMessage