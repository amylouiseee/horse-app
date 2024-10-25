const Header = () => {
    return (
        <header className="header">
            <nav className="flex space-x-4" >
            <h1 className="text-slate-700 px-4 py-2">Horse App</h1>
            {[
                ['Home', '/'],
                ['Add a Horse', '/add'],
                ['View Horses', '/horses'],
            ].map(([title, url]) => (
                <a href={url} className="px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
            ))}
            </nav>
            <hr />
        </header>
    );
  }
  
  export default Header;