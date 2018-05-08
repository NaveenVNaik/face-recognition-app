import React from 'react';
import './Inputimage.css'

const Inputimage = () =>{
	return (
		<div className="">
			<div>
				<p>{'Face Detection - Give it a try'}</p>
			</div>
			<div className="center">
				<div className="form pa4 center br3 ">
					<input type="text" placeholder="Enter Image URL" className="center w-70 pa2"/>
					<button name="Detect" value="Detect" 
						className="w-30 grow pointer ph3 pv2 dib white bg-light-purple "
						>
						Detect
					</button>
				</div>
			</div>
		</div>
	);
}

export default Inputimage;

//w-30 grow f4 link ph3 pv2 dib white bg-light-purple
//center w-30 pa1 grow pointer bg-light-purple ph3 pv2 dib