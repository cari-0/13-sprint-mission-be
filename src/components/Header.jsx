import pandaface from "../assets/pandaface.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-inner-logo">
          <img src={pandaface} alt="판다얼굴" className="pandaface-img" />
          <a className="header-inner-logo-word">판다마켓</a>
        </div>
        <div className="header-inner-frame">
          <div className="header-inner-menu">
            <a className="header-inner-menu-word">자유게시판</a>
          </div>
          <div className="header-inner-menu">
            <a className="header-inner-menu-word">중고마켓</a>
          </div>
        </div>
      </div>
      <div className="header-btn">
        <a className="header-login">로그인</a>
      </div>
    </header>
  );
}
