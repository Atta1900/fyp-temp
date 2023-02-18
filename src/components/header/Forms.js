import React, { useState } from "react";
import Application from "src/views/pages/appforms/Application";
import BusinessDetails from "src/views/pages/appforms/BusinessDetails";
import ContactInfo from "src/views/pages/appforms/ContactInfo";
import DetailsOfReferences from "src/views/pages/appforms/DetailsOfReference";
import EmployementDetail from "src/views/pages/appforms/EmployementDetail";
import IncomeDetails from "src/views/pages/appforms/IncomeDetails";
import { CButton, CForm } from "@coreui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormTitles = ["Personal Information", "ContactInfo", "Employement Details", "Income Details", "Business Details", "DetailRefrence", "Documents"];
// making the array object to store the attribute data then pass this data to api 
// const data = {
//     titles,
//     FirstName,
//     MiddleName,
//     LastName,
//     FatherName,
//     CNIC,
//     Old_Nic,
//     CNIC_Is_Date,
//     CNIC_Ex_Date,
//     PassportNumber,
//     DateOfBirth,
//     MaritalStatus,
//     Children,
//     OtherDependants,
//     Education,
//     Gender,
//     address,
//     postalcode,
//     city,
//     mobileNumber,
//     email,
//     residentType,
//     accomodationType,
//     monthlyRent,
//     installementAmount,
//     permanentAddress,
//     prepostalcode,
//     cityPer,
//     preresidentType,
//     numberOfCar,
//     Model,
//     C_CompnayName,
//     C_CompanyAddres,
//     C_JobTitle,
//     C_Department,
//     C_EmployementSince,
//     C_EmploymentNumber,
//     C_Extension,
//     C_OfficeEmail,
//     C_EmployementType,
//     P_CompnayName,
//     P_CompanyAddres,
//     P_JobTitle,
//     P_Department,
//     P_EmployementSince,
//     P_EmployementSinceT,
//     P_EmploymentNumber,
//     P_Extension,
//     P_OfficeEmail,
//     P_EmployementType,
//     MonthlyGrossIncome,
//     MonthlyNetIncome,
//     SalarayDisbursementDay,
//     OtherVerIncome,
//     SourceOfOtherIncome,
//     AverageMonthlyIncome,
//     BankName,
//     AccountNumber,
//     AccountType,
//     Branch,
//     DesiredRepTenure,
//     LoanReqFor,
//     AmmountSoughtPKR,
//     IncomeAmountPreMonth,
//     numberOfBusiness,
//     businessTitle,
//     businessAddress,
//     businessType,
//     industryType,
//     ntnNumber,
//     establishedSince,
//     registerWith,
//     businessTelephoneNumber,
//     businessEmail,
//     companyName,
//     typeOfBusiness,
//     professionalQualifications,
//     R_FullName,
//     R_CINC,
//     R_PossportNumber,
//     R_Address,
//     R_TelephoneNumOffice,
//     R_TelephoneNumResidence,
//     R_Email,
//     R_CellNumber,
//     R_Relationship,
//     R2_FullName,
//     R2_CINC,
//     R2_PossportNumber,
//     R2_Address,
//     R2_TelephoneNumOffice,
//     R2_TelephoneNumResidence,
//     R2_Email,
//     R2_CellNumber,
//     R2_Relationship,
//     bankstatment,
//     nicpic,
//     kebill,
//     gassbill
// };


