// Interacts with the API to grab all the horses and passes it off to the Horse component
// Allows for horses to be seen, their details examined and to add a new horse
import { useState, useEffect } from 'react';
import Horse from './Horse';

const HorseList = () => {
        const [horses, setHorses] = useState<any[]>([]);
        useEffect(() => {
           fetch('http://localhost:3016/horse', {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }
            })
              .then((response) => response.json())
              .then((data) => {
                 console.log(data);
                 setHorses(data);
              })
              .catch((err) => {
                 console.log(err.message);
              });
        }, []);

    return (
        <div className="px-4">
            <h1 className="text-xl">Our Horses</h1>
            <p className="text-sm"><em>Click any name to see their details.</em></p>
            {/* Display each horse in a list
              * I've chosen to slice the array - if I had more time I would paginate this           
              */}
            {horses.slice(0,10).map((horse) => {
                return (
                    <div>
                        <Horse name={horse.name}/>
                    </div>
                );
            })}
            <br/>
            <hr/>

            {/* Add a new horse */}
             <div>
                <br/>
                <h1 className="text-xl py-0.5">Add a new Horse!</h1>
                <p className="text-sm"><em>The fields in <b>bold</b> are mandatory.</em></p>
                <form name="horse-form" className="flex flex-col">
                    <label className="py-1">
                        <b>Name:</b> <input required id="name" type="text" form="horse-form" max="50" className="border-2"/>
                    </label>
                    <label className="py-1">
                        Favorite Food: <input id="favoriteFood" type="text" form="horse-form" max="50" className="border-2"/>
                    </label>
                    <label className="py-1">
                        Height (cm): <input id="height" type="number" form="horse-form" className="border-2"/>
                    </label>
                    <label className="py-1">
                        Weight (kg): <input id="weight" type="number" form="horse-form" className="border-2"/>
                    </label>
                </form>
                <br/>
                <input type="submit" className="bg-gray-200 hover:bg-gray-300 font-bold rounded-full py-1 px-5"/>
            </div>
        </div>
    );
}

export default HorseList;