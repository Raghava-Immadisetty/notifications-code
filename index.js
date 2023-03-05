const Notification = props => {
  const{message, imgUrl, msg-container} = props
  <div className = {msg-container}>
      <img className ='icon' src= {imgUrl}/>
      <p className = 'msg'>{message}</p>
  </div>
}

const element = (
 <div>
     <h1 className='heading'>Notifications</h1>
     <Notification message='Information Message' imgUrl='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png' msg-container = 'info'/>
     <Notification message='Success Message' imgUrl='https://assets.ccbp.in/frontend/react-js/success-icon-img.png' msg-container = 'success'/>
     <Notification message='Warning Message' imgUrl='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png' msg-container = 'warning'/>
     <Notification message='Error Message' imgUrl='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png' msg-container = 'error'/>
 </div>   
)

ReactDOM.render(element, document.getElementById('root'))