function Forms() {

    const [page, setPage] = useState(0);
    // const [pdfFile, setPdfFile] = useState(null);
    // const pdfFileInput = React.createRef();
    // const handlePdfFileChange = (event) => {
    //     setPdfFile(event.target.files[0]);
    //   };

    const [formData, setFormData] = useState({
        // Titles: '',
        FirstName: '',
        MiddleName: '',
        LastName: '',
        FatherName: '',
        CNIC: '',
        Old_Nic: '',
        CNIC_Is_Date: '',
        CNIC_Ex_Date: '',
        PassportNumber: '',
        DateOfBirth: '',
        MaritalStatus: '',
        Children: '',
        OtherDependants: '',
        Education: '',
        Gender: '',
        address: '',
        postalcode: '',
        city: '',
        mobileNumber: '',
        email: '',
        residentType: '',
        accomodationType: '',
        monthlyRent: '',
        installementAmount: '',
        permanentAddress: '',
        prepostalcode: '',
        cityPer: '',
        preresidentType: '',
        numberOfCar: '',
        Model: '',
        C_CompnayName: '',
        C_CompanyAddres: '',
        C_JobTitle: '',
        C_Department: '',
        C_EmployementSince: '',
        C_EmploymentNumber: '',
        C_Extension: '',
        C_OfficeEmail: '',
        C_EmployementType: '',
        P_CompnayName: '',
        P_CompanyAddres: '',
        P_JobTitle: '',
        P_Department: '',
        P_EmployementSince: '',
        P_EmployementSinceT: '',
        P_EmploymentNumber: '',
        P_Extension: '',
        P_OfficeEmail: '',
        P_EmployementType: '',
        MonthlyGrossIncome: '',
        MonthlyNetIncome: '',
        SalarayDisbursementDay: '',
        OtherVerIncome: '',
        SourceOfOtherIncome: '',
        AverageMonthlyIncome: '',
        BankName: '',
        AccountNumber: '',
        AccountType: '',
        Branch: '',
        DesiredRepTenure: '',
        LoanReqFor: '',
        s_LoanReqFor: '',
        AmmountSoughtPKR: '',
        IncomeAmountPreMonth: '',
        numberOfBusiness: '',
        businessTitle: '',
        businessAddress: '',
        businessType: '',
        industryType: '',
        ntnNumber: '',
        establishedSince: '',
        registerWith: '',
        businessTelephoneNumber: '',
        businessEmail: '',
        companyName: '',
        typeOfBusiness: '',
        s_specify_TypeOFBusiness: '',
        professionalQualifications: '',
        // s_specify_professionalQualifications: '',
        R_FullName: '',
        R_CINC: '',
        R_PossportNumber: '',
        R_Address: '',
        R_TelephoneNumOffice: '',
        R_TelephoneNumResidence: '',
        R_Email: '',
        R_CellNumber: '',
        R_Relationship: '',
        R2_FullName: '',
        R2_CINC: '',
        R2_PossportNumber: '',
        R2_Address: '',
        R2_TelephoneNumOffice: '',
        R2_TelephoneNumResidence: '',
        R2_Email: '',
        R2_CellNumber: '',
        R2_Relationship: '',
        // bankStatementFile: '',
        // nicPicFile: '',
        // keBillFile: '',
        // gasBillFile: '',
        // profilePicFile: '',

    });

    // const handleSubmit = (event) => {
    //     event.preventDefault();

    //     const formData = new FormData();
    //     formData.append('pdf_file', pdfFile);
    //     formData.append('text_input_1', textInput1);
    //     formData.append('text_input_2', textInput2);

    //     fetch('http://your-django-api-endpoint-url/', {
    //       method: 'POST',
    //       body: formData
    //     })
    //     .then(response => {
    //       // handle response from the Django API endpoint
    //     })
    //     .catch(error => {
    //       // handle error
    //     });
    //   };
    const nav = useNavigate()
    const navform2 = useNavigate()

    const PageDisplay = () => {
        if (page === 0) {
            return <Application formData={formData} setFormData={setFormData} />;
        } else if (page === 1) {
            return <ContactInfo formData={formData} setFormData={setFormData} />;
        } else if (page === 2) {
            return <EmployementDetail formData={formData} setFormData={setFormData} />;
        } else if (page === 3) {
            return <IncomeDetails formData={formData} setFormData={setFormData} />;
        } else if (page === 4) {
            return <BusinessDetails formData={formData} setFormData={setFormData} />;
        } else {
            return <DetailsOfReferences formData={formData} setFormData={setFormData} />;
        }
        // } else {
        //     navform2 = ('/dashboard')

        // }
        // } else {
        //     return <Docsubmission formData={formData} setFormData={setFormData} />;
        // }
    };

    return (
        <div className='bg-dark min-vh-110 d-flex flex-row align-items-center'>
            <div >
                <div>{PageDisplay()}</div>
                <CForm className="row g-3">
                    <div class="btn-group" role="" arial-label="basic-example" className="justify-content-center">
                        <CButton
                            type="button"
                            class="btn btn-outline-primary btn-lg"
                            disabled={page == 0}
                            onClick={() => { setPage((currPage) => currPage - 1); }}>
                            Prev
                        </CButton>
                        <CButton
                            type="button"
                            class="btn btn-outline-primary btn-lg"
                            onClick={(e) => {
                                if (page !== FormTitles.length - 1) {
                                    setPage((currPage) => currPage + 1);

                                    console.log(formData);
                                } else if (page === FormTitles.length - 1) {
                                    // setPage((currPage) => currPage + 1);
                                    alert("FORM SUBMITTED");
                                    e.preventDefault();
                                    axios.post("http://127.0.0.1:8000/api/ApplicationForm", FormData)
                                        .then(response => {
                                            console.log(response);
                                            // console.target.reset();
                                        })
                                        .catch(error => {
                                            console.log(error);
                                        }).then(
                                            {

                                            }
                                        );
                                }
                            }}
                        >
                            {page === FormTitles.length - 1 ? "Submit" : "Next"}
                        </CButton>
                    </div>
                </CForm>
            </div>
        </div>
    );
}

export default Forms;