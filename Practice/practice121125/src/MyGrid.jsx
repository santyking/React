import React from 'react'

const MyGrid = () => {
  return (
    <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        <div className='flex flex-col w-50'>
            <div className='flex justify-center bg-amber-600 text-white font-bold rounded-tl-xl'>Heading</div>
            <img className='rounded-b-xl' src="https://live.staticflickr.com/48/193505301_07fbc702ba_b.jpg" alt="img" />
        </div>
        <div className='flex flex-col w-50'>
            <div className='flex justify-center bg-amber-600 text-white font-bold rounded-tl-xl'>Heading</div>
            <img className='rounded-b-xl' src="https://live.staticflickr.com/48/193505301_07fbc702ba_b.jpg" alt="img" />
        </div>
        <div className='flex flex-col w-50'>
            <div className='flex justify-center bg-amber-600 text-white font-bold rounded-tl-xl'>Heading</div>
            <img className='rounded-b-xl' src="https://live.staticflickr.com/48/193505301_07fbc702ba_b.jpg" alt="img" />
        </div>
        <div className='flex flex-col w-50'>
            <div className='flex justify-center bg-amber-600 text-white font-bold rounded-tl-xl'>Heading</div>
            <img className='rounded-b-xl' src="https://live.staticflickr.com/48/193505301_07fbc702ba_b.jpg" alt="img" />
        </div>
        <div className='flex flex-col w-50'>
            <div className='flex justify-center bg-amber-600 text-white font-bold rounded-tl-xl'>Heading</div>
            <img className='rounded-b-xl' src="https://live.staticflickr.com/48/193505301_07fbc702ba_b.jpg" alt="img" />
        </div>
        <div className='flex flex-col w-50'>
            <div className='flex justify-center bg-amber-600 text-white font-bold rounded-tl-xl'>Heading</div>
            <img className='rounded-b-xl' src="https://live.staticflickr.com/48/193505301_07fbc702ba_b.jpg" alt="img" />
        </div>
    </div>
  )
}

export default MyGrid