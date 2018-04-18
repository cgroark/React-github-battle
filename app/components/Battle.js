var React =require('react');

class Battle extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			playerOneName: '',
			playerOneImage: null,
			playerTwoName: '',
			playerTwoImage: null
		}

	}
	render(){
		return(
			<div>
				Battle
			</div>
			)
	}
}

module.exports=Battle;