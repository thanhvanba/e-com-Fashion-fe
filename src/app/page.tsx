"use client"

import BannerSlider from '@/components/banner-slider';
import ListProduct from '@/components/product/ListProduct';
import ProductCard from '@/components/product/ProductCard';
import { Button, Tabs } from 'antd';
import "../styles/Home.custom.css"
import { useEffect, useState } from 'react';
export default function Home() {
  const jacketProducts = [
    {
      "id": 35461,
      "name": "Áo Khoác Gió Thông Minh Nữ Trượt Nước",
      "status": "active",
      "created_by": "System",
      "created_name": "System",
      "updated_by": "System",
      "updated_name": "System",
      "created_date": "2022-05-03T08:40:20Z",
      "updated_date": "2024-10-04T00:01:32Z",
      "category_id": 144,
      "category": "Áo gió nữ",
      "product_type": "normal",
      "brand_id": null,
      "brand": null,
      "gender": "Nữ",
      "characteristics": null,
      "collections": [
        {
          "collection_id": 2,
          "position": 32
        },
        {
          "collection_id": 335,
          "position": 0
        },
        {
          "collection_id": 414,
          "position": 0
        },
        {
          "collection_id": 415,
          "position": 0
        },
        {
          "collection_id": 420,
          "position": 0
        },
        {
          "collection_id": 421,
          "position": 0
        },
        {
          "collection_id": 423,
          "position": 0
        },
        {
          "collection_id": 425,
          "position": 138
        },
        {
          "collection_id": 441,
          "position": 0
        },
        {
          "collection_id": 446,
          "position": 0
        },
        {
          "collection_id": 462,
          "position": 0
        },
        {
          "collection_id": 514,
          "position": 661
        },
        {
          "collection_id": 530,
          "position": 0
        },
        {
          "collection_id": 555,
          "position": 694
        },
        {
          "collection_id": 562,
          "position": 1396
        },
        {
          "collection_id": 571,
          "position": 477
        },
        {
          "collection_id": 602,
          "position": 1161
        },
        {
          "collection_id": 603,
          "position": 312
        },
        {
          "collection_id": 604,
          "position": 0
        },
        {
          "collection_id": 605,
          "position": 0
        },
        {
          "collection_id": 611,
          "position": 569
        },
        {
          "collection_id": 580,
          "position": 471
        },
        {
          "collection_id": 620,
          "position": 558
        },
        {
          "collection_id": 12,
          "position": 1
        },
        {
          "collection_id": 624,
          "position": 0
        }
      ],
      "material": null,
      "min_variant_price": 599000.0,
      "max_variant_price": 599000.0,
      "tags": ",banchayt5,10t9,thudong24",
      "video": {
        "url": "https://m.yodycdn.com/videos/website/AKN/AKN5042.mp4"
      },
      "variants": [
        {
          "id": 83998,
          "name": "Áo Khoác Gió Thông Minh Nữ Trượt Nước-Cam-S",
          "color_id": 507,
          "color": "Cam",
          "size_id": null,
          "partner_sync": true,
          "inventory_quantity": 6685,
          "prices": [
            {
              "id": 219557,
              "price": 599000.0,
              "currency_code": "VND",
              "currency_symbol": "đ",
              "compare_at_price": 599000.0,
              "price_rule_id": null,
              "entitled_method": "QUANTITY"
            }
          ]
        },
        {
          "id": 83982,
          "name": "Áo Khoác Gió Thông Minh Nữ Trượt Nước-Đen-S",
          "color_id": 532,
          "color": "Đen",
          "size_id": null,
          "partner_sync": true,
          "inventory_quantity": 6340,
          "prices": [
            {
              "id": 219541,
              "price": 599000.0,
              "currency_code": "VND",
              "currency_symbol": "đ",
              "compare_at_price": 599000.0,
              "price_rule_id": null,
              "entitled_method": "QUANTITY"
            }
          ]
        },
        {
          "id": 84002,
          "name": "Áo Khoác Gió Thông Minh Nữ Trượt Nước-Vàng-S",
          "color_id": 526,
          "color": "Vàng",
          "size_id": null,
          "partner_sync": true,
          "inventory_quantity": 5948,
          "prices": [
            {
              "id": 219561,
              "price": 599000.0,
              "currency_code": "VND",
              "currency_symbol": "đ",
              "compare_at_price": 599000.0,
              "price_rule_id": null,
              "entitled_method": "QUANTITY"
            }
          ]
        },
        {
          "id": 83986,
          "name": "Áo Khoác Gió Thông Minh Nữ Trượt Nước-Navy-S",
          "color_id": 520,
          "color": "Navy",
          "size_id": null,
          "partner_sync": true,
          "inventory_quantity": 250,
          "prices": [
            {
              "id": 219545,
              "price": 599000.0,
              "currency_code": "VND",
              "currency_symbol": "đ",
              "compare_at_price": 599000.0,
              "price_rule_id": null,
              "entitled_method": "QUANTITY"
            }
          ]
        },
        {
          "id": 83990,
          "name": "Áo Khoác Gió Thông Minh Nữ Trượt Nước-Xanh than-S",
          "color_id": 199,
          "color": "Xanh than",
          "size_id": null,
          "partner_sync": true,
          "inventory_quantity": 131,
          "prices": [
            {
              "id": 219549,
              "price": 599000.0,
              "currency_code": "VND",
              "currency_symbol": "đ",
              "compare_at_price": 599000.0,
              "price_rule_id": null,
              "entitled_method": "QUANTITY"
            }
          ]
        },
        {
          "id": 83994,
          "name": "Áo Khoác Gió Thông Minh Nữ Trượt Nước-Ghi sáng-S",
          "color_id": 433,
          "color": "Ghi sáng",
          "size_id": null,
          "partner_sync": true,
          "inventory_quantity": 3,
          "prices": [
            {
              "id": 219553,
              "price": 599000.0,
              "currency_code": "VND",
              "currency_symbol": "đ",
              "compare_at_price": 599000.0,
              "price_rule_id": null,
              "entitled_method": "QUANTITY"
            }
          ]
        },
        {
          "id": 84006,
          "name": "Áo Khoác Gió Thông Minh Nữ Trượt Nước-Hồng-S",
          "color_id": 525,
          "color": "Hồng",
          "size_id": null,
          "partner_sync": true,
          "inventory_quantity": 0,
          "prices": [
            {
              "id": 219565,
              "price": 599000.0,
              "currency_code": "VND",
              "currency_symbol": "đ",
              "compare_at_price": 599000.0,
              "price_rule_id": null,
              "entitled_method": "QUANTITY"
            }
          ]
        }
      ],
      "title": "Áo Khoác Gió Thông Minh Nữ Trượt Nước\t\t",
      "meta_desc": "Áo Khoác Gió Nữ Trượt Nước Thông Minh Cản Gió - Cản Bụi - Trượt Nước - Gấp Gọn Dễ dàng gấp gọn chỉ với vài thao tác với thiết kế túi đựng ngay trên áo.",
      "url_handle": "ao-khoac-gio-nu-truot-nuoc-thong-minh",
      "index_status": "index",
      "unit": null,
      "goods": "fashion",
      "quantity_sold": null,
      "star_avg": null,
      "promotion_price": 0.0,
      "display": true,
      "position": 0,
      "inventory_status": "in-stock",
      "available_quantity": 34799,
      "colors": [
        {
          "id": 1164,
          "color_id": 532,
          "color": "Đen",
          "parent_color_id": 1,
          "parent_color": "Nhiều màu",
          "url": "https://m.yodycdn.com/products/akn5042-den-4.jpg",
          "product_id": null,
          "position": 1
        },
        {
          "id": 1165,
          "color_id": 520,
          "color": "Navy",
          "parent_color_id": 1,
          "parent_color": "Nhiều màu",
          "url": "https://m.yodycdn.com/products/akn5042-nav-6.jpg",
          "product_id": null,
          "position": 2
        },
        {
          "id": 1166,
          "color_id": 199,
          "color": "Xanh than",
          "parent_color_id": 1,
          "parent_color": "Nhiều màu",
          "url": "https://m.yodycdn.com/products/akn5042-xth-5.jpg",
          "product_id": null,
          "position": 3
        },
        {
          "id": 1167,
          "color_id": 433,
          "color": "Ghi sáng",
          "parent_color_id": 1,
          "parent_color": "Nhiều màu",
          "url": "https://m.yodycdn.com/products/akn5042-ghs-3.jpg",
          "product_id": null,
          "position": 4
        },
        {
          "id": 1168,
          "color_id": 507,
          "color": "Cam",
          "parent_color_id": 1,
          "parent_color": "Nhiều màu",
          "url": "https://m.yodycdn.com/products/akn5042-cam-8.jpg",
          "product_id": null,
          "position": 5
        },
        {
          "id": 1169,
          "color_id": 526,
          "color": "Vàng",
          "parent_color_id": 1,
          "parent_color": "Nhiều màu",
          "url": "https://m.yodycdn.com/products/akn5042-vag-2.jpg",
          "product_id": null,
          "position": 6
        }
      ],
      "sizes": [
        {
          "size_id": 1,
          "size": "S",
          "position": 1
        },
        {
          "size_id": 4,
          "size": "M",
          "position": 2
        },
        {
          "size_id": 6,
          "size": "L",
          "position": 3
        },
        {
          "size_id": 7,
          "size": "XL",
          "position": 4
        }
      ],
      "images": [
        {
          "id": 112681,
          "product_id": null,
          "color_id": 507,
          "color": "Cam",
          "image_id": 5761,
          "url": "https://m.yodycdn.com/products/akn5042-cam-8.jpg",
          "position": 209
        },
        {
          "id": 112682,
          "product_id": null,
          "color_id": 507,
          "color": "Cam",
          "image_id": 41860,
          "url": "https://m.yodycdn.com/products/akn5042-cam-9.jpg",
          "position": 214
        },
        {
          "id": 112683,
          "product_id": null,
          "color_id": 507,
          "color": "Cam",
          "image_id": 41861,
          "url": "https://m.yodycdn.com/products/akn5042-cam-1.jpg",
          "position": 215
        },
        {
          "id": 112684,
          "product_id": null,
          "color_id": 507,
          "color": "Cam",
          "image_id": 41862,
          "url": "https://m.yodycdn.com/products/akn5042-cam-14.jpg",
          "position": 216
        },
        {
          "id": 112685,
          "product_id": null,
          "color_id": 507,
          "color": "Cam",
          "image_id": 41863,
          "url": "https://m.yodycdn.com/products/akn5042-cam-11.jpg",
          "position": 217
        },
        {
          "id": 112686,
          "product_id": null,
          "color_id": 507,
          "color": "Cam",
          "image_id": 41864,
          "url": "https://m.yodycdn.com/products/akn5042-cam-16.jpg",
          "position": 218
        },
        {
          "id": 112687,
          "product_id": null,
          "color_id": 526,
          "color": "Vàng",
          "image_id": 41886,
          "url": "https://m.yodycdn.com/products/akn5042-vag-1.jpg",
          "position": 240
        },
        {
          "id": 112688,
          "product_id": null,
          "color_id": 526,
          "color": "Vàng",
          "image_id": 41887,
          "url": "https://m.yodycdn.com/products/akn5042-vag-8.jpg",
          "position": 241
        },
        {
          "id": 112689,
          "product_id": null,
          "color_id": 526,
          "color": "Vàng",
          "image_id": 41888,
          "url": "https://m.yodycdn.com/products/akn5042-vag-11.jpg",
          "position": 242
        },
        {
          "id": 112690,
          "product_id": null,
          "color_id": 526,
          "color": "Vàng",
          "image_id": 41889,
          "url": "https://m.yodycdn.com/products/akn5042-vag-10.jpg",
          "position": 243
        },
        {
          "id": 112691,
          "product_id": null,
          "color_id": 526,
          "color": "Vàng",
          "image_id": 5762,
          "url": "https://m.yodycdn.com/products/akn5042-vag-2.jpg",
          "position": 207
        },
        {
          "id": 112692,
          "product_id": null,
          "color_id": 526,
          "color": "Vàng",
          "image_id": 41885,
          "url": "https://m.yodycdn.com/products/akn5042-vag-7.jpg",
          "position": 239
        },
        {
          "id": 112693,
          "product_id": null,
          "color_id": 532,
          "color": "Đen",
          "image_id": 5747,
          "url": "https://m.yodycdn.com/products/akn5042-den-4.jpg",
          "position": 212
        },
        {
          "id": 112694,
          "product_id": null,
          "color_id": 532,
          "color": "Đen",
          "image_id": 41865,
          "url": "https://m.yodycdn.com/products/akn5042-den-8.jpg",
          "position": 219
        },
        {
          "id": 112695,
          "product_id": null,
          "color_id": 532,
          "color": "Đen",
          "image_id": 41866,
          "url": "https://m.yodycdn.com/products/akn5042-den-9.jpg",
          "position": 220
        },
        {
          "id": 112696,
          "product_id": null,
          "color_id": 532,
          "color": "Đen",
          "image_id": 41867,
          "url": "https://m.yodycdn.com/products/akn5042-den-3.jpg",
          "position": 221
        },
        {
          "id": 112697,
          "product_id": null,
          "color_id": 532,
          "color": "Đen",
          "image_id": 41868,
          "url": "https://m.yodycdn.com/products/akn5042-den-14.jpg",
          "position": 222
        },
        {
          "id": 112698,
          "product_id": null,
          "color_id": 532,
          "color": "Đen",
          "image_id": 41869,
          "url": "https://m.yodycdn.com/products/akn5042-den-15.jpg",
          "position": 223
        },
        {
          "id": 112699,
          "product_id": null,
          "color_id": 199,
          "color": "Xanh than",
          "image_id": 5749,
          "url": "https://m.yodycdn.com/products/akn5042-xth-5.jpg",
          "position": 211
        },
        {
          "id": 112700,
          "product_id": null,
          "color_id": 199,
          "color": "Xanh than",
          "image_id": 41890,
          "url": "https://m.yodycdn.com/products/akn5042-xth-9.jpg",
          "position": 244
        },
        {
          "id": 112701,
          "product_id": null,
          "color_id": 199,
          "color": "Xanh than",
          "image_id": 41891,
          "url": "https://m.yodycdn.com/products/akn5042-xth-3.jpg",
          "position": 245
        },
        {
          "id": 112702,
          "product_id": null,
          "color_id": 199,
          "color": "Xanh than",
          "image_id": 41892,
          "url": "https://m.yodycdn.com/products/akn5042-xth-15.jpg",
          "position": 246
        },
        {
          "id": 112703,
          "product_id": null,
          "color_id": 199,
          "color": "Xanh than",
          "image_id": 41893,
          "url": "https://m.yodycdn.com/products/akn5042-xth-14.jpg",
          "position": 247
        },
        {
          "id": 112704,
          "product_id": null,
          "color_id": 199,
          "color": "Xanh than",
          "image_id": 41894,
          "url": "https://m.yodycdn.com/products/akn5042-xth-10.jpg",
          "position": 248
        },
        {
          "id": 112705,
          "product_id": null,
          "color_id": 433,
          "color": "Ghi sáng",
          "image_id": 41870,
          "url": "https://m.yodycdn.com/products/akn5042-ghs-8.jpg",
          "position": 224
        },
        {
          "id": 112706,
          "product_id": null,
          "color_id": 433,
          "color": "Ghi sáng",
          "image_id": 41871,
          "url": "https://m.yodycdn.com/products/akn5042-ghs-2.jpg",
          "position": 225
        },
        {
          "id": 112707,
          "product_id": null,
          "color_id": 433,
          "color": "Ghi sáng",
          "image_id": 5751,
          "url": "https://m.yodycdn.com/products/akn5042-ghs-3.jpg",
          "position": 210
        },
        {
          "id": 112708,
          "product_id": null,
          "color_id": 433,
          "color": "Ghi sáng",
          "image_id": 41872,
          "url": "https://m.yodycdn.com/products/akn5042-ghs-12.jpg",
          "position": 226
        },
        {
          "id": 112709,
          "product_id": null,
          "color_id": 433,
          "color": "Ghi sáng",
          "image_id": 41873,
          "url": "https://m.yodycdn.com/products/akn5042-ghs-10.jpg",
          "position": 227
        },
        {
          "id": 112710,
          "product_id": null,
          "color_id": 433,
          "color": "Ghi sáng",
          "image_id": 41874,
          "url": "https://m.yodycdn.com/products/akn5042-ghs-11.jpg",
          "position": 228
        },
        {
          "id": 112711,
          "product_id": null,
          "color_id": 520,
          "color": "Navy",
          "image_id": 5748,
          "url": "https://m.yodycdn.com/products/akn5042-nav-6.jpg",
          "position": 213
        },
        {
          "id": 112712,
          "product_id": null,
          "color_id": 520,
          "color": "Navy",
          "image_id": 41880,
          "url": "https://m.yodycdn.com/products/akn5042-nav-9.jpg",
          "position": 234
        },
        {
          "id": 112713,
          "product_id": null,
          "color_id": 520,
          "color": "Navy",
          "image_id": 41881,
          "url": "https://m.yodycdn.com/products/akn5042-nav-3.jpg",
          "position": 235
        },
        {
          "id": 112714,
          "product_id": null,
          "color_id": 520,
          "color": "Navy",
          "image_id": 41882,
          "url": "https://m.yodycdn.com/products/akn5042-nav-14.jpg",
          "position": 236
        },
        {
          "id": 112715,
          "product_id": null,
          "color_id": 520,
          "color": "Navy",
          "image_id": 41883,
          "url": "https://m.yodycdn.com/products/akn5042-nav-12.jpg",
          "position": 237
        },
        {
          "id": 112716,
          "product_id": null,
          "color_id": 520,
          "color": "Navy",
          "image_id": 41884,
          "url": "https://m.yodycdn.com/products/akn5042-nav-13.jpg",
          "position": 238
        },
        {
          "id": 112717,
          "product_id": null,
          "color_id": 525,
          "color": "Hồng",
          "image_id": 5764,
          "url": "https://m.yodycdn.com/products/akn5042-hog-2.jpg",
          "position": 208
        },
        {
          "id": 112718,
          "product_id": null,
          "color_id": 525,
          "color": "Hồng",
          "image_id": 41875,
          "url": "https://m.yodycdn.com/products/akn5042-hog-6.jpg",
          "position": 229
        },
        {
          "id": 112719,
          "product_id": null,
          "color_id": 525,
          "color": "Hồng",
          "image_id": 41876,
          "url": "https://m.yodycdn.com/products/akn5042-hog-1.jpg",
          "position": 230
        },
        {
          "id": 112720,
          "product_id": null,
          "color_id": 525,
          "color": "Hồng",
          "image_id": 41877,
          "url": "https://m.yodycdn.com/products/akn5042-hog-7.jpg",
          "position": 231
        },
        {
          "id": 112721,
          "product_id": null,
          "color_id": 525,
          "color": "Hồng",
          "image_id": 41878,
          "url": "https://m.yodycdn.com/products/akn5042-hog-9.jpg",
          "position": 232
        },
        {
          "id": 112722,
          "product_id": null,
          "color_id": 525,
          "color": "Hồng",
          "image_id": 41879,
          "url": "https://m.yodycdn.com/products/akn5042-hog-10.jpg",
          "position": 233
        }
      ]
    },
    {
      "id": 35460,
      "name": "Áo Khoác Gió Nam Thông Minh Trượt Nước",
      "status": "active",
      "created_by": "System",
      "created_name": "System",
      "updated_by": "System",
      "updated_name": "System",
      "created_date": "2022-05-03T08:33:22Z",
      "updated_date": "2024-10-04T00:01:31Z",
      "category_id": 121,
      "category": "Áo gió nam",
      "product_type": "normal",
      "brand_id": null,
      "brand": null,
      "gender": "Nam",
      "characteristics": null,
      "collections": [
        {
          "collection_id": 280,
          "position": 101
        },
        {
          "collection_id": 278,
          "position": 359
        },
        {
          "collection_id": 2,
          "position": 31
        },
        {
          "collection_id": 335,
          "position": 0
        },
        {
          "collection_id": 414,
          "position": 0
        },
        {
          "collection_id": 415,
          "position": 0
        },
        {
          "collection_id": 420,
          "position": 0
        },
        {
          "collection_id": 421,
          "position": 0
        },
        {
          "collection_id": 423,
          "position": 0
        },
        {
          "collection_id": 425,
          "position": 137
        },
        {
          "collection_id": 441,
          "position": 0
        },
        {
          "collection_id": 446,
          "position": 0
        },
        {
          "collection_id": 462,
          "position": 0
        },
        {
          "collection_id": 514,
          "position": 660
        },
        {
          "collection_id": 530,
          "position": 0
        },
        {
          "collection_id": 555,
          "position": 693
        },
        {
          "collection_id": 562,
          "position": 1395
        },
        {
          "collection_id": 602,
          "position": 1160
        },
        {
          "collection_id": 603,
          "position": 311
        },
        {
          "collection_id": 604,
          "position": 0
        },
        {
          "collection_id": 605,
          "position": 0
        },
        {
          "collection_id": 611,
          "position": 568
        },
        {
          "collection_id": 620,
          "position": 559
        },
        {
          "collection_id": 12,
          "position": 2
        },
        {
          "collection_id": 333,
          "position": 2
        },
        {
          "collection_id": 624,
          "position": 0
        }
      ],
      "material": null,
      "min_variant_price": 599000.0,
      "max_variant_price": 599000.0,
      "tags": ",banchayt5,774,10t9,best8,thudong24",
      "video": {
        "url": "https://m.yodycdn.com/videos/website/AKM/AKM5041.mp4"
      },
      "variants": [
        {
          "id": 83972,
          "name": "Áo Khoác Gió Nam Thông Minh Trượt Nước-Cam-M",
          "color_id": 507,
          "color": "Cam",
          "size_id": null,
          "partner_sync": true,
          "inventory_quantity": 6657,
          "prices": [
            {
              "id": 224615,
              "price": 599000.0,
              "currency_code": "VND",
              "currency_symbol": "đ",
              "compare_at_price": 599000.0,
              "price_rule_id": null,
              "entitled_method": "QUANTITY"
            }
          ]
        },
        {
          "id": 83952,
          "name": "Áo Khoác Gió Nam Thông Minh Trượt Nước-Đen-M",
          "color_id": 532,
          "color": "Đen",
          "size_id": null,
          "partner_sync": true,
          "inventory_quantity": 1258,
          "prices": [
            {
              "id": 224595,
              "price": 599000.0,
              "currency_code": "VND",
              "currency_symbol": "đ",
              "compare_at_price": 599000.0,
              "price_rule_id": null,
              "entitled_method": "QUANTITY"
            }
          ]
        },
        {
          "id": 83957,
          "name": "Áo Khoác Gió Nam Thông Minh Trượt Nước-Navy-M",
          "color_id": 520,
          "color": "Navy",
          "size_id": null,
          "partner_sync": true,
          "inventory_quantity": 301,
          "prices": [
            {
              "id": 224600,
              "price": 599000.0,
              "currency_code": "VND",
              "currency_symbol": "đ",
              "compare_at_price": 599000.0,
              "price_rule_id": null,
              "entitled_method": "QUANTITY"
            }
          ]
        },
        {
          "id": 83962,
          "name": "Áo Khoác Gió Nam Thông Minh Trượt Nước-Xanh than-M",
          "color_id": 199,
          "color": "Xanh than",
          "size_id": null,
          "partner_sync": true,
          "inventory_quantity": 81,
          "prices": [
            {
              "id": 224605,
              "price": 599000.0,
              "currency_code": "VND",
              "currency_symbol": "đ",
              "compare_at_price": 599000.0,
              "price_rule_id": null,
              "entitled_method": "QUANTITY"
            }
          ]
        },
        {
          "id": 83967,
          "name": "Áo Khoác Gió Nam Thông Minh Trượt Nước-Ghi sáng-M",
          "color_id": 433,
          "color": "Ghi sáng",
          "size_id": null,
          "partner_sync": true,
          "inventory_quantity": 0,
          "prices": [
            {
              "id": 224610,
              "price": 599000.0,
              "currency_code": "VND",
              "currency_symbol": "đ",
              "compare_at_price": 599000.0,
              "price_rule_id": null,
              "entitled_method": "QUANTITY"
            }
          ]
        },
        {
          "id": 83977,
          "name": "Áo Khoác Gió Nam Thông Minh Trượt Nước-Xanh cổ vịt-M",
          "color_id": 452,
          "color": "Xanh cổ vịt",
          "size_id": null,
          "partner_sync": true,
          "inventory_quantity": 0,
          "prices": [
            {
              "id": 224620,
              "price": 599000.0,
              "currency_code": "VND",
              "currency_symbol": "đ",
              "compare_at_price": 599000.0,
              "price_rule_id": null,
              "entitled_method": "QUANTITY"
            }
          ]
        }
      ],
      "title": "Áo Khoác Gió Thông Minh Nam Trượt Nước\t\t",
      "meta_desc": "Giải pháp mới cho mùa đông tới! Áo khoác gió nam trượt nước thông minh với tính năng nổi bật cùng sự tiện lợi tối đa giúp các anh chẳng ngại đường xa. Mua ngay!",
      "url_handle": "ao-khoac-gio-nam-truot-nuoc-thong-minh",
      "index_status": "index",
      "unit": null,
      "goods": "fashion",
      "quantity_sold": null,
      "star_avg": null,
      "promotion_price": 0.0,
      "display": true,
      "position": 1,
      "inventory_status": "in-stock",
      "available_quantity": 15370,
      "colors": [
        {
          "id": 1130,
          "color_id": 532,
          "color": "Đen",
          "parent_color_id": 1,
          "parent_color": "Nhiều màu",
          "url": "https://m.yodycdn.com/products/AKM5041-DEN (10).JPG",
          "product_id": null,
          "position": 1
        },
        {
          "id": 1131,
          "color_id": 520,
          "color": "Navy",
          "parent_color_id": 1,
          "parent_color": "Nhiều màu",
          "url": "https://m.yodycdn.com/products/AKK5021-NAV AKM5041-NAV AKN5042-NAV.jpg",
          "product_id": null,
          "position": 2
        },
        {
          "id": 1132,
          "color_id": 199,
          "color": "Xanh than",
          "parent_color_id": 1,
          "parent_color": "Nhiều màu",
          "url": "https://m.yodycdn.com/products/AKM5041-XTH (14).jpg",
          "product_id": null,
          "position": 3
        },
        {
          "id": 1134,
          "color_id": 507,
          "color": "Cam",
          "parent_color_id": 1,
          "parent_color": "Nhiều màu",
          "url": "https://m.yodycdn.com/products/AKM5041-CAM (8).JPG",
          "product_id": null,
          "position": 5
        }
      ],
      "sizes": [
        {
          "size_id": 4,
          "size": "M",
          "position": 1
        },
        {
          "size_id": 6,
          "size": "L",
          "position": 2
        },
        {
          "size_id": 7,
          "size": "XL",
          "position": 3
        },
        {
          "size_id": 8,
          "size": "2XL",
          "position": 4
        },
        {
          "size_id": 10,
          "size": "3XL",
          "position": 5
        }
      ],
      "images": [
        {
          "id": 112739,
          "product_id": null,
          "color_id": 452,
          "color": "Xanh cổ vịt",
          "image_id": 42360,
          "url": "https://m.yodycdn.com/products/ao-gio-nam-yody-akm5041-xcv-02.jpg",
          "position": 275
        },
        {
          "id": 112740,
          "product_id": null,
          "color_id": 452,
          "color": "Xanh cổ vịt",
          "image_id": 42395,
          "url": "https://m.yodycdn.com/products/ao-gio-nam-yody-akm5041-xcv-3.jpg",
          "position": 310
        },
        {
          "id": 112741,
          "product_id": null,
          "color_id": 452,
          "color": "Xanh cổ vịt",
          "image_id": 42396,
          "url": "https://m.yodycdn.com/products/ao-gio-nam-yody-akm5041-xcv-4.jpg",
          "position": 311
        },
        {
          "id": 112742,
          "product_id": null,
          "color_id": 452,
          "color": "Xanh cổ vịt",
          "image_id": 42397,
          "url": "https://m.yodycdn.com/products/ao-gio-nam-yody-akm5041-xcv-5.jpg",
          "position": 312
        },
        {
          "id": 112743,
          "product_id": null,
          "color_id": 452,
          "color": "Xanh cổ vịt",
          "image_id": 42398,
          "url": "https://m.yodycdn.com/products/ao-gio-nam-yody-akm5041-xcv-6.jpg",
          "position": 313
        },
        {
          "id": 112744,
          "product_id": null,
          "color_id": 452,
          "color": "Xanh cổ vịt",
          "image_id": 42399,
          "url": "https://m.yodycdn.com/products/ao-gio-nam-yody-akm5041-xcv-8.jpg",
          "position": 314
        },
        {
          "id": 112745,
          "product_id": null,
          "color_id": 452,
          "color": "Xanh cổ vịt",
          "image_id": 42400,
          "url": "https://m.yodycdn.com/products/ao-gio-nam-yody-akm5041-xcv-1.jpg",
          "position": 315
        },
        {
          "id": 112746,
          "product_id": null,
          "color_id": 199,
          "color": "Xanh than",
          "image_id": 42373,
          "url": "https://m.yodycdn.com/products/akm5041-xth-13.jpg",
          "position": 6
        },
        {
          "id": 112747,
          "product_id": null,
          "color_id": 199,
          "color": "Xanh than",
          "image_id": 42374,
          "url": "https://m.yodycdn.com/products/akm5041-xth-17.jpg",
          "position": 5
        },
        {
          "id": 112748,
          "product_id": null,
          "color_id": null,
          "color": "",
          "image_id": 42375,
          "url": "https://m.yodycdn.com/products/akm5041-xth-14.jpg",
          "position": null
        },
        {
          "id": 112749,
          "product_id": null,
          "color_id": 199,
          "color": "Xanh than",
          "image_id": 42376,
          "url": "https://m.yodycdn.com/products/akm5041-xth-15.jpg",
          "position": 7
        },
        {
          "id": 112750,
          "product_id": null,
          "color_id": 199,
          "color": "Xanh than",
          "image_id": 42377,
          "url": "https://m.yodycdn.com/products/akm5041-xth-16.jpg",
          "position": 8
        },
        {
          "id": 112751,
          "product_id": null,
          "color_id": null,
          "color": "",
          "image_id": 42378,
          "url": "https://m.yodycdn.com/products/akm5041-xth-18.jpg",
          "position": null
        },
        {
          "id": 112752,
          "product_id": null,
          "color_id": 199,
          "color": "Xanh than",
          "image_id": 42350,
          "url": "https://m.yodycdn.com/products/akm5041-xth-9-ca20413b-e1a7-4b38-a5a7-e11855c72503.jpg",
          "position": 1
        },
        {
          "id": 112753,
          "product_id": null,
          "color_id": 199,
          "color": "Xanh than",
          "image_id": 42366,
          "url": "https://m.yodycdn.com/products/akm5041-xth-3.jpg",
          "position": 4
        },
        {
          "id": 112754,
          "product_id": null,
          "color_id": null,
          "color": "",
          "image_id": 42367,
          "url": "https://m.yodycdn.com/products/akm5041-xth-6-1c924dbe-9453-4de1-b9cc-f3e1f22cd171.jpg",
          "position": null
        },
        {
          "id": 112755,
          "product_id": null,
          "color_id": 199,
          "color": "Xanh than",
          "image_id": 42368,
          "url": "https://m.yodycdn.com/products/akm5041-xth-7.jpg",
          "position": 2
        },
        {
          "id": 112756,
          "product_id": null,
          "color_id": null,
          "color": "",
          "image_id": 42369,
          "url": "https://m.yodycdn.com/products/akm5041-xth-8-45cf2c97-c27d-48f2-aa22-84d0480f4925.jpg",
          "position": null
        },
        {
          "id": 112757,
          "product_id": null,
          "color_id": null,
          "color": "",
          "image_id": 42370,
          "url": "https://m.yodycdn.com/products/akm5041-xth-10.jpg",
          "position": null
        },
        {
          "id": 112758,
          "product_id": null,
          "color_id": 199,
          "color": "Xanh than",
          "image_id": 42371,
          "url": "https://m.yodycdn.com/products/akm5041-xth-11.jpg",
          "position": 3
        },
        {
          "id": 112759,
          "product_id": null,
          "color_id": 199,
          "color": "Xanh than",
          "image_id": 42372,
          "url": "https://m.yodycdn.com/products/akm5041-xth-12.jpg",
          "position": 9
        },
        {
          "id": 112760,
          "product_id": null,
          "color_id": 532,
          "color": "Đen",
          "image_id": 42357,
          "url": "https://m.yodycdn.com/products/akm5041-den-11.jpg",
          "position": 271
        },
        {
          "id": 112761,
          "product_id": null,
          "color_id": 532,
          "color": "Đen",
          "image_id": 42358,
          "url": "https://m.yodycdn.com/products/akm5041-den-16.jpg",
          "position": 272
        },
        {
          "id": 112762,
          "product_id": null,
          "color_id": 532,
          "color": "Đen",
          "image_id": 42359,
          "url": "https://m.yodycdn.com/products/akm5041-den-13.jpg",
          "position": 273
        },
        {
          "id": 112763,
          "product_id": null,
          "color_id": 532,
          "color": "Đen",
          "image_id": 42362,
          "url": "https://m.yodycdn.com/products/akm5041-den-12.jpg",
          "position": 276
        },
        {
          "id": 112764,
          "product_id": null,
          "color_id": 532,
          "color": "Đen",
          "image_id": 42363,
          "url": "https://m.yodycdn.com/products/akm5041-den-14.jpg",
          "position": 277
        },
        {
          "id": 112765,
          "product_id": null,
          "color_id": 532,
          "color": "Đen",
          "image_id": 42364,
          "url": "https://m.yodycdn.com/products/akm5041-den-15.jpg",
          "position": 278
        },
        {
          "id": 112766,
          "product_id": null,
          "color_id": null,
          "color": "",
          "image_id": 42365,
          "url": "https://m.yodycdn.com/products/akm5041-den-7.jpg",
          "position": null
        },
        {
          "id": 112767,
          "product_id": null,
          "color_id": null,
          "color": "",
          "image_id": 42353,
          "url": "https://m.yodycdn.com/products/akm5041-den-8-305cee62-576b-4574-b1b0-025cac0a8c09.jpg",
          "position": null
        },
        {
          "id": 112768,
          "product_id": null,
          "color_id": 532,
          "color": "Đen",
          "image_id": 42354,
          "url": "https://m.yodycdn.com/products/akm5041-den-9-55b899ab-e3e9-42d1-93c6-360499ae7492.jpg",
          "position": 268
        },
        {
          "id": 112769,
          "product_id": null,
          "color_id": 532,
          "color": "Đen",
          "image_id": 42355,
          "url": "https://m.yodycdn.com/products/akm5041-den-4-ff6bdf4c-caa9-43f3-8593-b9e10f55666e.jpg",
          "position": 269
        },
        {
          "id": 112770,
          "product_id": null,
          "color_id": 532,
          "color": "Đen",
          "image_id": 42356,
          "url": "https://m.yodycdn.com/products/akm5041-den-10.jpg",
          "position": 270
        },
        {
          "id": 112771,
          "product_id": null,
          "color_id": 532,
          "color": "Đen",
          "image_id": 42340,
          "url": "https://m.yodycdn.com/products/akm5041-den-5.jpg",
          "position": 255
        },
        {
          "id": 112772,
          "product_id": null,
          "color_id": 507,
          "color": "Cam",
          "image_id": 42344,
          "url": "https://m.yodycdn.com/products/akm5041-cam-12.jpg",
          "position": 259
        },
        {
          "id": 112773,
          "product_id": null,
          "color_id": 507,
          "color": "Cam",
          "image_id": 42345,
          "url": "https://m.yodycdn.com/products/akm5041-cam-6-2baf101c-eb48-4323-bbf6-fc4b2f6d333e.jpg",
          "position": 260
        },
        {
          "id": 112774,
          "product_id": null,
          "color_id": 507,
          "color": "Cam",
          "image_id": 42346,
          "url": "https://m.yodycdn.com/products/akm5041-cam-7-657ea689-67f7-4a5d-8565-108e21b8b8ee.jpg",
          "position": 261
        },
        {
          "id": 112775,
          "product_id": null,
          "color_id": 507,
          "color": "Cam",
          "image_id": 42347,
          "url": "https://m.yodycdn.com/products/akm5041-cam-2.jpg",
          "position": 262
        },
        {
          "id": 112776,
          "product_id": null,
          "color_id": 507,
          "color": "Cam",
          "image_id": 42348,
          "url": "https://m.yodycdn.com/products/akm5041-cam-8-03591f71-b509-4913-8cd1-3db0a560b528.jpg",
          "position": 263
        },
        {
          "id": 112777,
          "product_id": null,
          "color_id": 507,
          "color": "Cam",
          "image_id": 42349,
          "url": "https://m.yodycdn.com/products/akm5041-cam-9-8740af8d-e629-43f6-8b0f-dac19622c4b7.jpg",
          "position": 264
        },
        {
          "id": 112778,
          "product_id": null,
          "color_id": 507,
          "color": "Cam",
          "image_id": 42351,
          "url": "https://m.yodycdn.com/products/akm5041-cam-10.jpg",
          "position": 266
        },
        {
          "id": 112779,
          "product_id": null,
          "color_id": 507,
          "color": "Cam",
          "image_id": 42352,
          "url": "https://m.yodycdn.com/products/akm5041-cam-11.jpg",
          "position": 267
        },
        {
          "id": 112780,
          "product_id": null,
          "color_id": 433,
          "color": "Ghi sáng",
          "image_id": 42341,
          "url": "https://m.yodycdn.com/products/akm5041-ghs-17.jpg",
          "position": 256
        },
        {
          "id": 112781,
          "product_id": null,
          "color_id": 433,
          "color": "Ghi sáng",
          "image_id": 42342,
          "url": "https://m.yodycdn.com/products/akm5041-ghs-13.jpg",
          "position": 257
        },
        {
          "id": 112782,
          "product_id": null,
          "color_id": 433,
          "color": "Ghi sáng",
          "image_id": 42343,
          "url": "https://m.yodycdn.com/products/akm5041-ghs-14.jpg",
          "position": 258
        },
        {
          "id": 112783,
          "product_id": null,
          "color_id": 433,
          "color": "Ghi sáng",
          "image_id": 42335,
          "url": "https://m.yodycdn.com/products/akm5041-ghs-5.jpg",
          "position": 250
        },
        {
          "id": 112784,
          "product_id": null,
          "color_id": 433,
          "color": "Ghi sáng",
          "image_id": 42336,
          "url": "https://m.yodycdn.com/products/akm5041-ghs-9.jpg",
          "position": 251
        },
        {
          "id": 112785,
          "product_id": null,
          "color_id": 433,
          "color": "Ghi sáng",
          "image_id": 42337,
          "url": "https://m.yodycdn.com/products/akm5041-ghs-12.jpg",
          "position": 252
        },
        {
          "id": 112786,
          "product_id": null,
          "color_id": 433,
          "color": "Ghi sáng",
          "image_id": 42338,
          "url": "https://m.yodycdn.com/products/akm5041-ghs-4.jpg",
          "position": 253
        },
        {
          "id": 112787,
          "product_id": null,
          "color_id": 433,
          "color": "Ghi sáng",
          "image_id": 42339,
          "url": "https://m.yodycdn.com/products/akm5041-ghs-18.jpg",
          "position": 254
        },
        {
          "id": 112788,
          "product_id": null,
          "color_id": null,
          "color": "",
          "image_id": 42379,
          "url": "https://m.yodycdn.com/products/akm5041-nav-5-d15a0b8b-d424-42e2-ae0f-5d9cb9b6648f.jpg",
          "position": null
        },
        {
          "id": 112789,
          "product_id": null,
          "color_id": null,
          "color": "",
          "image_id": 42380,
          "url": "https://m.yodycdn.com/products/akm5041-nav-9-60e32737-a0d6-4797-98ed-dc2c59dead3e.jpg",
          "position": null
        },
        {
          "id": 112790,
          "product_id": null,
          "color_id": 520,
          "color": "Navy",
          "image_id": 42381,
          "url": "https://m.yodycdn.com/products/akm5041-nav-3-5731b360-f8e5-43bf-ad85-98ee9ae44b2a.jpg",
          "position": 4
        },
        {
          "id": 112791,
          "product_id": null,
          "color_id": null,
          "color": "",
          "image_id": 42382,
          "url": "https://m.yodycdn.com/products/akm5041-nav-8-a5f75246-56aa-4132-8f73-3403b7616f7d.jpg",
          "position": null
        },
        {
          "id": 112792,
          "product_id": null,
          "color_id": 520,
          "color": "Navy",
          "image_id": 42383,
          "url": "https://m.yodycdn.com/products/akm5041-nav-12.jpg",
          "position": 9
        },
        {
          "id": 112793,
          "product_id": null,
          "color_id": 520,
          "color": "Navy",
          "image_id": 42384,
          "url": "https://m.yodycdn.com/products/akm5041-nav-14.jpg",
          "position": 5
        },
        {
          "id": 112794,
          "product_id": null,
          "color_id": 520,
          "color": "Navy",
          "image_id": 42385,
          "url": "https://m.yodycdn.com/products/akm5041-nav-15.jpg",
          "position": 8
        },
        {
          "id": 112795,
          "product_id": null,
          "color_id": 520,
          "color": "Navy",
          "image_id": 42386,
          "url": "https://m.yodycdn.com/products/akm5041-nav-16.jpg",
          "position": 7
        },
        {
          "id": 112796,
          "product_id": null,
          "color_id": 520,
          "color": "Navy",
          "image_id": 42387,
          "url": "https://m.yodycdn.com/products/akm5041-nav-10.jpg",
          "position": 6
        },
        {
          "id": 112797,
          "product_id": null,
          "color_id": null,
          "color": "",
          "image_id": 42388,
          "url": "https://m.yodycdn.com/products/akm5041-nav-1-96d63b6b-9a63-4d1f-aac4-aebd79e6cff4.jpg",
          "position": null
        },
        {
          "id": 112798,
          "product_id": null,
          "color_id": 520,
          "color": "Navy",
          "image_id": 42389,
          "url": "https://m.yodycdn.com/products/akm5041-nav-7-c6016aa6-4577-496d-b1a6-93a1bdc5b959.jpg",
          "position": 2
        },
        {
          "id": 112799,
          "product_id": null,
          "color_id": 520,
          "color": "Navy",
          "image_id": 42390,
          "url": "https://m.yodycdn.com/products/akm5041-nav-9.jpg",
          "position": 3
        },
        {
          "id": 112800,
          "product_id": null,
          "color_id": null,
          "color": "",
          "image_id": 42391,
          "url": "https://m.yodycdn.com/products/akm5041-nav-10-e9e9e7f8-ee7a-452a-a4d1-4074835066dd.jpg",
          "position": null
        },
        {
          "id": 112801,
          "product_id": null,
          "color_id": null,
          "color": "",
          "image_id": 42392,
          "url": "https://m.yodycdn.com/products/akm5041-nav-2.jpg",
          "position": null
        },
        {
          "id": 112802,
          "product_id": null,
          "color_id": 520,
          "color": "Navy",
          "image_id": 42361,
          "url": "https://m.yodycdn.com/products/akm5041-nav-5.jpg",
          "position": 1
        },
        {
          "id": 112803,
          "product_id": null,
          "color_id": null,
          "color": "",
          "image_id": 42393,
          "url": "https://m.yodycdn.com/products/akm5041-nav-3.jpg",
          "position": null
        },
        {
          "id": 112804,
          "product_id": null,
          "color_id": null,
          "color": "",
          "image_id": 42394,
          "url": "https://m.yodycdn.com/products/akm5041-nav-4.jpg",
          "position": null
        },
        {
          "id": 112805,
          "product_id": null,
          "color_id": null,
          "color": "",
          "image_id": 42334,
          "url": "https://m.yodycdn.com/products/akm5041-nav-7.jpg",
          "position": null
        }
      ]
    },
    {
      "id": 35640,
      "name": "Áo Khoác Gió Thông Minh Trẻ Em Trượt Nước Cản Gió Cản Bụi",
      "status": "active",
      "created_by": "System",
      "created_name": "System",
      "updated_by": "System",
      "updated_name": "System",
      "created_date": "2022-05-16T07:10:53Z",
      "updated_date": "2024-10-04T00:01:32Z",
      "category_id": 180,
      "category": "Áo gió trẻ em",
      "product_type": "normal",
      "brand_id": null,
      "brand": null,
      "gender": "Bé trai,Bé gái",
      "characteristics": null,
      "collections": [
        {
          "collection_id": 280,
          "position": 90
        },
        {
          "collection_id": 278,
          "position": 375
        },
        {
          "collection_id": 2,
          "position": 33
        },
        {
          "collection_id": 335,
          "position": 0
        },
        {
          "collection_id": 415,
          "position": 0
        },
        {
          "collection_id": 420,
          "position": 0
        },
        {
          "collection_id": 421,
          "position": 0
        },
        {
          "collection_id": 423,
          "position": 0
        },
        {
          "collection_id": 425,
          "position": 141
        },
        {
          "collection_id": 441,
          "position": 0
        },
        {
          "collection_id": 446,
          "position": 0
        },
        {
          "collection_id": 462,
          "position": 0
        },
        {
          "collection_id": 514,
          "position": 680
        },
        {
          "collection_id": 530,
          "position": 0
        },
        {
          "collection_id": 555,
          "position": 722
        },
        {
          "collection_id": 562,
          "position": 1401
        },
        {
          "collection_id": 602,
          "position": 1184
        },
        {
          "collection_id": 603,
          "position": 330
        },
        {
          "collection_id": 604,
          "position": 0
        },
        {
          "collection_id": 605,
          "position": 0
        },
        {
          "collection_id": 611,
          "position": 589
        },
        {
          "collection_id": 620,
          "position": 556
        },
        {
          "collection_id": 12,
          "position": 3
        }
      ],
      "material": null,
      "min_variant_price": 499000.0,
      "max_variant_price": 499000.0,
      "tags": ",10t9",
      "video": {
        "url": "https://m.yodycdn.com/products/videos/website/AKK/AKK5021-DEN (6) (1) (1).mp4"
      },
      "variants": [
        {
          "id": 85284,
          "name": "Áo Khoác Gió Thông Minh Trẻ Em Trượt Nước Cản Gió Cản Bụi-Đen-2-3",
          "color_id": 532,
          "color": "Đen",
          "size_id": null,
          "partner_sync": true,
          "inventory_quantity": 7215,
          "prices": [
            {
              "id": 219183,
              "price": 499000.0,
              "currency_code": "VND",
              "currency_symbol": "đ",
              "compare_at_price": 499000.0,
              "price_rule_id": null,
              "entitled_method": "QUANTITY"
            }
          ]
        },
        {
          "id": 85290,
          "name": "Áo Khoác Gió Thông Minh Trẻ Em Trượt Nước Cản Gió Cản Bụi-Navy-2-3",
          "color_id": 520,
          "color": "Navy",
          "size_id": null,
          "partner_sync": true,
          "inventory_quantity": 3384,
          "prices": [
            {
              "id": 219189,
              "price": 499000.0,
              "currency_code": "VND",
              "currency_symbol": "đ",
              "compare_at_price": 499000.0,
              "price_rule_id": null,
              "entitled_method": "QUANTITY"
            }
          ]
        },
        {
          "id": 85302,
          "name": "Áo Khoác Gió Thông Minh Trẻ Em Trượt Nước Cản Gió Cản Bụi-Ghi sáng-2-3",
          "color_id": 433,
          "color": "Ghi sáng",
          "size_id": null,
          "partner_sync": true,
          "inventory_quantity": 654,
          "prices": [
            {
              "id": 219201,
              "price": 499000.0,
              "currency_code": "VND",
              "currency_symbol": "đ",
              "compare_at_price": 499000.0,
              "price_rule_id": null,
              "entitled_method": "QUANTITY"
            }
          ]
        },
        {
          "id": 85296,
          "name": "Áo Khoác Gió Thông Minh Trẻ Em Trượt Nước Cản Gió Cản Bụi-Xanh than-2-3",
          "color_id": 199,
          "color": "Xanh than",
          "size_id": null,
          "partner_sync": true,
          "inventory_quantity": 112,
          "prices": [
            {
              "id": 219195,
              "price": 499000.0,
              "currency_code": "VND",
              "currency_symbol": "đ",
              "compare_at_price": 499000.0,
              "price_rule_id": null,
              "entitled_method": "QUANTITY"
            }
          ]
        },
        {
          "id": 85308,
          "name": "Áo Khoác Gió Thông Minh Trẻ Em Trượt Nước Cản Gió Cản Bụi-Cam-2-3",
          "color_id": 507,
          "color": "Cam",
          "size_id": null,
          "partner_sync": true,
          "inventory_quantity": 0,
          "prices": [
            {
              "id": 219207,
              "price": 499000.0,
              "currency_code": "VND",
              "currency_symbol": "đ",
              "compare_at_price": 499000.0,
              "price_rule_id": null,
              "entitled_method": "QUANTITY"
            }
          ]
        }
      ],
      "title": "Áo Khoác Gió Thông Minh Trẻ Em Trượt Nước Cản Gió Cản Bụi\t\t",
      "meta_desc": "Áo khoác trẻ em trượt nước thông minh - Mẫu áo khoác gió cho bé thiết kế kiểu dáng năng động, thời trang, giúp giữ ấm cơ thể trẻ hiệu quả, an toàn cho da.",
      "url_handle": "ao-khoac-gio-tre-em-truot-nuoc-thong-minh",
      "index_status": "index",
      "unit": null,
      "goods": "fashion",
      "quantity_sold": null,
      "star_avg": null,
      "promotion_price": 0.0,
      "display": true,
      "position": 2,
      "inventory_status": "in-stock",
      "available_quantity": 22030,
      "colors": [
        {
          "id": 1084,
          "color_id": 532,
          "color": "Đen",
          "parent_color_id": 1,
          "parent_color": "Nhiều màu",
          "url": "https://m.yodycdn.com/products/AKK5021-DEN (13).JPG",
          "product_id": null,
          "position": 1
        },
        {
          "id": 1085,
          "color_id": 520,
          "color": "Navy",
          "parent_color_id": 1,
          "parent_color": "Nhiều màu",
          "url": "https://m.yodycdn.com/products/AKK5021-NAV (9).jpg",
          "product_id": null,
          "position": 2
        },
        {
          "id": 1086,
          "color_id": 199,
          "color": "Xanh than",
          "parent_color_id": 1,
          "parent_color": "Nhiều màu",
          "url": "https://m.yodycdn.com/products/AKK5021-XTH (12).jpg",
          "product_id": null,
          "position": 3
        },
        {
          "id": 1087,
          "color_id": 433,
          "color": "Ghi sáng",
          "parent_color_id": 1,
          "parent_color": "Nhiều màu",
          "url": "https://m.yodycdn.com/products/AKK5021-GHS (11).JPG",
          "product_id": null,
          "position": 4
        }
      ],
      "sizes": [
        {
          "size_id": 59,
          "size": "2-3",
          "position": 2
        },
        {
          "size_id": 63,
          "size": "4-5",
          "position": 6
        },
        {
          "size_id": 62,
          "size": "6-7",
          "position": 5
        },
        {
          "size_id": 61,
          "size": "8-9",
          "position": 4
        },
        {
          "size_id": 60,
          "size": "10-11",
          "position": 3
        },
        {
          "size_id": 45,
          "size": "12-13",
          "position": 1
        }
      ],
      "images": [
        {
          "id": 112875,
          "product_id": null,
          "color_id": 520,
          "color": "Navy",
          "image_id": 43033,
          "url": "https://m.yodycdn.com/products/akk5021-nav-5.jpg",
          "position": 101
        },
        {
          "id": 112876,
          "product_id": null,
          "color_id": 520,
          "color": "Navy",
          "image_id": 43066,
          "url": "https://m.yodycdn.com/products/akk5021-nav-1.jpg",
          "position": 134
        },
        {
          "id": 112877,
          "product_id": null,
          "color_id": 520,
          "color": "Navy",
          "image_id": 43067,
          "url": "https://m.yodycdn.com/products/akk5021-nav-2.jpg",
          "position": 135
        },
        {
          "id": 112878,
          "product_id": null,
          "color_id": 520,
          "color": "Navy",
          "image_id": 43068,
          "url": "https://m.yodycdn.com/products/akk5021-nav-3.jpg",
          "position": 136
        },
        {
          "id": 112879,
          "product_id": null,
          "color_id": 520,
          "color": "Navy",
          "image_id": 43069,
          "url": "https://m.yodycdn.com/products/akk5021-nav-8.jpg",
          "position": 137
        },
        {
          "id": 112880,
          "product_id": null,
          "color_id": 520,
          "color": "Navy",
          "image_id": 43070,
          "url": "https://m.yodycdn.com/products/akk5021-nav-9.jpg",
          "position": 138
        },
        {
          "id": 112881,
          "product_id": null,
          "color_id": 520,
          "color": "Navy",
          "image_id": 43071,
          "url": "https://m.yodycdn.com/products/akk5021-nav-10.jpg",
          "position": 139
        },
        {
          "id": 112882,
          "product_id": null,
          "color_id": 520,
          "color": "Navy",
          "image_id": 43072,
          "url": "https://m.yodycdn.com/products/akk5021-nav-11.jpg",
          "position": 140
        },
        {
          "id": 112883,
          "product_id": null,
          "color_id": 520,
          "color": "Navy",
          "image_id": 43073,
          "url": "https://m.yodycdn.com/products/akk5021-nav-12.jpg",
          "position": 141
        },
        {
          "id": 112884,
          "product_id": null,
          "color_id": 520,
          "color": "Navy",
          "image_id": 43074,
          "url": "https://m.yodycdn.com/products/akk5021-nav-akm5041-nav-akn5042-nav.jpg",
          "position": 142
        },
        {
          "id": 112885,
          "product_id": null,
          "color_id": 433,
          "color": "Ghi sáng",
          "image_id": 43060,
          "url": "https://m.yodycdn.com/products/akk5021-ghs-11.jpg",
          "position": 128
        },
        {
          "id": 112886,
          "product_id": null,
          "color_id": 433,
          "color": "Ghi sáng",
          "image_id": 43061,
          "url": "https://m.yodycdn.com/products/akk5021-ghs-12.jpg",
          "position": 129
        },
        {
          "id": 112887,
          "product_id": null,
          "color_id": 433,
          "color": "Ghi sáng",
          "image_id": 43062,
          "url": "https://m.yodycdn.com/products/akk5021-ghs-13.jpg",
          "position": 130
        },
        {
          "id": 112888,
          "product_id": null,
          "color_id": 433,
          "color": "Ghi sáng",
          "image_id": 43063,
          "url": "https://m.yodycdn.com/products/akk5021-ghs-14.jpg",
          "position": 131
        },
        {
          "id": 112889,
          "product_id": null,
          "color_id": 433,
          "color": "Ghi sáng",
          "image_id": 43064,
          "url": "https://m.yodycdn.com/products/akk5021-ghs-15.jpg",
          "position": 132
        },
        {
          "id": 112890,
          "product_id": null,
          "color_id": 433,
          "color": "Ghi sáng",
          "image_id": 43032,
          "url": "https://m.yodycdn.com/products/akk5021-ghs-5.jpg",
          "position": 100
        },
        {
          "id": 112891,
          "product_id": null,
          "color_id": 433,
          "color": "Ghi sáng",
          "image_id": 43065,
          "url": "https://m.yodycdn.com/products/akk5021-ghs-16.jpg",
          "position": 133
        },
        {
          "id": 112892,
          "product_id": null,
          "color_id": 433,
          "color": "Ghi sáng",
          "image_id": 43056,
          "url": "https://m.yodycdn.com/products/akk5021-ghs-1.jpg",
          "position": 124
        },
        {
          "id": 112893,
          "product_id": null,
          "color_id": 433,
          "color": "Ghi sáng",
          "image_id": 43057,
          "url": "https://m.yodycdn.com/products/akk5021-ghs-6.jpg",
          "position": 125
        },
        {
          "id": 112894,
          "product_id": null,
          "color_id": 433,
          "color": "Ghi sáng",
          "image_id": 43058,
          "url": "https://m.yodycdn.com/products/akk5021-ghs-7.jpg",
          "position": 126
        },
        {
          "id": 112895,
          "product_id": null,
          "color_id": 433,
          "color": "Ghi sáng",
          "image_id": 43059,
          "url": "https://m.yodycdn.com/products/akk5021-ghs-10.jpg",
          "position": 127
        },
        {
          "id": 112896,
          "product_id": null,
          "color_id": 507,
          "color": "Cam",
          "image_id": 43044,
          "url": "https://m.yodycdn.com/products/akk5021-cam-18.jpg",
          "position": 112
        },
        {
          "id": 112897,
          "product_id": null,
          "color_id": 507,
          "color": "Cam",
          "image_id": 43030,
          "url": "https://m.yodycdn.com/products/akk5021-cam-11.jpg",
          "position": 98
        },
        {
          "id": 112898,
          "product_id": null,
          "color_id": 507,
          "color": "Cam",
          "image_id": 43035,
          "url": "https://m.yodycdn.com/products/akk5021-cam-2.jpg",
          "position": 103
        },
        {
          "id": 112899,
          "product_id": null,
          "color_id": 507,
          "color": "Cam",
          "image_id": 43036,
          "url": "https://m.yodycdn.com/products/akk5021-cam-3.jpg",
          "position": 104
        },
        {
          "id": 112900,
          "product_id": null,
          "color_id": 507,
          "color": "Cam",
          "image_id": 43037,
          "url": "https://m.yodycdn.com/products/akk5021-cam-4.jpg",
          "position": 105
        },
        {
          "id": 112901,
          "product_id": null,
          "color_id": 507,
          "color": "Cam",
          "image_id": 43038,
          "url": "https://m.yodycdn.com/products/akk5021-cam-12.jpg",
          "position": 106
        },
        {
          "id": 112902,
          "product_id": null,
          "color_id": 507,
          "color": "Cam",
          "image_id": 43039,
          "url": "https://m.yodycdn.com/products/akk5021-cam-13.jpg",
          "position": 107
        },
        {
          "id": 112903,
          "product_id": null,
          "color_id": 507,
          "color": "Cam",
          "image_id": 43040,
          "url": "https://m.yodycdn.com/products/akk5021-cam-14.jpg",
          "position": 108
        },
        {
          "id": 112904,
          "product_id": null,
          "color_id": 507,
          "color": "Cam",
          "image_id": 43041,
          "url": "https://m.yodycdn.com/products/akk5021-cam-15.jpg",
          "position": 109
        },
        {
          "id": 112905,
          "product_id": null,
          "color_id": 507,
          "color": "Cam",
          "image_id": 43042,
          "url": "https://m.yodycdn.com/products/akk5021-cam-16.jpg",
          "position": 110
        },
        {
          "id": 112906,
          "product_id": null,
          "color_id": 507,
          "color": "Cam",
          "image_id": 43043,
          "url": "https://m.yodycdn.com/products/akk5021-cam-17.jpg",
          "position": 111
        },
        {
          "id": 112907,
          "product_id": null,
          "color_id": 199,
          "color": "Xanh than",
          "image_id": 43076,
          "url": "https://m.yodycdn.com/products/akk5021-xth-5.jpg",
          "position": 144
        },
        {
          "id": 112908,
          "product_id": null,
          "color_id": 199,
          "color": "Xanh than",
          "image_id": 43077,
          "url": "https://m.yodycdn.com/products/akk5021-xth-6.jpg",
          "position": 145
        },
        {
          "id": 112909,
          "product_id": null,
          "color_id": 199,
          "color": "Xanh than",
          "image_id": 43078,
          "url": "https://m.yodycdn.com/products/akk5021-xth-12.jpg",
          "position": 146
        },
        {
          "id": 112910,
          "product_id": null,
          "color_id": 199,
          "color": "Xanh than",
          "image_id": 43079,
          "url": "https://m.yodycdn.com/products/akk5021-xth-13.jpg",
          "position": 147
        },
        {
          "id": 112911,
          "product_id": null,
          "color_id": 199,
          "color": "Xanh than",
          "image_id": 43080,
          "url": "https://m.yodycdn.com/products/akk5021-xth-15.jpg",
          "position": 148
        },
        {
          "id": 112912,
          "product_id": null,
          "color_id": 199,
          "color": "Xanh than",
          "image_id": 43081,
          "url": "https://m.yodycdn.com/products/akk5021-xth-16.jpg",
          "position": 149
        },
        {
          "id": 112913,
          "product_id": null,
          "color_id": 199,
          "color": "Xanh than",
          "image_id": 43082,
          "url": "https://m.yodycdn.com/products/akk5021-xth-17.jpg",
          "position": 150
        },
        {
          "id": 112914,
          "product_id": null,
          "color_id": 199,
          "color": "Xanh than",
          "image_id": 43034,
          "url": "https://m.yodycdn.com/products/akk5021-xth-2.jpg",
          "position": 102
        },
        {
          "id": 112915,
          "product_id": null,
          "color_id": 199,
          "color": "Xanh than",
          "image_id": 43083,
          "url": "https://m.yodycdn.com/products/akk5021-xth-19.jpg",
          "position": 151
        },
        {
          "id": 112916,
          "product_id": null,
          "color_id": 199,
          "color": "Xanh than",
          "image_id": 43075,
          "url": "https://m.yodycdn.com/products/akk5021-xth-1.jpg",
          "position": 143
        },
        {
          "id": 112917,
          "product_id": null,
          "color_id": 532,
          "color": "Đen",
          "image_id": 43045,
          "url": "https://m.yodycdn.com/products/akk5021-den-1.jpg",
          "position": 113
        },
        {
          "id": 112918,
          "product_id": null,
          "color_id": 532,
          "color": "Đen",
          "image_id": 43046,
          "url": "https://m.yodycdn.com/products/akk5021-den-3.jpg",
          "position": 114
        },
        {
          "id": 112919,
          "product_id": null,
          "color_id": 532,
          "color": "Đen",
          "image_id": 43031,
          "url": "https://m.yodycdn.com/products/akk5021-den-4.jpg",
          "position": 99
        },
        {
          "id": 112920,
          "product_id": null,
          "color_id": 532,
          "color": "Đen",
          "image_id": 43047,
          "url": "https://m.yodycdn.com/products/akk5021-den-6.jpg",
          "position": 115
        },
        {
          "id": 112921,
          "product_id": null,
          "color_id": 532,
          "color": "Đen",
          "image_id": 43048,
          "url": "https://m.yodycdn.com/products/akk5021-den-7.jpg",
          "position": 116
        },
        {
          "id": 112922,
          "product_id": null,
          "color_id": 532,
          "color": "Đen",
          "image_id": 43049,
          "url": "https://m.yodycdn.com/products/akk5021-den-8.jpg",
          "position": 117
        },
        {
          "id": 112923,
          "product_id": null,
          "color_id": 532,
          "color": "Đen",
          "image_id": 43050,
          "url": "https://m.yodycdn.com/products/akk5021-den-9.jpg",
          "position": 118
        },
        {
          "id": 112924,
          "product_id": null,
          "color_id": 532,
          "color": "Đen",
          "image_id": 43051,
          "url": "https://m.yodycdn.com/products/akk5021-den-10.jpg",
          "position": 119
        },
        {
          "id": 112925,
          "product_id": null,
          "color_id": 532,
          "color": "Đen",
          "image_id": 43052,
          "url": "https://m.yodycdn.com/products/akk5021-den-11.jpg",
          "position": 120
        },
        {
          "id": 112926,
          "product_id": null,
          "color_id": 532,
          "color": "Đen",
          "image_id": 43053,
          "url": "https://m.yodycdn.com/products/akk5021-den-12.jpg",
          "position": 121
        },
        {
          "id": 112927,
          "product_id": null,
          "color_id": 532,
          "color": "Đen",
          "image_id": 43054,
          "url": "https://m.yodycdn.com/products/akk5021-den-13.jpg",
          "position": 122
        },
        {
          "id": 112928,
          "product_id": null,
          "color_id": 532,
          "color": "Đen",
          "image_id": 43055,
          "url": "https://m.yodycdn.com/products/akk5021-den-14.jpg",
          "position": 123
        }
      ]
    },
    {
      "id": 37731,
      "name": "Áo Khoác Gió Thể Thao Nam Một Lớp Phối Khóa",
      "status": "active",
      "created_by": "yd21596",
      "created_name": "Ngọc Hải Vũ",
      "updated_by": "System",
      "updated_name": "System",
      "created_date": "2024-04-24T08:45:47Z",
      "updated_date": "2024-10-04T00:02:37Z",
      "category_id": 121,
      "category": "Áo gió nam",
      "product_type": "normal",
      "brand_id": 34,
      "brand": "YODY",
      "gender": "Nam",
      "characteristics": null,
      "collections": [
        {
          "collection_id": 414,
          "position": 0
        },
        {
          "collection_id": 415,
          "position": 0
        },
        {
          "collection_id": 420,
          "position": 0
        },
        {
          "collection_id": 421,
          "position": 0
        },
        {
          "collection_id": 423,
          "position": 0
        },
        {
          "collection_id": 425,
          "position": 332
        },
        {
          "collection_id": 441,
          "position": 0
        },
        {
          "collection_id": 446,
          "position": 0
        },
        {
          "collection_id": 462,
          "position": 0
        },
        {
          "collection_id": 514,
          "position": 1195
        },
        {
          "collection_id": 530,
          "position": 0
        },
        {
          "collection_id": 555,
          "position": 1531
        },
        {
          "collection_id": 12,
          "position": 4
        },
        {
          "collection_id": 476,
          "position": 0
        },
        {
          "collection_id": 562,
          "position": 1622
        },
        {
          "collection_id": 602,
          "position": 1884
        },
        {
          "collection_id": 603,
          "position": 712
        },
        {
          "collection_id": 604,
          "position": 0
        },
        {
          "collection_id": 605,
          "position": 0
        },
        {
          "collection_id": 611,
          "position": 1145
        },
        {
          "collection_id": 620,
          "position": 291
        },
        {
          "collection_id": 333,
          "position": 33
        },
        {
          "collection_id": 5,
          "position": 203
        }
      ],
      "material": null,
      "min_variant_price": 599000.0,
      "max_variant_price": 599000.0,
      "tags": ",10t9,best8",
      "video": null,
      "variants": [
        {
          "id": 117664,
          "name": "Áo Khoác Gió Thể Thao Nam Một Lớp Phối Khóa-Đen-M",
          "color_id": 532,
          "color": "Đen",
          "size_id": null,
          "partner_sync": true,
          "inventory_quantity": 422,
          "prices": [
            {
              "id": 220112,
              "price": 599000.0,
              "currency_code": "VND",
              "currency_symbol": "đ",
              "compare_at_price": 599000.0,
              "price_rule_id": null,
              "entitled_method": "QUANTITY"
            }
          ]
        },
        {
          "id": 117654,
          "name": "Áo Khoác Gió Thể Thao Nam Một Lớp Phối Khóa-Xám-M",
          "color_id": 496,
          "color": "Xám",
          "size_id": null,
          "partner_sync": true,
          "inventory_quantity": 366,
          "prices": [
            {
              "id": 220102,
              "price": 599000.0,
              "currency_code": "VND",
              "currency_symbol": "đ",
              "compare_at_price": 599000.0,
              "price_rule_id": null,
              "entitled_method": "QUANTITY"
            }
          ]
        },
        {
          "id": 122281,
          "name": "Áo Khoác Gió Thể Thao Nam Một Lớp Phối Khóa-XÁM 1-M",
          "color_id": 765,
          "color": "XÁM 1",
          "size_id": null,
          "partner_sync": true,
          "inventory_quantity": 345,
          "prices": [
            {
              "id": 220122,
              "price": 599000.0,
              "currency_code": "VND",
              "currency_symbol": "đ",
              "compare_at_price": 599000.0,
              "price_rule_id": null,
              "entitled_method": "QUANTITY"
            }
          ]
        }
      ],
      "title": "Áo Khoác Gió Thể Thao Nam Một Lớp Phối Khóa",
      "meta_desc": "Mẫu áo khoác chất liệu nhẹ, mỏng, tạo cảm giác thoải mái khi mặc. Chống thấm nước tốt, giúp bạn luôn khô ráo trong những cơn mưa bất chợt. Chống tia UV UPF50+, bảo vệ da khỏi tác hại của ánh nắng mặt trời. Khô nhanh, hạn chế vi khuẩn phát triển.",
      "url_handle": "ao-khoac-gio-the-thao-nam-mot-lop-phoi-khoa",
      "index_status": "index",
      "unit": null,
      "goods": "fashion",
      "quantity_sold": null,
      "star_avg": null,
      "promotion_price": 0.0,
      "display": true,
      "position": 3,
      "inventory_status": "in-stock",
      "available_quantity": 2266,
      "colors": [
        {
          "id": 11340,
          "color_id": 521,
          "color": "Xanh đậm",
          "parent_color_id": 1,
          "parent_color": "Nhiều màu",
          "url": "https://m.yodycdn.com/products/ao-khoac-gio-nam-the-thao-yody-SKM7005-XDM-7.JPG",
          "product_id": null,
          "position": 4
        },
        {
          "id": 11342,
          "color_id": 532,
          "color": "Đen",
          "parent_color_id": 1,
          "parent_color": "Nhiều màu",
          "url": "https://m.yodycdn.com/products/ao-khoac-gio-nam-the-thao-yody-SKM7005-DEN-7.JPG",
          "product_id": null,
          "position": 3
        },
        {
          "id": 11343,
          "color_id": 496,
          "color": "Xám",
          "parent_color_id": 1,
          "parent_color": "Nhiều màu",
          "url": "https://m.yodycdn.com/products/ao-khoac-gio-nam-the-thao-yody-SKM7005-XAM-6.JPG",
          "product_id": null,
          "position": 1
        },
        {
          "id": 12423,
          "color_id": 765,
          "color": "XÁM 1",
          "parent_color_id": 1,
          "parent_color": "Nhiều màu",
          "url": "https://m.yodycdn.com/products/ao-khoac-gio-nam-the-thao-yody-SKM7005-XAM-6.JPG",
          "product_id": null,
          "position": 5
        },
        {
          "id": 12424,
          "color_id": 1178,
          "color": "đen 2",
          "parent_color_id": null,
          "parent_color": null,
          "url": "https://m.yodycdn.com/products/ao-khoac-gio-nam-the-thao-yody-SKM7005-DEN-7.JPG",
          "product_id": null,
          "position": 6
        }
      ],
      "sizes": [
        {
          "size_id": 7,
          "size": "XL",
          "position": 3
        },
        {
          "size_id": 8,
          "size": "2XL",
          "position": 4
        },
        {
          "size_id": 10,
          "size": "3XL",
          "position": 5
        },
        {
          "size_id": 6,
          "size": "L",
          "position": 2
        },
        {
          "size_id": 4,
          "size": "M",
          "position": 1
        }
      ],
      "images": [
        {
          "id": 147418,
          "product_id": null,
          "color_id": 532,
          "color": "Đen",
          "image_id": 83219,
          "url": "https://m.yodycdn.com/products/ao-khoac-gio-nam-the-thao-yody-SKM7005-DEN-1.JPG",
          "position": 10
        },
        {
          "id": 147419,
          "product_id": null,
          "color_id": 532,
          "color": "Đen",
          "image_id": 83218,
          "url": "https://m.yodycdn.com/products/ao-khoac-gio-nam-the-thao-yody-SKM7005-DEN-2.JPG",
          "position": 9
        },
        {
          "id": 147420,
          "product_id": null,
          "color_id": 532,
          "color": "Đen",
          "image_id": 83221,
          "url": "https://m.yodycdn.com/products/ao-khoac-gio-nam-the-thao-yody-SKM7005-DEN-3.JPG",
          "position": 1
        },
        {
          "id": 147421,
          "product_id": null,
          "color_id": 532,
          "color": "Đen",
          "image_id": 83220,
          "url": "https://m.yodycdn.com/products/ao-khoac-gio-nam-the-thao-yody-SKM7005-DEN-4.JPG",
          "position": 2
        },
        {
          "id": 147422,
          "product_id": null,
          "color_id": 532,
          "color": "Đen",
          "image_id": 83223,
          "url": "https://m.yodycdn.com/products/ao-khoac-gio-nam-the-thao-yody-SKM7005-DEN-5.JPG",
          "position": 3
        },
        {
          "id": 147423,
          "product_id": null,
          "color_id": 532,
          "color": "Đen",
          "image_id": 83228,
          "url": "https://m.yodycdn.com/products/ao-khoac-gio-nam-the-thao-yody-SKM7005-DEN-6.JPG",
          "position": 5
        },
        {
          "id": 147424,
          "product_id": null,
          "color_id": 532,
          "color": "Đen",
          "image_id": 83226,
          "url": "https://m.yodycdn.com/products/ao-khoac-gio-nam-the-thao-yody-SKM7005-DEN-8.JPG",
          "position": 6
        },
        {
          "id": 147425,
          "product_id": null,
          "color_id": 532,
          "color": "Đen",
          "image_id": 83238,
          "url": "https://m.yodycdn.com/products/ao-khoac-gio-nam-the-thao-yody-SKM7005-DEN-9.JPG",
          "position": 7
        },
        {
          "id": 147426,
          "product_id": null,
          "color_id": 532,
          "color": "Đen",
          "image_id": 83242,
          "url": "https://m.yodycdn.com/products/ao-khoac-gio-nam-the-thao-yody-SKM7005-DEN-10.JPG",
          "position": 8
        },
        {
          "id": 147427,
          "product_id": null,
          "color_id": 532,
          "color": "Đen",
          "image_id": 83222,
          "url": "https://m.yodycdn.com/products/ao-khoac-gio-nam-the-thao-yody-SKM7005-DEN-11.JPG",
          "position": 4
        },
        {
          "id": 147428,
          "product_id": null,
          "color_id": null,
          "color": "",
          "image_id": 83227,
          "url": "https://m.yodycdn.com/products/ao-khoac-gio-nam-the-thao-yody-SKM7005-XAM-1.JPG",
          "position": null
        },
        {
          "id": 147429,
          "product_id": null,
          "color_id": null,
          "color": "",
          "image_id": 83246,
          "url": "https://m.yodycdn.com/products/ao-khoac-gio-nam-the-thao-yody-SKM7005-XAM-2.JPG",
          "position": null
        },
        {
          "id": 147430,
          "product_id": null,
          "color_id": null,
          "color": "",
          "image_id": 83232,
          "url": "https://m.yodycdn.com/products/ao-khoac-gio-nam-the-thao-yody-SKM7005-XAM-3.JPG",
          "position": null
        },
        {
          "id": 147431,
          "product_id": null,
          "color_id": null,
          "color": "",
          "image_id": 83231,
          "url": "https://m.yodycdn.com/products/ao-khoac-gio-nam-the-thao-yody-SKM7005-XAM-4.JPG",
          "position": null
        },
        {
          "id": 147432,
          "product_id": null,
          "color_id": null,
          "color": "",
          "image_id": 83237,
          "url": "https://m.yodycdn.com/products/ao-khoac-gio-nam-the-thao-yody-SKM7005-XAM-5.JPG",
          "position": null
        },
        {
          "id": 147433,
          "product_id": null,
          "color_id": null,
          "color": "",
          "image_id": 83245,
          "url": "https://m.yodycdn.com/products/ao-khoac-gio-nam-the-thao-yody-SKM7005-XAM-7.JPG",
          "position": null
        },
        {
          "id": 147434,
          "product_id": null,
          "color_id": null,
          "color": "",
          "image_id": 83241,
          "url": "https://m.yodycdn.com/products/ao-khoac-gio-nam-the-thao-yody-SKM7005-XAM-8.JPG",
          "position": null
        },
        {
          "id": 147435,
          "product_id": null,
          "color_id": null,
          "color": "",
          "image_id": 83244,
          "url": "https://m.yodycdn.com/products/ao-khoac-gio-nam-the-thao-yody-SKM7005-XAM-9.JPG",
          "position": null
        },
        {
          "id": 147436,
          "product_id": null,
          "color_id": null,
          "color": "",
          "image_id": 83230,
          "url": "https://m.yodycdn.com/products/ao-khoac-gio-nam-the-thao-yody-SKM7005-XAM-10.JPG",
          "position": null
        },
        {
          "id": 147437,
          "product_id": null,
          "color_id": 521,
          "color": "Xanh đậm",
          "image_id": 83224,
          "url": "https://m.yodycdn.com/products/ao-khoac-gio-nam-the-thao-yody-SKM7005-XDM-1.JPG",
          "position": 10
        },
        {
          "id": 147438,
          "product_id": null,
          "color_id": 521,
          "color": "Xanh đậm",
          "image_id": 83225,
          "url": "https://m.yodycdn.com/products/ao-khoac-gio-nam-the-thao-yody-SKM7005-XDM-2.JPG",
          "position": 9
        },
        {
          "id": 147439,
          "product_id": null,
          "color_id": 521,
          "color": "Xanh đậm",
          "image_id": 83234,
          "url": "https://m.yodycdn.com/products/ao-khoac-gio-nam-the-thao-yody-SKM7005-XDM-3.JPG",
          "position": 1
        },
        {
          "id": 147440,
          "product_id": null,
          "color_id": 521,
          "color": "Xanh đậm",
          "image_id": 83233,
          "url": "https://m.yodycdn.com/products/ao-khoac-gio-nam-the-thao-yody-SKM7005-XDM-4.JPG",
          "position": 2
        },
        {
          "id": 147441,
          "product_id": null,
          "color_id": 521,
          "color": "Xanh đậm",
          "image_id": 83236,
          "url": "https://m.yodycdn.com/products/ao-khoac-gio-nam-the-thao-yody-SKM7005-XDM-5.JPG",
          "position": 3
        },
        {
          "id": 147442,
          "product_id": null,
          "color_id": 521,
          "color": "Xanh đậm",
          "image_id": 83235,
          "url": "https://m.yodycdn.com/products/ao-khoac-gio-nam-the-thao-yody-SKM7005-XDM-6.JPG",
          "position": 5
        },
        {
          "id": 147443,
          "product_id": null,
          "color_id": 521,
          "color": "Xanh đậm",
          "image_id": 83243,
          "url": "https://m.yodycdn.com/products/ao-khoac-gio-nam-the-thao-yody-SKM7005-XDM-8.JPG",
          "position": 6
        },
        {
          "id": 147444,
          "product_id": null,
          "color_id": 521,
          "color": "Xanh đậm",
          "image_id": 83239,
          "url": "https://m.yodycdn.com/products/ao-khoac-gio-nam-the-thao-yody-SKM7005-XDM-9.JPG",
          "position": 7
        },
        {
          "id": 147445,
          "product_id": null,
          "color_id": 521,
          "color": "Xanh đậm",
          "image_id": 83240,
          "url": "https://m.yodycdn.com/products/ao-khoac-gio-nam-the-thao-yody-SKM7005-XDM-10.JPG",
          "position": 8
        },
        {
          "id": 147446,
          "product_id": null,
          "color_id": 521,
          "color": "Xanh đậm",
          "image_id": 83229,
          "url": "https://m.yodycdn.com/products/ao-khoac-gio-nam-the-thao-yody-SKM7005-XDM-11.JPG",
          "position": 4
        },
        {
          "id": 147447,
          "product_id": null,
          "color_id": 765,
          "color": "XÁM 1",
          "image_id": 83250,
          "url": "https://m.yodycdn.com/products/ao-khoac-gio-nam-the-thao-yody-SKM7005-XAM-4.JPG",
          "position": 1
        },
        {
          "id": 147448,
          "product_id": null,
          "color_id": 765,
          "color": "XÁM 1",
          "image_id": 83252,
          "url": "https://m.yodycdn.com/products/ao-khoac-gio-nam-the-thao-yody-SKM7005-XAM-3.JPG",
          "position": 2
        },
        {
          "id": 147449,
          "product_id": null,
          "color_id": 765,
          "color": "XÁM 1",
          "image_id": 83253,
          "url": "https://m.yodycdn.com/products/ao-khoac-gio-nam-the-thao-yody-SKM7005-XAM-10.JPG",
          "position": 3
        },
        {
          "id": 147450,
          "product_id": null,
          "color_id": 765,
          "color": "XÁM 1",
          "image_id": 83251,
          "url": "https://m.yodycdn.com/products/ao-khoac-gio-nam-the-thao-yody-SKM7005-XAM-5.JPG",
          "position": 4
        },
        {
          "id": 147451,
          "product_id": null,
          "color_id": 765,
          "color": "XÁM 1",
          "image_id": 83256,
          "url": "https://m.yodycdn.com/products/ao-khoac-gio-nam-the-thao-yody-SKM7005-XAM-7.JPG",
          "position": 5
        },
        {
          "id": 147452,
          "product_id": null,
          "color_id": 765,
          "color": "XÁM 1",
          "image_id": 83255,
          "url": "https://m.yodycdn.com/products/ao-khoac-gio-nam-the-thao-yody-SKM7005-XAM-8.JPG",
          "position": 6
        },
        {
          "id": 147453,
          "product_id": null,
          "color_id": 765,
          "color": "XÁM 1",
          "image_id": 83254,
          "url": "https://m.yodycdn.com/products/ao-khoac-gio-nam-the-thao-yody-SKM7005-XAM-9.JPG",
          "position": 7
        },
        {
          "id": 147454,
          "product_id": null,
          "color_id": 765,
          "color": "XÁM 1",
          "image_id": 83257,
          "url": "https://m.yodycdn.com/products/ao-khoac-gio-nam-the-thao-yody-SKM7005-XAM-1.JPG",
          "position": 8
        },
        {
          "id": 147455,
          "product_id": null,
          "color_id": 765,
          "color": "XÁM 1",
          "image_id": 83258,
          "url": "https://m.yodycdn.com/products/ao-khoac-gio-nam-the-thao-yody-SKM7005-XAM-2.JPG",
          "position": 9
        },
        {
          "id": 147456,
          "product_id": null,
          "color_id": 1178,
          "color": "đen 2",
          "image_id": 83260,
          "url": "https://m.yodycdn.com/products/ao-khoac-gio-nam-the-thao-yody-SKM7005-DEN-4.JPG",
          "position": 1
        },
        {
          "id": 147457,
          "product_id": null,
          "color_id": 1178,
          "color": "đen 2",
          "image_id": 83263,
          "url": "https://m.yodycdn.com/products/ao-khoac-gio-nam-the-thao-yody-SKM7005-DEN-3.JPG",
          "position": 2
        },
        {
          "id": 147458,
          "product_id": null,
          "color_id": 1178,
          "color": "đen 2",
          "image_id": 83264,
          "url": "https://m.yodycdn.com/products/ao-khoac-gio-nam-the-thao-yody-SKM7005-DEN-5.JPG",
          "position": 3
        },
        {
          "id": 147459,
          "product_id": null,
          "color_id": 1178,
          "color": "đen 2",
          "image_id": 83269,
          "url": "https://m.yodycdn.com/products/ao-khoac-gio-nam-the-thao-yody-SKM7005-DEN-11.JPG",
          "position": 4
        },
        {
          "id": 147460,
          "product_id": null,
          "color_id": 1178,
          "color": "đen 2",
          "image_id": 83265,
          "url": "https://m.yodycdn.com/products/ao-khoac-gio-nam-the-thao-yody-SKM7005-DEN-6.JPG",
          "position": 5
        },
        {
          "id": 147461,
          "product_id": null,
          "color_id": 1178,
          "color": "đen 2",
          "image_id": 83267,
          "url": "https://m.yodycdn.com/products/ao-khoac-gio-nam-the-thao-yody-SKM7005-DEN-8.JPG",
          "position": 6
        },
        {
          "id": 147462,
          "product_id": null,
          "color_id": 1178,
          "color": "đen 2",
          "image_id": 83266,
          "url": "https://m.yodycdn.com/products/ao-khoac-gio-nam-the-thao-yody-SKM7005-DEN-9.JPG",
          "position": 7
        },
        {
          "id": 147463,
          "product_id": null,
          "color_id": 1178,
          "color": "đen 2",
          "image_id": 83268,
          "url": "https://m.yodycdn.com/products/ao-khoac-gio-nam-the-thao-yody-SKM7005-DEN-10.JPG",
          "position": 8
        },
        {
          "id": 147464,
          "product_id": null,
          "color_id": 1178,
          "color": "đen 2",
          "image_id": 83262,
          "url": "https://m.yodycdn.com/products/ao-khoac-gio-nam-the-thao-yody-SKM7005-DEN-1.JPG",
          "position": 9
        },
        {
          "id": 147465,
          "product_id": null,
          "color_id": 1178,
          "color": "đen 2",
          "image_id": 83261,
          "url": "https://m.yodycdn.com/products/ao-khoac-gio-nam-the-thao-yody-SKM7005-DEN-2.JPG",
          "position": 10
        }
      ]
    },
  ]
  const jeansProducts = [
    {
      "id": 38158,
      "name": "Quần Jean Nữ Baggy Bổ Túi ",
      "status": "active",
      "created_by": "yd0774",
      "created_name": "Hồng Nguyễn Tuyết",
      "updated_by": "service-account-sale-channel-website",
      "updated_name": "Website",
      "created_date": "2024-09-28T02:02:00Z",
      "updated_date": "2024-09-30T17:00:57Z",
      "category_id": 153,
      "category": "Quần jeans nữ",
      "product_type": "normal",
      "brand_id": 34,
      "brand": "YODY",
      "gender": "Nữ",
      "characteristics": null,
      "collections": [
        {
          "collection_id": 337,
          "position": 10
        },
        {
          "collection_id": 624,
          "position": 0
        },
        {
          "collection_id": 418,
          "position": 1
        }
      ],
      "material": null,
      "min_variant_price": 499000.0,
      "max_variant_price": 499000.0,
      "tags": "774,sanphamt9,thudong24",
      "video": null,
      "variants": [
        {
          "id": 124301,
          "name": "Quần Jean Nữ Baggy Bổ Túi -Trắng-25",
          "color_id": 531,
          "color": "Trắng",
          "size_id": null,
          "partner_sync": true,
          "inventory_quantity": 1240,
          "prices": [
            {
              "id": 232305,
              "price": 499000.0,
              "currency_code": "VND",
              "currency_symbol": "đ",
              "compare_at_price": 499000.0,
              "price_rule_id": null,
              "entitled_method": null
            }
          ]
        }
      ],
      "title": "Quần Jean Nữ Baggy Bổ Túi ",
      "meta_desc": "Trẻ trung và tạo điểm nhấn mới cùng chiếc quấn jeans nữ baggy này của YODY. Thiết kế mới cùng màu sắc tươi sáng, chiếc quần này là lựa chọn hoàn hảo để làm mới tủ đồ jeans của nàng. Quần có chất vải bông tự nhiên nên mềm mại, thoáng, thấn hút tốt đồng thời gian giãn nhẹ nên thoải mái vận động mà khô",
      "url_handle": "quan-jean-nu-baggy-bo-tui-",
      "index_status": "index",
      "unit": null,
      "goods": "fashion",
      "quantity_sold": null,
      "star_avg": null,
      "promotion_price": 0.0,
      "display": true,
      "position": 0,
      "inventory_status": "in-stock",
      "available_quantity": 2334,
      "colors": [
        {
          "id": 12851,
          "color_id": 531,
          "color": "Trắng",
          "parent_color_id": 1,
          "parent_color": "Nhiều màu",
          "url": "https://m.yodycdn.com/products/QJN7069-TRA  quan-kaki-nu.JPG",
          "product_id": null,
          "position": 1
        }
      ],
      "sizes": [
        {
          "size_id": 18,
          "size": "25",
          "position": 1
        },
        {
          "size_id": 19,
          "size": "26",
          "position": 2
        },
        {
          "size_id": 20,
          "size": "27",
          "position": 3
        },
        {
          "size_id": 21,
          "size": "28",
          "position": 4
        },
        {
          "size_id": 22,
          "size": "29",
          "position": 5
        },
        {
          "size_id": 23,
          "size": "30",
          "position": 6
        }
      ],
      "images": [
        {
          "id": 149862,
          "product_id": null,
          "color_id": 531,
          "color": "Trắng",
          "image_id": 93306,
          "url": "https://m.yodycdn.com/products/QJN7069-TRA (4).JPG",
          "position": 1
        },
        {
          "id": 149863,
          "product_id": null,
          "color_id": 531,
          "color": "Trắng",
          "image_id": 93308,
          "url": "https://m.yodycdn.com/products/QJN7069-TRA (1).JPG",
          "position": 2
        },
        {
          "id": 149864,
          "product_id": null,
          "color_id": 531,
          "color": "Trắng",
          "image_id": 93305,
          "url": "https://m.yodycdn.com/products/QJN7069-TRA (5).JPG",
          "position": 3
        },
        {
          "id": 149865,
          "product_id": null,
          "color_id": 531,
          "color": "Trắng",
          "image_id": 93300,
          "url": "https://m.yodycdn.com/products/QJN7069-TRA, ALN5002-XTR (1).JPG",
          "position": 4
        },
        {
          "id": 149866,
          "product_id": null,
          "color_id": 531,
          "color": "Trắng",
          "image_id": 93299,
          "url": "https://m.yodycdn.com/products/QJN7069-TRA, ALN5002-XTR (2).JPG",
          "position": 5
        },
        {
          "id": 149867,
          "product_id": null,
          "color_id": 531,
          "color": "Trắng",
          "image_id": 93304,
          "url": "https://m.yodycdn.com/products/QJN7069-TRA  (3).JPG",
          "position": 6
        },
        {
          "id": 149868,
          "product_id": null,
          "color_id": 531,
          "color": "Trắng",
          "image_id": 93307,
          "url": "https://m.yodycdn.com/products/QJN7069-TRA  (5).JPG",
          "position": 7
        },
        {
          "id": 149869,
          "product_id": null,
          "color_id": 531,
          "color": "Trắng",
          "image_id": 93301,
          "url": "https://m.yodycdn.com/products/QJN7069-TRA  (2).JPG",
          "position": 8
        },
        {
          "id": 149870,
          "product_id": null,
          "color_id": 531,
          "color": "Trắng",
          "image_id": 93298,
          "url": "https://m.yodycdn.com/products/QJN7069-TRA  (7).JPG",
          "position": 9
        },
        {
          "id": 149871,
          "product_id": null,
          "color_id": 531,
          "color": "Trắng",
          "image_id": 93303,
          "url": "https://m.yodycdn.com/products/QJN7069-TRA  (6).JPG",
          "position": 10
        },
        {
          "id": 149872,
          "product_id": null,
          "color_id": null,
          "color": null,
          "image_id": 93297,
          "url": "https://m.yodycdn.com/products/QJN7069-TRA  (1).JPG",
          "position": null
        },
        {
          "id": 149873,
          "product_id": null,
          "color_id": null,
          "color": null,
          "image_id": 93302,
          "url": "https://m.yodycdn.com/products/QJN7069-TRA  (4).JPG",
          "position": null
        }
      ]
    },
    {
      "id": 37975,
      "name": "Quần Jean Nữ Giấy Tencel Suông Chiết Ly",
      "status": "active",
      "created_by": "yd0774",
      "created_name": "Hồng Nguyễn Tuyết",
      "updated_by": "System",
      "updated_name": "System",
      "created_date": "2024-06-29T04:15:32Z",
      "updated_date": "2024-10-05T00:02:37Z",
      "category_id": 153,
      "category": "Quần jeans nữ",
      "product_type": "normal",
      "brand_id": 34,
      "brand": "YODY",
      "gender": "Nữ",
      "characteristics": null,
      "collections": [
        {
          "collection_id": 530,
          "position": 0
        },
        {
          "collection_id": 538,
          "position": 0
        },
        {
          "collection_id": 555,
          "position": 1731
        },
        {
          "collection_id": 337,
          "position": 11
        },
        {
          "collection_id": 514,
          "position": 1373
        },
        {
          "collection_id": 333,
          "position": 4
        },
        {
          "collection_id": 571,
          "position": 1068
        },
        {
          "collection_id": 562,
          "position": 1171
        },
        {
          "collection_id": 602,
          "position": 2024
        },
        {
          "collection_id": 603,
          "position": 819
        },
        {
          "collection_id": 604,
          "position": 0
        },
        {
          "collection_id": 611,
          "position": 1282
        },
        {
          "collection_id": 580,
          "position": 1057
        },
        {
          "collection_id": 620,
          "position": 186
        }
      ],
      "material": null,
      "min_variant_price": 399000.0,
      "max_variant_price": 399000.0,
      "tags": ",774,best7,10t9,best8",
      "video": {
        "url": "https://m.yodycdn.com/products/videos/website/QJN/QJN7062.mp4"
      },
      "variants": [
        {
          "id": 121478,
          "name": "Quần Jean Nữ Giấy Tencel Suông Chiết Ly-Xanh nhạt-25",
          "color_id": 517,
          "color": "Xanh nhạt",
          "size_id": null,
          "partner_sync": true,
          "inventory_quantity": 411,
          "prices": [
            {
              "id": 226970,
              "price": 399000.0,
              "currency_code": "VND",
              "currency_symbol": "đ",
              "compare_at_price": 399000.0,
              "price_rule_id": null,
              "entitled_method": "QUANTITY"
            }
          ]
        },
        {
          "id": 121472,
          "name": "Quần Jean Nữ Giấy Tencel Suông Chiết Ly-Xanh-25",
          "color_id": 528,
          "color": "Xanh",
          "size_id": null,
          "partner_sync": true,
          "inventory_quantity": 185,
          "prices": [
            {
              "id": 226964,
              "price": 399000.0,
              "currency_code": "VND",
              "currency_symbol": "đ",
              "compare_at_price": 399000.0,
              "price_rule_id": null,
              "entitled_method": "QUANTITY"
            }
          ]
        }
      ],
      "title": "Quần Jean Nữ Giấy Tencel Suông Chiết Ly",
      "meta_desc": "Siêu thoải mái cùng Quần Jean Nữ Giấy Tencel Suông Chiết Ly. Chất mềm, nhẹ và vô cùng thoáng cho ngày hè không lo bí bách.",
      "url_handle": "quan-jean-nu-giay-tencel-suong-chiet-ly",
      "index_status": "index",
      "unit": null,
      "goods": "fashion",
      "quantity_sold": null,
      "star_avg": null,
      "promotion_price": 0.0,
      "display": true,
      "position": 1,
      "inventory_status": "in-stock",
      "available_quantity": 897,
      "colors": [
        {
          "id": 12284,
          "color_id": 528,
          "color": "Xanh",
          "parent_color_id": 1,
          "parent_color": "Nhiều màu",
          "url": "https://m.yodycdn.com/products/QJN7062-XAH (8).jpg",
          "product_id": null,
          "position": 1
        },
        {
          "id": 12285,
          "color_id": 517,
          "color": "Xanh nhạt",
          "parent_color_id": 1,
          "parent_color": "Nhiều màu",
          "url": "https://m.yodycdn.com/products/quan-jeans-nu-yody-QJN7062-XNH (6).jpg",
          "product_id": null,
          "position": 2
        }
      ],
      "sizes": [
        {
          "size_id": 18,
          "size": "25",
          "position": 1
        },
        {
          "size_id": 19,
          "size": "26",
          "position": 2
        },
        {
          "size_id": 20,
          "size": "27",
          "position": 3
        },
        {
          "size_id": 21,
          "size": "28",
          "position": 4
        },
        {
          "size_id": 22,
          "size": "29",
          "position": 5
        },
        {
          "size_id": 23,
          "size": "30",
          "position": 6
        }
      ],
      "images": [
        {
          "id": 146079,
          "product_id": null,
          "color_id": 528,
          "color": "Xanh",
          "image_id": 80296,
          "url": "https://m.yodycdn.com/products/quan-jeans-nu-yody-BLN7016-TRA, QJN7062-XAH (4).jpg",
          "position": 1
        },
        {
          "id": 146080,
          "product_id": null,
          "color_id": 528,
          "color": "Xanh",
          "image_id": 80305,
          "url": "https://m.yodycdn.com/products/quan-jeans-nu-yody-BLN7016-TRA, QJN7062-XAH (8).jpg",
          "position": 2
        },
        {
          "id": 146081,
          "product_id": null,
          "color_id": 528,
          "color": "Xanh",
          "image_id": 80310,
          "url": "https://m.yodycdn.com/products/quan-jeans-nu-yody-BLN7016-TRA, QJN7062-XAH (9).jpg",
          "position": 3
        },
        {
          "id": 146082,
          "product_id": null,
          "color_id": 528,
          "color": "Xanh",
          "image_id": 80298,
          "url": "https://m.yodycdn.com/products/quan-jeans-nu-yody-BLN7016-TRA, QJN7062-XAH (12).jpg",
          "position": 4
        },
        {
          "id": 146083,
          "product_id": null,
          "color_id": 528,
          "color": "Xanh",
          "image_id": 80311,
          "url": "https://m.yodycdn.com/products/quan-jeans-nu-yody-BLN7016-TRA, QJN7062-XAH (10).jpg",
          "position": 5
        },
        {
          "id": 146084,
          "product_id": null,
          "color_id": 528,
          "color": "Xanh",
          "image_id": 80307,
          "url": "https://m.yodycdn.com/products/quan-jeans-nu-yody-BLN7016-TRA, QJN7062-XAH (11).jpg",
          "position": 6
        },
        {
          "id": 146085,
          "product_id": null,
          "color_id": 528,
          "color": "Xanh",
          "image_id": 80312,
          "url": "https://m.yodycdn.com/products/quan-jeans-nu-yody-BLN7016-TRA, QJN7062-XAH (13).jpg",
          "position": 7
        },
        {
          "id": 146086,
          "product_id": null,
          "color_id": 528,
          "color": "Xanh",
          "image_id": 80308,
          "url": "https://m.yodycdn.com/products/quan-jeans-nu-yody-BLN7016-TRA, QJN7062-XAH (5).jpg",
          "position": 8
        },
        {
          "id": 146087,
          "product_id": null,
          "color_id": 528,
          "color": "Xanh",
          "image_id": 80303,
          "url": "https://m.yodycdn.com/products/quan-jeans-nu-yody-BLN7016-TRA, QJN7062-XAH (7).jpg",
          "position": 9
        },
        {
          "id": 146088,
          "product_id": null,
          "color_id": 528,
          "color": "Xanh",
          "image_id": 80304,
          "url": "https://m.yodycdn.com/products/quan-jeans-nu-yody-BLN7016-TRA, QJN7062-XAH (6).jpg",
          "position": 10
        },
        {
          "id": 146089,
          "product_id": null,
          "color_id": 517,
          "color": "Xanh nhạt",
          "image_id": 80309,
          "url": "https://m.yodycdn.com/products/quan-jeans-nu-yody-QJN7062-XNH (3).jpg",
          "position": 1
        },
        {
          "id": 146090,
          "product_id": null,
          "color_id": 517,
          "color": "Xanh nhạt",
          "image_id": 80297,
          "url": "https://m.yodycdn.com/products/quan-jeans-nu-yody-QJN7062-XNH (4).jpg",
          "position": 2
        },
        {
          "id": 146091,
          "product_id": null,
          "color_id": 517,
          "color": "Xanh nhạt",
          "image_id": 80299,
          "url": "https://m.yodycdn.com/products/quan-jeans-nu-yody-QJN7062-XNH (5).jpg",
          "position": 3
        },
        {
          "id": 146092,
          "product_id": null,
          "color_id": 517,
          "color": "Xanh nhạt",
          "image_id": 80300,
          "url": "https://m.yodycdn.com/products/quan-jeans-nu-yody-QJN7062-XNH (9).jpg",
          "position": 4
        },
        {
          "id": 146093,
          "product_id": null,
          "color_id": 517,
          "color": "Xanh nhạt",
          "image_id": 80306,
          "url": "https://m.yodycdn.com/products/quan-jeans-nu-yody-QJN7062-XNH (8).jpg",
          "position": 5
        },
        {
          "id": 146094,
          "product_id": null,
          "color_id": 517,
          "color": "Xanh nhạt",
          "image_id": 80301,
          "url": "https://m.yodycdn.com/products/quan-jeans-nu-yody-QJN7062-XNH (7).jpg",
          "position": 6
        },
        {
          "id": 146095,
          "product_id": null,
          "color_id": 517,
          "color": "Xanh nhạt",
          "image_id": 80302,
          "url": "https://m.yodycdn.com/products/quan-jeans-nu-yody-QJN7062-XNH (10).jpg",
          "position": 7
        }
      ]
    },
    {
      "id": 37980,
      "name": "Quần Jeans Nữ Coolmax Ống Vẩy Hiệu Ứng Gân",
      "status": "active",
      "created_by": "yd8410",
      "created_name": "Nga Bùi Thị Tuyết",
      "updated_by": "System",
      "updated_name": "System",
      "created_date": "2024-07-02T02:50:37Z",
      "updated_date": "2024-10-05T00:02:37Z",
      "category_id": 153,
      "category": "Quần jeans nữ",
      "product_type": "normal",
      "brand_id": 34,
      "brand": "YODY",
      "gender": "Nữ",
      "characteristics": null,
      "collections": [
        {
          "collection_id": 530,
          "position": 0
        },
        {
          "collection_id": 337,
          "position": 12
        },
        {
          "collection_id": 538,
          "position": 0
        },
        {
          "collection_id": 555,
          "position": 1736
        },
        {
          "collection_id": 281,
          "position": 207
        },
        {
          "collection_id": 514,
          "position": 1375
        },
        {
          "collection_id": 562,
          "position": 1670
        },
        {
          "collection_id": 571,
          "position": 1072
        },
        {
          "collection_id": 418,
          "position": 70
        },
        {
          "collection_id": 602,
          "position": 2029
        },
        {
          "collection_id": 603,
          "position": 821
        },
        {
          "collection_id": 604,
          "position": 0
        },
        {
          "collection_id": 605,
          "position": 0
        },
        {
          "collection_id": 425,
          "position": 386
        },
        {
          "collection_id": 611,
          "position": 1284
        },
        {
          "collection_id": 580,
          "position": 1061
        },
        {
          "collection_id": 620,
          "position": 183
        }
      ],
      "material": null,
      "min_variant_price": 549000.0,
      "max_variant_price": 549000.0,
      "tags": ",sanphamt7,sanphamt7,10t9",
      "video": {
        "url": "https://m.yodycdn.com/products/videos/website/QJN/QJN7044.mp4"
      },
      "variants": [
        {
          "id": 121568,
          "name": "Quần Jeans Nữ Coolmax Ống Vẩy Hiệu Ứng Gân-xanh trung-25",
          "color_id": 781,
          "color": "xanh trung",
          "size_id": null,
          "partner_sync": true,
          "inventory_quantity": 3378,
          "prices": [
            {
              "id": 231557,
              "price": 549000.0,
              "currency_code": "VND",
              "currency_symbol": "đ",
              "compare_at_price": 549000.0,
              "price_rule_id": null,
              "entitled_method": null
            }
          ]
        },
        {
          "id": 121554,
          "name": "Quần Jeans Nữ Coolmax Ống Vẩy Hiệu Ứng Gân-Xanh đậm-25",
          "color_id": 521,
          "color": "Xanh đậm",
          "size_id": null,
          "partner_sync": true,
          "inventory_quantity": 3334,
          "prices": [
            {
              "id": 231543,
              "price": 549000.0,
              "currency_code": "VND",
              "currency_symbol": "đ",
              "compare_at_price": 549000.0,
              "price_rule_id": null,
              "entitled_method": null
            }
          ]
        }
      ],
      "title": "Quần Jeans Nữ Coolmax Ống Vẩy Hiệu Ứng Gân",
      "meta_desc": "Quần Jeans Nữ Coolmax Ống Vẩy Hiệu Ứng Gân Thiết kế thời trang với ống vẩy hiệu ứng gân trẻ trung, năng động, dễ dàng phối đồ phù hợp mọi phong cách. Cấu trúc sợi thông minh, điều chỉnh nhiệt độ cơ thể - giữ ấm khi lạnh và mát mẻ khi nóng mang đến cảm giác thoải mái quanh năm.",
      "url_handle": "quan-jeans-nu-coolmax-ong-vay-hieu-ung-gan",
      "index_status": "index",
      "unit": null,
      "goods": "fashion",
      "quantity_sold": null,
      "star_avg": null,
      "promotion_price": 0.0,
      "display": true,
      "position": 2,
      "inventory_status": "in-stock",
      "available_quantity": 12481,
      "colors": [
        {
          "id": 12304,
          "color_id": 521,
          "color": "Xanh đậm",
          "parent_color_id": 1,
          "parent_color": "Nhiều màu",
          "url": "https://m.yodycdn.com/products/quan-jeans-nu-QJN7044-XDM (5).JPG",
          "product_id": null,
          "position": 1
        },
        {
          "id": 12306,
          "color_id": 781,
          "color": "xanh trung",
          "parent_color_id": 1,
          "parent_color": "Nhiều màu",
          "url": "https://m.yodycdn.com/products/quan-jeans-nu-QJN7044-XTU (5).JPG",
          "product_id": null,
          "position": 3
        }
      ],
      "sizes": [
        {
          "size_id": 18,
          "size": "25",
          "position": 1
        },
        {
          "size_id": 19,
          "size": "26",
          "position": 2
        },
        {
          "size_id": 20,
          "size": "27",
          "position": 3
        },
        {
          "size_id": 21,
          "size": "28",
          "position": 4
        },
        {
          "size_id": 22,
          "size": "29",
          "position": 5
        },
        {
          "size_id": 23,
          "size": "30",
          "position": 6
        },
        {
          "size_id": 24,
          "size": "31",
          "position": 7
        }
      ],
      "images": [
        {
          "id": 147177,
          "product_id": null,
          "color_id": 521,
          "color": "Xanh đậm",
          "image_id": 82788,
          "url": "https://m.yodycdn.com/products/quan-jeans-nu-QJN7044-XDM (9).JPG",
          "position": 1
        },
        {
          "id": 147178,
          "product_id": null,
          "color_id": 521,
          "color": "Xanh đậm",
          "image_id": 82782,
          "url": "https://m.yodycdn.com/products/quan-jeans-nu-QJN7044-XDM (1).JPG",
          "position": 2
        },
        {
          "id": 147179,
          "product_id": null,
          "color_id": 521,
          "color": "Xanh đậm",
          "image_id": 82777,
          "url": "https://m.yodycdn.com/products/quan-jeans-nu-QJN7044-XDM (8).JPG",
          "position": 3
        },
        {
          "id": 147180,
          "product_id": null,
          "color_id": 521,
          "color": "Xanh đậm",
          "image_id": 82785,
          "url": "https://m.yodycdn.com/products/quan-jeans-nu-QJN7044-XDM (7).JPG",
          "position": 4
        },
        {
          "id": 147181,
          "product_id": null,
          "color_id": 521,
          "color": "Xanh đậm",
          "image_id": 82775,
          "url": "https://m.yodycdn.com/products/quan-jeans-nu-QJN7044-XDM (6).JPG",
          "position": 5
        },
        {
          "id": 147182,
          "product_id": null,
          "color_id": 521,
          "color": "Xanh đậm",
          "image_id": 82783,
          "url": "https://m.yodycdn.com/products/quan-jeans-nu-QJN7044-XDM (2).JPG",
          "position": 6
        },
        {
          "id": 147183,
          "product_id": null,
          "color_id": 521,
          "color": "Xanh đậm",
          "image_id": 82781,
          "url": "https://m.yodycdn.com/products/quan-jeans-nu-QJN7044-XDM (4).JPG",
          "position": 7
        },
        {
          "id": 147185,
          "product_id": null,
          "color_id": 781,
          "color": "xanh trung",
          "image_id": 82780,
          "url": "https://m.yodycdn.com/products/quan-jeans-nu-QJN7044-XTU (2).JPG",
          "position": 2
        },
        {
          "id": 147186,
          "product_id": null,
          "color_id": 781,
          "color": "xanh trung",
          "image_id": 82778,
          "url": "https://m.yodycdn.com/products/quan-jeans-nu-QJN7044-XTU (3).JPG",
          "position": 3
        },
        {
          "id": 147187,
          "product_id": null,
          "color_id": 781,
          "color": "xanh trung",
          "image_id": 82784,
          "url": "https://m.yodycdn.com/products/quan-jeans-nu-QJN7044-XTU (7).JPG",
          "position": 4
        },
        {
          "id": 147188,
          "product_id": null,
          "color_id": 781,
          "color": "xanh trung",
          "image_id": 82779,
          "url": "https://m.yodycdn.com/products/quan-jeans-nu-QJN7044-XTU (6).JPG",
          "position": 5
        },
        {
          "id": 147189,
          "product_id": null,
          "color_id": 781,
          "color": "xanh trung",
          "image_id": 82786,
          "url": "https://m.yodycdn.com/products/quan-jeans-nu-QJN7044-XTU (8).JPG",
          "position": 6
        },
        {
          "id": 147190,
          "product_id": null,
          "color_id": 781,
          "color": "xanh trung",
          "image_id": 82774,
          "url": "https://m.yodycdn.com/products/quan-jeans-nu-QJN7044-XTU (4).JPG",
          "position": 7
        },
        {
          "id": 147191,
          "product_id": null,
          "color_id": null,
          "color": null,
          "image_id": 82773,
          "url": "https://m.yodycdn.com/products/quan-jeans-nu-QJN7044-XDM (5).JPG",
          "position": null
        },
        {
          "id": 147192,
          "product_id": null,
          "color_id": null,
          "color": null,
          "image_id": 82776,
          "url": "https://m.yodycdn.com/products/quan-jeans-nu-QJN7044-XTU (5).JPG",
          "position": null
        },
        {
          "id": 149443,
          "product_id": null,
          "color_id": 781,
          "color": "xanh trung",
          "image_id": 91603,
          "url": "https://m.yodycdn.com/products/quan-jeans-nu-QJN7044-XTU (10).JPG",
          "position": 1
        }
      ]
    },
    {
      "id": 37979,
      "name": "Quần Jeans Nữ Ống Suông Kẻ Xương Cá",
      "status": "active",
      "created_by": "yd8410",
      "created_name": "Nga Bùi Thị Tuyết",
      "updated_by": "System",
      "updated_name": "System",
      "created_date": "2024-06-29T04:50:31Z",
      "updated_date": "2024-10-05T00:02:37Z",
      "category_id": 153,
      "category": "Quần jeans",
      "product_type": "normal",
      "brand_id": 34,
      "brand": "YODY",
      "gender": "Nữ",
      "characteristics": null,
      "collections": [
        {
          "collection_id": 530,
          "position": 0
        },
        {
          "collection_id": 337,
          "position": 13
        },
        {
          "collection_id": 538,
          "position": 0
        },
        {
          "collection_id": 555,
          "position": 1735
        },
        {
          "collection_id": 514,
          "position": 1374
        },
        {
          "collection_id": 562,
          "position": 1669
        },
        {
          "collection_id": 571,
          "position": 1071
        },
        {
          "collection_id": 602,
          "position": 2028
        },
        {
          "collection_id": 603,
          "position": 820
        },
        {
          "collection_id": 604,
          "position": 0
        },
        {
          "collection_id": 605,
          "position": 0
        },
        {
          "collection_id": 425,
          "position": 385
        },
        {
          "collection_id": 611,
          "position": 1283
        },
        {
          "collection_id": 580,
          "position": 1060
        },
        {
          "collection_id": 620,
          "position": 93
        }
      ],
      "material": null,
      "min_variant_price": 549000.0,
      "max_variant_price": 549000.0,
      "tags": ",10t9",
      "video": {
        "url": "https://m.yodycdn.com/products/videos/website/QJN/QJN7038.mp4"
      },
      "variants": [
        {
          "id": 121548,
          "name": "Quần Jeans Nữ Ống Suông Kẻ Xương Cá-Xanh nhạt-25",
          "color_id": 517,
          "color": "Xanh nhạt",
          "size_id": null,
          "partner_sync": true,
          "inventory_quantity": 1946,
          "prices": [
            {
              "id": 197692,
              "price": 549000.0,
              "currency_code": "VND",
              "currency_symbol": "đ",
              "compare_at_price": 549000.0,
              "price_rule_id": null,
              "entitled_method": "QUANTITY"
            }
          ]
        },
        {
          "id": 121542,
          "name": "Quần Jeans Nữ Ống Suông Kẻ Xương Cá-Xanh đậm-25",
          "color_id": 521,
          "color": "Xanh đậm",
          "size_id": null,
          "partner_sync": true,
          "inventory_quantity": 1813,
          "prices": [
            {
              "id": 197686,
              "price": 549000.0,
              "currency_code": "VND",
              "currency_symbol": "đ",
              "compare_at_price": 549000.0,
              "price_rule_id": null,
              "entitled_method": "QUANTITY"
            }
          ]
        }
      ],
      "title": "Quần Jeans Nữ Ống Suông Kẻ Xương Cá",
      "meta_desc": "  Quần Jeans Nữ Ống Suông Kẻ Xương Cá kiểu dệt herringbone (xương cá) độc đáo tạo nên bề mặt mới lạ, cá tính giúp bạn dễ dàng biến hóa phong cách theo sở thích. Quần ống suông che khuyết điểm chân hiệu quả, tôn lên vóc dáng thon gọn.",
      "url_handle": "quan-jeans-nu-ong-suong-ke-xuong-ca",
      "index_status": "index",
      "unit": null,
      "goods": "fashion",
      "quantity_sold": null,
      "star_avg": null,
      "promotion_price": 0.0,
      "display": true,
      "position": 3,
      "inventory_status": "in-stock",
      "available_quantity": 7069,
      "colors": [
        {
          "id": 12302,
          "color_id": 521,
          "color": "Xanh đậm",
          "parent_color_id": 1,
          "parent_color": "Nhiều màu",
          "url": "https://m.yodycdn.com/products/QJN7038-XDM (9).jpg",
          "product_id": null,
          "position": 1
        },
        {
          "id": 12303,
          "color_id": 517,
          "color": "Xanh nhạt",
          "parent_color_id": 1,
          "parent_color": "Nhiều màu",
          "url": "https://m.yodycdn.com/products/quan-jean-nu-QJN7038-XNH (9).jpg",
          "product_id": null,
          "position": 2
        }
      ],
      "sizes": [
        {
          "size_id": 18,
          "size": "25",
          "position": 1
        },
        {
          "size_id": 19,
          "size": "26",
          "position": 2
        },
        {
          "size_id": 20,
          "size": "27",
          "position": 3
        },
        {
          "size_id": 21,
          "size": "28",
          "position": 4
        },
        {
          "size_id": 22,
          "size": "29",
          "position": 5
        },
        {
          "size_id": 23,
          "size": "30",
          "position": 6
        }
      ],
      "images": [
        {
          "id": 146474,
          "product_id": null,
          "color_id": 521,
          "color": "Xanh đậm",
          "image_id": 81580,
          "url": "https://m.yodycdn.com/products/quan-jean-nu-QJN7038-XDM (1).jpg",
          "position": 1
        },
        {
          "id": 146475,
          "product_id": null,
          "color_id": 521,
          "color": "Xanh đậm",
          "image_id": 81579,
          "url": "https://m.yodycdn.com/products/quan-jean-nu-QJN7038-XDM (3).jpg",
          "position": 2
        },
        {
          "id": 146476,
          "product_id": null,
          "color_id": 521,
          "color": "Xanh đậm",
          "image_id": 81583,
          "url": "https://m.yodycdn.com/products/quan-jean-nu-QJN7038-XDM (4).jpg",
          "position": 3
        },
        {
          "id": 146477,
          "product_id": null,
          "color_id": 521,
          "color": "Xanh đậm",
          "image_id": 81576,
          "url": "https://m.yodycdn.com/products/quan-jean-nu-QJN7038-XDM (7).jpg",
          "position": 4
        },
        {
          "id": 146478,
          "product_id": null,
          "color_id": 521,
          "color": "Xanh đậm",
          "image_id": 81582,
          "url": "https://m.yodycdn.com/products/quan-jean-nu-QJN7038-XDM (2).jpg",
          "position": 5
        },
        {
          "id": 146479,
          "product_id": null,
          "color_id": 521,
          "color": "Xanh đậm",
          "image_id": 81587,
          "url": "https://m.yodycdn.com/products/quan-jean-nu-QJN7038-XDM (5).jpg",
          "position": 6
        },
        {
          "id": 146480,
          "product_id": null,
          "color_id": 521,
          "color": "Xanh đậm",
          "image_id": 81585,
          "url": "https://m.yodycdn.com/products/quan-jean-nu-QJN7038-XDM (6).jpg",
          "position": 7
        },
        {
          "id": 146481,
          "product_id": null,
          "color_id": 521,
          "color": "Xanh đậm",
          "image_id": 81586,
          "url": "https://m.yodycdn.com/products/quan-jean-nu-QJN7038-XDM (8).jpg",
          "position": 8
        },
        {
          "id": 146482,
          "product_id": null,
          "color_id": 517,
          "color": "Xanh nhạt",
          "image_id": 81574,
          "url": "https://m.yodycdn.com/products/quan-jean-nu-QJN7038-XNH (1).jpg",
          "position": 1
        },
        {
          "id": 146483,
          "product_id": null,
          "color_id": 517,
          "color": "Xanh nhạt",
          "image_id": 81573,
          "url": "https://m.yodycdn.com/products/quan-jean-nu-QJN7038-XNH (2).jpg",
          "position": 2
        },
        {
          "id": 146484,
          "product_id": null,
          "color_id": 517,
          "color": "Xanh nhạt",
          "image_id": 81575,
          "url": "https://m.yodycdn.com/products/quan-jean-nu-QJN7038-XNH (3).jpg",
          "position": 3
        },
        {
          "id": 146485,
          "product_id": null,
          "color_id": 517,
          "color": "Xanh nhạt",
          "image_id": 81577,
          "url": "https://m.yodycdn.com/products/quan-jean-nu-QJN7038-XNH (6).jpg",
          "position": 4
        },
        {
          "id": 146486,
          "product_id": null,
          "color_id": 517,
          "color": "Xanh nhạt",
          "image_id": 81591,
          "url": "https://m.yodycdn.com/products/quan-jean-nu-QJN7038-XNH.jpg",
          "position": 5
        },
        {
          "id": 146487,
          "product_id": null,
          "color_id": 517,
          "color": "Xanh nhạt",
          "image_id": 81581,
          "url": "https://m.yodycdn.com/products/quan-jean-nu-QJN7038-XNH (4).jpg",
          "position": 6
        },
        {
          "id": 146488,
          "product_id": null,
          "color_id": 517,
          "color": "Xanh nhạt",
          "image_id": 81584,
          "url": "https://m.yodycdn.com/products/quan-jean-nu-QJN7038-XNH (5).jpg",
          "position": 7
        },
        {
          "id": 146489,
          "product_id": null,
          "color_id": 517,
          "color": "Xanh nhạt",
          "image_id": 81578,
          "url": "https://m.yodycdn.com/products/quan-jean-nu-QJN7038-XNH (7).jpg",
          "position": 8
        }
      ]
    },
  ]
  const categorys = [
    {
      id: 1,
      name: 'Áo Gió',
      listProduct: jacketProducts
    },
    {
      id: 2,
      name: 'Jeans Flex',
      listProduct: jeansProducts
    },
    {
      id: 3,
      name: 'Áo Polo',
      listProduct: []
    },
    {
      id: 4,
      name: 'Quần Âu',
      listProduct: []
    },
    {
      id: 5,
      name: 'Sơ Mi',
      listProduct: []
    },
  ]

  const [isCentered, setIsCentered] = useState(false);
  // Theo dõi kích thước cửa sổ
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsCentered(true); // Căn giữa khi màn hình lớn hơn 768px
      } else {
        setIsCentered(false); // Không căn giữa khi màn hình nhỏ hơn 768px
      }
    };

    // Gọi hàm ngay khi component render lần đầu
    handleResize();

    // Gắn sự kiện lắng nghe thay đổi kích thước cửa sổ
    window.addEventListener('resize', handleResize);

    // Hủy sự kiện khi component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <a href="/product">
        product details
      </a>

      <div className="App">
        <Button type="primary">Button</Button>
        <BannerSlider />
        <div className="">
          <h2 className="text-2xl md:text-3xl text-center py-2">Sản phẩm ưa chuộng</h2>
          <Tabs
            defaultActiveKey="1"
            centered={isCentered}
            items={categorys.map((category, i) => {
              const id = String(i + 1);
              return {
                label: category.name,
                key: id,
                children: category.listProduct.length > 0 ? (

                  <ListProduct listProduct={category.listProduct} />
                ) : (
                  <span className='font-light'>-- Chưa có sản phẩm --</span>
                )
              };
            })}
          />
        </div>
      </div >
    </>
  );
}
