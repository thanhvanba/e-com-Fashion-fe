import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ProductSlider.css'
interface ImageItem {
    id: number;
    url: string;
}

interface Product {
    id: number;
    name: string;
    min_variant_price: number;
    images: ImageItem[];
    title: string;
}

interface CustomPagingProps {
    product: Product;
}

function CustomPaging({ product }: CustomPagingProps) {
    const settings = {
        customPaging: (index: number) => {
            const item = product.images[index]; // Lấy hình ảnh tương ứng với chỉ số
            return (
                <div className="slide-item">
                    <img src={item.url} alt={`Thumbnail ${index + 1}`} />
                </div>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="slider-container relative">
            <Slider {...settings}>
                {product.images.map((item) => (
                    <div key={item.id}>
                        <img src={item.url} alt={`Slide of ${product.title}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default CustomPaging;
