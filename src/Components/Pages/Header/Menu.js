import React from 'react'
import { Link } from "react-router-dom"
import "../../../Css/menu.css"
const Menu = () => {
    return (
        <div>
            <div className="container-menu-left">
                <div className="left-category">
                    Danh Mục Sản Phẩm
                </div>
                <div className="catergory-down">
                    <ul className="down">
                        <Link className='link'>Tổng hợp khuyến mãi</Link><br />
                        <Link  className='link'>Bộ sưu tập bánh</Link> <br />
                        <Link className='link'>Bánh Chocolate</Link> <br />
                        <Link className='link'>Bánh mỳ</Link> <br />
                        <Link className='link'>Bánh kem</Link> <br />
                        <Link className='link'>Bánh ngọt</Link> <br />
                        <Link className='link'>Bánh bông lan</Link> <br />
                        <Link className='link'>Bánh râu câu</Link> <br />
                        <Link className='link'>Sản phẩm theo mùa</Link> <br />
                        <Link className='link'>Sản phẩm theo gói</Link> <br />
                        <Link className='link'>Giao hàng đúng giờ</Link> <br />
                        <Link className='link'>Miễn phí đổi trả trong 7 ngày</Link> <br />
                        <Link className='link'>Ưu đãi hấp dẫn mỗi ngày</Link>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Menu
