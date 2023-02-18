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
    CRow,
} from '@coreui/react'

import DocsExample from './DocsExample'
function DocumentSubmission({ formData, setFormData }) {
    const handleFileChange = (fieldName, file) => {
        const newFormData = new FormData();
        newFormData.append(fieldName, file);
        // copy other fields from the existing form data
        Object.keys(formData).forEach((key) => {
            if (key !== fieldName) {
                newFormData.append(key, formData[key]);
            }
        });
        setFormData(newFormData);
    };

    return (
        <div md="6" className='bg-dark min-vh-110 d-flex flex-row align-items-center'>
            <CRow className='justify-content-center'>
                <CCol md={5}>
                    <CCard className="md-6">
                        <CCardBody>
                            <DocsExample href="forms/layout#gutters">
                                <CForm className="row g-3">
                                    <h1>Document Submission</h1>
                                    <h5>Submit The Document in .pdf Format</h5>
                                    <div></div>
                                    <div></div>
                                    <CCol>
                                        <div className="mb-3">
                                            <CFormLabel htmlFor="bankStatementFileInput">Bank Statement Of Your Account Of Last 1 Year With The Signature Of Branch Manager</CFormLabel>
                                            <CFormInput id="bankStatementFileInput" type='file' onChange={(e) => handleFileChange('bankStatementFile', e.target.files[0])} required />
                                        </div>
                                    </CCol>
                                    <div></div>
                                    <div></div>
                                    <CCol>
                                        <div className="mb-3">
                                            <CFormLabel htmlFor="nicPicFileInput">Clear Scanned Copy Of CNIC ( front/back )</CFormLabel>
                                            <CFormInput id="nicPicFileInput" type='File' onChange={(e) => handleFileChange('nicPicFile', e.target.files[0])} required />
                                        </div>
                                    </CCol>
                                    <div></div>
                                    <div></div>
                                    <CCol>
                                        <div className="mb-3">
                                            <CFormLabel htmlFor="keBillFileInput">Clear Scanned Copy Of K-Electric Bill ( KE ) Previously Paid</CFormLabel>
                                            <CFormInput id="keBillFileInput" type='file' onChange={(e) => handleFileChange('keBillFile', e.target.files[0])} required />
                                        </div>
                                    </CCol>
                                    <div></div>
                                    <div></div>
                                    <CCol>
                                        <div className="mb-3">
                                            <CFormLabel htmlFor="gasBillFileInput">Clear Scanned Copy Of Gas Bill ( SSGS ) Previously Paid </CFormLabel>
                                            <CFormInput id="gasBillFileInput" type='file' onChange={(e) => handleFileChange('gasBillFile', e.target.files[0])} required />
                                        </div>
                                    </CCol>
                                    <CCol>
                                        <div className="mb-3">
                                            <CFormLabel htmlFor="profilePicFileInput">Profile Picture  </CFormLabel>
                                            <CFormInput id="profilePicFileInput" type='file' onChange={(e) => handleFileChange('profilePicFile', e.target.files[0])} required />
                                        </div>
                                    </CCol>
                                    <div></div>
                                    <div></div>
                                </CForm>
                            </DocsExample>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </div>
    )
}
export default DocumentSubmission
