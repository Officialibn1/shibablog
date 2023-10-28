import Image from 'next/image'
import HeroBanner from './components/Hero'
import Blogs from './components/Blogs'

export default function Home() {
  return (
      <section>
        <HeroBanner />

        <Blogs />
      </section>
  )
}
