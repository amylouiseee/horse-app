// Simple header for stylistic purposes
const Header = () => {
    return (
        <div>
        <header className="header flex flex-row">
            <nav className="flex space-x-4">
                <h1 className="text-slate-700 px-4 py-3 text-xl">Horse App</h1>
            </nav>
            <a href="/" className="px-4 py-3.5">Home</a>
        </header>
        <hr/>
        </div>
    );
  }
  
  export default Header;