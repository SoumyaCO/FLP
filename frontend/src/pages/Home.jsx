import Navbar from '../components/NavBar'
import { ButtonPrimary, ButtonSecondary } from '../components/Button'
import TitleBar from '../components/TitleBar'
import homepng from '../assets/Home.png'
import mockup from '../assets/mockup.png'

export default function HomePage() {
  return (
    <>
      <div
        className='bg-cover bg-center h-screen w-screen grid grid-rows-4 grid-cols-2 place-items-start overflow-hidden px-6'
        style={{
          backgroundImage: `url(${homepng})`,
          height: "100vh",
          width: "100%",
        }}>
        <div className='col-span-2'>
          <Navbar />
        </div>
        <div className='row-start-2 col-start-1'>
          <TitleBar />
        </div>
        <div className='row-start-2 col-start-2 row-span-2 object-scale-down'>
          <img src={mockup} alt="" />
        </div>
        <div className='row-start-3 col-start-1 my-10 grid grid-cols-2'>
          <div className=''>
            <ButtonPrimary />
          </div>
          <div>
            <ButtonSecondary />
          </div>

        </div>
      </div>
    </>
  )
}
