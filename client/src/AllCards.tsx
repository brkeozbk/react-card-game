import * as React from 'react'
import { Card } from './components/Card'
import { ICard } from './Types'
const data: ICard[]= [
    {
        id:1,
        content:"A",
        state:"unmatched"
    },
    {
        id:2,
        content:"b",
        state:"selected"
    },
    {
        id:3,
        content:"Aüc",
        state:"matched"
    },
    {
        id:4,
        content:"A",
        state:"unmatched"
    },

]
class AllCards extends React.Component{
    render() {
        const cardList = data.map(c => (<Card key={c.id} card={c} />))
        return (
            <div className='container p-3 bg-dark-gray'>
                <div className="row row-cols-1 row-cols-md-3 g-4" style={{columnCount:2}}>
                    {cardList}
                </div>

            </div>
        )
    }
}

export {AllCards}