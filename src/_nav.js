import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilDrop,
  cilSpeedometer,
  cilEnvelopeOpen,
  cilPeople,
  cilUser,
  cilCalculator,
  cilSettings,
  cilDollar,
  cilHistory,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle , CButton} from '@coreui/react'

const _nav = [
  // {
  //   component: CNavItem,
  //   name: 'Dashboard',
  //   to: '/dashboard',
  //   icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'Applications',
  //   to: '/Applications/Applications',
  //   icon: <CIcon icon={cilEnvelopeOpen} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'Document Verification',
  //   to: '/DocumentVerify/Docverify',
  //   icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'Customers',
  //   to: '/Customers/Customers',
  //   icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'Repayments',
  //   to: '/RepayAdmin/RepayAdmin',
  //   icon: <CIcon icon={cilDollar} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'Installment Calculator',
  //   to: '/InstallmentCalc/InstallmentCalc',
  //   icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'Loan History',
  //   to: '/LoanHistory/LoanHistory',
  //   icon: <CIcon icon={cilHistory} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'Manage Customer Acc',
  //   to: '/Managecustacc/Managecustacc',
  //   icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  // },

  {
    component: CNavItem,
    name: 'Home',
    to: '/Userdashboard',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Documents',
    to: '/documents',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Repayment Stats',
    to: '/Repaystatuser/Repaystatuser',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Repayment',
    to: '/Settings/Settings',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Agreement',
    to: '/Agreement',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Settings',
    to: '/Usersettings',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Help',
    to: '/Help/Help',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
]

export default _nav
