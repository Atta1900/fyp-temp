import React, { Component, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppSidebar } from './components'
import './scss/style.scss'
import Dashboard from './views/dashboard/Dashboard'
import Application from './views/pages/appforms/Application'
import ContactInfo from './views/pages/appforms/ContactInfo'
import EmployementDetail from './views/pages/appforms/EmployementDetail'
import BusinessDetails from './views/pages/appforms/BusinessDetails'
import IncomeDetails from './views/pages/appforms/IncomeDetails'
import DetailsOfReferences from './views/pages/appforms/DetailsOfReference'
import Docsubmission from './views/pages/appforms/DocumentSubmission'
import Forms from './components/header/Forms'



const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

// import ContactInfo from './ApplicationForms/ContactInfo'
// import EmployementDetail from './ApplicationForms/EmployementDetail'
// import BusinessDetails from './ApplicationForms/BusinessDetails'
// import IncomeDetails from './ApplicationForms/IncomeDetails'
// import DetailsOfReferences from './ApplicationForms/DetailsOfReference'
// import Docsubmission from './ApplicationForms/DocumentSubmission'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/" name="Login Page" element={<Login />} />
            <Route exact path="/register" name="Register Page" element={<Register />} />
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<Page500 />} />
            <Route path="*" name="Home" element={<DefaultLayout />} />
            <Route path="/form1" element={<Forms />} />
            <Route path="/form2" element={<ContactInfo />} />
            <Route path="/form3" element={<EmployementDetail />} />
            <Route path="/form4" element={<BusinessDetails />} />
            <Route path="/form5" element={<IncomeDetails />} />
            <Route path="/form6" element={<DetailsOfReferences />} />
            <Route path="/form7" element={<Docsubmission />} />

          </Routes>
        </Suspense>
      </BrowserRouter>
    )
  }
}

export default App
