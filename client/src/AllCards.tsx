import * as React from 'react'
import { Card } from './components/Card'
import { cardState, ICard } from './Types'
import {data} from './data'
import _ from "lodash"

interface IState {
    cards: ICard[]
}

class AllCards extends React.Component<{}, IState>{
    selectedCardIds: number [] = [];
    selectedCards: ICard[] = []
    state: IState= {
        cards: _.cloneDeep(data)
    }
    cardClickHandler = (card: ICard) =>{
        const {cards} =this.state
        if (this.selectedCardIds.length< 2){
            this.selectedCardIds.push(card.id)
            this.selectedCards.push(card)
            this.setState({
                ...this.state,
                cards: cards.map(c => c.id === card.id ? card: c) //mapla dondurdugumuz card dizisi ile c dizisi id aynı ise cevir 
            }, this.checkMarch)

            //eger eslesiyorsa
            
        }
        
        //console.log({card});

    }

    checkMarch = () =>{
        if (this.selectedCardIds.length === 2  ){
            setTimeout(() => {
                let newCards: ICard[] = []
            const {cards} =this.state
            let nextState: cardState = "unmatched"

            if(this.selectedCards[0].content === this.selectedCards[1].content){
                
                    
                    nextState = "matched"

                
                
            }
            newCards = cards.map(c=>{
                if(this.selectedCardIds.includes(c.id)){
                    c.state = nextState
                }
                return c
            })
            
            
                this.selectedCardIds= []
            this.selectedCards= []
            this.setState({
                ...this.state,
                cards: newCards
                       

            })
            }, 500);
                
            }

    }
    
     reset = () =>{
        console.log("reset");
    this.selectedCardIds = []
    this.selectedCards = []
    this.setState({
        ...this.state,
        cards: data
    })

    }
    render() {
        const cardList = this.state.cards.map(c => (<Card key={c.id} card={c} clickHandler={this.cardClickHandler}/>))
        return (
            <div className='container p-3 bg-dark-gray'>
                <div className="row row-cols-1 row-cols-md-3 g-4" style={{columnCount:2}}>
                    {cardList}
                </div>
                <hr />
                <button onClick={this.reset} className='btn btn-primary'> retyrn</button>

            </div>
        )
    }
}

export {AllCards}