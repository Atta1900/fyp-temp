import React from 'react'

import {
    CAvatar,
    CButton,
    CButtonGroup,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CProgress,
    CRow,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
    cibGoogle,
    cibFacebook,
    cibLinkedin,
    cibTwitter,
    cilCloudDownload,
    cilPeople,
    cilUser,
    cilUserFemale,
} from '@coreui/icons'

import avatar2 from 'src/assets/images/avatars/2.jpg'
import { DocsExample } from 'src/components'

const Repaystatuser = () => {

    const tableExample = [
        {
            avatar: { src: avatar2 },
            user: {
                name: 'Atta Ullah',
                month: 'may',
                date: '15-4-2021',
                applicationNo: '0000021',
                Paid: '10000',
                BalAmount: '90000',
                intRate: '13%',
                intallAmount: '10000'
            },
        },
        {
            avatar: { src: avatar2 },
            user: {
                name: 'Atta Ullah',
                month: 'june',
                date: '15-6-2021',
                applicationNo: '0000021',
                Paid: '20000',
                BalAmount: '80000',
                intRate: '13%',
                intallAmount: '10000'
            },
        },
        {
            avatar: { src: avatar2 },
            user: {
                name: 'Atta Ullah',
                month: 'July',
                date: '15-7-2021',
                applicationNo: '0000021',
                Paid: '30000',
                BalAmount: '70000',
                intRate: '13%',
                intallAmount: '10000'
            },
        },
        {
            avatar: { src: avatar2 },
            user: {
                name: 'Atta Ullah',
                month: 'august',
                date: '15-8-2021',
                applicationNo: '0000021',
                Paid: '40000',
                BalAmount: '60000',
                intRate: '13%',
                intallAmount: '10000'
            },
        },
        {
            avatar: { src: avatar2 },
            user: {
                name: 'Atta Ullah',
                month: 'September',
                date: '15-9-2021',
                applicationNo: '0000021',
                Paid: '50000',
                BalAmount: '50000',
                intRate: '13%',
                intallAmount: '10000'
            },
        },
    ]
    return (
        <>

            <h1>Repayment Statement Of Atta Ullah</h1>
            <h3>Loan Amount = 1,00,000</h3>
            <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                    <CTableRow>
                        <CTableHeaderCell className="text-center">
                            <CIcon icon={cilPeople} />
                        </CTableHeaderCell>
                        <CTableHeaderCell className="text-center">Name</CTableHeaderCell>
                        <CTableHeaderCell className="text-center">Application No.</CTableHeaderCell>
                        <CTableHeaderCell className="text-center">Total Paid Amount</CTableHeaderCell>
                        <CTableHeaderCell className="text-center">Balance Amount</CTableHeaderCell>
                        <CTableHeaderCell className="text-center">Installment Amount</CTableHeaderCell>
                        <CTableHeaderCell className="text-center">Interest Rate</CTableHeaderCell>
                        <CTableHeaderCell className="text-center">Month Of Installment</CTableHeaderCell>
                        <CTableHeaderCell className="text-center">Date Of Payment</CTableHeaderCell>
                        <CTableHeaderCell className="text-center">View Reciept</CTableHeaderCell>

                    </CTableRow>
                </CTableHead>
                <CTableBody>
                    {tableExample.map((item, index) => (
                        <CTableRow v-for="item in tableItems" key={index}>
                            <CTableDataCell className="text-center">
                                <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                            </CTableDataCell>
                            <CTableDataCell className="text-center">
                                <div>{item.user.name}</div>
                            </CTableDataCell>
                            <CTableDataCell className="text-center">
                                <div>{item.user.applicationNo}</div>
                            </CTableDataCell>
                            <CTableDataCell className="text-center">
                                <div>{item.user.Paid}</div>
                            </CTableDataCell>
                            <CTableDataCell className="text-center">
                                <div>{item.user.BalAmount}</div>
                            </CTableDataCell>
                            <CTableDataCell className="text-center">
                                <div>{item.user.intallAmount}</div>
                            </CTableDataCell>
                            <CTableDataCell className="text-center">
                                <div>{item.user.intRate}</div>
                            </CTableDataCell>
                            <CTableDataCell className="text-center">
                                <div>{item.user.month}</div>
                            </CTableDataCell>
                            <CTableDataCell className="text-center">
                                <div>{item.user.date}</div>
                            </CTableDataCell>
                            <CTableDataCell>
                                <div className='a'>
                                    <CButton className="text-center">View </CButton>
                                </div>
                            </CTableDataCell>

                        </CTableRow>

                    ))}

                </CTableBody>


            </CTable>
            <CTableDataCell>
                <div className='abc'>
                    <CButton className="abc">Download Statement</CButton>
                </div>
            </CTableDataCell>
        </>
    )
};
export default Repaystatuser