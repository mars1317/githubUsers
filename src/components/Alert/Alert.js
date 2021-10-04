import React, {useContext} from 'react'
import {AlertContext} from '../../context/alert/AlertContext'
import './Alert.scss';

export const Alert = () => {

  const {alert, hide} = useContext(AlertContext)

  if (!alert) {
    return null
  }

  return (
    <div 
      className={`alert alert-${alert.type || 'secondary'} alert-dismissible`}
      role="alert"
    >
    <button type="button" class="btn btn-outline-warning close">Warning</button>
    <span>{alert.text}</span>

  </div>
  )
}