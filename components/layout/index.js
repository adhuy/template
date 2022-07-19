import Sidebar from "../Sidebar";
import Navbar from "../navbar";

export default function Layout({ children }) {
    return (
        <div className="h-screen flex flex-row justify-start">
          <title>Adhuy Template</title>
          <Sidebar />
          <div className="flex flex-col w-screen">
            <Navbar />
            <div className="flex-1 p-3 text-black bg-slate-100">{children}</div>
          </div>
        </div>
    )
}