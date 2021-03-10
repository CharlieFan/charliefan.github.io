import React from "react";
import { Link } from "gatsby";

export default function NavAside() {
    return (
        <aside className="sticky top-5 p-4 rounded-md bg-gray-100">
            <div className="overflow-hidden rounded-full w-12 h-12">
                <img
                    src={"/avatar.jpeg"}
                    width="auto"
                    height="auto"
                    alt="avatar"
                />
            </div>

            <h6 className="text-sm text-gray-900 m-0 py-4">Charlie Fan</h6>

            <p className="mb-5 text-xs whitespace-pre-line text-gray-500">
                Front End Developer. JavaScript, React, Vue enthusiast. I am
                full of passion, self-Driven, and a Lifelong learner. Amateur
                Photographer | Foodie | Movie lover.
            </p>

            <ul>
                <li className="py-1 m-0">
                    <Link className="text-gray-500 bg-none" activeClassName="underline text-gray-900	" to="/">Articles</Link>
                </li>

                <li className="py-1 m-0">
                    <Link className="text-gray-500  bg-none"  activeClassName="underline text-gray-900	" to="/about/">About</Link>
                </li>

                <li className="py-1 m-0">
                    <Link className="text-gray-500  bg-none"  activeClassName="underline text-gray-900	" to="/contact/">Contact</Link>
                </li>
            </ul>

            <p className="text-xs text-gray-400">&copy; All rights preserved</p>
        </aside>
    );
}
