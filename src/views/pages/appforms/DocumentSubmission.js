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
    // const contact2 = useNavigate();
    const [bankStatementFile, setBankStatementFile] = useState(null);
    const [nicPicFile, setNicPicFile] = useState(null);
    const [keBillFile, setKeBillFile] = useState(null);
    const [gasBillFile, setGasBillFile] = useState(null);
    const [profilePicFile, setProfilePicFile] = useState(null);

    const handleBankStatementFileChange = (event) => {
        const file = event.target.files[0];
        setBankStatementFile(file);
        setFormData({ ...formData, bankstatment: file });
    };

    const handleNicPicFileChange = (event) => {
        const file = event.target.files[0];
        setNicPicFile(file);
        setFormData({ ...formData, nicpic: file });
    };

    const handleKeBillFileChange = (event) => {
        const file = event.target.files[0];
        setKeBillFile(file);
        setFormData({ ...formData, kebill: file });
    };

    const handleGasBillFileChange = (event) => {
        const file = event.target.files[0];
        setGasBillFile(file);
        setFormData({ ...formData, gasbill: file });
    };

    const handleProfilePicFileChange = (event) => {
        const file = event.target.files[0];
        setProfilePicFile(file);
        setFormData({ ...formData, profilePic: file });
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
                                            <CFormLabel htmlFor="formFile">Bank Statement Of Your Account Of Last 1 Year With The Signature Of Branch Manager</CFormLabel>
                                            <CFormInput type="file" id="bankStatementFile" files={bankStatementFile} onChange={handleBankStatementFileChange} required />
                                            {/* <CFormInput type="file" id="formFile" onChange={(e) => setFormData({ ...formData, bankstatment: e.target.files[0] })} required /> */}
                                        </div>
                                    </CCol>
                                    <div></div>
                                    <div></div>
                                    <CCol>
                                        <div className="mb-3">
                                            <CFormLabel htmlFor="formFile">Clear Scanned Copy Of CNIC ( front/back )</CFormLabel>
                                            <CFormInput type="file" id="nicPicFile" files={nicPicFile} onChange={handleNicPicFileChange} required />

                                            {/* <CFormInput type="file" id="formFile" onChange={(e) => setFormData({ ...formData, nicpic: e.target.files[0] })} required /> */}
                                        </div>
                                    </CCol>
                                    <div></div>
                                    <div></div>
                                    <CCol>
                                        <div className="mb-3">
                                            <CFormLabel htmlFor="formFile">Clear Scanned Copy Of K-Electric Bill ( KE ) Previously Paid</CFormLabel>
                                            <CFormInput type="file" id="keBillFile" files={keBillFile} onChange={handleKeBillFileChange} required />

                                            {/* <CFormInput type="file" id="formFile" onChange={(e) => setFormData({ ...formData, kebill: e.target.files[0] })} required /> */}
                                        </div>
                                    </CCol>
                                    <div></div>
                                    <div></div>
                                    <CCol>
                                        <div className="mb-3">
                                            <CFormLabel htmlFor="formFile">Clear Scanned Copy Of Gas Bill ( SSGS ) Previously Paid </CFormLabel>

                                            <CFormInput type="file" id="gasBillFile" files={gasBillFile} onChange={handleGasBillFileChange} required />

                                            {/* <CFormInput type="file" id="formFile" onChange={(e) => setFormData({ ...formData, gassbill: e.target.files[0] })} required /> */}
                                        </div>
                                    </CCol>
                                    <div></div>
                                    <div></div>

                                    <CCol>
                                        <div className="mb-3">
                                            <CFormLabel htmlFor="formFile">Clear Scanned Picture Of You In JPEG Format</CFormLabel>

                                            <CFormInput type="file" id="profilePicFile" files={profilePicFile} onChange={handleProfilePicFileChange} required />

                                            {/* <CFormInput type="file" id="formFile" onChange={(e) => setFormData({ ...formData, profilePic: e.target.files[0] })} required /> */}
                                        </div>
                                    </CCol>

                                    {/* 
                                    <div class="btn-group" role="group" arial-label="basic-example">
                                        <CButton type="button" class="btn btn-outline-primary btn-lg" onClick={() => contact2('/form4')}>Prev Page</CButton>
                                        <CButton type="button" class="btn btn-outline-primary btn-lg" onClick={() => contact2('/form5')}>Next Page</CButton>
                                    </div> */}
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

