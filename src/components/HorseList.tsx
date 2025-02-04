// Interacts with the API to grab all the horses and passes it off to the Horse component
// Allows for horses to be read and users can add a new horse
import { useState, useEffect } from 'react';
import Horse from './Horse';

const HorseList = () => {
    const [horses, setHorses] = useState<any[]>([]);

    // Get the list of horses on load
    useEffect(() => {
        fetch('http://localhost:3016/horse', {
            headers: {
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

    // Basic data structure of our form and what we want our API to get
    interface HorseFormState {
        id: string;
        name: string;
        favoriteFood: string;
        height: number;
        weight: number;
    }

    // Setting up the data for use in the form
    const [formData, setFormData] = useState<HorseFormState>({
        id: '',
        name: '',
        favoriteFood: '',
        height: 0,
        weight: 0,
    })

    // Updating our state when the form is changed
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData(prevData => ({ ...prevData, [id]: value }))
    }

    // Update our API and also check the name is entered
    async function usePostData(formData: any) {
        var randomUUID = crypto.randomUUID

        const id = randomUUID;
        const name = formData.name;
        const favoriteFood = formData.favoriteFood;
        const height = formData.height;
        const weight = formData.weight;

        if (name === ''){
            alert("Name must be entered!");
            return;
        }
        
        // PUT the new horse
        await fetch('http://localhost:3016/horse', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, name, favoriteFood, height, weight })
        })
            .then((response) => response.json())
            .catch((err) => {
                console.log(err.message);
            });

            // GET the list of horses again
            fetch('http://localhost:3016/horse', {
                headers: {
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
    }

    // Submit the data to the API
    const useSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        usePostData(formData);
    }

    return (
        <div className="px-4">
            <h1 className="text-xl">Our Horses</h1>
            <p className="text-sm"><em>Click any name to see their details.</em></p>
            {/* Display each horse in a list
              * I've chosen to slice the array - if I had more time I would paginate this           
              */}
            {horses.slice(0, 10).map((horse) => {
                return (
                    <div>
                        <Horse name={horse.name} />
                    </div>
                );
            })}
            <br />
            <hr />

            {/* Form for adding new horses */}
            <div>
                <br />
                <h1 className="text-xl py-0.5">Add a new Horse!</h1>
                <p className="text-sm"><em>The fields in <b>bold</b> are mandatory.</em></p>

                <form name="horse-form" className="flex flex-col" onSubmit={useSubmit}>
                    <label className="py-1">
                        <b>Name:</b> <input required id="name" type="text" form="horse-form" onChange={onChange} className="border-2" />
                    </label>
                    <label className="py-1">
                        Favorite Food: <input id="favoriteFood" type="text" form="horse-form" onChange={onChange} className="border-2" />
                    </label>
                    <label className="py-1">
                        Height (cm): <input id="height" type="number" form="horse-form" onChange={onChange} className="border-2" />
                    </label>
                    <label className="py-1">
                        Weight (kg): <input id="weight" type="number" form="horse-form" onChange={onChange} className="border-2" />
                    </label>
                    <div className="py-1">
                        <input type="submit" className="bg-gray-200 hover:bg-gray-300 font-bold rounded-full py-1 px-5 w-32" />
                    </div>
                </form>
                <br />
            </div>
        </div>
    );
}

export default HorseList;