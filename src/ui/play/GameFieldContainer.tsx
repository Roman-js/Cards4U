import React, {useState} from "react";
import GameField from "./GameField";
import {AppStoreType} from "../../bll/store";
import {connect, useSelector} from "react-redux";
import {updateCards} from "../../bll/reducers/cardsTable-reducer";
import {CardsType} from "../settings/cards/cardsType";

type OwnPropsType = {
    updateCards: (card: CardsType) => void
}
const GameFieldContainer: React.FC<OwnPropsType> = (props) => {

    const [cardOfNumber, setCardOfNumber] = useState(0);
    const cards = useSelector((state: AppStoreType) => state.cards.theCards);

    const minGrade = cards.reduce((acc, el) => acc.grade < el.grade ? acc : el); ///получаем минимальный элемент grade
    console.log(minGrade);
    const nextCard = () => {
        // setCardOfNumber(cardOfNumber + 1)
    };

    if (cards[cardOfNumber] === undefined) {
        setCardOfNumber(0)
    }

    const card = cards[cardOfNumber];


    const setGrade = (grade: number) => {
        const newGrade = (card.shots * card.grade + grade) / (card.shots + 1);
        const updatedCard = {...minGrade, shots: card.shots + 1, grade: newGrade};
        Math.floor(Math.random() * 5);
        props.updateCards(updatedCard)
    };
    console.log(cards.map(c => c.grade));

    return (
        <GameField card={minGrade}
                   nextCard={nextCard}
                   setGrade={setGrade}/>
    )
};

export default connect(null, {updateCards})(GameFieldContainer)
