import React, {useState, useEffect} from "react"; 
import axios from "axios";
import Card from "./Card";

//https://deckofcardsapi.com/api/deck/new/ 

const Deck = () => {
     const DECK_API = "https://deckofcardsapi.com/api/deck";
     const [data, setData] = useState(null);
     const [drawn, setDrawn] = useState([]);
     const [isShuffling, setIsShuffling] = useState(false);

     useEffect ( () => {
        async function loadDeck() {
            const res = await axios.get(`${DECK_API}/new/shuffle`);
            console.log("deck data",res.data);
            setData(res.data);
        }
        loadDeck();
     }, [])
     
    async function drawOneCard () {
        try {
        const res = await axios.get(`${DECK_API}/${data.deck_id}/draw`); 
        if (res.data.remaining === 0) throw new Error("Deck empty!");
        const card = res.data.cards[0];
        setDrawn(d=> [...d, 
            {id: card.code, 
            name: card.suit + " " + card.value, 
            image: card.image,}
        ]); 
        } 
        catch(err) {
            alert(err);
        }
    }
    async function shuffleDeck(){
        setIsShuffling(true);
        await axios.get(`${DECK_API}/${data.deck_id}/shuffle/`);
        setDrawn([]);
        setIsShuffling(false);
    }
    function renderDrawnBtn() {
        if (!data) return null;
        return (
            <button 
            onClick = {drawOneCard}
            disabled = {isShuffling}> Draw A Card
            </button>
        )
    }
    function renderShuffleBtn(){
        if (!data) return null; 
        return (
            <button 
            onClick ={shuffleDeck}
            disabled={isShuffling}> Shuffle Deck </button>
        )
    }

    return(
        <>
        {renderDrawnBtn()}
        {renderShuffleBtn()}
        <div>{
            drawn.map(c => (<Card key={c.id} name ={c.name} image={c.image}/> 
            ))}
        </div>
        </>
    )   

}
export default Deck;