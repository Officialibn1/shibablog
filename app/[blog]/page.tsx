import { shibaBlogs } from '@/lib/db'
import { blog } from '@/typings'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import React from 'react'
import './BlogPage.css'
import Link from 'next/link'

const BlogPage = async ({ params }: { params: { blog: string }}) => {
    const id = params.blog  

    const blog = shibaBlogs.find(blog => blog.id === id)

    if (!blog) {
        notFound()
    }
    
  return (
    <section className='blogPage'>
        <div className="blogPageAuthor">
          <div className="authorCard">
              <div className="authorImg">
                  <Image src={blog.author_img} width={100} height={100} quality={100} alt={blog.author} />
              </div>

              <div className="authorText">
                  <h1>
                      {blog.author}
                  </h1>

                  <p>
                      {blog.date} ▫️ {blog.read_time}
                  </p>
              </div>
          </div>
        </div>

        <div className="blogPageImg">
          <Image src={blog.img} width={500} height={300} quality={100} alt={blog.title} />
        </div>

        <div className="blogPageText">
            <h1>
              {blog.title}
            </h1>

            <p>
              {blog.body}
            </p>
        </div>

        <div className="homeBtn">
          <Link href={'/'}>
            Back Home
          </Link>
        </div>
    </section>
  )
}

export default BlogPage