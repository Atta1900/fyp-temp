import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'

import { CButton, CCard, CCardBody, CCol, CForm, CFormInput, CFormLabel, CRow } from '@coreui/react'
import DocsExample from './DocsExample'
import Form from 'src/components/header/Forms'
function DetailsOfReferences({ formData, setFormData }) {
  // const contact2 = useNavigate();

  return (
    <div >
      <CRow className='justify-content-center'>
        <CCol md={5}>
          <CCard className="mb-6">
            <CCardBody>
              <DocsExample href="forms/layout#gutters">
                <CForm className="row g-3">
                  <h1>Details Of References</h1>
                  <h3>Reference 01</h3>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">Full Name</CFormLabel>
                    <CFormInput value={formData.R_FullName} onChange={(e) => setFormData({ ...formData, R_FullName: e.target.value })} type="Text" id="inputText4" required />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">CNIC</CFormLabel>
                    <CFormInput value={formData.R_CINC} onChange={(e) => setFormData({ ...formData, R_CINC: e.target.value })} type="Number" id="inputText4" required />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">Passport Number</CFormLabel>
                    <CFormInput value={formData.R_PossportNumber} onChange={(e) => setFormData({ ...formData, R_PossportNumber: e.target.value })} type="Text" id="inputText4" required />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">Address</CFormLabel>
                    <CFormInput value={formData.R_Address} onChange={(e) => setFormData({ ...formData, R_Address: e.target.value })} type="Text" id="inputText4" required />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">Telephone Number Office</CFormLabel>
                    <CFormInput value={formData.R_TelephoneNumOffice} onChange={(e) => setFormData({ ...formData, R_TelephoneNumOffice: e.target.value })} type="Number" id="inputText4" required />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">Telephone Number Residence</CFormLabel>
                    <CFormInput value={formData.R_TelephoneNumResidence} onChange={(e) => setFormData({ ...formData, R_TelephoneNumResidence: e.target.value })} type="Number" id="inputText4" required />
                  </CCol>

                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">Email</CFormLabel>
                    <CFormInput value={formData.R_Email} onChange={(e) => setFormData({ ...formData, R_Email: e.target.value })} type="Email" id="inputText4" required />
                  </CCol>

                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">Cell Number</CFormLabel>
                    <CFormInput value={formData.R_CellNumber} onChange={(e) => setFormData({ ...formData, R_CellNumber: e.target.value })} type="Number" id="inputText4" required />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">Relationship</CFormLabel>
                    <CFormInput value={formData.R_Relationship} onChange={(e) => setFormData({ ...formData, R_Relationship: e.target.value })} type="Text" id="inputText4" required />
                  </CCol>

                  <h3>Reference 02</h3>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">Full Name</CFormLabel>
                    <CFormInput value={formData.R2_FullName} onChange={(e) => setFormData({ ...formData, R2_FullName: e.target.value })} type="Text" id="inputText4" required />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">CNIC</CFormLabel>
                    <CFormInput value={formData.R2_CINC} onChange={(e) => setFormData({ ...formData, R2_CINC: e.target.value })} type="Number" id="inputText4" required />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">Passport Number</CFormLabel>
                    <CFormInput value={formData.R2_PossportNumber} onChange={(e) => setFormData({ ...formData, R2_PossportNumber: e.target.value })} type="Text" id="inputText4" required />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">Address</CFormLabel>
                    <CFormInput value={formData.R2_Address} onChange={(e) => setFormData({ ...formData, R2_Address: e.target.value })} type="Text" id="inputText4" required />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">Telephone Number Office</CFormLabel>
                    <CFormInput value={formData.R2_TelephoneNumOffice} onChange={(e) => setFormData({ ...formData, R2_TelephoneNumOffice: e.target.value })} type="Number" id="inputText4" required />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">Telephone Number Residencec</CFormLabel>
                    <CFormInput value={formData.R2_TelephoneNumResidence} onChange={(e) => setFormData({ ...formData, R2_TelephoneNumResidence: e.target.value })} type="Number" id="inputText4" required />
                  </CCol>

                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">Email</CFormLabel>
                    <CFormInput value={formData.R2_Email} onChange={(e) => setFormData({ ...formData, R2_Email: e.target.value })} type="Email" id="inputText4" required />
                  </CCol>

                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">Cell Number</CFormLabel>
                    <CFormInput value={formData.R2_CellNumber} onChange={(e) => setFormData({ ...formData, R2_CellNumber: e.target.value })} type="Number" id="inputText4" required />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">Relationship</CFormLabel>
                    <CFormInput value={formData.R2_Relationship} onChange={(e) => setFormData({ ...formData, R2_Relationship: e.target.value })} type="Text" id="inputText4" required />
                  </CCol>
                  {/* <div class="btn-group" role="group" arial-label="basic-example">
                    <CButton type="button" class="btn btn-outline-primary btn-lg" onClick={() => contact2('/form5')} >Prev Page</CButton>
                    <CButton type="button" class="btn btn-outline-primary btn-lg" onClick={() => contact2('/Userdashboard')}>Submit</CButton>
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
export default DetailsOfReferences
