import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { ReactNode } from "react";

const BaseLayout = ({ children }: { children : ReactNode }) => {
  return (
    <html>
      <body>
        <div className="min-h-screen flex flex-col bg-purple-800 text-white p-4">

            {/**Header */}
            <header>  
              <nav>
                <ul className="flex justify-center space-x-7 text-lg font-semibold">
                  <li>
                    <Link href="/" className="hover:text-purple-400">Home</Link>
                  </li>
                  <li>
                    <Link href="/games" className="hover:text-purple-400">Games</Link>
                  </li>
                  <li>
                    <Link href="/ForTemplate" className="hover:text-purple-400">Template</Link>
                  </li>
                  <li>
                    <Link href="/nothingError" className="hover:text-purple-400">Contact</Link>
                  </li>
                </ul>
              </nav>
            </header>
          

            {/**Main Section */}
            <main className="mt-4 p-8 bg-white shadow-inner rounded-lg">
              {children}
            </main>

            {/* Footer */}
            <footer className="bg-purple-800 text-white text-center p-4 mt-4">
              <p>&copy; 2025 My Game Website</p>
            </footer>

        </div>
      </body>
    </html>
  )
}


export default BaseLayout;