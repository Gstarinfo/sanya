import { useState, useEffect } from "react";
import { format, isSameDay } from "date-fns";
import RoseDay from "./components/RoseDay";
import ProposeDay from "./components/ProposeDay";
import ChocolateDay from "./components/ChocolateDay";
import TeddyDay from "./components/TeddyDay";
import PromiseDay from "./components/PromiseDay";
import HugDay from "./components/HugDay";
import KissDay from "./components/KissDay";
import ValentineDay from "./components/ValentineDay";

import { Calendar, Lock } from "lucide-react";

// Manual Override for testing/viewing
const DAYS = [
  { date: new Date(2024, 1, 7), component: RoseDay, label: "Rose Day" },
  { date: new Date(2024, 1, 8), component: ProposeDay, label: "Propose Day" },
  { date: new Date(2024, 1, 9), component: ChocolateDay, label: "Chocolate Day" },
  { date: new Date(2024, 1, 10), component: TeddyDay, label: "Teddy Day" },
  { date: new Date(2024, 1, 11), component: PromiseDay, label: "Promise Day" },
  { date: new Date(2024, 1, 12), component: HugDay, label: "Hug Day" },
  { date: new Date(2024, 1, 13), component: KissDay, label: "Kiss Day" },
  { date: new Date(2024, 1, 14), component: ValentineDay, label: "Valentine's Day" },
];

export default function App() {
  // Default to today, or Rose Day if before Feb 7, or Valentine Day if after Feb 14
  const [currentDate, setCurrentDate] = useState(new Date());

  // Navigation State
  const [showMenu, setShowMenu] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [errorInfo, setErrorInfo] = useState(false);

  // Find the exact matching day for the current date logic
  const getComponentForDate = (date: Date) => {
    const day = date.getDate();
    const month = date.getMonth(); // 1 for Feb

    if (month !== 1) return <ValentineDay />; // Default to Valentine if not Feb

    if (day < 7) return <RoseDay />; // Early? Start with Rose
    if (day > 14) return <ValentineDay />; // Late? End with Valentine

    // Exact Match
    switch (day) {
      case 7: return <RoseDay />;
      case 8: return <ProposeDay />;
      case 9: return <ChocolateDay />;
      case 10: return <TeddyDay />;
      case 11: return <PromiseDay />;
      case 12: return <HugDay />;
      case 13: return <KissDay />;
      case 14: return <ValentineDay />;
      default: return <ValentineDay />;
    }
  };

  // State to hold the component to render
  const [activeComponent, setActiveComponent] = useState(<RoseDay />);

  useEffect(() => {
    setActiveComponent(getComponentForDate(currentDate));
  }, [currentDate]);

  const handlePasswordSubmit = () => {
    if (passwordInput.toLowerCase() === "sanya") {
      setIsAuthenticated(true);
      setErrorInfo(false);
    } else {
      setErrorInfo(true);
      setPasswordInput("");
    }
  };

  return (
    <div className="relative min-h-screen font-nunito">
      {/* Render current day's component */}
      {activeComponent}

      {/* Navigation Menu */}
      <div className="fixed bottom-4 right-4 z-50">
        {showMenu && (
          <div className="mb-4 bg-white/90 backdrop-blur-md rounded-xl shadow-xl p-4 flex flex-col gap-2 w-64 border border-pink-200">
            <h3 className="text-pink-600 font-bold mb-2 text-center text-sm uppercase tracking-wider">
              {isAuthenticated ? "Jump to Day" : "Enter Password"}
            </h3>

            {!isAuthenticated ? (
              <div className="flex flex-col gap-2">
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="Enter secret code..."
                  className="px-3 py-2 rounded-lg border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm"
                  onKeyDown={(e) => e.key === 'Enter' && handlePasswordSubmit()}
                />
                {errorInfo && <span className="text-xs text-red-500 text-center">Incorrect password! Hint: Name?</span>}
                <button
                  onClick={handlePasswordSubmit}
                  className="bg-pink-500 text-white rounded-lg py-1.5 text-sm font-bold hover:bg-pink-600 transition"
                >
                  Unlock
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-1 max-h-[300px] overflow-y-auto">
                {DAYS.map((d, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      const newDate = new Date();
                      newDate.setMonth(1); // Feb
                      newDate.setDate(d.date.getDate());
                      setCurrentDate(newDate);
                      setShowMenu(false);
                    }}
                    className={`px-3 py-2 rounded-lg text-sm text-left font-medium transition-colors ${isSameDay(d.date.setFullYear(new Date().getFullYear()), currentDate)
                        ? "bg-pink-500 text-white"
                        : "hover:bg-pink-100 text-gray-700"
                      }`}
                  >
                    {format(d.date, "MMM d")} - {d.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        <button
          onClick={() => setShowMenu(!showMenu)}
          className="bg-white/80 backdrop-blur border border-pink-300 p-3 rounded-full shadow-lg hover:shadow-xl hover:bg-pink-50 transition-all text-pink-500"
          title="Change Day"
        >
          {isAuthenticated ? <Calendar size={24} /> : <Lock size={24} />}
        </button>
      </div>
    </div>
  );
}
