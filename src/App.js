import React from 'react'

import Header from './components/Header'
import Banner from './components/Banner'
import Products from './components/Products'
import Aside from './components/aside'
import './App.css'

function App() {
  return (
    <section className="app">
      <Header />
      <Aside />
      <Products />
      <Banner />
    </section>
  )
}

export default App
