import React from "react";

const Header = () => {
    return(
        <header id="tz-header" className="bk-white">
            <div className="container">

                <div className="header-top">
                    <ul className="pull-left">
                        <li>
                            <a href="#">
                                Москва
                                <span className="fa fa-angle-down tz-down"></span>
                            </a>
                            <ul className="sub-menu">
                                <li>
                                    <a href="#">Казань</a>
                                </li>
                                <li>
                                    <a href="#">Екатеринбург</a>
                                </li>
                                <li>
                                    <a href="#">Самара</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Телефон: 123-45-67</a>
                        </li>
                    </ul>
                    <ul className="pull-right">
                        <li>
                            <a href="shop-register.html">Мой профиль</a>
                        </li>
                        <li>
                            <a href="#">Избранное</a>
                        </li>
                        <li>
                            <a href="shop-cart.html">Корзина</a>
                        </li>
                        <li>
                            <a href="shop-checkout.html">Оформить заказ</a>
                        </li>
                        <li className="tz-header-login">
                            <a href="#">Войти</a>
                            <div className="tz-login-form">
                                <form>
                                    <p className="form-content">
                                        <label htmlFor="username">Электронная почта</label>
                                        <input type="text" name="username" id="username" value=""/>
                                    </p>
                                    <p className="form-content">
                                        <label htmlFor="password">Пароль</label>
                                        <input type="password" name="username" id="password" value=""/>
                                    </p>
                                    <p className="form-footer">
                                        <a href="#">Забыли пароль?</a>
                                        <button type="submit" className="pull-right button_class">Войти</button>
                                    </p>
                                    <p className="form-text">
                                        Еще не зарегистрированы? <a href="shop-register.html">Зарегистрироваться</a>
                                    </p>
                                </form>
                            </div>
                        </li>
                    </ul>
                </div>


                <div className="header-content">
                    <h3 className="tz-logo pull-left"><a href="index.html"><img src="images/logo.png" alt="home"/></a></h3>
                    <div className="tz-search pull-right">

                        <form>
                            <input type="text" className="tz-query" id="tz-query" value="" placeholder="Search for product"/>
                            <button type="submit"></button>
                        </form>



                        <div className="live-search">
                            <ul>
                                <li>
                                    <div className="live-img"><img src="images/product/product-search1.jpg" alt="product search one"/>
                                    </div>
                                    <div className="live-search-content">
                                        <h6><a href="single-product.html">Defy Advanced</a></h6>
                                        <span className="live-meta">
                                            <a href="single-product.html">$2650.00</a>
                                            <span className="product-color">
                                                <i className="light-blue"></i>
                                                <i className="orange"></i>
                                                <i className="orange-dark"></i>
                                            </span>
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <div className="live-img"><img src="images/product/product-search2.jpg" alt="product search two"/>
                                    </div>
                                    <div className="live-search-content">
                                        <h6><a href="single-product.html">Defy Advanced</a></h6>
                                        <span className="live-meta">
                                            <a href="single-product.html">$2650.00</a>
                                            <span className="product-color">
                                                <i className="light-blue"></i>
                                                <i className="orange"></i>
                                                <i className="blueviolet"></i>
                                                <i className="orange-dark"></i>
                                            </span>
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <div className="live-img"><img src="images/product/product-search3.jpg" alt="product search one"/>
                                    </div>
                                    <div className="live-search-content">
                                        <h6><a href="single-product.html">Defy Advanced</a></h6>
                                        <span className="live-meta">
                                            <a href="single-product.html">$2650.00</a>
                                            <span className="product-color">
                                                <i className="blueviolet"></i>
                                                <i className="light-blue"></i>
                                                <i className="orange-dark"></i>
                                                <i className="orange"></i>
                                            </span>
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="tz-menu-primary">
                <div className="container">

                    <ul className="tz-main-menu pull-left nav-collapse">
                        <li>
                            <a href="index.html">Главная</a>
                        </li>
                        <li>
                            <a href="shop.html">Мужчинам
                                <span className="red-light">Скидки!</span>
                            </a>
                        </li>
                        <li>
                            <a href="shop.html">Женщинам</a>
                        </li>
                        <li>
                            <a href="shop.html">Детям</a>
                        </li>
                        <li>
                            <a href="blog.html">
                                Аксессуары
                                <span className="cyan-dark">Лучшие цены!</span>
                            </a>
                        </li>
                    </ul>



                    <ul className="tz-ecommerce-meta pull-right">
                        <li className="tz-mini-cart">
                            <a href="shop-cart.html"><strong>2</strong>Корзина : 1999р.</a>

                            <ul className="cart-inner">
                                <li className="mini-cart-content">
                                    <div className="mini-cart-img"><img src="images/product/1.jpg" alt="product search one"/></div>
                                    <div className="mini-cart-ds">
                                        <h6><a href="single-product.html">Liv Race Day Short</a></h6>
                                        <span className="mini-cart-meta">
                                            <a href="single-product.html">$2650.00</a>
                                            <span className="mini-meta">
                                               <span className="mini-color">Color: <i className="orange"></i></span>
                                               <span className="mini-qty">Qty: 5</span>
                                            </span>
                                        </span>
                                    </div>
                                    <span className="mini-cart-delete"><img src="images/delete.png" alt="delete"/></span>
                                </li>
                                <li className="mini-cart-content">
                                    <div className="mini-cart-img"><img src="images/product/product-cart2.png"
                                                                        alt="product search one"/></div>
                                    <div className="mini-cart-ds">
                                        <h6><a href="single-product.html">City Pedals Sport</a></h6>
                                        <span className="mini-cart-meta">
                                            <a href="single-product.html">$2650.00</a>
                                            <span className="mini-meta">
                                               <span className="mini-color">Color: <i className="orange"></i></span>
                                               <span className="mini-qty">Qty: 5</span>
                                            </span>
                                        </span>
                                    </div>
                                    <span className="mini-cart-delete"><img src="images/delete.png" alt="delete"/></span>
                                </li>
                                <li className="mini-cart-content">
                                    <div className="mini-cart-img"><img src="images/product/3.jpg"
                                                                        alt="product search one"/></div>
                                    <div className="mini-cart-ds">
                                        <h6><a href="single-product.html">Gloss</a></h6>
                                        <span className="mini-cart-meta">
                                            <a href="single-product.html">$2650.00</a>
                                            <span className="mini-meta">
                                               <span className="mini-color">Color: <i className="orange"></i></span>
                                               <span className="mini-qty">Qty: 5</span>
                                            </span>
                                        </span>
                                    </div>
                                    <span className="mini-cart-delete"><img src="images/4.jpg" alt="delete"/></span>
                                </li>
                                <li className="mini-subtotal">
                                    <span className="subtotal-content">
                                        Subtotal:
                                        <strong className="pull-right">2999р.</strong>
                                    </span>
                                </li>
                                <li className="mini-footer">
                                    <a href="shop-cart.html" className="view-cart">View Cart</a>
                                    <a href="shop-checkout.html" className="check-out">Checkout</a>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <button data-target=".nav-collapse" className="btn-navbar tz_icon_menu" type="button">
                        <i className="fa fa-bars"></i>
                    </button>

                </div>
            </nav>
        </header>
    )
}

export default Header
