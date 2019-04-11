import React from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';
import { compose } from 'redux';
import lifecycle from 'react-pure-lifecycle';

const methods = {
	componentDidMount() {
		var elem = document.querySelector('.sidenav');
		M.Sidenav.init(elem, {
			edge: 'left',
			inDuration: 250
		});
	}
};

const Navbar = (props) => {
	const { auth, profile } = props;
	// console.log(auth);
	const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;

	return (
		<React.Fragment>
			<div className="navbar-fixed">
				<nav className="nav-wrapper black">
					<div className="container">
						<a href="/" className="brand-logo ">
							BLOGSITE
						</a>
						<a href="/" className="sidenav-trigger" data-target="mobile-links">
							<i className="material-icons">menu</i>
						</a>
						{<ul className="right hide-on-med-and-down">{links}</ul>}
					</div>
				</nav>
			</div>

			<ul className="sidenav black " id="mobile-links">
				<div className="center">
					<a href="/" className="center">
						<img src="favicon.png" alt="logo" style={{ width: 100 }} />
					</a>
				</div>
				<li className="bold center white-text">
					<hr />
					Blogsite
				</li>

				<li>
					<a className="white-text" href="/">
						Blog
					</a>
				</li>
				<li>
					<a className="white-text" href="/create">
						New Project
					</a>
				</li>
			</ul>
		</React.Fragment>
	);
};

const mapStateToProps = (state) => {
	// console.log(state);
	return {
		auth: state.firebase.auth,
		profile: state.firebase.profile
	};
};

export default compose(connect(mapStateToProps), lifecycle(methods))(Navbar);

// import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
// import M from 'materialize-css/dist/js/materialize.min.js';
// import 'materialize-css/dist/css/materialize.min.css';
// import { connect } from 'react-redux';
// import SignedInLinks from './SignedInLinks';
// import SignedOutLinks from './SignedOutLinks';

// // import Footer from '../Containers/Footer';

// export default class Navbar extends Component {
// 	componentDidMount() {
// 		var elem = document.querySelector('.sidenav');
// 		M.Sidenav.init(elem, {
// 			edge: 'left',
// 			inDuration: 250
// 		});
// 	}
// 	render() {
// 		return (
// 			<React.Fragment>
// 				<div className="navbar-fixed">
// 					<nav className="nav-wrapper black">
// 						<div className="container">
// 							<a href="/" className="brand-logo ">
// 								BLOGSITE
// 							</a>
// 							<a href="/" className="sidenav-trigger" data-target="mobile-links">
// 								<i className="material-icons">menu</i>
// 							</a>
// 							<ul className="right hide-on-med-and-down">
// 								<li>
// 									<a href="/">Home</a>
// 								</li>

// 								<li>
// 									<NavLink to="/blog">Blog</NavLink>
// 								</li>
// 								<li>
// 									<NavLink to="/contact">Contact</NavLink>
// 								</li>

// 								<li>
// 									<a href="/" className=" btn btn-floating pink darken-1">
// 										AF
// 									</a>
// 								</li>
// 								<li>
// 									<NavLink to="/signin">Sign In</NavLink>
// 								</li>
// 								<li>
// 									<NavLink to="/signout">Sign Out</NavLink>
// 								</li>
// 							</ul>
// 						</div>
// 					</nav>
// 				</div>

// 				<ul className="sidenav black " id="mobile-links">
// 					<div className="center">
// 						<a href="/" className="center">
// 							<img src="favicon.png" alt="logo" style={{ width: 100 }} />
// 						</a>
// 					</div>
// 					<li className="bold center white-text">
// 						<hr />
// 						Blogsite
// 					</li>
// 					<li>
// 						<a className="white-text" href="/">
// 							Home
// 						</a>
// 					</li>
// 					<li>
// 						<a className="white-text" href="/blog">
// 							Blog
// 						</a>
// 					</li>
// 					<li>
// 						<a className="white-text" href="/contact">
// 							Contact
// 						</a>
// 					</li>

// 					<li>
// 						<a href="/signin" className="white-text">
// 							Sign In
// 						</a>
// 					</li>

// 					<li>
// 						<a href="/signout" className="white-text">
// 							Sign Out
// 						</a>
// 					</li>
// 				</ul>
// 			</React.Fragment>
// 		);
// 	}
// }
