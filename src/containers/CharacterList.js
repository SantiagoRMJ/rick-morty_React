import React, {Component, Fragment} from 'react'
import axios from 'axios'
import CharacterItem from '../components/CharacterItem'
import './CharacterList.css'


class CharacterList extends Component{
    constructor(props){
        super(props);
        this.state = {
            characters: [],
            page: 1
        }
        
    }
    componentDidMount(){
        axios.get('https://rickandmortyapi.com/api/character')
            .then( (api) => {
                console.log(api.data)
                this.setState({characters : api.data.results})
            })
            .catch((err) => console.log(err))
    }
    
   onNextPage = ()=>{
       this.setState(prevState => ({page: prevState.page + 1}))
       axios.get(`https://rickandmortyapi.com/api/character?page=${this.state.page}`)
       .then( (api) => {
           console.log(api.data)
           this.setState({characters : api.data.results})
       })
       .catch((err) => console.log(err))
        console.log(this.state.page)
   }

   onBeforePage = ()=>{
        this.setState(prevState => ({page: prevState.page - 1}))
        console.log(this.state.page)
    }

    render(){
        return(
            <Fragment>
                <div>
                    <button onClick={()=> this.onBeforePage()}>Atras</button>
                    <button onClick={()=> this.onNextPage()}>Siguiente</button>
                </div>
                <div className="character-list">
                    {this.state.characters.map(
                        character =>
                        <CharacterItem character={character}/>
                    )}
                </div>
            </Fragment>
        )
    }
    
}
export default CharacterList