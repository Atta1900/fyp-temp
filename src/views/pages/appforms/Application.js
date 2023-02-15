import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Form from 'src/components/header/Forms'
import {
    CButton,
    CCard,
    CCardBody,
    CCol,
    CForm,
    CFormCheck,
    CFormInput,
    CFormLabel,
    CFormSelect,
    CRow,
} from '@coreui/react'

import DocsExample from './DocsExample'

//const navform1 = useNavigate()

// const [isSuccess, setSuccess] = useState(false)
// const [isError, setError] = useState(false)
// const [errorMessage, setErrorMessage] = useState('')


// const handleSubmit = (e) => {
//     e.preventDefault();
//     if (Title === "" || FirstName === "" || MiddleName === "" || LastName === "") {
//         alert("All fields are required!");
//     } else {
//         navform1("/form2");
//     }
//};

function Application({ formData, setFormData }) {
    // const [date, setDate] = useState(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric' }))

    return (


        <div>
            <CRow className='justify-content-center'>
                <CCol md={5}>
                    <CCard className="mb-6">
                        <CCardBody>
                            <DocsExample href="forms/layout#gutters">
                                <CForm className="row g-3">
                                    <h1 className='text-justify-center'>Personal Information</h1>
                                    {/* <CCol md={6}>
                                            <CFormLabel htmlFor="inputState">Gender</CFormLabel>
                                            <CFormSelect id="inputState" value={formData.Title} onChange={(e) => setFormData({ ...formData, Title: e.target.value })} required>
                                                <option>Select</option>
                                                <option>Mr</option>
                                                <option>Ms</option>
                                                <option>Mrs</option>
                                            </CFormSelect>

                                        </CCol> */}


                                    {/* <CFormLabel className="col-form-label col-sm-2 pt-0">Title</CFormLabel>
                                    <CCol mb={10}>
                                        <div class="form-check form-check-inline">
                                            <CFormLabel class="form-check-label" for="inlineRadio1">Mr</CFormLabel>
                                            <CFormCheck class="form-check-input" type="radio" name="inlineRadioOptions5" id='inlineRadio1' value={formData.Title} onChange={(e) => setFormData({ ...formData, Titles: e.target.value })} required></CFormCheck>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <CFormLabel class="form-check-label" for="inlineRadio2">Ms</CFormLabel>
                                            <CFormCheck class="form-check-input" type="radio" name="inlineRadioOptions6" id="inlineRadio2" value={formData.Title} onChange={(e) => setFormData({ ...formData, Titles: e.target.value })} required></CFormCheck>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <CFormLabel class="form-check-label" for="inlineRadio3">Mrs</CFormLabel>
                                            <CFormCheck class="form-check-input" type="radio" name="inlineRadioOptions7" id="inlineRadio3" value={formData.Title} onChange={(e) => setFormData({ ...formData, Titles: e.target.value })} required></CFormCheck>
                                        </div>

                                    </CCol> */}
                                    <fieldset></fieldset>
                                    <CCol md={6}>
                                        <CFormLabel htmlFor="inputText4">First Name</CFormLabel>
                                        <CFormInput value={formData.FirstName} type="Text" id="inputText4" onChange={(e) => setFormData({ ...formData, FirstName: e.target.value })} required />
                                    </CCol>
                                    <CCol md={6}>
                                        <CFormLabel htmlFor="inputText5">Middle Name</CFormLabel>
                                        <CFormInput value={formData.MiddleName} type="Text" id="inputText4" onChange={(e) => setFormData({ ...formData, MiddleName: e.target.value })} required />
                                    </CCol>
                                    <CCol md={6}>
                                        <CFormLabel htmlFor="inputText4">Last Name</CFormLabel>
                                        <CFormInput value={formData.LastName} onChange={(e) => setFormData({ ...formData, LastName: e.target.value })} type="Text" id="inputText4" required />
                                    </CCol>
                                    <CCol md={6}>
                                        <CFormLabel htmlFor="inputText4">Father Name</CFormLabel>
                                        <CFormInput type="Text" id="inputText4" value={formData.FatherName} onChange={(e) => setFormData({ ...formData, FatherName: e.target.value })} required />
                                    </CCol>
                                    <CCol md={6}>
                                        <CFormLabel htmlFor="inputText4">CNIC:</CFormLabel>
                                        <CFormInput type="Number" id="inputText4" value={formData.CNIC} onChange={(e) => setFormData({ ...formData, CNIC: e.target.value })} required />
                                    </CCol>

                                    <CCol md={6}>
                                        <CFormLabel htmlFor="inputText4">Old CNIC:</CFormLabel>
                                        <CFormInput type="Number" placeholder="if any" id="inputText4" value={formData.Old_Nic} onChange={(e) => setFormData({ ...formData, Old_Nic: e.target.value })} required />
                                    </CCol>
                                    <CCol md={6}>
                                        <CFormLabel htmlFor="inputText4">CNIC Issuance Date</CFormLabel>
                                        <CFormInput type="date" id="inputText4" value={formData.CNIC_Is_Date} onChange={(e) => setFormData({ ...formData, CNIC_Is_Date: e.target.value })} required />
                                    </CCol>
                                    <CCol md={6}>
                                        <CFormLabel htmlFor="inputText4">CNIC Expiry Date</CFormLabel>
                                        <CFormInput type="date" id="inputText4" value={formData.CNIC_Ex_Date} onChange={(e) => setFormData({ ...formData, CNIC_Ex_Date: e.target.value })} required />
                                    </CCol>
                                    <CCol md={6}>
                                        <CFormLabel htmlFor="inputText4">Passport Number</CFormLabel>
                                        <CFormInput type="Text" id="inputText4" value={formData.PassportNumber} onChange={(e) => setFormData({ ...formData, PassportNumber: e.target.value })} required />
                                    </CCol>
                                    <CCol md={6}>
                                        <CFormLabel htmlFor="inputText4">Date Of Birth</CFormLabel>
                                        <CFormInput type="date" id="inputText4" value={formData.DateOfBirth} onChange={(e) => setFormData({ ...formData, DateOfBirth: e.target.value })} required />
                                    </CCol>
                                    <CCol md={6}>
                                        <CFormLabel htmlFor="inputState">Marital Status</CFormLabel>
                                        <CFormSelect id="inputState" value={formData.MaritalStatus} onChange={(e) => setFormData({ ...formData, MaritalStatus: e.target.value })} required >
                                            <option>Select</option>
                                            <option>Married</option>
                                            <option>Single</option>
                                            <option>Divorced</option>
                                            <option>Widowed</option>
                                        </CFormSelect>
                                    </CCol>
                                    <CCol md={6}>
                                        <CFormLabel htmlFor="inputText4">Dependants</CFormLabel>
                                        <CFormLabel htmlFor="inputText4">: Number Of Children</CFormLabel>
                                        <CFormInput type="Number" id="inputText4" value={formData.Children} onChange={(e) => setFormData({ ...formData, Children: e.target.value })} required />
                                    </CCol>
                                    <CCol md={6}>
                                        <CFormLabel htmlFor="inputText4">Other Dependants</CFormLabel>
                                        <CFormInput type="Text" id="inputText4" placeholder='e.g Father/Mother' value={formData.OtherDependants} onChange={(e) => setFormData({ ...formData, OtherDependants: e.target.value })} required />
                                    </CCol>

                                    <CCol md={6}>
                                        <CFormLabel htmlFor="inputState">Education</CFormLabel>
                                        <CFormSelect id="inputState" value={formData.Education} onChange={(e) => setFormData({ ...formData, Education: e.target.value })} required>
                                            <option>Select</option>
                                            <option>Matric</option>
                                            <option>Intermediate</option>
                                            <option>A/O Level</option>
                                            <option>Bechelor</option>
                                            <option>Masters</option>
                                            <option>M Phill</option>
                                            <option>PHD</option>
                                        </CFormSelect>
                                    </CCol>



                                    <CCol md={6}>
                                        <CFormLabel htmlFor="inputState">Gender</CFormLabel>
                                        <CFormSelect id="inputState" value={formData.Gender} onChange={(e) => setFormData({ ...formData, Gender: e.target.value })} required>
                                            <option>Select</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                        </CFormSelect>

                                        {/* <CFormLabel className="col-form-label col-sm-2 pt-0">Gender</CFormLabel>
                                    <CCol mb={10}>
                                        <div class="form-check form-check-inline">
                                            <CFormCheck class="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio4" value={formData.Gender} onChange={(e) => setFormData({ ...formData, Gender: e.target.value })} required></CFormCheck>
                                            <CFormLabel class="form-check-label" for="inlineRadio4">Male</CFormLabel>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <CFormCheck class="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio5" value={formData.Gender} onChange={(e) => setFormData({ ...formData, Gender: e.target.value })} required></CFormCheck>
                                            <CFormLabel class="form-check-label" for="inlineRadio5">Female</CFormLabel>
                                        </div> */}

                                    </CCol>
                                    {/* <div class="btn-group" role="group" arial-label="basic-example">
                                        <CButton type="button" class="btn btn-outline-primary btn-lg" onClick={handleSubmit}>Next Page</CButton>
                                    </div> */}
                                </CForm>
                            </DocsExample>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </div>
    );
}
export default Application