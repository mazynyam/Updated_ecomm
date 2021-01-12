import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="https:kiriikou.com" target="_blank" rel="noopener noreferrer">kiriikou</a>
        <span className="ml-1">&copy; {Date.getFullYear()} kiriikou.com</span>
      </div>
      
    </CFooter>
  )
}

export default React.memo(TheFooter)
