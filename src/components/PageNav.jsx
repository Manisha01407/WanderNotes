import { NavLink } from "react-router-dom";
import style from "./PageNav.module.css";
import Logo from "./Logo";
{
  /* <a href="/pricing">Pricing</a> ---the hole page is rendering which we dont want to do*/
}

{
  /* <Link to="/">Home</Link> --- it will only link the pages but NavLink will do the same but it also shows the current page we are in by giving class to pertivular page*/
}

export default function PageNav() {
  return (
    <nav className={style.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={style.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
