import React from 'react'
import {useEffect} from 'react'

function Section1() {

  useEffect(() => {
    document.getElementById("section1").classList.add("go")
  }, [])
  

  function go(){
    //document.getElementById("section1").classList.add("go")
  }

  return (
    <div className='section1' id='section1'>  
        <div className='sect1_img'>          
          <div className='sect1_back'/> 
          <div className='sect1_filter'/>    
        </div>      
               
        <div className='container'>
            <div className='sect1_text1'>We get the Job Done</div>
            <div className='sect1_text2'>Air Conditioning and Electrical Services, servicing Miami-Dade, Broward and Florida Keys</div>
            <div className='mybutton sect1_but' onClick={() => go()}>Get a Quote Today</div>
            
        </div>
    </div>
  )
}

export default Section1