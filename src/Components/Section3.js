import React from 'react'
import Section3_Card from './Section3_Card'
import AC from '../Images/AC.png'
import EL from '../Images/EL.png'
import SU from '../Images/SU.png'

function Section3() {



  return (
    <div className='section3 pt-5'>
        <div className='container'>
            <div className='row m-0 p-0'>
                <Section3_Card name='A/C' img={AC}/>
                <Section3_Card name='Electrical Work' img={EL}/>
                <Section3_Card name='Splits Units' img={SU}/>                
            </div>
            <div className='sect_divider'/>
        </div>

    </div>
  )
}

export default Section3