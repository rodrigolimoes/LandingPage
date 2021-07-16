import React from 'react'
import Card from '../Card'
import SwiperCore, { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import './products.css'
import 'swiper/swiper-bundle.css'
import 'swiper/swiper-bundle.min.css'

function Products() {
  SwiperCore.use([Pagination, Navigation])
  function clacDescont(price, porcent) {
    const dif = price * (porcent / 100)
    return price - dif
  }
  const Products = [
    {
      id: 1,
      name: 'Logitech G203',
      img: 'https://images.unsplash.com/photo-1527814050087-3793815479db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=628&q=80',
      price: 119.99,
      descont: '',
      porcDescont: 10,
      qtd: 200
    },
    {
      id: 2,
      name: 'Smart TV',
      img: 'https://images.unsplash.com/photo-1601944179066-29786cb9d32a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
      price: 1399.0,
      descont: '',
      porcDescont: 20,
      qtd: 200
    },
    {
      id: 3,
      name: 'Iphone 11',
      img: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      price: 3812.07,
      descont: '',
      porcDescont: 60,
      qtd: 200
    },
    {
      id: 4,
      name: 'Macbook',
      img: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
      price: 7745.0,
      descont: '',
      porcDescont: 30,
      qtd: 300
    },
    {
      id: 5,
      name: 'Smart Watch',
      img: 'https://images.unsplash.com/photo-1617043983671-adaadcaa2460?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      price: 3126.99,
      descont: '',
      porcDescont: 20,
      qtd: 1000
    },
    {
      id: 6,
      name: 'Playstation 4',
      img: 'https://images.unsplash.com/photo-1507457379470-08b800bebc67?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=784&q=80',
      price: 4499.9,
      porcDescont: 40,
      descont: '',
      qtd: 100
    }
  ]
  return (
    // <section id="Products">
    <Swiper
      breakpoints={{
        '@0.00': {
          slidesPerView: 1,
          spaceBetween: 10
        },
        '@0.75': {
          slidesPerView: 1,
          spaceBetween: 0
        },
        '@1.00': {
          slidesPerView: 2,
          spaceBetween: 20
        },
        '@1.50': {
          slidesPerView: 2,
          spaceBetween: 0
        }
      }}
      spaceBetween={0}
      slidesPerView={2}
      id="main"
      tag="section"
      wrapperTag="ul"
      navigation
      pagination={{ clickable: true }}
    >
      <h2 className="title">Produtos</h2>
      {Products.map((items, index) => (
        <SwiperSlide key={index}>
          <Card
            items={items}
            descont={
              (items.descont = clacDescont(items.price, items.porcDescont))
            }
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Products
