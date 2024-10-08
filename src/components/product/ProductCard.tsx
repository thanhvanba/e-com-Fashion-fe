import FormatPrice from "@/utils/formatPrice";
import { truncatedContent } from "@/utils/truncatedContent";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ImageItem {
    id: number;
    url: string;
}

interface Product {
    id: number;
    name: string;
    min_variant_price: number;
    images: ImageItem[]
    title: string;
}

const ProductCard = ({ product }: { product: Product }) => {
    const [maxLength, setMaxLength] = useState(36); // Mặc định là 36 ký tự

    useEffect(() => {
        // Theo dõi kích thước cửa sổ và thay đổi số ký tự cắt ngắn
        const handleResize = () => {
            if (window.innerWidth < 400) {
                setMaxLength(20); // Màn hình nhỏ hơn 640px
            } else if (window.innerWidth < 576) {
                setMaxLength(24); // Màn hình nhỏ hơn 640px
            } else if (window.innerWidth < 768) {
                setMaxLength(36); // Màn hình nhỏ hơn 640px
            } else if (window.innerWidth < 800) {
                setMaxLength(30); // Màn hình nhỏ hơn 640px
            } else if (window.innerWidth < 1024) {
                setMaxLength(34); // Màn hình nhỏ hơn 640px
            } else if (window.innerWidth < 1120) {
                setMaxLength(28); // Màn hình nhỏ hơn 640px
            } else if (window.innerWidth < 1280) {
                setMaxLength(40); // Màn hình nhỏ hơn 640px
            } else if (window.innerWidth < 1360) {
                setMaxLength(44); // Màn hình nhỏ hơn 1024px
            } else {
                setMaxLength(48); // Màn hình lớn hơn 1024px
            }
        };

        // Gọi hàm ngay khi component render
        handleResize();

        // Gắn sự kiện lắng nghe thay đổi kích thước cửa sổ
        window.addEventListener('resize', handleResize);

        // Hủy sự kiện khi component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <Link href={`product/${product.id}`}>
            <div>
                <img src={product.images[0].url} alt="" />
                <div className="pt-3 text-black">
                    <div className="text-sm">{truncatedContent(product.name, maxLength)}</div>
                    <div className="pt-2 font-semibold text-base">{FormatPrice(product.min_variant_price)} <span className="text-lg">đ</span></div>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard