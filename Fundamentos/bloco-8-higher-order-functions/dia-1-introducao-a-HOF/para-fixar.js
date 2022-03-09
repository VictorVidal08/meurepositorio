const wakingUp = () => 'Acordando...';

const letsTakeACoffe = () => 'Bora tomar café!!';

const letsGoSleep = () => 'Partiu dormir!!';

const doingThings = (callback) => {
    const result = callback();
    console.log(result);
};


doingThings(wakingUp);
doingThings(letsTakeACoffe);
doingThings(letsGoSleep);
