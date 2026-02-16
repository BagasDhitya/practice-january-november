import React from 'react'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'

import "./styles/global.css"
import "./styles/layout.css"
import "./styles/sections.css"

export default function App() {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  )
}
