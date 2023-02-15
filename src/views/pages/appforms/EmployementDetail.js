import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'

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

function EmployementDetail({ formData, setFormData }) {

  return (
    <div>
      <CRow className='justify-content-center'>
        <CCol md={5}>
          <CCard className="mb-6">
            <CCardBody>
              <DocsExample href="forms/layout#gutters">
                <CForm className="row g-3">
                  <h1>Employement Details </h1>
                  <h4>*For Salaried Indivisual Only*</h4>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">Company Name</CFormLabel>
                    <CFormInput value={formData.C_CompnayName} type="Text" id="inputText4" onChange={(e) => setFormData({ ...formData, C_CompnayName: e.target.value })} required />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">Company Address</CFormLabel>
                    <CFormInput value={formData.C_CompanyAddres} type="Text" id="inputText4" onChange={(e) => setFormData({ ...formData, C_CompanyAddres: e.target.value })} required />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">Job Title</CFormLabel>
                    <CFormInput value={formData.C_JobTitle} type="Text" id="inputText4" onChange={(e) => setFormData({ ...formData, C_JobTitle: e.target.value })} required />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">Department</CFormLabel>
                    <CFormInput value={formData.C_Department} type="Text" id="inputText4" onChange={(e) => setFormData({ ...formData, C_Department: e.target.value })} required />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">Employement Since</CFormLabel>
                    <CFormInput type="date" value={formData.C_EmployementSince} id="inputText4" onChange={(e) => setFormData({ ...formData, C_EmployementSince: e.target.value })} required />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">Employement Number</CFormLabel>
                    <CFormInput value={formData.C_EmploymentNumber} type="Text" id="inputText4" onChange={(e) => setFormData({ ...formData, C_EmploymentNumber: e.target.value })} required />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">Extension</CFormLabel>
                    <CFormInput value={formData.C_Extension} type="Text" id="inputText4" onChange={(e) => setFormData({ ...formData, C_Extension: e.target.value })} required />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">Office Email</CFormLabel>
                    <CFormInput value={formData.C_OfficeEmail} type="Email" id="inputText4" onChange={(e) => setFormData({ ...formData, C_OfficeEmail: e.target.value })} required />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputState">Employement Type</CFormLabel>
                    <CFormSelect id="inputState" value={formData.C_EmployementType} onChange={(e) => setFormData({ ...formData, C_EmployementType: e.target.value })} required>
                      <option>Select</option>
                      <option>Permanent</option>
                      <option>Contractual</option>
                    </CFormSelect>
                  </CCol>

                  <h1>Previous Employement Details</h1>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">Company Name</CFormLabel>
                    <CFormInput value={formData.P_CompnayName} type="Text" id="inputText4" onChange={(e) => setFormData({ ...formData, P_CompnayName: e.target.value })} required />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">Company Address</CFormLabel>
                    <CFormInput value={formData.P_CompanyAddres} type="Text" id="inputText4" onChange={(e) => setFormData({ ...formData, P_CompanyAddres: e.target.value })} required />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">Job Title</CFormLabel>
                    <CFormInput value={formData.P_JobTitle} type="Text" id="inputText4" onChange={(e) => setFormData({ ...formData, P_JobTitle: e.target.value })} required />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">Department</CFormLabel>
                    <CFormInput value={formData.P_Department} type="Text" id="inputText4" onChange={(e) => setFormData({ ...formData, P_Department: e.target.value })} required />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">Employement Period</CFormLabel>
                    <br></br>
                    <CFormLabel htmlFor="inputText4">From</CFormLabel>
                    <CFormInput type="date" id="inputText4" value={formData.P_EmployementSince} onChange={(e) => setFormData({ ...formData, P_EmployementSince: e.target.value })} required />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">Employement Period</CFormLabel>
                    <br></br>
                    <CFormLabel htmlFor="inputText4">To</CFormLabel>
                    <CFormInput type="date" value={formData.P_EmployementSinceT} id="inputText4" onChange={(e) => setFormData({ ...formData, P_EmployementSinceT: e.target.value })} required />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">Employement Number</CFormLabel>
                    <CFormInput value={formData.P_EmploymentNumber} type="Text" id="inputText4" onChange={(e) => setFormData({ ...formData, P_EmploymentNumber: e.target.value })} required />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">Extension</CFormLabel>
                    <CFormInput value={formData.P_Extension} type="Text" id="inputText4" onChange={(e) => setFormData({ ...formData, P_Extension: e.target.value })} required />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">Office Email</CFormLabel>
                    <CFormInput value={formData.P_OfficeEmail} type="Email" id="inputText4" onChange={(e) => setFormData({ ...formData, P_OfficeEmail: e.target.value })} required />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputState">Employement Type</CFormLabel>
                    <CFormSelect id="inputState" value={formData.P_EmployementType} onChange={(e) => setFormData({ ...formData, P_EmployementType: e.target.value })} required>
                      <option>Select</option>
                      <option>Permanent</option>
                      <option>Contractual</option>
                    </CFormSelect>
                  </CCol>
                  {/* <div class="btn-group" role="" arial-label="basic-example">
                    <CButton type="button" class="btn btn-outline-primary btn-lg" onClick={() => contact2('/form2')}>Prev Page</CButton>
                    <CButton type="button" class="btn btn-outline-primary btn-lg" onClick={() => contact2('/form4')}>Next Page</CButton>
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
export default EmployementDetail
