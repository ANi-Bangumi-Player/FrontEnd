"use client";
import { useState } from "react"
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Navbar(){
    const [searchText,setSearchText] = useState("");
    const router = useRouter();
    const handleChange = (event)=>{
        setSearchText(event.target.value);
    }
    const  handleKey = (event) =>{
        if(event.key==='Enter'){
            event.preventDefault();
            // history.replaceState(null,document.title,`/?q=${searchText}`)
            router.replace(`/?q=${searchText}`)
        }
    }
    const changeParams = (pageId) => {
        // history.replaceState(null,document.title,`/?q=${searchText}`)
        router.replace(`/?q=${searchText}`)
    }
    return <nav className="flex-no-wrap top-0 fixed inset-x-0 flex w-full items-center justify-between bg-[#FBFBFB] py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4" data-te-navbar-ref>
        <div className="flex w-full flex-wrap items-center justify-between px-3">
            <button className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-noe focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContent1"
            aria-controls="navbarSupportedContent1"
            aria-expanded="false"
            aria-label="Toggle navigation">
                        <span>Bangumi-Go!</span>
            </button>
        </div>
        <div className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto" id="navbarSupportedContent1"
            data-te-collapse-item>
                <a className="mb-4 ml-2 mr-5 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
                    href="/">
                Bangumi-Go!
            </a>
            <ul 
                className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row" data-te-navbar-nav-ref>
                    <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                        <a className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
                            href="/"
                            data-te-nav-link-ref>
                                首页
                            </a>
                    </li>
                    <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                        <a className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
                            href="/about"
                            data-te-nav-link-ref>
                                关于
                            </a>
                    </li>
                </ul>
        </div>
        <div className="ml-5 flex w-[30%] items-center justify-between">
            <input
                type="search"
                className="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none motion-reduce:transition-none dark:border-neutral-500 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                placeholder="Search"
                aria-label="Search"
                onChange={handleChange}
                onKeyDown={handleKey}
                value={searchText}
                aria-describedby="button-addon2" />

            <div
                className="input-group-text cursor-pointer flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                id="basic-addon2"
                onClick={changeParams}
                >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5">
                <path
                    fill-rule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clip-rule="evenodd" />
                </svg>
            </div>
        </div>
    </nav>
}