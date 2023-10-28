import { shibaBlogs } from '@/lib/db'
import { blog } from '@/typings'
import Link from 'next/link';
import React from 'react'
import './styles/Blogs.css'
import Image from 'next/image';

const blogs: blog[] = shibaBlogs;

const Blogs = async () => {

        
  return (
    <section className='blogsWrapper'>
        {blogs.map(blog => (
            <div key={blog.id} className="blogCard">
                <Link href={`/${blog.id}`}>
                    <div className="blogImg">
                        <Image src={blog.img} width={300} height={100} quality={100} alt={blog.title} />
                    </div>

                    <div className="blogText">
                        <h1>
                            {blog.title}
                        </h1>

                        <p>
                            {blog.body.slice(0, 150)}...
                        </p>
                    </div>
                </Link>

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
        ))}
    </section>
  )
}

export default Blogs