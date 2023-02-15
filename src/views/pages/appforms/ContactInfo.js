import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import Forms from 'src/components/header/Forms'

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

function ContactInfo({ formData, setFormData }) {

  return (
    <div>
      <CRow className='justify-content-center'>
        <CCol md={5}>
          <CCard className="mb-6">
            <CCardBody>
              <DocsExample href="forms/layout#gutters">
                <CForm className="row g-3">
                  <h1>Contact Info</h1>
                  <CCol xs={12}>
                    <CFormLabel htmlFor="inputText4">Address</CFormLabel>
                    <CFormInput id="inputAddress" type='Text' value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} required />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">Postal Code</CFormLabel>
                    <CFormInput type="Number" id="inputText4" value={formData.postalcode} onChange={(e) => setFormData({ ...formData, postalcode: e.target.value })} required />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">City</CFormLabel>
                    <CFormInput type="Text" id="inputText4" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} required />
                  </CCol>

                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">Mobile Number</CFormLabel>
                    <CFormInput type="Number" id="inputText4" value={formData.mobileNumber} onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })} required />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">Email</CFormLabel>
                    <CFormInput type="Email" id="inputText4" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputState">Resident Type</CFormLabel>
                    <CFormSelect id="inputState" value={formData.residentType} onChange={(e) => setFormData({ ...formData, residentType: e.target.value })} required>
                      <option>Select</option>
                      <option>Owned</option>
                      <option>Rented</option>
                      <option>Company</option>
                      <option>Parents</option>
                      <option>Financed/Leased</option>
                    </CFormSelect>
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputState">Accomodation Type</CFormLabel>
                    <CFormSelect id="inputState" value={formData.accomodationType} onChange={(e) => setFormData({ ...formData, accomodationType: e.target.value })} required>
                      <option>Select</option>
                      <option>House</option>
                      <option>Appartment</option>
                      <option>Portion</option>
                      <option>Room</option>
                    </CFormSelect>
                  </CCol>

                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">Monthly Rent (If Rented)</CFormLabel>
                    <CFormInput type="Number" id="inputText4" value={formData.monthlyRent} onChange={(e) => setFormData({ ...formData, monthlyRent: e.target.value })} required />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">Installment Amount (If Motgage)</CFormLabel>
                    <CFormInput type="Number" id="inputText4" value={formData.installementAmount} onChange={(e) => setFormData({ ...formData, installementAmount: e.target.value })} required />
                  </CCol>

                  <CCol xs={12}>
                    <CFormLabel htmlFor="inputText4">Permanent Address</CFormLabel>
                    <CFormInput id="inputAddress" type='Text' value={formData.permanentAddress} onChange={(e) => setFormData({ ...formData, permanentAddress: e.target.value })} required />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">Postal Code (Permanent)</CFormLabel>
                    <CFormInput type="Number" id="inputText4" value={formData.prepostalcode} onChange={(e) => setFormData({ ...formData, prepostalcode: e.target.value })} required />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputText4">City (Permanent)</CFormLabel>
                    <CFormInput type="Text" id="inputText4" value={formData.cityPer} onChange={(e) => setFormData({ ...formData, cityPer: e.target.value })} required />
                  </CCol>

                  <CCol md={6}>
                    <CFormLabel htmlFor="inputState">Resident Type (Permanent)</CFormLabel>
                    <CFormSelect id="inputState" value={formData.preresidentType} onChange={(e) => setFormData({ ...formData, preresidentType: e.target.value })} required>
                      <option>Select</option>
                      <option>Owned</option>
                      <option>Rented</option>
                      <option>Company</option>
                      <option>Parents</option>
                      <option>Financed/Leased</option>
                    </CFormSelect>
                  </CCol>

                  <CCol mb={3}>
                    <CFormLabel htmlFor="inputText4">Number Of Cars</CFormLabel>
                    <CFormInput type="Number" id="inputText4" value={formData.numberOfCar} onChange={(e) => setFormData({ ...formData, numberOfCar: e.target.value })} />
                  </CCol>

                  <CCol md={3}>
                    <CFormLabel htmlFor="inputText4">Make & Model</CFormLabel>
                    <CFormInput type="Text" id="inputText4" value={formData.Model} onChange={(e) => setFormData({ ...formData, Model: e.target.value })} />
                  </CCol>
                  {/* <div class="btn-group" role="" arial-label="basic-example">
                    <CButton type="button" class="btn btn-outline-primary btn-lg" onClick={() => navform3('/form1')}>Prev Page</CButton>
                    <CButton type="button" class="btn btn-outline-primary btn-lg" onClick={() => navform3('/form3')}>Next Page</CButton>
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
export default ContactInfo
