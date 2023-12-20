import { Button } from '@mui/material'
import { notification } from 'antd'
import React, { useEffect } from 'react'

type notificationProps = {
  message: string
  type: 'error' | 'success'
}
function MyNotificationServices(props: notificationProps) {
  const openNotification = () => {
    notification.open({
      message: (
        <p
          style={
            props.type === 'error'
              ? { fontSize: '20px', color: 'red' }
              : { fontSize: '20px', color: 'green' }
          }
        >
          {props.type}
        </p>
      ),
      description: props.message,
    })
  }

  useEffect(() => {
    openNotification()
  })
  return <></>
}

export default MyNotificationServices
