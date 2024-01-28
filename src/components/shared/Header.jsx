import "./styles/Header.css"

const Header = () => {
  return (
    <div className="header">
      <div className='header__img__container'>
        <img className="header__img" src="/logo.png" alt="" />
      </div>
      <div className="header__div1"></div>
      <div className="header__div2"></div>
      <div className="header__circle">
        <div className="header__circle1"></div>
        <div className="header__circle2"></div>
      </div>
    </div>
  )
}

export default Header