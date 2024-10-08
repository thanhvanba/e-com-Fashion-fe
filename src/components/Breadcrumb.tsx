import React from 'react';
import { Breadcrumb } from 'antd';

const BreadcrumbC: React.FC = () => (
    <Breadcrumb
        items={[
            {
                title: 'Trang chủ',
            },
            {
                title: <a href="">Nam</a>,
            },
            {
                title: <a href="">Áo khoác nam</a>,
            },
            {
                title: <a href="">Áo gió nam</a>,
            },
            {
                title: 'Áo Khoác Gió Nam Thông Minh Trượt Nước',
            },
        ]}
    />
);

export default BreadcrumbC;