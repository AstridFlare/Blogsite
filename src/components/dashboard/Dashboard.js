import React, { Component } from 'react';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
	render() {
		const { projects, auth } = this.props;
		if (!auth.uid) return <Redirect to="/signin" />;

		return (
			<React.Fragment>
				<div className="dashboard container">
					<div className="row">
						<div className="col s12 m6 push-m3">
							<ProjectList projects={projects} />
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	// console.log(state);
	return {
		projects: state.firestore.ordered.projects,
		auth: state.firebase.auth
	};
};

export default compose(
	connect(mapStateToProps),
	firestoreConnect([ { collection: 'projects', orderBy: [ 'createdAt', 'desc' ] } ])
)(Dashboard);
