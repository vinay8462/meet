/* eslint-disable react/no-unknown-property */
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import Footer from '../Footer'
import AboutCovidFaqList from '../AboutCovidFaqList'
import AboutCovidFactList from '../AboutCovidFactList'
import './index.css'

class About extends Component {
  state = {
    isLoading: true,
    aboutList: {},
    aboutFaq: {},
  }

  componentDidMount() {
    this.aboutCovidList()
  }

  aboutCovidList = async () => {
    const apiUrl = 'https://apis.ccbp.in/covid19-faqs'
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const aboutBannerData = data.factoids.map(eachItem => ({
        banner: eachItem.banner,
        id: eachItem.id,
      }))
      const aboutFaqData = data.faq.map(eachItem => ({
        aboutAnswer: eachItem.answer,
        aboutCategory: eachItem.category,
        aboutQuestionNo: eachItem.qno,
        aboutQuestion: eachItem.question,
      }))

      this.setState({
        aboutFaq: aboutFaqData,
        aboutList: aboutBannerData,
        isLoading: false,
      })
    } else {
      console.log('data not available')
    }
  }

  aboutCovidLists = () => {
    const {aboutFaq, aboutList} = this.state
    return (
      <>
        <ul className="About-about-facts" testid="faqsUnorderedList">
          {aboutFaq.map(eachItem => (
            <AboutCovidFaqList
              answer={eachItem.aboutAnswer}
              question={eachItem.aboutQuestion}
              key={eachItem.aboutQuestionNo}
            />
          ))}
        </ul>

        <h1 className="About-heading-class">Factoids</h1>
        <ul className="About-about-facts">
          {aboutList.map(eachItem => (
            <AboutCovidFactList banner={eachItem.banner} key={eachItem.id} />
          ))}
        </ul>
      </>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <>
        <Header />
        <div className="About-container">
          {isLoading ? (
            <div className="loading-class" testid="aboutRouteLoader">
              <Loader type="Oval" color="#007BFF" height={50} width={50} />
            </div>
          ) : (
            <>
              <div className="About-container-column">
                <h1 className="About-heading">About</h1>
                <p className="About-paragraph">
                  Last update on march 28th 2021.
                </p>
                <p className="About-heading-class">
                  COVID-19 vaccines be ready for distribution
                </p>
              </div>
              <div>{this.aboutCovidLists()}</div>
            </>
          )}
        </div>
        <Footer />
      </>
    )
  }
}

export default About
