import React from 'react';


const FaceRecognition = ({imageURL}) =>{
	return (
		<div className="flex center">
			<img src={imageURL} alt="" />
		</div>
	);
}

export default FaceRecognition;