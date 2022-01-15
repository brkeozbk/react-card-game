import { ICard } from "../Types";


export interface IProps{
    card: ICard

}

const Card: React.FunctionComponent<IProps> = ({card}) => {
    
        switch (card.state) {
            case "matched":
                
                return(
                    <div className="card mb-3 matched" style={{height:185}}>
                        <div className="card-body text-center"style={{fontSize:100}} />
                             
                        
                    </div>

                )
                case "selected":
                return(
                    <div className="card mb-3 selected" style={{height:185}}>
                        <div className="card-body text-center"style={{fontSize:100}}>
                             {card.content}
                        </div>
                    </div>
                )
        
            default:
                return(
                    <div className="card mb-3 unmatched" style={{height:185}}>
                        <div className="card-body text-center"style={{fontSize:100}}>
                             ?
                        </div>
                    </div>
                    )
        }
        
    
}


export {Card};