import { AreaChartOutlined } from "@ant-design/icons"

function Header() {
  return (
    <header>
      <div className="header__container">
        <div className="dashboard" style={{ width: 30, flexShrink: 0 }}>
          <AreaChartOutlined />
        </div>
        <div className="header__logo" style={{ cursor: "pointer" }} />
        <div className="header__right">
          <div className="header__avatar">
            <img src="/assets/images/avatar.png" alt="Avatar" />
          </div>
        </div>
      </div>
    </header>

  )
}

export default Header