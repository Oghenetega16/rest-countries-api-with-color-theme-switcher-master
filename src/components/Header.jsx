import React from 'react';
export default function Header() {
    const [theme, setTheme] = React.useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme || 'light';
    });

    React.useEffect(() => {
        if (theme === 'dark') {
            document.body.classList.add('dark-theme');
        }
        else {
            document.body.classList.remove('dark-theme');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);
    
    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    return(
        <header>
            <h4>Where in the world?</h4>
            <div className="mode" onClick={toggleTheme}>
                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/></svg>
                <p>Dark Mode</p>
            </div>
        </header>
    )
}