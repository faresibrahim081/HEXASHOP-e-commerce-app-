import Header from '@/Elements/Header/Header'
import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: "HEXASHOP-Products",
  description: "ecomerce shop every thing is here technology electronic makeup foods",
};

function BlogLayout({children}) {
  return (
    <div>
      <Link href='/products'>
        <Header info={'Our Products'} />
      </Link>
      {children}
    </div>
  )
}

export default BlogLayout
