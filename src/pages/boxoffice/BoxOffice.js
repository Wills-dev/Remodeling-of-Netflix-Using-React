import React from 'react'
import netflix from '../../image/netflix.png'

const BoxOffice = () => {
  return (
    <div className='bkground container-fluid'>
      
        <img src={netflix} alt='' style={{width:'100px', height:'40px'}}/>
      <h1 className='mx-auto txt'>Who's watching?</h1>
      <div className='roww'>
        <div>
          <p className='mx-5 algn'>Name1</p>
        <div className='bg-primary box mx-5'/>
        </div>
        
        <div>
          <p className='mx-5 algn'>Name2</p>
        <div className='bg-success box mx-5'/>
        </div>
        <div>
          <p className='mx-5 algn'>Name3</p>
        <div className='bg-danger box mx-5'/>
        </div>
        <div>
          <p className='mx-5 algn'>Name4</p>
        <div className='bg-warning box mx-5'/>
        </div>
      </div>
      <div className='prof my-5'>
        <div className=''>
      <button className='prof px-5'>Manage Profiles</button>
      </div>
      </div>

    </div>
    
  )
}

export default BoxOffice;