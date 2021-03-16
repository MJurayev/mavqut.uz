import './RuzaUpdate.css'
import './RuzaUpdateMedia.css'
import { Select, Option } from '../Select/Seelct'
import axios from 'axios'
import './Select.css'
import { useEffect, useRef, useState } from 'react'
import { useServer } from '../app/ServerContext'
import { Lang } from "../lang/languages"
import { useLang } from '../lang/langContext'
import { useParams } from 'react-router-dom'
import { isCompositeComponent } from 'react-dom/test-utils'

function RuzaUpdate() {
	const [server] = useServer()

    const [language, setLanguage] = useLang()
	const { lang } = useParams()

	useEffect(()=>{
		setLanguage(lang || 'UZ')
	},[lang, setLanguage])
	  

    const [today,setToday] = useState()

    const months = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul","Avgust","Sentabr","Oktabr","Noyabr","Dekabr"]

    const years = [1992,1993,1994,1995,1996,1997,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022]
    

    const [cDay, setCDay] = useState(0)
    const [cMonth, setCMonth] = useState()
    const [cYear, setCYear] = useState()
    useEffect(()=>{
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        setToday(dd)
    },[])

    const bomdod = useRef()
	const peshin = useRef()
	const asr = useRef()
	const shom = useRef()
	const xufton = useRef()
	const vitr = useRef()
	const ruza = useRef()
    const dayRef = useRef()
    
    async function updateInfo(e) {
		e.preventDefault()
        
		const userRemnantData = {
            bomdod: bomdod.current.value,
            peshin: peshin.current.value,
            asr: asr.current.value,
            shom: shom.current.value,
            xufton: xufton.current.value,
            vitr: vitr.current.value,
            fasting: ruza.current.checked,
            created_at:new Date(years[cYear]+"-"+cMonth+"-"+cDay).toJSON()
		}
        console.log(userRemnantData)
		if(server){
			await axios.post(server + '/api/remnant',userRemnantData,  {
                headers: {
                    'Content-Type': 'application/json',
                    'authorization':`Bearer ${window.localStorage.getItem('access_token')}`
                },
				
			}).then(res=>{
                
                document.querySelector('.submitted').classList.add('submitted--block')
                console.log(res)
            }).catch(err=>{
                console.log(err)

            })
		}
	}
    
    const updateDay=()=>{
    }
    const updateMonth=(month)=>{
        setCMonth(month+1)
        console.log(`Year : ${month}`)
    }
    const updateYear=(year)=>{
        console.log(`Year : ${year}`)
        setCYear(year)
    }

    const ruzaCheckStyle = {
        width:'20px',
        height:'20px',
        transition:'all .3s ease',
        // marginRight:'auto',
        // marginLeft:'60px',
        paddingRight:'30px',
        paddingLeft:'auto',
        marginTop:'auto',
        marginBottom:'auto',
    }

    return (
        <>
        <div className="pray-counter">
        <h2 style={{textAlign: 'center', marginBottom: 15}}>{Lang[language].main.calculate.calculateTitle}</h2>
        <form className="ruza-update-form">
        <div className="status-editing">
        <label htmlFor="bomdod">
        {Lang[language].main.calculate.bomdod}
        <input ref={bomdod} maxLength="2" type="text" id="bomdod"/>
        </label>
        <label htmlFor="peshin">
        {Lang[language].main.calculate.peshin}
        <input ref={peshin} maxLength="2" type="text" id="peshin"/>
        </label>
        <label htmlFor="asr">
        {Lang[language].main.calculate.asr}
        <input ref={asr} maxLength="2" type="text" id="asr"/>
        </label>
        <label htmlFor="shom">
        {Lang[language].main.calculate.shom}
        <input ref={shom} maxLength="2" type="text" id="shom"/>
        </label>
        <label htmlFor="xufton">
        {Lang[language].main.calculate.xufton}
        <input ref={xufton} maxLength="2" type="text" id="xufton"/>
        </label>
        <label htmlFor="vitr">
        {Lang[language].main.calculate.vitr}
        <input ref={vitr} maxLength="2" type="text" id="vitr"/>
        </label>
        <label style={{paddingLeft:'30px'}} htmlFor="ruza">
        {Lang[language].main.calculate.fasting}
        <input ref={ruza} style={ruzaCheckStyle} maxLength="1" type="checkbox" id="ruza"/>
        </label>
        </div>
        <div className="ruza-update-date">
        <div className="update-date">
        <input maxLength="2" type="text" onChange={updateDay} ref={dayRef} placeholder={today}/>
        
        <div className="update-selects">
        <div className="custom-update-select-month">
        <Select  onSelectValue={updateMonth}>
        {
            months.map((month,index) => 
            <Option
            key={index}
            value={index}
            placeholder={month}
            >{month}</Option>)
        }
        </Select >
        <div className="counter">
        <div className="top-caret"></div>
        <div className="bottom-caret"></div>
        </div>
        </div>
        <div className="custom-update-select-year">
        <Select onSelectValue={updateYear}>
        {
            years.map((year,index) => <Option
            key={index}
            value={index}
            placeholder={year}
            >{year}</Option>)
        }
        </Select>
        <div className="counter counter_update">
        <div className="top-caret"></div>
        <div className="bottom-caret"></div>
        </div>
        </div>
        </div>
        </div>
        <button className="ruza-update-button" onClick={updateInfo}>{Lang[language].main.calculate.submit}</button>
        </div>
        </form>
        <div className="submitted">
        <button className="submittion-exit" onClick={ () => document.querySelector('.submitted').classList.remove('submitted--block')}
        >
        <i className="fas fa-times"></i>
        </button>
        <p className="submittion-text">Mashalloh, Alloh xayrli va bardavom qilsin</p>
        </div>
        </div>
        </>
        )
    }
    
    export default RuzaUpdate