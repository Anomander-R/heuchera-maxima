import LogoType from "../logo/LogoType";
const Header = () => {
  return (
    <header>
        {/* <a href="#" className="logo">
          Logo
        </a> */}
        <LogoType/>
        <ul className="navlist">
          <li>
            <a href="#home" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </header>
  )
}

export default Header