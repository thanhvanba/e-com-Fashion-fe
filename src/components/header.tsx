export default function Header() {
    return <>
        <header className="shadow-lg w-full">
            <div className="header__nav flex justify-between items-center">
                <div className="header__nav--item left">
                    <div>
                        {/* <img src="" alt="" /> */}
                        <span>FStore</span>
                    </div>

                    <ul className="flex items-center">
                        <li>SALE</li>
                        <li>Mới về</li>
                        <li>Bán chạy</li>
                        <li>Nam</li>
                        <li>Nữ</li>
                        <li>Trẻ em</li>
                        <li>Bộ sưu tập</li>
                        <li>Đồng phục</li>
                        <li>Tin hot</li>
                    </ul>
                </div>

                <div className="header__nav--item right">
                    <div className="search-box"></div>
                    <button className="cart"></button>
                    <button className="auth"></button>
                </div>
            </div>
        </header>
    </>
}