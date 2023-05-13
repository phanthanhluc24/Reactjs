import React from 'react'
import { Link } from "react-router-dom"
import "../../../Css/header.css"
const Header = () => {
    return (
        <div>
            <div className="container-full">
                <div className="container-header">
                    <img className='img-header' src="https://bizweb.dktcdn.net/100/419/628/themes/897067/assets/logo.png?1679297872504" alt="" />
                    <div class="search-box">
                        <input type="text" placeholder="Search" />
                        <button type="submit"><i class="fa fa-search"></i></button>
                    </div>
                    <div className="header-icon">
                        <div>
                            <i class="fa-solid fa-location-dot"></i>
                            <span>Địa chỉ</span>
                        </div>
                        <div>
                            <i class="fa-regular fa-user"></i>
                            <span>Tài khoản</span>
                        </div>
                        <div>
                            <i class="fa-solid fa-cart-shopping"></i>
                            <span>Giỏ hàng</span>
                        </div>
                    </div>

                </div>
                <div className="container-menu">
                    <ul className="menu_ul mt-4 ">
                        <Link className='link '>Trang Chủ</Link>
                        <Link className='link'>Giới Thiệu</Link>
                        <Link className='link'>Quà Tặng</Link>
                        <Link className='link'>Chương trình khuyến mãi</Link>
                        <Link className='link'>Bánh ngon mỗi ngày</Link>
                        <Link className='link'>Công thức làm bánh</Link>
                        <Link className='link'>Chuyên mục làm bánh</Link>
                        <Link className='link'>Liên hệ</Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
