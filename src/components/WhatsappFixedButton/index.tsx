import WhatsappIcon from '@components/WhatsappIcon'
import formatPhoneNumber from '@utils/formatPhoneNumber'
import React from 'react'

function WhatsappFixedButton() {
  return (
    <a
      className="btn fixed bottom-5 right-5"
      target="_blank"
      href={`https://api.whatsapp.com/send?phone=${formatPhoneNumber(
        '+55 48 99921-1237',
      )}`}
      rel="noreferrer"
    >
      <WhatsappIcon />
    </a>
  )
}

export default WhatsappFixedButton
