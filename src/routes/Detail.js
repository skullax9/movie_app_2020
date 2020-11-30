import React from 'react';
import './Detail.css';

class Detail extends React.Component {
    componentDidMount() {
        const {location, history} = this.props;

        if (location.state === undefined) {
            history.push('/');
        }
    }

    render(rating) {
        const { location } = this.props;
        if (location.state) {
        return (
        <div className="detail-container">
        <span>
            <center>
            <img src={location.state.poster} alt={location.state.title}/><br/>
            </center>
            {location.state.title} <br/>
        </span>
        <span class="star-rating" style={{height: '100%'}}>
            <span style={{width: '70%'}}></span>
        </span>
        <span>
        {location.state.genres} {location.state.year}<br/><br/>
        {location.state.summary}<br/>
        </span>
        </div>
            );
        } else {
            return null;
        }
    }

}

export default Detail;

//recommendation: ({location.state.rating/2}/5)<br/>