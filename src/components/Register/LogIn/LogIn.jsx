import TopNav from "../Top_nav/TopNav"
import { Link, Redirect } from "react-router-dom"
import  "../register.css"
import "./login.css"
import { useRef } from "react"
import { useServer } from '../../app/ServerContext'
import axios from "axios"
import { useRegistration } from '../Registration_Context'
import { useEffect } from 'react'
import { Lang } from "../../lang/languages"
import { useLang } from '../../lang/langContext'
import { useParams } from 'react-router-dom'

export default function LogIn() {
	
  const [language, setLanguage] = useLang()
	const { lang } = useParams()

	useEffect(()=>{
		setLanguage(lang || 'UZ')
	  },[lang, setLanguage])


	const [server] = useServer()
	const number = useRef()
	const password = useRef()
	const [token,setToken] = useRegistration()
	async function loginForm(e) {
		e.preventDefault()
		const userData = {
			phone: number.current.value,
			password: password.current.value
		}
		if(server){
			const resp = await axios.post(server + '/api/user/login', userData)
			setToken(resp.data.token)
		}
	}
	if (token) return <Redirect to="/main/dashboard" />

    return (
      <div className="register">
        <div className="top_nav">
          <TopNav />
        </div>
        <div className="details">
		  <form onSubmit={loginForm} id="form" className="login">
            <label>
			{Lang[language].main.authintification.phone} <br></br>
              <input ref={number} type="phone" placeholder={Lang[language].main.phone} name="number" />
            </label>
            <label>
            
            {Lang[language].main.authintification.password} <br></br>
              <input ref={password} type="password" placeholder={Lang[language].main.password} name="password" />
            </label>
            <span>
              {Lang[language].main.authintification.dontHave} <Link to={"/" + lang + "/register/sign-up"}>{Lang[language].main.authintification.here}</Link>{" "}
              {Lang[language].main.authintification.press}
              <br />
              <Link to={"/" + lang + "/get-in-touch"}>{Lang[language].main.authintification.forgetPassword}</Link>
            </span>
          </form>
        </div>
        <input type="submit" value={Lang[language].main.authintification.send} form="form" />
        <div className="bg"></div>
      </div>
    )
  }
