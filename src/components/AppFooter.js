import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <p className="ms-1">PLMS Website &copy; 2022 HAB(Easy Code)</p>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <p>HAB</p>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
