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
        <span>201
            <center>
            <img src={location.state.poster} alt={location.state.title}/><br/>
            </center>
            {location.state.title}  
        </span>
        <span>
        recommendation: ({location.state.rating/2}/5)<br/>
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