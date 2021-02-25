import React, { Component } from 'react';
import './MemoryCard.css';

class MemoryCard extends React.Component {
    render() {
        return (
            <div className="MemoryCard">
                <img className="dc-logo" src="https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png" alt="DigitalCrafts Logo"/>
            </div>
        )
    }
}

export default MemoryCard;