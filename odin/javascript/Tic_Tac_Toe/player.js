const Player = (name, elem) =>{
    const getName = () => name;
    const getElem = () => elem;

    let move = false;

    const getMove = () => move;
    const setMove = (moveConst) => move = moveConst;

    return{
        getName, getElem, getMove, setMove
    }
};