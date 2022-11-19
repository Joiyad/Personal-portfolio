import Navbar from '../components/sidebar';
import Contact from '../components/contact.jsx';
import { useState } from 'react';
import { useRouter } from 'next/router';

const follow = () => {
  const router = useRouter()
  return (
    <div>
        <Navbar />
        <Contact/>
    </div>
  )
}

export default follow