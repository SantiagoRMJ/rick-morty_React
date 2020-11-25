import React, {Component} from 'react'



class CharacterItem extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
            <img src={this.props.character.image}/>    
            <p>{this.props.character.id}</p>
            <p>{this.props.character.name}</p>
            </div>
        )
    }
}

export default CharacterItem
