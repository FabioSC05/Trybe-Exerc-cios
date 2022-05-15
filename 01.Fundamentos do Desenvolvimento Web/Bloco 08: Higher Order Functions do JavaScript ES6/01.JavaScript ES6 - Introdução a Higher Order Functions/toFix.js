const wakeUp = () => 'Acordando!!';

const coffee = () => 'Bora tomar café!!';

const sleep = () => 'Partiu dormir!!';

const doingThings = (callBack) => {
  console.log(callBack());
};

doingThings(wakeUp);
doingThings(coffee);
doingThings(sleep);