import logo from "../../assets/icons/logo.svg";
import heart from "../../assets/icons/heart_icon.svg";

import styles from './Header.module.css';
import { Link } from "react-router-dom";
import { pageRoutes } from '../../constants/pageRoutes';

const Header = () => {

    return (
        <header className={styles.header}>
            <Link to={pageRoutes.commonRoutes.home}><img src={logo} alt="logo" /></Link>

            <div className={styles.wrapper_search}>
                <input type="search" placeholder="search" />
            </div>

            <div className={styles.wrapper_btns}>
                <Link to={pageRoutes.cartRoutes.cart} className={styles.btn}><img src={heart} alt="cart" /></Link>
                <Link className={styles.btn}><img src={heart} alt="heart" /></Link>
            </div>

        </header>
    )
}

export default Header