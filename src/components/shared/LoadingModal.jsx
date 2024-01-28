import "./styles/LoadingModal.css"

const LoadingModal = ({ modalLoading }) => {

  return (
    <div className={`loading__modal ${modalLoading ? '' : 'modalOff'}`}>
      <div className={'loading__modal__container'}>
        <div className='loading__modal__pokeball__container'>
          <div className='loading__modal__pokeball__div2'></div>
          <div className='loading__modal__pokeball__div6'></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingModal