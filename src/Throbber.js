import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Throbber extends Component{

  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
  }

	render(){

		return (
      <div>
        {this.props.isLoading && (
    	      <div className="throbber">
              <div className="spinner">
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
              </div>
            </div>
        )}
      </div>
		)
    
	}
}

export default Throbber
