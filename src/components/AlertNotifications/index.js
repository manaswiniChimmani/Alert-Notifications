// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => {
  const successAlert = () => (
    <Notification>
      <div className="noti-container">
        <AiFillCheckCircle className="icon1" />
        <div className="container">
          <h1 className="h1">Success</h1>
          <p className="p1">You can access all the files in the folder</p>
        </div>
      </div>
    </Notification>
  )

  const errorAlert = () => (
    <Notification>
      <div className="noti-container">
        <RiErrorWarningFill className="icon2" />
        <div className="container">
          <h1 className="h2">Error</h1>
          <p className="p1">
            Sorry, you are not authorized to have access to delete the file
          </p>
        </div>
      </div>
    </Notification>
  )

  const warningAlert = () => (
    <Notification>
      <div className="noti-container">
        <MdWarning className="icon3" />
        <div className="container">
          <h1 className="h3">Warning</h1>
          <p className="p1">
            Viewers of this file can see comments and suggestions
          </p>
        </div>
      </div>
    </Notification>
  )

  const infoAlert = () => (
    <Notification>
      <div className="noti-container">
        <MdInfo className="icon4" />
        <div className="container">
          <h1 className="h4">Info</h1>
          <p className="p1">Anyone on the internet can view these files</p>
        </div>
      </div>
    </Notification>
  )

  return (
    <div className="bg-container">
      <h1>Alert Notifications</h1>
      {successAlert()}
      {errorAlert()}
      {warningAlert()}
      {infoAlert()}
    </div>
  )
}

export default AlertNotifications
