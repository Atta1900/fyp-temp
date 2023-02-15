import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import Form from 'src/components/header/Forms'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CRow,
} from '@coreui/react'
import DocsExample from './DocsExample'

function IncomeDetails({ formData, setFormData }) {
  // const contact2 = useNavigate();

  return (
    <div >
      <CRow className='justify-content-center'>
        <CCol md={5}>
          <CCard className="mb-6">
            <CCardBody>
              <DocsExample href="forms/layout#gutters">
                <CForm className="row g-3">
                  <h1>Income Details</h1>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">Monthly Gross Income</CFormLabel>
                    <CFormInput value={formData.MonthlyGrossIncome} type="Number" id="inputText4" onChange={(e) => setFormData({ ...formData, MonthlyGrossIncome: e.target.value })} required />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">Monthly Net Income</CFormLabel>
                    <CFormInput value={formData.MonthlyNetIncome} type="Number" id="inputText4" onChange={(e) => setFormData({ ...formData, MonthlyNetIncome: e.target.value })} required />
                  </CCol>

                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">Salaray Disbursement Day</CFormLabel>
                    <CFormInput type="date" id="inputText4" value={formData.SalarayDisbursementDay} onChange={(e) => setFormData({ ...formData, SalarayDisbursementDay: e.target.value })} required />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">
                      Other Verifiable Income (if any) For SEP's Only
                    </CFormLabel>
                    <CFormInput value={formData.OtherVerIncome} type="Number" id="inputText4" onChange={(e) => setFormData({ ...formData, OtherVerIncome: e.target.value })} required />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">Source Of Other Income</CFormLabel>
                    <CFormInput value={formData.SourceOfOtherIncome} type="Text" id="inputText4" onChange={(e) => setFormData({ ...formData, SourceOfOtherIncome: e.target.value })} required />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">Average Monthly Income</CFormLabel>
                    <CFormInput value={formData.AverageMonthlyIncome} type="Number" id="inputText4" onChange={(e) => setFormData({ ...formData, AverageMonthlyIncome: e.target.value })} required />
                  </CCol>

                  <h1>Banking Details</h1>

                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">Bank Name</CFormLabel>
                    <CFormInput value={formData.BankName} type="Text" id="inputText4" onChange={(e) => setFormData({ ...formData, BankName: e.target.value })} required />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">Account Number</CFormLabel>
                    <CFormInput value={formData.AccountNumber} type="Text" id="inputText4" onChange={(e) => setFormData({ ...formData, AccountNumber: e.target.value })} required />
                  </CCol>

                  <CCol md={6}>
                    <CFormLabel htmlFor="inputState">Account Type</CFormLabel>
                    <CFormSelect id="inputState" value={formData.AccountType} onChange={(e) => setFormData({ ...formData, AccountType: e.target.value })} required>
                      <option>Select</option>
                      <option>Current Account</option>
                      <option>Saving Account</option>                   </CFormSelect>
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">Bank Branch</CFormLabel>
                    <CFormInput value={formData.Branch} type="Text" id="inputText4" onChange={(e) => setFormData({ ...formData, Branch: e.target.value })} required />
                  </CCol>

                  <h1>Desired Financing</h1>

                  <CCol md={6}>
                    <CFormLabel htmlFor="inputState">Desired Repayment Tenure</CFormLabel>
                    <CFormSelect id="inputState" value={formData.DesiredRepTenure} onChange={(e) => setFormData({ ...formData, DesiredRepTenure: e.target.value })} required >
                      <option>Select</option>
                      <option>1 Year</option>
                      <option>2 Year</option>
                      <option>3 Year</option>
                      <option>4 Year</option>
                      <option>5 Year</option>
                    </CFormSelect>
                  </CCol>

                  <CCol md={6}>
                    <CFormLabel htmlFor="inputState">Loan Required For</CFormLabel>
                    <CFormSelect id="inputState" value={formData.LoanReqFor} onChange={(e) => setFormData({ ...formData, LoanReqFor: e.target.value })} required >
                      <option>Select</option>
                      <option>Wedding</option>
                      <option>Vacation</option>
                      <option>Studies</option>
                      <option>Other</option>
                    </CFormSelect>
                    <br></br>
                    <CFormInput type="Text" id="inputText4" placeholder=" If Other Please Specify or Enter the above again" value={formData.s_LoanReqFor} onChange={(e) => setFormData({ ...formData, s_LoanReqFor: e.target.value })} required />

                  </CCol>

                  <CCol mb={3}>
                    <CFormLabel htmlFor="inputText4">Ammount Sought PKR</CFormLabel>
                    <CFormInput value={formData.AmmountSoughtPKR} type="Number" id="inputText4" onChange={(e) => setFormData({ ...formData, AmmountSoughtPKR: e.target.value })} required />
                  </CCol>
                  <CCol mb={3}>
                    <CFormLabel htmlFor="inputText4">Installment Amount Per Month</CFormLabel>
                    <CFormInput value={formData.IncomeAmountPreMonth} type="Number" id="inputText4" onChange={(e) => setFormData({ ...formData, IncomeAmountPreMonth: e.target.value })} required />
                  </CCol>

                  {/* <div class="btn-group" role="" arial-label="basic-example">
                    <CButton type="button" class="btn btn-outline-primary btn-lg" onClick={() => contact2('/form7')} className="btn btn-primary mb-2" >Prev Page</CButton>
                    <CButton type="button" class="btn btn-outline-primary btn-lg" onClick={() => contact2('/form6')} className="btn btn-primary mb-2">Next Page</CButton>
                  </div> */}
                </CForm>
              </DocsExample>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  )
}
export default IncomeDetails
