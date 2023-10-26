"use client"

import Image from 'next/image'
import Dashboard from './components/Dashboard'
import { Provider } from 'react-redux'
import store from '@/redux/store'

export default function Home() {


  return (
    <Provider store={store}>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Dashboard />
      </main>
    </Provider>
  )
}
