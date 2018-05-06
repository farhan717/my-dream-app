interface Info
{
    roll: number,
    name: string,
}

let myInfo: Info = {roll: 1, name: "Adeepta"};

            // Error
            // https://www.typescriptlang.org/docs/handbook/interfaces.html
//myInfo.name = "Adeepta";
//myInfo.roll = 1;

function processInterface()
{

    console.log(myInfo.roll+ " "+ myInfo.name);
    

}

processInterface();