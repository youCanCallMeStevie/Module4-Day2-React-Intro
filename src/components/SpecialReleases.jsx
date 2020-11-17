import React, { Component } from 'react'
import from '../module4-d2-react-intro/history.json'


export class SpecialReleases extends Component {
   
        render() {     
            return(
                <div>
                    <a href={this.state.data.portfolio[0].url}>
                       <img className="img-fluid" 
                            src={this.state.data.portfolio[0].image} 
                            alt={this.state.data.portfolio[0].site} />
                       <p>{this.state.data.portfolio[0].site}</p>
                    </a>
                </div>
            )
        }

}

export default SpecialReleases
