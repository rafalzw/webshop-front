import * as React from 'react'
import { Navbar } from '../components/Navbar'
import { Announcement } from '../components/Announcement'

export const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
    </div>
  )
}
