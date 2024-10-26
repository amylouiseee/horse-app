// Interacts with the API to grab all the horses and passes it off to the Horse component
// Allows for horses to be seen, their details examined and to add a new horse
import { useState, useEffect } from 'react';
import Horse from './Horse';
import AddHorse from './AddHorse';

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

            <AddHorse />
        </div>
    );
}

export default HorseList;