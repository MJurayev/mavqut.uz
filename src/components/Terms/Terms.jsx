import React from 'react';
import './Terms.css';
import { useEffect } from 'react'
import { Lang } from "../lang/languages"
import { useLang } from '../lang/langContext'
import { useParams } from 'react-router-dom'

export default function Terms() {

	const [language, setLanguage] = useLang()
	const { lang } = useParams()

	useEffect(()=>{
		setLanguage(lang.toLowerCase() || 'uz')
	  },[lang, setLanguage])

	return(
		<div className="terms">
			<h2 className="text-ceter">Terms & Conditions</h2>
			<div className="text_block">
				<p>
					{Lang[language].main.termAndConditionText}
				</p>
			</div>
		</div>
	)
}