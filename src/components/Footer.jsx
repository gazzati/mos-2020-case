import React from "react";

const Footer = () => {
    return(
        <footer className="tz-footer">
            <div className="footer-widget">
                <div className="container">

                    <div className="footer-left">
                        <div className="contact-info widget">
                            <h3 className="widget-title">Контактная информация</h3>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</p>
                            <ul>
                                <li>
                                    <span>Адрес :</span>
                                    <address>
                                        123 Sky Tower address name, Los Algeles, ,<br/> USA, Country, 01234
                                    </address>
                                </li>
                                <li>
                                    <span>Номер :</span>
                                    (964) 423 53 - 42
                                </li>
                                <li>
                                    <span>Email :</span>
                                    info@templaza.com
                                </li>
                            </ul>
                        </div>
                        <div className="widget">
                            <form className="tz-subcribe">
                                <input type="text" name="sub" value="" placeholder="Enter your email..."/>
                                <input type="submit" name="subscribe" value="Subscribe"/>
                            </form>
                        </div>
                        <div className="widget">
                            <ul className="tz-social">
                                <li>
                                    <a className="fa fa-facebook" href="#"></a>
                                </li>
                                <li>
                                    <a className="fa fa-twitter" href="#"></a>
                                </li>
                                <li>
                                    <a className="fa fa-google-plus" href="#"></a>
                                </li>
                                <li>
                                    <a className="fa fa-tumblr" href="#"></a>
                                </li>
                                <li>
                                    <a className="fa fa-flickr" href="#"></a>
                                </li>
                                <li>
                                    <a className="fa fa-pinterest" href="#"></a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-right">
                        <div className="tz-widget-clients widget">
                            <h3 className="widget-title">ЧТО ГОВОРЯТ КЛИЕНТЫ?</h3>
                            <div className="tz-widget-say">
                                <img src="images/say.jpg" alt="Kathy Young"/>
                                <div className="entry-say">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                        labore et dolore magna aliqua.</p>
                                    <span>Kathy Young</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-sm-6">
                                <div className="widget widget_nav_menu">
                                    <h3 className="widget-title">КАК КУПИТЬ?</h3>
                                    <ul>
                                        <li>
                                            <a href="#">Связаться с нами</a>
                                        </li>
                                        <li>
                                            <a href="#">Возврат</a>
                                        </li>
                                        <li>
                                            <a href="#">Карта сайта</a>
                                        </li>
                                        <li>
                                            <a href="#">Бренды</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="widget widget_nav_menu">
                                    <h3 className="widget-title">МОЙ АККАУНТ</h3>
                                    <ul>
                                        <li>
                                            <a href="#">Мой аккаунт</a>
                                        </li>
                                        <li>
                                            <a href="#">История заказов</a>
                                        </li>
                                        <li>
                                            <a href="#">Список покупок</a>
                                        </li>
                                        <li>
                                            <a href="#">Сообщения</a>
                                        </li>
                                        <li>
                                            <a href="#">Дополнения</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="widget widget_nav_menu">
                                    <h3 className="widget-title">Информация</h3>
                                    <ul>
                                        <li>
                                            <a href="#">О нас</a>
                                        </li>
                                        <li>
                                            <a href="#">Возврат</a>
                                        </li>
                                        <li>
                                            <a href="#">Связь с нами</a>
                                        </li>
                                        <li>
                                            <a href="#">Правила</a>
                                        </li>
                                        <li>
                                            <a href="#">Политика</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="tz-copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6">
                            <p>Copyright &copy; 2020 <a href="http://templaza.com/" target="_blank">Sport Pro</a>. All
                                rights reserved.</p>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="pull-right">
                                <span className="payments-method">
                                    <a href="#"><img src="images/Rectangle.png" alt="visa"/></a>
                                    <a href="#"><img src="images/Rectangle (1).png" alt="Intersection"/></a>
                                    <a href="#"><img src="images/Rectangle (2).png" alt="ebay"/></a>
                                    <a href="#"><img src="images/Rectangle (3).png" alt="Amazon"/></a>
                                    <a href="#"><img src="images/Rectangle (4).png" alt="Discover"/></a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
