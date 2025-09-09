function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <a className="brand" href="#">MetaMorph</a>
        <nav className="nav">
          <a href="#merge" className="nav-link">Merge PDF</a>
          <a href="#split" className="nav-link">Split PDF</a>
          <a href="#compress" className="nav-link">Compress PDF</a>
          <a href="#convert" className="nav-link">Convert PDF</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
