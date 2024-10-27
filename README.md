# Horse App - Amy Bohte
Created as part of a technical test.

## Tech Stack 📚
- TypeScript
- React
- Tailwind CSS

## How to run the app 🏭
### Running docker services
- Open a terminal window
- Enter the command 'cd api'
- Enter the command 'docker build -t horse_api .'
- Enter the command 'docker run -p 3016:3016 horse_api'

### Running the app
- Open a terminal window
- Enter the command 'npm run start'
- In a browser, navigate to 'http://localhost:3000/'

## Unit tests
### About the tests
- Both task 1 and 4 have a unit test located in '/__tests__/HorseList.test.tsx'
- Just a note: The unit tests are fairly basic. I wanted to strike a decent balance between testing and actual code produced. If I had more time I would have tested validation, accessibility, api responses etc.
- Given more time I also wold have included integration tests


## Assumptions made/design decisions 👩‍🎨
- I have changed the file directory name for the API so the file structure looks cleaner
- Using Tailwind CSS for basic formatting as it is quick to set up
- No extra input validation needed to be made for adding horses, except for name being mandatory
- Skipped adding pagination to the list for time's sake, but this would be a must if I had the time
- I went for code quality instead of finishing all the tasks, it was more important for me to produce legible, documented code.

### Implementations made
- List horses
- Add a horse
- CSS styling

### Next steps (if it were a real project)
- Add pagination to the list of horses
- Form type validation
- Display details for a horse
- Edit details for a horse (someone must be able to see the details to edit them - dependency)
- Comparing horses (again this requires being able to see the details - dependency)