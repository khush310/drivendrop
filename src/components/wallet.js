import React from "react";
class Wallet extends React.Component {
	render(){
		const {store} = this.props;
		const user = store.cursor(["profileUser"]).deref();
		const spendings = store.cursor(["profileUser", "recenttransactions"]).deref();
		const spentStyle = Object.assign({width: "100%", height: "10%", display: "flex", flexDirection: "column", alignItems:"center", borderRadius:"10px", marginTop:"1em", paddingRight: "1em"});
		return (
			<div style={{width: "100%", height: "100%", padding: "0 2em"}}>
				<div style={{fontWeight: "bold", fontSize: "1.6em", margin: "1em 0", color: "rgb(66, 66, 66)"}}>
					My Drive'n'Drop Cash
				</div>
				<div style={{width: "100%", height: "6%", display:"flex", flexDirection: "column", alignItems: "center", fontSize:"1.6em", textAlign:"center", color:"00c5d1", fontWeight:"bold"}}>
					<span>{user.get("totalcash")}</span>
				</div>
				<div style={{height:"8%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight:"bold"}}>
					Recently spent
				</div>
				<section>
					{spendings.map((spent) =>{
						return(
							<div style={spentStyle}>
								<div style={{width:"100%", background:"#D6D6D6", textAlign:"left", paddingLeft:"1em"}}>{spent.get("date")}</div>
								<div style={{display: "flex", flexDirection: "row", justifyContent:"space-around", width: "100%", height: "80%", alignItems:"center", borderBottom: "1px solid #CECECE"}}>
								<div style={{width: "80%", textAlign:"left"}}>
									{spent.get("src")} <i style={{color: "ffd900"}}className="fa fa-arrow-right"></i> {spent.get("destination")}
								</div>{spent.get("amount")}
								</div>
							</div>)
					})}
				</section>
			</div>
		)}}
export default Wallet;