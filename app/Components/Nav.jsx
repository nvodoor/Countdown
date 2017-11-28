var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
	render: function () {
		return (
		
		<div className="top-bar black">
			<div className="top-bar-left">
				<ul className="menu">
					<li className="menu-text white black">
						React Time App
					</li>
					<li className="black">
						<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
					</li>
					<li className="black">
						<Link to="/countdown" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Countdown</Link>
					</li>
				</ul>
			</div>
			<div className="top-bar-right">
				<ul className="menu">
					<li className="menu-text white black">
						Created By:
					</li>
					<li className="black">
						<a className="link-display" href="mailto:exampleemail246789@gmail.com" target="_top">Neil Vodoor</a>
					</li>
				</ul>
			</div>
		</div>
		)	
	}
})



module.exports = Nav;