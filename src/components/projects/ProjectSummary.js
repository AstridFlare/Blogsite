import React from 'react';

const ProjectSummary = ({ project }) => {
	return (
		<div className="collection  project-summary">
			<div className="collection-item avatar grey-text text-darken-3">
				<a href="/" className=" btn btn-floating pink lighten-1 circle">
					AF
				</a>
				<span className="card-title ">{project.title}</span>
				<p>Posted by The Net Ninja</p>
				<p className="grey-text">3rd September, 2am</p>
			</div>
		</div>
	);
};

export default ProjectSummary;

// <ul className="collection">
// 							<li className="collection-item avatar">
// 								<i className="material-icons circle red">play_arrow</i>
// 								<span className="title">Title</span>
// 								<p>
// 									<ProjectList projects={projects} />
// 									First Line <br />
// 									Second Line
// 								</p>
// 								<a href="#!" className="secondary-content">
// 									<i className="material-icons">grade</i>
// 								</a>
// 							</li>
// 						</ul>

// 						<div className="card  project-summary">
// 						<div className="card-content grey-text text-darken-3">
// 							<span className="card-title ">{project.title}</span>
// 							<p>Posted by The Net Ninja</p>
// 							<p className="grey-text">3rd September, 2am</p>
// 						</div>
// 					</div>
