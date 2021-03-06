import React, { PropTypes, Component } from 'react';
import styles from "../base.scss";
import IconButton from 'material-ui/lib/icon-button';
import FontIcon from 'material-ui/lib/font-icon';
import ActionHome from 'material-ui/lib/svg-icons/action/home';
import ActionLogin from 'material-ui/lib/svg-icons/action/face';
import ActionExit from 'material-ui/lib/svg-icons/action/exit-to-app';

import { Link, browserHistory } from 'react-router';

export default class Header extends Component {
  render () {
    return (
      <div className="header">
        <Link to={`/login`} className="titleText">readcoolstuff</Link>

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
            <Link to={`/logout`}>
              <IconButton tooltip="Sign out"
                          tooltipPosition="bottom-center"
                          linkButton={true}
                          secondary={true}
                          icon={<FontIcon className="muidocs-icon-custom"/> }>
                <ActionExit />
             </IconButton>
             </Link>
            </div>

            <div className="headerOptions">
              <button data-tooltip="Made by Gar Lee" href="https://github.com/LeeGar/readcoolstuff">
              </button>
            </div>

        </div>
      </div>
    )
  }
}

            // <IconButton tooltip="Made by Gar Lee"
            //         tooltipPosition="bottom-center"
            //         linkButton={true}
            //         href="https://github.com/LeeGar/readcoolstuff"
            //         secondary={true}
            //         iconClassName="material-icons">
            //     </IconButton>