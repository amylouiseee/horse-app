import { useState } from "react";

// Form to add a new horse, method to update API
const AddHorse = () => {

    interface HorseFormState {
        id: number;
        name: string;
        favoriteFood: string;
        height: number;
        weight: number;
    }

    const [formData, setFormData] = useState<HorseFormState> ({
        id: 0,
        name: '',
        favoriteFood: '',
        height: 0,
        weight: 0,
      })

      const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData(prevData => ({...prevData, [name]: value}))
      }

      async function usePostData(formData: any) {
            fetch('http://localhost:3016/horse', {
                method: 'PUT',
                headers : { 
                    'Content-Type': 'application/json'
                    },
                body: JSON.stringify({formData})
                })
                .then((response) => response.json())
                .catch((err) => {
                    console.log(err.message);
                });
        }

      const useSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        usePostData(formData);
      }
    
    return (
        <div>
            <br/>
            <h1 className="text-xl py-0.5">Add a new Horse!</h1>
            <p className="text-sm"><em>The fields in <b>bold</b> are mandatory.</em></p>

            <form name="horse-form" className="flex flex-col" onSubmit={useSubmit}>
                <label className="py-1">
                    <b>Name:</b> <input required id="name" type="text" form="horse-form" onChange={onChange} className="border-2"/>
                </label>
                <label className="py-1">
                    Favorite Food: <input id="favoriteFood" type="text" form="horse-form" onChange={onChange} className="border-2"/>
                </label>
                <label className="py-1">
                    Height (cm): <input id="height" type="number" form="horse-form" onChange={onChange} className="border-2"/>
                </label>
                <label className="py-1">
                    Weight (kg): <input id="weight" type="number" form="horse-form" onChange={onChange} className="border-2"/>
                </label>
                <input type="submit" className="bg-gray-200 hover:bg-gray-300 font-bold rounded-full py-1 px-5"/>
            </form>
            <br/>
        </div>
    );
}

export default AddHorse;