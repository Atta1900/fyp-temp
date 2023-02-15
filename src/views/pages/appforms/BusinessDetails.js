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

function BusinessDetails({ formData, setFormData }) {
  // const contact2 = useNavigate();

  return (
    <div >
      <CRow className='justify-content-center'>
        <CCol md={5}>
          <CCard className="mb-6">
            <CCardBody>
              <DocsExample>
                <CForm className="row g-3">
                  <h1>Business Details </h1>
                  <h4>*If Your Income Is From Business*</h4>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">Number Of Business</CFormLabel>
                    <CFormInput value={formData.numberOfBusiness} type="Number" id="inputText4" onChange={(e) => setFormData({ ...formData, numberOfBusiness: e.target.value })} required />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">Business Title</CFormLabel>
                    <CFormInput value={formData.businessTitle} type="Text" id="inputText4" onChange={(e) => setFormData({ ...formData, businessTitle: e.target.value })} required />
                  </CCol>
                  <CCol xs={12}>
                    <CFormLabel htmlFor="inputText4">Business Address</CFormLabel>
                    <CFormInput id="inputAddress" type='Text' label="Address" value={formData.businessAddress} onChange={(e) => setFormData({ ...formData, businessAddress: e.target.value })} required />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">Business Type</CFormLabel>
                    <CFormInput value={formData.businessType} type="Text" id="inputText4" onChange={(e) => setFormData({ ...formData, businessType: e.target.value })} required />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">Industry Type</CFormLabel>
                    <CFormInput value={formData.industryType} type="Text" id="inputText4" onChange={(e) => setFormData({ ...formData, industryType: e.target.value })} required />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">Business's NTN Number</CFormLabel>
                    <CFormInput value={formData.ntnNumber} type="Text" id="inputText4" onChange={(e) => setFormData({ ...formData, ntnNumber: e.target.value })} required />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">Established Since</CFormLabel>
                    <CFormInput type="date" id="inputText4" value={formData.establishedSince} onChange={(e) => setFormData({ ...formData, establishedSince: e.target.value })} required />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">Register With</CFormLabel>
                    <CFormInput value={formData.registerWith} type="Text" id="inputText4" onChange={(e) => setFormData({ ...formData, registerWith: e.target.value })} required />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">Business Telephone Number</CFormLabel>
                    <CFormInput value={formData.businessTelephoneNumber} type="Number" id="inputText4" onChange={(e) => setFormData({ ...formData, businessTelephoneNumber: e.target.value })} required />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">Business Email</CFormLabel>
                    <br></br>
                    <br></br>

                    <CFormInput value={formData.businessEmail} type="Email" id="inputText4" onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })} required />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">Self Employed Professionals (SEP):</CFormLabel>
                    <br></br>
                    <CFormLabel htmlFor="inputText4">Name Of Company</CFormLabel>
                    <CFormInput value={formData.companyName} type="Text" id="inputText4" onChange={(e) => setFormData({ ...formData, companyName: e.target.value })} required />
                  </CCol>

                  <CCol md={6}>
                    <CFormLabel htmlFor="inputState">Type Of Business</CFormLabel>
                    <CFormSelect id="inputState" value={formData.typeOfBusiness} onChange={(e) => setFormData({ ...formData, typeOfBusiness: e.target.value })} required>
                      <option>Select</option>
                      <option>Sole Proprietorship</option>
                      <option>Patnership</option>
                      <option>Other</option>
                    </CFormSelect>
                    <br></br>
                    <CFormInput type="Text" id="inputText4" placeholder="Please Specify" value={formData.s_specify_TypeOFBusiness} onChange={(e) => setFormData({ ...formData, s_specify_TypeOFBusiness: e.target.value })} required />
                  </CCol>

                  <CCol md={6}>
                    <CFormLabel htmlFor="inputState">Professional Qualifications</CFormLabel>
                    <CFormSelect id="inputState" value={formData.professionalQualifications} onChange={(e) => setFormData({ ...formData, professionalQualifications: e.target.value })} required>
                      <option>Select</option>
                      <option>Chartered Accountant</option>
                      <option>Doctor</option>
                      <option>Engineer</option>
                      <option>Architect</option>
                      <option>Other</option>
                    </CFormSelect>
                    <br></br>
                  </CCol>
                  {/* <CFormInput type="Text" id="inputText4" placeholder="Please Specify" value={formData.s_specify_professionalQualifications} onChange={(e) => setFormData({ ...formData, s_specify_professionalQualifications: e.target.value })} required />
                  </CCol> */}

                  {/* <div class="btn-group" role="" arial-label="basic-example">
                    <CButton type="button" class="btn btn-outline-primary btn-lg" onClick={() => contact2('/form3')}>Prev Page</CButton>
                    <CButton type="button" class="btn btn-outline-primary btn-lg" onClick={() => contact2('/form7')}>Next Page</CButton>
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
export default BusinessDetails
