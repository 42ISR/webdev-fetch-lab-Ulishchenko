import './ErrorMessage.css'

const ErrorMessage = ({ message }) => {
  return (
    <div className="error-message" role="alert">
      <p className="error-message__title">Что-то не так</p>
      <p className="error-message__text">{message} </p>
    </div>
  )
}


export default ErrorMessage
