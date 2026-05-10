import facebook from "../assets/ic_facebook.svg";
import instagram from "../assets/ic_instagram.svg";
import twitter from "../assets/ic_twitter.svg";
import youtube from "../assets/ic_youtube.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-frame">
        <p className="footer-gray">©codeit - 2024</p>
        <ul className="footer-inner-center">
          <li>
            <a className="footer-white" href="./move/privacy.html">
              Privacy Policy
            </a>
          </li>
          <li>
            <a className="footer-white" href="./move/FAQ.html">
              FAQ{" "}
            </a>
          </li>
        </ul>
        <ul className="footer-right">
          <li>
            <a href="http://www.facebook.com" target="_blank">
              <img src={facebook} alt="페이스북이미지" className="footer-img" />
            </a>
          </li>
          <li>
            <a href="http://www.twitter.com" target="_blank">
              <img src={twitter} alt="트위터이미지" className="footer-img" />
            </a>
          </li>
          <li>
            <a href="http://www.youtube.com" target="_blank">
              <img src={youtube} alt="유튜브이미지" className="footer-img" />
            </a>
          </li>
          <li>
            <a href="http://www.instagram.com/" target="_blank">
              <img
                src={instagram}
                alt="인스타그램이미지"
                className="footer-img"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
