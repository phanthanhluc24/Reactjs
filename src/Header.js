import './Header.css'

function Header(){
    return(
        <div>
            <section>
        <div className="container__header">
            <div className="container__contac">
                <div className="contac__phone">
                    <i className="fa-solid fa-phone"></i>
                    <p>0825030247</p>
                </div>
                <div className="contac__email">
                    <i className="fa-solid fa-envelope"></i>
                    <p>phanthanhluc24@gmail.com</p>
                </div>
                <div className="contac__icon">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-solid fa-wifi"></i>
                </div>

                <div className="container__right">
                    <ul className="shopping">
                        <li>Shop
                            <ul className="menu__item">
                                <li>Giày</li>
                                <li>Áo</li>
                                <li>Quần</li>
                                <li>Mũ</li>
                            </ul>
                        </li>
                        <li>My account</li>
                        <li>Chackout</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div className="comtainer_slide">
            <div className="container__logo">
                <img src="https://bizweb.dktcdn.net/100/469/097/themes/882205/assets/logo.png?1680244340869" alt=""/>
            </div>
            <div className="container__menu">
                <div className="__menu_">
                    <p>Trang chủ</p>
                </div>
                <div className="__menu_">
                    <p>Giới thiệu</p>
                </div>
                <div className="__menu_ __menu_grid">
                    <p>Menu</p>

                    <div className="__menu__two_level">
                        <div className="__menu_khai_vi">
                            <h6>Khai vị</h6>
                            <p>Salad</p>
                            <p>Gỏi</p>
                        </div>
                        <div className="__menu_main">
                            <h6>Món chính</h6>
                            <p>Món bò</p>
                            <p>Món heo</p>
                            <p>Món gà</p>
                            <p>Món cá</p>
                        </div>
                        <div className="__menu_canh">
                            <h6>Canh-Tiềm-Súp</h6>
                            <p>Canh</p>
                            <p>Tiềm</p>
                            <p>Súp</p>
                        </div>
                        <div className="__menu_com">
                            <h6>Cơm-Phở_Cháo</h6>
                            <p>Cơm</p>
                            <p>Phở</p>
                            <p>Cháo</p>
                        </div>
                        <div className="__menu_banh">
                            <h6>Bánh và Tráng Miệng</h6>
                            <p>Bánh</p>
                            <p>Tráng miệng</p>
                        </div>
                        <div className="__menu__do_uong">
                            <h6>Đồ uống</h6>
                            <p>Cà phê</p>
                            <p>Sữa</p>
                        </div>
                    </div>
                </div>
                <div className="__menu_">
                    <p>Món ăn nổi bật</p>
                </div>
                <div className="__menu_">
                    <p>Món ngon mỗi ngày</p>
                </div>
                <div className="__menu_">
                    <p>Tin tức</p>
                </div>
                <div className="container_icon">
                    <div className="__menu_">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className="__menu_">
                        <i className="fa-solid fa-cart-shopping"></i>
                    </div>
                    <div className="__menu_">
                        <i className="fa-solid fa-user"></i>
                    </div>
                    <div className="__menu_">
                        <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div className="__menu_">
                        <button>
                            Đặt bàn
                        </button>
                    </div>
            </div>
            </div>

        </div>
    </section>
        </div>
    )
}

export default Header;