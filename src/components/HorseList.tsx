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
        <div>
            <h1 className="px-4">Our Horses</h1>
            {/* Display each horse */}
            {horses.map((horse) => {
                return (
                    <div className="px-4">
                        <Horse name={horse.name}/>
                    </div>
                );
            })}
            <AddHorse />
        </div>
    );
}

export default HorseList;