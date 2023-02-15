import React from 'react'
import {
    CButton,
    CCard,
    CCardBody,
    CCardFooter,
    CCardGroup,
    CCardHeader,
    CCardImage,
    CCardLink,
    CCardSubtitle,
    CCardText,
    CCardTitle,
    CListGroup,
    CListGroupItem,
    CNav,
    CNavItem,
    CNavLink,
    CCol,
    CRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'

import ReactImg from 'src/assets/images/4.jpeg'

const Customers = () => {
    return (
        <DocsExample href="components/card/#grid-cards">
            <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }}>
                <CCard>
                    <CCardImage orientation="top" src={ReactImg} />
                    <CCardBody>
                        <CCardTitle>Sarfaraz Ahmed</CCardTitle>

                    </CCardBody>
                    <CListGroup flush>
                        <CListGroupItem>Application No. 0000022</CListGroupItem>
                        <CListGroupItem>Disbursement Date 12/5/2022</CListGroupItem>
                        <CListGroupItem>8 Months Tenure</CListGroupItem>
                        <CListGroupItem>8,00,000</CListGroupItem>
                    </CListGroup>
                    <CCardBody>
                        <CCardLink href="#">View Full Profile</CCardLink>
                    </CCardBody>
                </CCard>

                <CCol xs>
                    <CCard>
                        <CCardImage orientation="top" src={ReactImg} />
                        <CCardBody>
                            <CCardTitle>Saleem Merchant</CCardTitle>
                        </CCardBody>
                        <CListGroup flush>
                            <CListGroupItem>Application No. 0000021</CListGroupItem>
                            <CListGroupItem>Disbursement Date 20/4/2022</CListGroupItem>
                            <CListGroupItem>9 Months Tenure</CListGroupItem>
                            <CListGroupItem>1,00,000</CListGroupItem>
                        </CListGroup>
                        <CCardBody>
                            <CCardLink href="#">View Full Profile</CCardLink>
                        </CCardBody>
                    </CCard>
                </CCol>

                <CCol xs>
                    <CCard>
                        <CCardImage orientation="top" src={ReactImg} />
                        <CCardBody>
                            <CCardTitle>Uzma Aftab</CCardTitle>
                        </CCardBody>
                        <CListGroup flush>
                            <CListGroupItem>Application No. 0000020</CListGroupItem>
                            <CListGroupItem>Disbursement Date 11/4/2022</CListGroupItem>
                            <CListGroupItem>6 Months Tenure</CListGroupItem>
                            <CListGroupItem>6,00,000</CListGroupItem>
                        </CListGroup>
                        <CCardBody>
                            <CCardLink href="#">View Full Profile</CCardLink>
                        </CCardBody>
                    </CCard>
                </CCol>
                <CCol xs>
                    <CCard>
                        <CCardImage orientation="top" src={ReactImg} />
                        <CCardBody>
                            <CCardTitle>Sara Ansari</CCardTitle>
                        </CCardBody>
                        <CListGroup flush>
                            <CListGroupItem>Application No. 0000019</CListGroupItem>
                            <CListGroupItem>Disbursement Date 29/3/2022</CListGroupItem>
                            <CListGroupItem>6 Month Tenure</CListGroupItem>
                            <CListGroupItem>3,00,000</CListGroupItem>
                        </CListGroup>
                        <CCardBody>
                            <CCardLink href="#">View Full Profile</CCardLink>
                        </CCardBody>
                    </CCard>
                </CCol>

                <CCol xs>
                    <CCard>
                        <CCardImage orientation="top" src={ReactImg} />
                        <CCardBody>
                            <CCardTitle>Hiba Shiraz</CCardTitle>
                        </CCardBody>
                        <CListGroup flush>
                            <CListGroupItem>Application No. 0000019</CListGroupItem>
                            <CListGroupItem>Disbursement Date 29/3/2022</CListGroupItem>
                            <CListGroupItem>6 Month Tenure</CListGroupItem>
                            <CListGroupItem>1,00,000</CListGroupItem>
                        </CListGroup>
                        <CCardBody>
                            <CCardLink href="#">View Full Profile</CCardLink>
                        </CCardBody>
                    </CCard>
                </CCol>
                <CCol xs>
                    <CCard>
                        <CCardImage orientation="top" src={ReactImg} />
                        <CCardBody>
                            <CCardTitle>Mohammad Usman</CCardTitle>
                        </CCardBody>
                        <CListGroup flush>
                            <CListGroupItem>Application No. 0000017</CListGroupItem>
                            <CListGroupItem>Disbursement Date 25/2/2022</CListGroupItem>
                            <CListGroupItem>12 Month Tenure</CListGroupItem>
                            <CListGroupItem>2,00,000</CListGroupItem>
                        </CListGroup>
                        <CCardBody>
                            <CCardLink href="#">View Fill Profile</CCardLink>
                        </CCardBody>
                    </CCard>
                </CCol>
                <CCol xs>
                    <CCard>
                        <CCardImage orientation="top" src={ReactImg} />
                        <CCardBody>
                            <CCardTitle>Abdul Hannan</CCardTitle>
                        </CCardBody>
                        <CListGroup flush>
                            <CListGroupItem>Application No. 0000016</CListGroupItem>
                            <CListGroupItem>Disbursement Date 20/01/2022</CListGroupItem>
                            <CListGroupItem>7 Month Tenure</CListGroupItem>
                            <CListGroupItem>5,00,000</CListGroupItem>
                        </CListGroup>
                        <CCardBody>
                            <CCardLink href="#">View Full Profile</CCardLink>
                        </CCardBody>
                    </CCard>
                </CCol>
                <CCol xs>
                    <CCard>
                        <CCardImage orientation="top" src={ReactImg} />
                        <CCardBody>
                            <CCardTitle>Madiha Sarfaraz</CCardTitle>
                        </CCardBody>
                        <CListGroup flush>
                            <CListGroupItem>Application No. 0000015</CListGroupItem>
                            <CListGroupItem>Disbursement Date 10/4/2022</CListGroupItem>
                            <CListGroupItem>12 Month Tenure</CListGroupItem>
                            <CListGroupItem>10,00,000</CListGroupItem>
                        </CListGroup>
                        <CCardBody>
                            <CCardLink href="#">View Full Profile</CCardLink>
                        </CCardBody>
                    </CCard>
                </CCol>
                <CCol xs>
                    <CCard>
                        <CCardImage orientation="top" src={ReactImg} />
                        <CCardBody>
                            <CCardTitle>Sana Mustaqeem</CCardTitle>
                        </CCardBody>
                        <CListGroup flush>
                            <CListGroupItem>Application No. 0000014</CListGroupItem>
                            <CListGroupItem>Disbursement Date 29/10/2021</CListGroupItem>
                            <CListGroupItem>8 Month Tenure</CListGroupItem>
                            <CListGroupItem>5,00,000</CListGroupItem>
                        </CListGroup>
                        <CCardBody>
                            <CCardLink href="#">View Full Profile</CCardLink>
                        </CCardBody>
                    </CCard>
                </CCol>
                <CCol xs>
                    <CCard>
                        <CCardImage orientation="top" src={ReactImg} />
                        <CCardBody>
                            <CCardTitle>Huzaifa Rehman</CCardTitle>
                        </CCardBody>
                        <CListGroup flush>
                            <CListGroupItem>Application No. 0000013</CListGroupItem>
                            <CListGroupItem>Disbursement Date 24/8/2021</CListGroupItem>
                            <CListGroupItem>17 Month Tenure</CListGroupItem>
                            <CListGroupItem>3,00,000</CListGroupItem>
                        </CListGroup>
                        <CCardBody>
                            <CCardLink href="#">View Full Profile</CCardLink>
                        </CCardBody>
                    </CCard>
                </CCol>
                <CCol xs>
                    <CCard>
                        <CCardImage orientation="top" src={ReactImg} />
                        <CCardBody>
                            <CCardTitle>Muhammad Haroon</CCardTitle>
                        </CCardBody>
                        <CListGroup flush>
                            <CListGroupItem>Application No. 0000012</CListGroupItem>
                            <CListGroupItem>Disbursement Date 20/5/2021</CListGroupItem>
                            <CListGroupItem>14 Month Tenure</CListGroupItem>
                            <CListGroupItem>3,00,000</CListGroupItem>
                        </CListGroup>
                        <CCardBody>
                            <CCardLink href="#">View Full Profile</CCardLink>
                        </CCardBody>
                    </CCard>
                </CCol>

                <CCol xs>
                    <CCard>
                        <CCardImage orientation="top" src={ReactImg} />
                        <CCardBody>
                            <CCardTitle>Atta Ullah</CCardTitle>
                        </CCardBody>
                        <CListGroup flush>
                            <CListGroupItem>Application No. 0000012</CListGroupItem>
                            <CListGroupItem>Disbursement Date 30/11/2021</CListGroupItem>
                            <CListGroupItem>14 Month Tenure</CListGroupItem>
                            <CListGroupItem>7,00,000</CListGroupItem>
                        </CListGroup>
                        <CCardBody>
                            <CCardLink href="#">View Full Profile</CCardLink>
                        </CCardBody>
                    </CCard>
                </CCol>



            </CRow>
        </DocsExample>


    )
}
export default Customers