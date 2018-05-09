import React from 'react';


const FaceRecognition = ({imageUR}) =>{
	//const {imageURL} = {props};
	console.log("inside FaceRecognition",'imageURL');
	return (
		<div className="flex center">
			<img src={imageUR} alt="" />
		</div>
	);
}

export default FaceRecognition;