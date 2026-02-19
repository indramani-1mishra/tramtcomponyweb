import React from 'react'
import first from '../../../assets/clientimage/1st.png';
import img2 from '../../../assets/clientimage/2.png';
import img3 from '../../../assets/clientimage/3.png';
import img4 from '../../../assets/clientimage/4.png';
import img5 from '../../../assets/clientimage/5.png';
import img6 from '../../../assets/clientimage/6.png';
import img7 from '../../../assets/clientimage/7.png';
import img8 from '../../../assets/clientimage/8.png';
import img9 from '../../../assets/clientimage/9.png';
import img10 from '../../../assets/clientimage/10.png';
import img11 from '../../../assets/clientimage/11.png';
import img12 from '../../../assets/clientimage/12.png';
import img13 from '../../../assets/clientimage/13.png';
import img14 from '../../../assets/clientimage/14.png';
import img15 from '../../../assets/clientimage/15.png';
import img16 from '../../../assets/clientimage/16.png';
import img17 from '../../../assets/clientimage/17.png';
import img18 from '../../../assets/clientimage/18.png';
import img19 from '../../../assets/clientimage/19.png';
import img20 from '../../../assets/clientimage/20.png';
import img21 from '../../../assets/clientimage/21.png';
import img22 from '../../../assets/clientimage/22.png';
import img23 from '../../../assets/clientimage/23.png';
import img24 from '../../../assets/clientimage/24.png';
import img25 from '../../../assets/clientimage/25.png';
import img26 from '../../../assets/clientimage/26.png';
import img27 from '../../../assets/clientimage/27.png';
import img28 from '../../../assets/clientimage/28.png';
import img29 from '../../../assets/clientimage/29.png';
import img30 from '../../../assets/clientimage/30.png';
const clients = [
  first, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
];

export default function Allclient() {

  return (
    <div className='flex gap-3 flex-wrap bg-gray-400  items-center justify-evenly md:h-[80vh]'>
      {clients.map((image)=>{
        return <img src={image} alt={image} loading='lazy' className='h-[100px] w-[160px] border-3 border-amber-300  shadow-md cursor-pointer'/>
      })}
    </div>
  )
}
