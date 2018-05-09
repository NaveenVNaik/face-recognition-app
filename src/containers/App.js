import React, { Component } from 'react';
import Clarifai from 'clarifai';
import './App.css';
import Inputimage from '../components/inputimage/Inputimage';
import Rank from '../components/rank/Rank';
import Particles from 'react-particles-js';
import SignoutNav from '../components/navigation/SignoutNav';
import FaceRecognition from '../components/facerecognition/FaceRecognition';


const particleOptions = {
"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},
"shape":{"type":"star","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},
"image":{"src":"img/github.svg","width":100,"height":100}},
"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},
"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},
"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},
"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},
"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},
"push":{"particles_nb":4},"remove":{"particles_nb":2}}}

}


const app = new Clarifai.App({
 apiKey: 'f597eceb31154064ba1f42f1284e64af'
});

class App extends Component {
	constructor(){
		super();
		this.state= {
			inputURL: '', 
			imageURL: ''
		}
	}

	onInputURLChange = (event) => {
		this.setState( {inputURL: event.target.value} );
		console.log('inside url',this.inputURL);
	}

	onClickDetect = () =>{
		this.setState( {imageURL: this.state.inputURL} );

		console.log('inside detect',this.imageURL);

		app.models.predict(Clarifai.COLOR_MODEL, "")
					.then(
		   					function(response) {
		      					console.log(response);
		   					 },
						    function(err) {
						      
						    }
						);
	}

	render() {
	    return (
	      <div className="App">
	        <Particles className='particles' params={particleOptions} />
	        <SignoutNav />
	        <Rank />
	        <Inputimage URLChange={this.onInputURLChange} clickDetect={this.onClickDetect}/>
	        <FaceRecognition imageURL={this.imageURL}/>
	      </div>
	    );
  	}
}

export default App;
