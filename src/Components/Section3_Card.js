import React from 'react'

function Section3_Card(props) {


  return (
    <div className='section3_card col-12 col-lg-4'>     
        <h4 className='mydarkgray'>{props.name}</h4>
        <div className='sect3_imgcont mt-4 d-flex justify-content-center'>
          <div className='sect3_img' style={{backgroundImage: `url(${props.img})`}}/>
        </div>
        

        <div className=' mt-3 mb-3 sect3_desc mygray'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam earum veniam cupiditate eius? Aliquid, consequuntur fugiat a veritatis earum excepturi praesentium. Ut dignissimos, voluptate numquam ex itaque asperiores error fugiat.</div>
    </div>
  )
}

export default Section3_Card