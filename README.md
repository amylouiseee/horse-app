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


## Assumptions made/design decisions 👩‍🎨
- I have changed the file directory name for the API so the file structure looks cleaner
- Using Tailwind CSS for basic formatting as it is quick to set up
- No extra input validation needed to be made for adding horses, except for name being mandatory

### Implementations made
- List horses
- Add a horse
- CSS styling

### Next steps (if it were a real project)
- Display details for a horse
- Edit details for a horse (someone must be able to see the details to edit them - so this comes second)
- Comparing horses (again this requires being able to see the details)