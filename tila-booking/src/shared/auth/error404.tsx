import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Error404() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/')
  })
  return null
}

export default Error404
