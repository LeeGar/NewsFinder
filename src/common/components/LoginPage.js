import React, { Component } from 'react';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';
import IconButton from 'material-ui/lib/icon-button';
import RaisedButton from 'material-ui/lib/raised-button';

import { Link, browserHistory } from 'react-router';

export default class LoginPage extends Component {
  render() {

  	const styles = {
  	  root: {
  	    display: 'flex',
  	    flexWrap: 'wrap',
  	    justifyContent: 'space-around',
  	  },
  	  gridList: {
  	    width: 500,
  	    height: 400,
  	    overflowY: 'auto',
  	    marginBottom: 24,
  	  },
  	};

  	const tilesData = [
  	  {
  	    img: 'http://goo.gl/0mjlwZ',
  	    title: 'Healthy cooking',
  	    author: 'NA',
  	    featured: true,
  	  },
  	  {
  	    img: 'http://goo.gl/St34QP',
  	    title: 'Concerts in SF',
  	    author: 'NA',
  	  },
  	  {
  	    img: 'http://goo.gl/Fgmqdp',
  	    title: 'Latest world news',
  	    author: 'NA',
  	  },
  	  {
  	    img: 'http://goo.gl/O4iZb5',
  	    title: 'NFL Free Agency',
  	    author: 'fancycrave1',
  	    featured: true,
  	  },
  	  {
  	    img: 'http://goo.gl/vuPc6G',
  	    title: 'NBA stars',
  	    author: 'Lebron James',
  	  },
  	  {
  	    img: 'http://goo.gl/yaYvUv',
  	    title: 'Handcrafted arts',
  	    author: 'NA',
  	  },
  	  {
  	    img: 'http://goo.gl/f2S6SQ',
  	    title: 'Travel tips',
  	    author: 'NA',
  	  },
  	  {
  	    img: 'http://goo.gl/Pc5nGC',
  	    title: 'Spring cleaning tips',
  	    author: 'NA',
  	  },
  	];

    return (
        <div className="frontPage">
	        <div style={styles.root}>
	           <GridList
	             cols={2}
	             cellHeight={200}
	             padding={1}
	             style={styles.gridList}
	           >
	             {tilesData.map(tile => (
	               <GridTile
	                 key={tile.img}
	                 title={tile.title}
	                 actionIcon={<IconButton><StarBorder color="white"/></IconButton>}
	                 actionPosition="left"
	                 titlePosition="top"
	                 titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
	                 cols={tile.featured ? 2 : 1}
	                 rows={tile.featured ? 2 : 1}
	               >
	                 <img src={tile.img} />
	               </GridTile>
	             ))}
	           </GridList>
	         </div>
	        <p></p>
	        <div className="welcomeBanner"> 
	        	<RaisedButton 
            label="Sign in with Twitter" 
            secondary={true} 
            linkButton='true'
            href='/request-token'
            />
	        </div>
        </div>
    );
  }
}
