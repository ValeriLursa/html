const Player = (name, elem) =>{
    const getName = () => name;
    const getElem = () => elem;

    return{
        getName, getElem
    }
};