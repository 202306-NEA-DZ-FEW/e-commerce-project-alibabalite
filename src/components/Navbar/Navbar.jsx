import Link from "next/link"
import React, { useState, useEffect } from "react"
import { FaSearch, FaCartArrowDown } from "react-icons/fa"
import Sidebar from "../Sidebar/Sidebar"
import { Logo } from "./Logo"

const Navbar = ({
  categoryFilter,
  setCategoryFilter,
  priceFilter,
  setPriceFilter,
  ratingFilter,
  setRatingFilter,
  titleFilter,
  setTitleFilter,
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data)
      })
  }, [])

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
  }

  const handleSearchBlur = () => {
    setIsSearchOpen(false)
  }
  const handleCategoryClick = (category) => {
    setCategoryFilter(category)
  }

  return (
    <>
      <div className="navbar bg-slate-100 text-slate-800 relative">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <div
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-white rounded-lg w-52 text-slate-900"
            >
              <Sidebar
                categories={categories}
                categoryFilter={categoryFilter}
                setCategoryFilter={setCategoryFilter}
                priceFilter={priceFilter}
                setPriceFilter={setPriceFilter}
                ratingFilter={ratingFilter}
                setRatingFilter={setRatingFilter}
                titleFilter={titleFilter}
                setTitleFilter={setTitleFilter}
              />
            </div>
          </div>
          <Link href={"/"}>
            <Logo />
          </Link>
        </div>
        {/* Navbar Start Ends Here */}
        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex text-white">
          <ul className="menu menu-horizontal px-1 text-slate-800">
            <li>
              <Link href={"/products"}>Products</Link>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Categories</summary>
                <ul className="p-2 text-slate-800 z-10 bg-slate-100 shadow rounded-lg w-52">
                  {categories.map((category) => (
                    <li
                      key={category.id}
                      className="hover:bg-slate-300 hover:rounded-lg cursor-pointer text-slate-800"
                      onClick={() => handleCategoryClick(category)}
                    >
                      <a href="/products">{category}</a>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          </ul>
        </div>
        {/* Navbar Center Ends Here */}
        {/* Navbar End Starts */}
        <div className="navbar-end">
          <button
            className="btn btn-ghost btn-circle hover:bg-slate-800 hover:text-slate-200"
            onClick={toggleSearch}
          >
            <div
              className={`transition-transform duration-300 ease-in-out transform ${
                isSearchOpen ? "rotate-45" : "rotate-0"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </button>
          {isSearchOpen && (
            <div className="absolute top-full left-0 w-full bg-slate-100 text-slate-900 p-2 transition-transform duration-300 ease-in-out transform translate-y-0 opacity-100 scale-y-100">
              <div className="form-control">
                <input
                  type="text"
                  className="search-input text-center pt-1 pb-1 text-slate-900 rounded-lg w-full"
                  placeholder="Search..."
                  autoFocus
                  //onBlur={handleSearchBlur}
                  value={titleFilter}
                  onChange={(e) => setTitleFilter(e.target.value)}
                />
              </div>
            </div>
          )}
          <button className="btn btn-ghost btn-circle hover:bg-slate-800 hover:text-slate-200">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item">
                Test
              </span>
            </div>
          </button>
        </div>
        {/* Navbar End Ends Here */}
      </div>
    </>
  )
}

export default Navbar
