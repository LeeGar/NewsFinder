import React, { Component, PropTypes } from 'react';
import styles from "../base.scss";
import { Link, browserHistory } from 'react-router';

import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';

export default class Display extends Component {
  render () {

    const lowercaselabel = {
      textinfo: {
        'text-transform': 'none'
      }
    }

    const { query, results } = this.props
    return (
      <div className="innerDisplay">
        <h1> { query } </h1>
            <ul className="messageList">
              {results.map((result, i) =>
                <li key={i} className="eachMessage">  
                <Card>
                  <CardHeader
                    title={result.name}
                    subtitle={result.username}
                    avatar={result.from}
                    />
                    <CardTitle title={result.text} />
                    <CardText>
                      Location at: {result.location}
                      <p></p>
                      Created at: {result.createdAt}
                    </CardText>
                    <CardActions>
                      <a target="_blank"> 
                        <FlatButton
                          label={result.url} 
                          labelStyle={lowercaselabel.textinfo}
                          href={result.url}
                          linkButton='True'
                          target="_blank"
                        />
                      </a>
                    </CardActions>
                  </Card>
                </li>
              )}
            </ul>
      </div>
    )
  }
}

Display.propTypes = {
  results: PropTypes.array.isRequired,
  value: PropTypes.string
}
