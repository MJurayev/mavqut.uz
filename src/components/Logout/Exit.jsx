import './Exit.css';
import { useEffect } from "react";
import user_ava_1 from '././assets/user_ava_1.png';
import { useLang } from '../lang/langContext'
import { useLogOut } from './Context'
import { useParams } from 'react-router-dom';
export default function Exit({body, yes,no}) {
	const [language, setLanguage] = useLang()
	const { lang } = useParams()
	useEffect(()=>{
		setLanguage(lang || 'UZ')
	  },[lang, setLanguage])
	  
	const [logOut] = useLogOut(true)
	return(
		<div className="exit">
			<div className="blur"></div>
			<div className="blur_in">
				<div className="top_name">
					<img src={user_ava_1} alt="avatar"/>
					<h6>Ali Usmon</h6>
				</div>
				<div className="bottom_block">
					<h4>
						{body}
					</h4>
					<div className="buttons">
						<button onClick={()=>{
							window.localStorage.removeItem("access_token")
							window.location.href = `/${language}/register/sign-in`
						}}>{yes}</button>
						<button onClick={()=>{
							logOut(!logOut)
						}}>{no}</button>
					</div>
				</div>
			</div>
		</div>
	)
}