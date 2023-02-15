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

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'

import avatar6 from 'src/assets/images/avatars/6.jpg'
import avatar7 from 'src/assets/images/avatars/7.jpg'
import avatar8 from 'src/assets/images/avatars/8.jpg'
import avatar9 from 'src/assets/images/avatars/9.jpg'

import { DocsExample } from 'src/components'

const RepayAdmin = () => {

    const tableExample = [
        {
            avatar: { src: avatar2 },
            user: {
                name: 'Atta Ullah',
                LoanAmount: '100000',
                date: '10-4-2022',
                applicationNo: '0000021',
                Paid: '20000',
                BalAmount: '80000',
                intRate: '13%',
                intallAmount: '10000'
            },
        },
        {
            avatar: { src: avatar9 },
            user: {
                name: 'Mirza Bilal',
                LoanAmount: '100000',
                date: '10-4-2022',
                applicationNo: '0000021',
                Paid: '20000',
                BalAmount: '80000',
                intRate: '13%',
                intallAmount: '10000'
            },
        },
        {
            avatar: { src: avatar6 },
            user: {
                name: 'Muhammad Haroon',
                LoanAmount: '100000',
                date: '10-4-2022',
                applicationNo: '0000021',
                Paid: '20000',
                BalAmount: '80000',
                intRate: '13%',
                intallAmount: '10000'
            },
        },
        {
            avatar: { src: avatar3 },
            user: {
                name: 'Huzaifa Rehman',
                LoanAmount: '100000',
                date: '10-4-2022',
                applicationNo: '0000021',
                Paid: '20000',
                BalAmount: '80000',
                intRate: '13%',
                intallAmount: '10000'
            },
        },
        {
            avatar: { src: avatar7 },
            user: {
                name: 'Sana Mustaqeem',
                LoanAmount: '100000',
                date: '10-4-2022',
                applicationNo: '0000021',
                Paid: '20000',
                BalAmount: '80000',
                intRate: '13%',
                intallAmount: '10000'
            },
        },
        {
            avatar: { src: avatar8 },
            user: {
                name: 'Madiha Sarfaraz',
                LoanAmount: '100000',
                date: '10-4-2022',
                applicationNo: '0000021',
                Paid: '20000',
                BalAmount: '80000',
                intRate: '13%',
                intallAmount: '10000'
            },
        },
        {
            avatar: { src: avatar8 },
            user: {
                name: 'Abdul Hannan',
                LoanAmount: '100000',
                date: '10-4-2022',
                applicationNo: '0000021',
                Paid: '20000',
                BalAmount: '80000',
                intRate: '13%',
                intallAmount: '10000'
            },
        },
        {
            avatar: { src: avatar6 },
            user: {
                name: 'Mohammad Usman',
                LoanAmount: '100000',
                date: '10-4-2022',
                applicationNo: '0000021',
                Paid: '20000',
                BalAmount: '80000',
                intRate: '13%',
                intallAmount: '10000'
            },
        },
        {
            avatar: { src: avatar7 },
            user: {
                name: 'Hiba Shehbaz',
                LoanAmount: '100000',
                date: '10-4-2022',
                applicationNo: '0000021',
                Paid: '20000',
                BalAmount: '80000',
                intRate: '13%',
                intallAmount: '10000'
            },
        },
        {
            avatar: { src: avatar1 },
            user: {
                name: 'Sara Ansari',
                LoanAmount: '100000',
                date: '10-4-2022',
                applicationNo: '0000021',
                Paid: '20000',
                BalAmount: '80000',
                intRate: '13%',
                intallAmount: '10000'
            },
        },
        {
            avatar: { src: avatar4 },
            user: {
                name: 'Saleem Merchant',
                LoanAmount: '100000',
                date: '10-4-2022',
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
                name: 'Saleem Merchant',
                LoanAmount: '100000',
                date: '10-4-2022',
                applicationNo: '0000021',
                Paid: '20000',
                BalAmount: '80000',
                intRate: '13%',
                intallAmount: '10000'
            },
        },
        {
            avatar: { src: avatar7 },
            user: {
                name: 'Saleem Merchant',
                LoanAmount: '100000',
                date: '10-4-2022',
                applicationNo: '0000021',
                Paid: '20000',
                BalAmount: '80000',
                intRate: '13%',
                intallAmount: '10000'
            },
        },
    ]
    return (
        <>
            <h1>Pending Repayment Of The Month</h1>
            <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                    <CTableRow>
                        <CTableHeaderCell className="text-center">
                            <CIcon icon={cilPeople} />
                        </CTableHeaderCell>
                        <CTableHeaderCell className="text-center">Name</CTableHeaderCell>
                        <CTableHeaderCell className="text-center">Application No.</CTableHeaderCell>
                        <CTableHeaderCell className="text-center">Total Loan Amount</CTableHeaderCell>
                        <CTableHeaderCell className="text-center">Total Paid Amount</CTableHeaderCell>
                        <CTableHeaderCell className="text-center">Balance Amount</CTableHeaderCell>
                        <CTableHeaderCell className="text-center">Installment Amount</CTableHeaderCell>
                        <CTableHeaderCell className="text-center">Interest Rate</CTableHeaderCell>
                        <CTableHeaderCell className="text-center">Date Of Installment</CTableHeaderCell>
                        <CTableHeaderCell className="text-center">Action</CTableHeaderCell>

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
                                <div>{item.user.LoanAmount}</div>
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
                                <div>{item.user.date}</div>
                            </CTableDataCell>
                            <CTableDataCell>
                                <div>
                                    <CButton className="text-center">Alert</CButton>
                                </div>
                            </CTableDataCell>
                        </CTableRow>
                    ))}
                </CTableBody>
            </CTable>
        </>
    )
};
export default RepayAdmin