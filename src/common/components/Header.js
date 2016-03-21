import React, { PropTypes, Component } from 'react';
import styles from "../base.scss";
import IconButton from 'material-ui/lib/icon-button';
import FontIcon from 'material-ui/lib/font-icon';
import ActionHome from 'material-ui/lib/svg-icons/action/home';
import ActionLogin from 'material-ui/lib/svg-icons/action/face';
import ActionExit from 'material-ui/lib/svg-icons/action/exit-to-app';

import { Link } from 'react-router';

export default class Footer extends Component {
	render () {
		return (
			<div className="header">
				<a className="titleText" href="/login">readcoolstuff</a>
				 <div className="homeOptions">
	 	 	 		<div className="headerOptions">
						 <IconButton tooltip="Sign in with Twitter"
												tooltipPosition="bottom-center"
												linkButton={true}
												href="/request-token"
												secondary={true}
												icon={ <FontIcon className="muidocs-icon-custom" /> }>
								<ActionLogin />
						 </IconButton>
	 				</div>
			 	  <div className="headerOptions">
						<IconButton tooltip="Sign out"
												tooltipPosition="bottom-center"
												linkButton={true}
												href="/logout"
												secondary={true}
												icon={ <FontIcon className="muidocs-icon-custom" /> }>
								<ActionExit />
						 </IconButton>
				 	 </div>
				 	 <div className="headerOptions">
							<IconButton tooltip="Made by Gar Lee"
													tooltipPosition="bottom-center"
													linkButton={true}
													href="https://github.com/LeeGar/NewsFlash"
													secondary={true}
													icon={ <FontIcon className="muidocs-icon-custom" /> }>
									<ActionHome />
							 </IconButton>
						</div>
				</div>
			</div>
		)
	}
}