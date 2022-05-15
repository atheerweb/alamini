import logo from "../../assets/imgs/logo.png";
import "./footer.css";
const Footer = () => {
  return (
    <footer>
      <div class="container">
        <div class="row w-100 mx-0 align-items-start">
          <div class="col-md-3">
            <img id="lastLogo" src={logo} alt="" width="245px" height="175px" />
          </div>
          <div class="col-md-3 mt-3 mt-lg-0">
            <h3>Explore</h3>
            <ul class="px-0 list-unstyled">
              <li>
                <a href="">Software engineer</a>
              </li>
              <li>
                <a href="">Business</a>
              </li>
              <li>
                <a href="">Accouting</a>
              </li>
              <li>
                <a href="">Data Science</a>
              </li>
              <li>
                <a href="">Robot Engineer</a>
              </li>
              <li>
                <a href="">Statistician</a>
              </li>
            </ul>
          </div>
          <div class="col-md-3 mt-3 mt-lg-0">
            <h3>Contact Us</h3>
            <ul class="px-0 list-unstyled">
              <li>
                <span>Ahmed elsayed</span>
                <span class="ms-2">123-456-789</span>
              </li>
              <li>
                <span>Ahmed salama</span>
                <span class="ms-2">123-456-789</span>
              </li>
            </ul>
          </div>
          <div class="col-md-3 mt-3 mt-lg-0">
            <h3>Social</h3>
            <div class="d-flex align-items-center social">
              <a href="#">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-instagram ms-3"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-twitter mx-3"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <hr />
        <p class="text-center">© 2022 Manst 3lmni | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
