import React from 'react';
import { render, screen } from '@testing-library/react'
import HorseList from '../src/components/HorseList'

test("Basics of the list renders", () => {
    // Task 1 - List all horses
    render(<HorseList/>);

    const title = screen.getByText(/Our Horses/i);
    const subtitle = screen.getByText(/Click any name to see their details./i);
    const firstHorse = screen.getByText(/Thunderdash/i);

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(firstHorse).toBeInTheDocument(); // if we see the first, we can assume all others will show as the api is responding correctly

})

test("Form fields show as expected"), () => {
    // Task 4 - Add a horse
    render(<HorseList/>);

    const addHorse = screen.getByText(/Add a new Horse!/i);
    const formMandatory = screen.getByText(/The fields in bold are mandatory./i);
    const nameInput = screen.getByText(/Name:/i);
    const foodInput = screen.getByText(/Favorite Food:/i);
    const heightInput = screen.getByText(/Height (cm):/i);
    const weightInput = screen.getByText(/Weight (kg):/i);

    expect(addHorse).toBeInTheDocument();
    expect(formMandatory).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    expect(foodInput).toBeInTheDocument();
    expect(heightInput).toBeInTheDocument();
    expect(weightInput).toBeInTheDocument();
}