import { Link, useParams } from 'react-router-dom'
import './Navbar.css'
import "./NavbarMedia.css"
import phone from '../Section/images/phone.png'
import question from '../Section/images/questions.png'
import download from '../Section/images/download.png'
import message from '../Section/images/message.png'
import { useEffect } from 'react'
import Languages from "../../lang/languages"
import { useLang } from '../../lang/langContext'

export default function Navbar () {

	const [language, setLanguage] = useLang()
	const { lang } = useParams()
	
	function repeats(more) {
		more.children[0].children[0].classList.remove('back')
		more.children[2].children[0].classList.remove('back')
		more.children[3].children[0].classList.remove('back')
		more.children[4].children[0].classList.remove('back')
		more.children[5].children[0].classList.remove('back')
		more.children[6].children[0].classList.remove('back')
		// more.children[7].children[0].children[1].classList.remove('fadeOutLogoText');
	}

  function about () {
	let logo_text = document.getElementById('logo_text');
		
		let logo_mavqut = document.getElementById('logo_mavqut')
		let logo_box = document.getElementById('logo_box')

		logo_text.classList.add('fadeOutLogoText');
		logo_box.classList.add('boxFade')
		logo_mavqut.classList.add('scalingLogo')
		


	const more = document.getElementById('wrapper')
	const about = document.getElementById('section-about')
	document.getElementById('logo_mavqut').style.display = 'none'
	about.classList.add('section-about-ani')
	document.getElementById('navbar-more').style.display = 'none'
	document.getElementById('navbar-footer').classList.add('navbar-fade')
	document.getElementById('navbar-foot').classList.add('navbar-fade')
	document.getElementById('navbar-language').classList.add('navbar-fade')
	more.children[2].children[0].classList.add('about-c')
	more.children[4].children[0].classList.add('about-c')
	more.children[5].children[0].classList.add('about-c')
	more.children[6].children[0].classList.add('about-c')
	repeats(more)

  }
  
  function lets () {
	const more = document.getElementById('wrapper')
	const about = document.getElementById('section-about')
	document.getElementById('logo_mavqut').style.display = 'block'
    about.classList.remove('section-about-ani')
	document.getElementById('navbar-more').style.display = 'block'
	document.getElementById('navbar-footer').classList.add('navbar-fade')
	document.getElementById('navbar-foot').classList.add('navbar-fade')
	document.getElementById('navbar-language').classList.add('navbar-fade')
    more.children[2].children[0].classList.remove('about-c')
    more.children[4].children[0].classList.remove('about-c')
    more.children[5].children[0].classList.remove('about-c')
	more.children[6].children[0].classList.remove('about-c')
	// window.location.href = '/main/dashboard'
  }

  function more () {
		const 																																																					more = document.getElementById('wrapper')
		// document.getElementById('logo_mavqut').style.display = 'none'
		let logo_text = document.getElementById('logo_text');
		
		let logo_mavqut = document.getElementById('logo_mavqut')
		let logo_box = document.getElementById('logo_box')

		logo_text.classList.add('fadeOutLogoText');
		logo_box.classList.add('boxFade')
		logo_mavqut.classList.add('scalingLogo')
		
		document.getElementById('navabr').classList.add('navbar-fade')
		document.getElementById('navbar-more').classList.add('navbar-fade')
		document.getElementById('navbar-footer').classList.add('navbar-fade')
		document.getElementById('navbar-foot').classList.add('navbar-fade')
		document.getElementById('navbar-language').classList.add('navbar-fade')
		document.getElementById('more').classList.add('more-fade')
		more.children[0].children[0].classList.add('star')
		more.children[2].children[0].classList.add('moons')
		more.children[3].children[0].classList.add('ways')
		more.children[4].children[0].classList.add('mosques')
		more.children[5].children[0].classList.add('tower1')
		more.children[6].children[0].classList.add('littele-tower1')
		repeats(more)
  }


  useEffect(()=>{
	setLanguage(lang || 'UZ')
  },[lang, setLanguage])
  
  return (
    <nav>
      <ul className="navbar-main" id="navabr">
        <li onClick={about} className="nav-item about"><Link to="#">{Languages[language].main.linkAbout}</Link></li>
        <li onClick={lets} className="nav-item lets"><Link to="/main/dashboard">{Languages[language].main.linkLets}</Link></li>
      </ul>
      <ul className="navbar-more" id="navbar-more">
        <li onClick={more} className="navbar-more-item">{Languages[language].main.linkMore}</li>
      </ul>
	  <ul className="navbar-footer footer" id="navbar-footer">
        <li  className="nav-item phone"><Link to="#"><img src={phone} className="phone-icon" alt="phone"/></Link></li>
		
		
		<li  className="nav-item phone"><Link to="/UZ/get-in-touch"><img src={message} className="message-icon" alt="phone"/></Link></li>
		
		
		<li  className="nav-item phone"><Link to=""><img src={question} className="question-icon" alt="phone"/></Link></li>
      </ul>
	  <ul className="navbar-foot foot" id="navbar-foot">
        <li className="nav-item download"><Link to="#"><span>{Languages[language].main.linkDown}</span> <img src={download} className="nav-item download-icon" alt="downolad"/></Link></li>
      </ul>
	  <ul className="navbar-language language" id="navbar-language">
        <li className="nav-item lang"><Link to="#"><span>EN</span></Link></li>
		<div className="vl"></div>
		<li className="nav-item lang"><Link to="#"><span>RU</span></Link></li>
		<div className="vl"></div>
		<li className="nav-item lang"><Link to="/UZ/main"><span>UZ</span></Link></li>
      </ul>
    </nav>
  )
}