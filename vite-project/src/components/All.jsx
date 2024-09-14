import React from 'react'
import FullStackDevelopment from './FullStackDevelopment'
import DataScience from './DataScience'
import CyberSecurity from './CyberSecurity'
import Career from './Career'

function All() {
  return (
    <div className='row'>
        
        <h1 className='text-center mt-3'>ALL</h1>
        <FullStackDevelopment/>
        <DataScience/>
        <CyberSecurity/>
        <Career/>
    </div>
  )
}

export default All