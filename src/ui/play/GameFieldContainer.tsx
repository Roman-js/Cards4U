import React, {useState} from "react";
import GameField from "./GameField";
import {AppStoreType} from "../../bll/store";
import {connect, useSelector} from "react-redux";
import {updateCards} from "../../bll/reducers/cardsTable-reducer";
import {CardsType} from "../settings/cards/cardsType";

type OwnPropsType = {
    updateCards: (card: any) => void
}
const GameFieldContainer: React.FC<OwnPropsType> = (props) => {

    const [cardOfNumber, setCardOfNumber] = useState(0);
    const cards = useSelector((state: AppStoreType) => state.cards.theCards);


    const sum = cards.map(elem => elem.grade).reduce((acc, el) => acc + el)
    console.log(sum)
    const devideCard = cards.map((card: any) => card.grade / Number(sum))
    console.log(devideCard)
    const x = Math.random() * 1
    console.log(x)
    const next = () => {

        let totalP = 0;
        for (let i = 0; i < devideCard.length; i++) {
            totalP += devideCard[i];
            console.log("totalP => " + totalP);
            if(x > totalP) {
                console.log("item " + i + " with value: " + devideCard[i]);
                break;
            }
        }
        return totalP
        // for (let i = 0; i < devideCard.length; i++) {
        //     if (x > devideCard[i]) {
        //         return devideCard[i]
        //     } else {
        //         return devideCard[i++]
        //     }
        // }
    }
    // console.log(totalP)
    let result = next()
    console.log(result)
    let superResult = devideCard.indexOf(result)
    console.log(superResult)


/// working version
//     let grade = [2, 5, 3, 7, 4]
//     const sum = grade.reduce((acc: any, card: any) => acc + card)
//     console.log(sum)
//     const devideCard = grade.map((card: any) => card / Number(sum))
//     console.log(devideCard)
//     const x = Math.random() * 1
//     console.log(x)
//     const next = () => {
//         for (let i = 0; i < devideCard.length; i++) {
//             if (x < devideCard[i]) {
//                 return devideCard[i]
//             } else {
//                 return devideCard[i++]
//             }
//         }
//     }
//     let result = next()
//     console.log(result)
//     let superResult = devideCard.indexOf(result as any)
//     console.log(superResult)
        //working version

    // var totalP = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     var p = arr[i]/sum;
    //     console.log("p => " + p);
    //     totalP += p;
    //     console.log("\ttotalP => " + totalP);
    //     if(r < totalP) {
    //         console.log("\t\tBINGO!!!! => item " + i + " with mark: " + arr[i]);
    //         break;
    //     }
    // }
    ///working version


    // const minGrade = cards.reduce((acc, el) => acc.grade < el.grade ? acc : el); ///получаем минимальный элемент grade
    const nextCard = () => {
        setCardOfNumber(cardOfNumber + 1 )
        // setCardOfNumber(superResult+1)
    };

    if (cards[cardOfNumber] === undefined) {
        setCardOfNumber(0)
    }

    const card = cards[cardOfNumber];


    const setGrade = (grade: number) => {
        const newGrade = (card.shots * card.grade + grade) / (card.shots + 1);
        const updatedCard = {...cards, shots: card.shots + 1, grade: newGrade};
        Math.floor(Math.random() * 5);
        props.updateCards(updatedCard)
    };

    return (
        <GameField card={card}
                   nextCard={nextCard}
                   setGrade={setGrade}/>
    )
};

export default connect(null, {updateCards})(GameFieldContainer)
