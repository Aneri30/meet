import React, { Component } from 'react';

class Event extends Component {
    state = {
        showDetails: false
    };

    handleShowDetails = () => {
        this.setState({ showDetails: true })
    }

    handleHideDetails = () => {
        this.setState({ showDetails: false })
    }

    render() {
        return (
            <div className='event'>
                <h4 className='event-title'>{this.props.event.summary}</h4>
                <p className='event-time'>{this.props.event.start.dateTime}</p>
                <p className='event-location'>{this.props.event.location}</p>
                {!this.state.showDetails && <button className='showDetails-button' onClick={this.handleShowDetails}>Show details</button>}
                {this.state.showDetails && <p className='event-details'>{this.props.event.description}, <a href={this.props.event.htmlLink} rel="noreferrer" target="_blank">
                    See details on Google Calendar
                </a> </p>}
                {this.state.showDetails && <button className='hideDetails-button' onClick={this.handleHideDetails}>Hide details</button>}
            </div>
        )
    }
}
export default Event;

