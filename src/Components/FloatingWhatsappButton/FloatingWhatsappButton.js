import React from 'react'
import FloatingWhatsApp from 'react-floating-whatsapp'

function FloatingWhatsappButton(props) {
  return (
    <div>
    <FloatingWhatsApp
        phoneNumber="+919380359418"
        accountName="Shareeji MultiSpecialty"
        avatar='images/docdp.jpg'
        allowClickAway
        notification
        notificationDelay={60000} // 1 minute
      />
  
    </div>
  )
}


export default FloatingWhatsappButton