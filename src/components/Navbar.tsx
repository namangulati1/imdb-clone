import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [search, setSearch] = React.useState("");
    const navigate = useNavigate();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (search) navigate(`/search?query=${search}`);
    };

    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-semibold">
                    IMDb Clone
                </Link>
                <form onSubmit={handleSearch} className="flex">
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search for movies..."
                        className="px-4 py-2 rounded-lg text-white bg-gray-700"
                    />
                    <button type="submit" className="p-2 bg-yellow-500 rounded-r">
                        Search
                    </button>
                </form>
            </div>
        </nav>
    );
};

export default Navbar;