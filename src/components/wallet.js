import React from "react";
import classnames from 'classnames';
class Wallet extends React.Component {
	constructor(props) {
		super(props);
		this.state = {active: true};
		this.state = {check: true};

	};
	handleRecent = (e) =>{
		this.setState({active: !this.state.active});
	};
	handleGetcash = (e) =>{
		this.setState({active: !this.state.active});
	}
	render(){
		let recentClasses = classnames('recentsection', {active: this.state.active});
		let getcashClasses = classnames('getcash', {check: this.state.check});
		const {store} = this.props;
		const user = store.cursor(["profileUser"]).deref();
		const spendings = store.cursor(["profileUser", "recenttransactions"]).deref();
		const spentStyle = Object.assign({width: "100%", height: "20%", display: "flex", flexDirection: "column", alignItems:"center", borderRadius:"10px"});
		return (
			<div className="stage">
				<div style={{fontWeight: "bold", fontSize: "1.6em", margin: "0.5em 0", color: "#484848"}}>
					My Drive'n'Drop Cash
				</div>
				<span style={{width: "100%", height: "6%", display:"flex", flexDirection: "column", alignItems: "center", fontSize:"1.6em", textAlign:"center", color:"#00c5d1", fontWeight:"bold"}}>{user.get("totalcash")}</span>
				<div style={{width:"100%", height:"12%", display: "flex", alignItems: "center", textAlign:"left", paddingLeft:"1em", background:"rgba(88, 88, 88, 0.77)"}} onClick={this.handleRecent}>
					Recently spent
				</div>
				<section className = {recentClasses}>
					{spendings.map((spent) =>{
						return(
							<div style={spentStyle}>
								<div style={{width:"100%", background:"#e6e6e6", textAlign:"left", padding:"0 1em"}}>{spent.get("date")}</div>
								<div style={{display: "flex", flexDirection: "row", justifyContent:"space-around", width: "100%", height: "80%", alignItems:"center", borderBottom: "1px solid #CECECE", padding:"0 1em"}}>
								<div style={{width: "100%", textAlign:"left"}}>
									{spent.get("src")} <i style={{color: "ffd900"}}className="fa fa-arrow-right"></i> {spent.get("destination")}
								</div>{spent.get("amount")}
								</div>
							</div>)
					})}
				</section>
				<div style={{width:"100%", height:"12%", display: "flex", alignItems: "center", textAlign:"left", paddingLeft:"1em", background:"rgba(88, 88, 88, 0.77)"}} onClick={this.handleGetcash}>Get DND cash</div>
				<section className={getcashClasses}>

				</section>
			</div>
		)}}
export default Wallet;