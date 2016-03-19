import React, { PropTypes, Component } from 'react';
import styles from "../base.scss";
import IconButton from 'material-ui/lib/icon-button';
import FontIcon from 'material-ui/lib/font-icon';
import ActionHome from 'material-ui/lib/svg-icons/action/home';

export default class Footer extends Component {
	render () {
		return (
			<div className="header">
			<IconButton tooltip="Made by Gar Lee"
									tooltipPosition="bottom-center"
									linkButton={true}
									href="https://github.com/LeeGar/NewsFlash"
									secondary={true}
									icon={ <FontIcon className="muidocs-icon-custom-github" /> }>
					<ActionHome />
			 </IconButton>
			</div>
		)
	}
}