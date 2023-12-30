import Link from 'next/link'

const Homepage = () => {
  return (
    <div className='flex justify-center items-center mt-20'>
      <Link href='/dashboard'>Dashboard</Link>
    </div>
  )
}

export default Homepage