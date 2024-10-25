# Horse App - Amy Bohte
Created as part of First AML technical test.

## Tech Stack 📚
- TypeScript
- React
- Tailwind CSS

## How to run the app 🏭
### Running the app
- Open a terminal window
- Enter the command 'npm run start'
- In a browser, navigate to 'http://localhost:3000/'

### Running docker services
- Open a secondary terminal window
- Enter the command 'cd api'
- Enter the command 'docker build -t horse_api .'
- Enter the command 'docker run -p 3016:3016 horse_api'

## Assumptions made/design decisions 👩‍🎨
- I have changed the file directory name for the API so the file structure looks cleaner
- Using Tailwind CSS for basic formatting as it is quick to set up

### Implementations made
- List horses
- Add horses