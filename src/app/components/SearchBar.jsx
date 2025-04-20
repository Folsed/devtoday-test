'use client';

import { useState } from 'react';
import { dropdownItems } from './_dropdownItems';
import { useRouter } from 'next/navigation';

const SearchBar = () => {
    const [active, setActive] = useState(false);
    const [dropdownValue, setDropdownValue] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [prepValue, setPrepValue] = useState(0);
    const router = useRouter();

    const handleClick = () => {
        setActive(!active);
    };

    const linkToRecipes = () => {
        const params = new URLSearchParams();

        if (inputValue) params.append('query', inputValue);
        if (dropdownValue) params.append('cuisine', dropdownValue);
        if (prepValue > 0) params.append('maxReadyTime', prepValue.toString());

        return `/recipes?${params.toString()}`;
    };

    const handleSearch = e => {
        e.preventDefault();
        router.push(linkToRecipes());
    };

    return (
        <form className="mx-auto" onSubmit={handleSearch}>
            <div className="flex flex-col sm:flex-row">
                <button
                    className="w-full shrink-0 sm:w-48 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                    type="button"
                    onClick={handleClick}
                >
                    {dropdownValue ? dropdownValue : 'Select Cuisine'}
                    <svg
                        className="w-2.5 h-2.5 ms-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 4 4 4-4"
                        />
                    </svg>
                </button>
                <div
                    className={`z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 absolute mt-12 ${active ? 'block' : 'hidden'}`}
                >
                    <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdown-button"
                    >
                        {dropdownItems.map(item => (
                            <li key={item.id}>
                                <button
                                    type="button"
                                    className="block px-4 py-2 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    onClick={() => {
                                        setActive(false);
                                        setDropdownValue(item.value);
                                    }}
                                >
                                    {item.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="relative w-full">
                    <input
                        type="search"
                        className="block p-2.5 w-64 z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                        placeholder="Search..."
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:dark:bg-gray-700"
                        disabled={dropdownValue || inputValue || prepValue ? false : true}
                    >
                        <span className="">Next</span>
                    </button>
                </div>
                <div className="relative w-full">
                    <input
                        type="number"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-36 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Prep. time/mins"
                        value={prepValue === 0 ? '' : prepValue}
                        onChange={e => setPrepValue(Number(e.target.value))}
                    />
                </div>
            </div>
        </form>
    );
};
export default SearchBar;
