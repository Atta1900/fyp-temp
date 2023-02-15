import React from 'react'

import {
  CAvatar,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilPeople,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'
import avatar7 from 'src/assets/images/avatars/7.jpg'
import avatar8 from 'src/assets/images/avatars/8.jpg'
import avatar9 from 'src/assets/images/avatars/9.jpg'



const Application= () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

 
  const tableExample = [
    {
      avatar: { src: avatar2 },
      user: {
        name: 'Atta Ullah',
        LoanAmount: '700000',
        date: '20-11-2021',
        applicationNo: '0000010',
      },
    },
    {
      avatar: { src: avatar9},
      user: {
        name: 'Mirza Bilal',
        LoanAmount: '650000',
        date: '20-03-2021',
        applicationNo: '0000011',

      },
    },
    {
      avatar: { src: avatar6},
      user: { name: 'Muhammad Haroon',
      LoanAmount: '300000',
      date: '10-05-2021',
      applicationNo: '0000013',
    },
  },
  {
    avatar: { src: avatar3},
    user: { name: 'Huzaifa Rehman',
    LoanAmount: '950000',
    date: '13-08-2021',
    applicationNo: '0000013',
  },
},
{
  avatar: { src: avatar7},
  user: { name: 'Sana Mustaqeem',
  LoanAmount: '500000',
  date: '19-10-2021',
  applicationNo: '0000014',
},
},
{
  avatar: { src: avatar8},
  user: { name: 'Madiha Sarfaraz',
  LoanAmount: '1000000',
  date: '30-11-2021',
  applicationNo: '0000015',
},
},

{
  avatar: { src: avatar3},
  user: { name: 'Abdul Hannan',
  LoanAmount: '500000',
  date: '10-01-2021',
  applicationNo: '0000016',
},
},

{
  avatar: { src: avatar6},
  user: { name: 'Mohammad Usman',
  LoanAmount: '200000',
  date: '15-02-2022',
  applicationNo: '0000017',
},
},

{
  avatar: { src: avatar7},
  user: { name: 'Hiba Shehbaz',
  LoanAmount: '100000',
  date: '10-02-2022',
  applicationNo: '0000018',
},
},

{
  avatar: { src: avatar1},
  user: { name: 'Sara Ansari',
  LoanAmount: '300000',
  date: '19-03-2022',
  applicationNo: '0000019',
},
},

{
  avatar: { src: avatar4},
  user: { name: 'Uzma Aftab',
  LoanAmount: '600000',
  date: '01-04-2022',
  applicationNo: '0000020',
},
},

{
  avatar: { src: avatar2},
  user: { name: 'Saleem Merchant',
  LoanAmount: '100000',
  date: '10-4-2022',
  applicationNo: '0000021',
},
},

{
  avatar: { src: avatar7},
  user: { name: 'Sarfaraz Ahmed',
  LoanAmount: '800000',
  date: '02-5-2022',
  applicationNo: '0000022',
},
},

  ]


return (
<>
<CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Pending Applications</CCardHeader>
            <CCardBody>



<CTable align="middle" className="mb-0 border" hover responsive>
<CTableHead color="light">
  <CTableRow>
    <CTableHeaderCell className="text-center">
      <CIcon icon={cilPeople} />
    </CTableHeaderCell>
    <CTableHeaderCell>Name</CTableHeaderCell>
    <CTableHeaderCell className="text-center">Application No.</CTableHeaderCell>
    <CTableHeaderCell>Loan Amount</CTableHeaderCell>
    <CTableHeaderCell className="text-center">Date</CTableHeaderCell>
    <CTableHeaderCell>View Application Form</CTableHeaderCell>
  </CTableRow>
</CTableHead>
<CTableBody>
  {tableExample.map((item, index) => (
    <CTableRow v-for="item in tableItems" key={index}>
    <CTableDataCell className="text-center">
        <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
      </CTableDataCell>
      <CTableDataCell>
        <div>{item.user.name}</div>
      </CTableDataCell>
      <CTableDataCell className="text-center">
      <div>{item.user.applicationNo}</div>
      </CTableDataCell>
      <CTableDataCell>
         <div>{item.user.LoanAmount}</div>                        
      </CTableDataCell>
      <CTableDataCell className="text-center">
      <div>{item.user.date}</div>
      </CTableDataCell>
      <CTableDataCell>
      <div>
      <CButton>View</CButton>
      </div>
      </CTableDataCell>
    </CTableRow>
  ))}
</CTableBody>
</CTable>
</CCardBody>
</CCard>
</CCol>
</CRow>
</>
)
}

export default Application;