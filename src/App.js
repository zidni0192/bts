import React from 'react'
import { CookiesProvider } from 'react-cookie'
import Authentication from './components/authentication'
export default function App() {
  return (
    <CookiesProvider>
      <Authentication />
    </CookiesProvider>
  )
}
