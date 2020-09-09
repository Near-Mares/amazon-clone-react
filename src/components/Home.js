import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <img
				className='home__image' 
				src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
				alt='banner'
			/>

			<div className='home__row'>
				<Product
					id='111111'
					title='The Lean Startup: How Constant Innovation Creates Radically Succesfull Businesses Paperback'
					price={11.96}
					rating={5}
					image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg'
				/>
				<Product
					id='111111'
					title='Mkeke Compatible with iPhone XR Case,Clear Anti-Scratch Shock Absorption Cover Case for iPhone XR'
					price={7.99}
					rating={4}
					image='https://images-na.ssl-images-amazon.com/images/I/71j2Zqi6BGL._AC_SL1250_.jpg'
				/>
			</div>

			<div className='home__row'>
				<Product
					id='111111'
					title='Bedtime Originals Twinkle Toes Pink Elephant Plush, Hazel'
					price={11.20}
					rating={5}
					image='https://images-na.ssl-images-amazon.com/images/I/81ZB62prn-L._AC_SL1500_.jpg'
				/>
				<Product
					id='111111'
					title='Blendtec Total Classic Original Blender - WildSide+ Jar (90 oz) - Professional-Grade Power - 6 Pre-programmed Cycles - 10-speeds - Black (Renewed)'
					price={276.1}
					rating={4}
					image='https://images-na.ssl-images-amazon.com/images/I/71zrQU%2ByLvL._AC_SL1500_.jpg'
				/>
				<Product
					id='111111'
					title='RUNMUS Gaming Headset Xbox One Headset with 7.1 Surround Sound, PS4 Headset with Noise Canceling Mic & LED Light, Compatible with PC, PS4, Xbox One Controller(Adapter Not Included)'
					price={38.85}
					rating={3}
					image='https://images-na.ssl-images-amazon.com/images/I/61lnzTv2a0L._AC_SL1000_.jpg'
				/>
			</div>

			<div className='home__row'>
				<Product
					id='111111'
					title='The Lean Startup: How Constant Innovation Creates Radically Succesfull Businesses PaperbackZevro KCH-06100 Zero Gravity Magnetic Spice Rack with 12 Canisters'
					price={24.49}
					rating={4}
					image='https://images-na.ssl-images-amazon.com/images/I/81vHq4yY38L._AC_SL1500_.jpg'
				/>
			</div>

			
		
    </div>
  )
}

export default Home
