import { useEffect, useState } from 'react'
import './ProcessBar.css';
import './ProcessBarMedia.css'
import { useServer } from '../app/ServerContext'
import axios from 'axios'
import { Lang } from "../lang/languages"
import { useLang } from '../lang/langContext'
import { useParams } from 'react-router-dom'

function ProcessBar() {

    const [language, setLanguage] = useLang()
	const { lang } = useParams()

	useEffect(()=>{
		setLanguage(lang || 'UZ')
	  },[lang, setLanguage])


    const [bomdod,setBomdod] = useState(0)
    const [peshin,setPeshin] = useState(0)
    const [asr,setAsr] = useState(0)
    const [shom,setShom] = useState(0)
    const [xufton,setXufton] = useState(0)
    const [vitr,setVitr] = useState(0)
    const [namaz,setNamaz] = useState(0)
    const [totalNamaz,setTotalNamaz] = useState(0)
    const [totalNamazEditable,setTotalNamazEditable] = useState(0)

    const [bomdodEditable,setBomdodEditable] = useState(0)
    const [peshinEditable,setPeshinEditable] = useState(0)
    const [asrEditable,setAsrEditable] = useState(0)
    const [shomEditable,setShomEditable] = useState(0)
    const [xuftonEditable,setXuftonEditable] = useState(0)
    const [vitrEditable,setVitrEditable] = useState(0)

    const [server] = useServer()
	const token = window.localStorage.getItem("access_token")
	

    function setGaugeValue(gauge, value, leftCount) {
        if (value < 0 || value > 1) {
            return;
    }

    gauge.querySelector(".gauge-fill").style.transform = `rotate(${
        value / 2
    }turn)`
    gauge.querySelector(".gauge-cover").textContent = leftCount
    }

    function setProgress(percent,circumference,circle) {
        circle.style.strokeDasharray = `${circumference} ${circumference}`
        circle.style.strokeDashoffset = `${circumference}`
        const offSet = circumference - percent / 100 * circumference
        circle.style.strokeDashoffset = offSet
    }

    useEffect(()=>{
		;(async()=>{
			if (server) {
				const resp1 = await axios.get(`${server}/api/remnant/info`,{
					headers: {
						'authorization': `Bearer ${token}`
					}
                })
                const data = resp1.data
                setTotalNamaz(data.const_total_namaz)
                setTotalNamazEditable(data.total_namaz)

                const bomdod = -(((data.bomdod * 100) / data.const_bomdod) - 100)
                const peshin = -(((data.peshin * 100) / data.const_peshin) - 100)
                const asr = -(((data.asr * 100) / data.const_asr) - 100)
                const shom = -(((data.shom * 100) / data.const_shom) - 100)
                const xufton = -(((data.xufton * 100) / data.const_xufton) - 100)
                const vitr = -(((data.vitr * 100) / data.const_vitr) - 100)
                const namaz = (data.total_namaz) / data.const_total_namaz
                setNamaz(namaz)
                setBomdodEditable(data.bomdod)
                setPeshinEditable(data.peshin)
                setAsrEditable(data.asr)
                setShomEditable(data.shom)
                setXuftonEditable(data.xufton)
                setVitrEditable(data.vitr)

				setBomdod(bomdod)
				setPeshin(peshin)
				setAsr(asr)
				setShom(shom)
				setXufton(xufton)
				setVitr(vitr)
			}
		})()
	},[server,token])

    useEffect(()=>{
        
        const gaugeElement = document.getElementById("gauge");
        setGaugeValue(gaugeElement, namaz, `${totalNamazEditable}`);
        
        const circleBomdod = document.querySelector('.progress-bomdod-time')
        const circlePeshin = document.querySelector('.progress-peshin-time')
        const circleAsr = document.querySelector('.progress-asr-time')
        const circleShom = document.querySelector('.progress-ring-shom')
        const circleXufton = document.querySelector('.progress-ring-xufton')
        const circleVitr = document.querySelector('.progress-ring-vitr')
       
        const radius = circleBomdod.r.baseVal.value
        const circumference = 2 * Math.PI * radius

        setProgress(bomdod,circumference,circleBomdod)
        setProgress(peshin,circumference,circlePeshin)
        setProgress(asr,circumference,circleAsr)
        setProgress(shom,circumference,circleShom)
        setProgress(xufton,circumference,circleXufton)
        setProgress(vitr,circumference,circleVitr)

    }, [bomdod,peshin, asr, shom, xufton, vitr, totalNamazEditable, namaz])


	return (
		<>
			<div className="">
				<div className="process-wrapper">
                   
                    <div className="process-gauges">

                        <div className="gauge" id="gauge">
                            <p className="gauge-title">
                                <span className="gauge-title-heading">{Lang[language].dashboard.all}</span>
                                <span className="gauge-title-amount">{totalNamaz}</span>
                            </p>
                            <div className="gauge-body">
                                <div className="gauge-fill"></div>
                                <div className="gauge-cover" data-text={Lang[language].dashboard.last}></div>
                            </div>
                        </div>
                        
                        <div className="process-chart-wrap">
                            <div className="process-heading">
                                <h3>{Lang[language].dashboard.countWindow}</h3>
                            </div>
                            <div className="process-pie-charts">
                                <span onClick={() => {
                                    document.querySelector('.gauge-pie').style.display = "flex"
                                    document.querySelector('.next').style.display = "block"
                                    document.querySelector('.prev').style.display = "none"
                                    document.querySelector('.gauge-pie--hidden').style.display = "none"
                                    document.querySelector('.next-round').style.background = "#EEF2FD"
                                    document.querySelector('.prev-round').style.background = "#aaa"
                                }}
                                className="fas fa-angle-left prev" style={{display: 'none'}}></span>
                                <span onClick={() => {
                                    document.querySelector('.gauge-pie').style.display = "none"
                                    document.querySelector('.next').style.display = "none"
                                    document.querySelector('.prev').style.display = "block"
                                    document.querySelector('.gauge-pie--hidden').style.display = "flex"
                                    document.querySelector('.prev-round').style.background = "#EEF2FD"
                                    document.querySelector('.next-round').style.background = "#aaa"
                                }}
                                className="fas fa-angle-right next"></span>
                                <div className="gauge-pie">
                                    <div className="circle circle-bomdod">
                                        <div className="outer">
                                            <svg className="progress-ring-bomdod" width="150" height="150">
                                                <defs>
                                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="95%" y2="100%">
                                                    <stop offset="50%" stopColor="#ED21FF" />
                                                    <stop offset="100%" stopColor="#020055" />
                                                    </linearGradient>
                                                </defs>
                                                <circle className="progress-bomdod-time" strokeWidth="15" cx="74" cy="76" r="65" fill="transparent" />
                                            </svg>
                                            <div className="inner"></div>
                                            <p><b>{bomdodEditable}</b></p>
                                            <span data-type={Lang[language].main.calculate.bomdod}>{Lang[language].dashboard.last}</span>
                                        </div>
                                    </div>
                                    <div className="circle circle-peshin">
                                        <div className="outer">
                                            <svg className="progress-ring-peshin" width="150" height="150">
                                                <defs>
                                                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="95%" y2="100%">
                                                    <stop offset="50%" stopColor="#D90965" />
                                                    <stop offset="100%" stopColor="#200453" />
                                                    </linearGradient>
                                                </defs>
                                                <circle className="progress-peshin-time" strokeWidth="15" cx="74" cy="76" r="65" fill="transparent" />
                                            </svg>
                                            <div className="inner"></div>
                                            <p><b>{peshinEditable}</b></p>
                                            <span data-type={Lang[language].main.calculate.peshin}>{Lang[language].dashboard.last}</span>
                                        </div>
                                    </div>
                                    <div className="circle circle-asr">
                                        <div className="outer">
                                            <svg className="progress-ring-asr" width="150" height="150">
                                                <defs>
                                                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="95%" y2="100%">
                                                    <stop offset="50%" stopColor="#0CF8BF" />
                                                    <stop offset="100%" stopColor="#160364" />
                                                    </linearGradient>
                                                </defs>
                                                <circle className="progress-asr-time" strokeWidth="15" cx="74" cy="76" r="65" fill="transparent" />
                                            </svg>
                                            <div className="inner"></div>
                                            <p><b>{asrEditable}</b></p>
                                            <span data-type={Lang[language].main.calculate.asr}>{Lang[language].dashboard.last}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="gauge-pie--hidden">
                                    <div className="circle circle-shom">
                                        <div className="outer">
                                            <svg className="progress-ring-shom" width="150" height="150">
                                                <defs>
                                                    <linearGradient id="gradient3" x1="0%" y1="0%" x2="95%" y2="100%">
                                                    <stop offset="50%" stopColor="#FFC700" />
                                                    <stop offset="100%" stopColor="#020055" />
                                                    </linearGradient>
                                                </defs>
                                                <circle className="progress-shom-time" strokeWidth="15" cx="74" cy="76" r="65" fill="transparent" />
                                            </svg>
                                            <div className="inner"></div>
                                            <p><b>{shomEditable}</b></p>
                                            <span data-type={Lang[language].main.calculate.shom}>{Lang[language].dashboard.last}</span>
                                        </div>
                                    </div>
                                    <div className="circle circle-xufton">
                                        <div className="outer">
                                            <svg className="progress-ring-xufton" width="250" height="223">
                                                <defs>
                                                    <linearGradient id="gradient4" x1="0%" y1="0%" x2="95%" y2="100%">
                                                    <stop offset="50%" stopColor="#7000FF" />
                                                    <stop offset="100%" stopColor="#200453" />
                                                    </linearGradient>
                                                </defs>
                                                <circle className="progress-xufton-time" strokeWidth="15" cx="150" cy="150" r="65" fill="transparent" />
                                            </svg>
                                            <div className="inner"></div>
                                            <p><b>{xuftonEditable}</b></p>
                                            <span data-type={Lang[language].main.calculate.xufton}>{Lang[language].dashboard.last}</span>
                                        </div>
                                    </div>
                                    <div className="circle circle-vitr">
                                        <div className="outer">
                                            <svg className="progress-ring-vitr" width="250" height="200">
                                                <defs>
                                                    <linearGradient id="gradient5" x1="0%" y1="0%" x2="95%" y2="100%">
                                                    <stop offset="50%" stopColor="#0CEAF8" />
                                                    <stop offset="100%" stopColor="#160364" />
                                                    </linearGradient>
                                                </defs>
                                                <circle className="progress-vitr-time" strokeWidth="15" cx="150" cy="150" r="65" fill="transparent" />
                                            </svg>
                                            <div className="inner"></div>
                                            <p><b>{vitrEditable}</b></p>
                                            <span data-type={Lang[language].main.calculate.vitr}>{Lang[language].dashboard.last}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="click-point">
                                    <span className="prev-round"></span>
                                    <span className="next-round"></span>
                                </div>
                            </div>
                    
                        </div>
                    </div>
                </div>
			</div>
		</> 
	)
}
export default ProcessBar