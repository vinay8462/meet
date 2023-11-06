import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const NotFound = () => (
  <>
    <Header />
    <div className="NotFound-container">
      <img
        src="https://res.cloudinary.com/vinay-simhadri/image/upload/v1698556660/covidDashboard/Group_7485_kh1bzl.svg"
        alt="not-found-pic"
      />
      <h1 className="NotFound-heading">PAGE NOT FOUND</h1>
      <p className="NotFound-paragraph">
        we are sorry, the page you requested could not be found
      </p>
      <div>
        <Link to="/">
          <button type="button" className="NotFound-button">
            Home
          </button>
        </Link>
      </div>
    </div>
  </>
)

export default NotFound
