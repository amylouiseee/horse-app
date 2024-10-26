// Form to add a new horse
const AddHorse = () => {
    return (
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
    );
}

export default AddHorse;