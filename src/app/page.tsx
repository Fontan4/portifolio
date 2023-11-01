import { Montserrat } from 'next/font/google';

export const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700']})

export default function Home() {
  return (
    <div className={montserrat.className}>
      <div className='text-gray-200 bg-[#000] w-screen h-screen'>
        <div className='px-9 pt-32'>
          <h1 className='text-[#f2f2f2] drop-shadow[0_4px_4px_rgba(0, 0, 0, 0.25)]'>HI THERE 👋, I&apos;M</h1>
          <span className='text-[#F2F2F2 text-xl font-semibold'>EDUARDO FONTANA</span>
        </div>
      </div>
    </div>
  )
}
