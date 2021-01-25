import edit from './assets/edit.png'
import registerUser from '././assets/register_user.png'
import tick_icon from '././assets/tick_icon.png'
import './Edit.css'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { useServer } from "../app/ServerContext";
export default function Edit() {

	const [server] = useServer()

	const [image,setImage] = useState('')
	const name = useRef()
	const surname = useRef()
	const [gender,setGender] = useState()
	const age = useRef()
	const email = useRef()
	const phone = useRef()
	const [lang,setLang] = useState()
	const password = useRef()

	const [fetchingData,setFetchingData] = useState()
	const token = window.localStorage.getItem("access_token")
	useEffect(()=>{
		;(async()=>{
			if (server) {
				const resp = await axios.get(server + '/api/user/info',{
					headers: {
						'authorization': `Bearer ${token}`
					}
				})
				const setUserData = {
					user_id: resp.data._id,
					name: resp.data.name,
					surname: resp.data.surname,
					avatar: resp.data.avatar,
					age: resp.data.age,
					email: resp.data.email,
					gender: resp.data.gender,
					phone: resp.data.phone,
				}
				setFetchingData(setUserData)
				console.log(setUserData);
			}
		})()
	},[server,token])

	function editingForm(e) {
		e.preventDefault()
			;(async()=>{
	
				
				try {
					const userDate = {
						name: name.current.value || fetchingData.name,
						surname: surname.current.value || fetchingData.surname,
						age: age.current.value || fetchingData.age,
						gender: gender || fetchingData.gender,
						icon: image || fetchingData.avatar,
						email: email.current.value || fetchingData.email,
						phone: phone.current.value || fetchingData.phone,
						password: password.current.value
					}
					if (server){
						console.log(userDate);
						// const resp = await axios.post(server + '/api/user', userDate)
						// setToken(resp.data.token)
					}
				} catch (err) {
					console.error(err)
				}
			})()
		}


	return(
		<div>
			<form onSubmit={editingForm} className="editAll">
				<div className="row">
					<div className="left col-xl-6">
						{/*editPhoto*/}
						<div className="editPhoto">
							<div className="title">
								<div className="img">
									<img alt="icon" src={edit} className="w-100" />
								</div>
								<p>Rasmni o’zgartirish</p>
							</div>
							<div className="profilePhotos">
								<div className="form_right_imgProfile">
									<div className="one">
										<input onChange={(e)=>setImage(e.target.value)} type="radio" name="avatar" id="ava_1" value="user_ava_1.png" />
										<label htmlFor="ava_1" className="avatar_1">
										<span>
											<img src={tick_icon} alt="img" />
										</span>
										</label>
										<input onChange={(e)=>setImage(e.target.value)} type="radio" name="avatar" id="ava_2" value="user_ava_2.png" />
										<label htmlFor="ava_2" className="avatar_2">
										<span>
											<img src={tick_icon} alt="img" />
										</span>
										</label>
										<input onChange={(e)=>setImage(e.target.value)} type="radio" name="avatar" id="ava_3" value="user_ava_3.png" />
										<label htmlFor="ava_3" className="avatar_3">
										<span>
											<img src={tick_icon} alt="img" />
										</span>
										</label>
									</div>
									<div className="two">
										<input onChange={(e)=>setImage(e.target.value)} type="radio" name="avatar" id="ava_4" value="user_ava_4.png" />
										<label htmlFor="ava_4" className="avatar_4">
										<span>
											<img src={tick_icon} alt="img" />
										</span>
										</label>
										<input onChange={(e)=>setImage(e.target.value)} type="radio" name="avatar" id="ava_5" value="user_ava_5.png" />
										<label htmlFor="ava_5" className="avatar_5">
										<span>
											<img src={tick_icon} alt="img" />
										</span>
										</label>
										<input onChange={(e)=>setImage(e.target.value)} type="radio" name="avatar" id="ava_6" value="user_ava_6.png" />
										<label htmlFor="ava_6" className="avatar_6">
										<span>
											<img src={tick_icon} alt="img" />
										</span>
										</label>
									</div>
								</div>
							</div>
						
						</div>
						{/*personalEdit*/}
						<div className="personalEdit">
							<div className="title">
								<div className="img">
									<img alt="icon" src={registerUser} className="w-100" />
								</div>
								<p>Shaxsiy ma’lumotlarni o’zgartirish</p>
							</div>
							<div className="nameEdit">
								<div className="row">
									<div className="name_block col-xl-6 col-6">

										<label htmlFor="name" className="form-label">Name</label>
										<div className="input-group mb-3">
											<div className="img">
												<img alt="icon" src={edit} className="w-100" />
											</div>
											<input ref={name} type="text" className="form-control" placeholder="Ali" id="name" aria-label="Username" aria-describedby="basic-addon1" />
										</div>

									</div>
									<div className="name_block col-xl-6 col-6">
									
										<label htmlFor="name" className="form-label">Surname</label>
										<div className="input-group mb-3">
											<input ref={surname} type="text" className="form-control" placeholder="Usman" id="surname" aria-label="Username" aria-describedby="basic-addon1" />
										</div>

									</div>
								</div>
							</div>
						</div>
						{/*Gender and Age*/}
						<div className="genderAge">
							<div className="nameEdit">
								<div className="row">
									<div className="name_block col-xl-6 col-6">

										<label htmlFor="group1" className="form-label">Gender</label>
										<div className="input-group-gender">
										<div>
											<input onChange={(e)=>setGender(e.target.value)}  className="" type="radio" value="male" name="group1" aria-label="Radio button for following text input" id="radio1" />
											<label htmlFor="radio1" className="gender-radio">Male</label>
										</div>
										<div>
											<input onChange={(e)=>setGender(e.target.value)} className="" type="radio" id="radio2" value="female" name="group1" aria-label="Radio button for following text input" />
											<label htmlFor="radio2" className="gender-radio">Female</label>
										</div>
											
										</div>

									</div>
									<div className=" name_block col-xl-6 col-6">
										<label htmlFor="age" className="form-label">Age</label>
										<div className="input-group mb-3">
											<input ref={age} type="number" max='2' className="form-control age_input" placeholder="26" id="age" aria-label="age" />
										</div>
									</div>
								</div>
							</div>
						</div>
						{/*Email and Number*/}
						<div className="email">
							<div className="nameEdit">
								<div className="row">
									<div className="name_block col-xl-6 col-6">

										<label htmlFor="name" className="form-label">Email</label>
										<div className="nameEditemail input-group mb-3">
											<input ref={email} type="text" className="form-control" placeholder="Usman@gmail.com" id="email" aria-label="Username" aria-describedby="basic-addon1" />
										</div>

									</div>
									<div className="name_block col-xl-6 col-6">
									
										<label htmlFor="name" className="form-label">Phone number</label>
										<div className="input-group mb-3">
											<input ref={phone} type="text" className="form-control" placeholder="+998 93 123 45 67" id="number" aria-label="Username" aria-describedby="basic-addon1" />
										</div>

									</div>
								</div>
							</div>
						</div>

					</div>
					<div className="right col-xl-6">
						{/*language*/}
						<div className="language">
							<div className="title">
								<div className="img">
									<img alt="icon" src={edit} className="w-100" />
								</div>
								<p>language</p>
							</div>
							<div className="language_select">
								<div>
									<input onChange={(e)=>setLang(e.target.value)} type="radio" name="language" id="uzbek" value="uzbek" />
									<label htmlFor="uzbek">Uzbek</label>
								</div>
								<div>
									<input onChange={(e)=>setLang(e.target.value)} type="radio" name="language" id="russian" value="russian"  />
									<label htmlFor="russian">Russian</label>
								</div>
								<div>
									<input onChange={(e)=>setLang(e.target.value)} type="radio" name="language" id="english" value="english" />
									<label htmlFor="english">English</label>
								</div>
							</div>
						</div>
						{/*Password*/}
						<div className="password">
							<h4>Parolni o'zgartirish</h4>
							<input ref={password} type="password" />
						</div>
					</div>
				</div>
				<button>ok</button>
				<div className="bg_image">
				</div>
			</form>
		</div>
	)
}