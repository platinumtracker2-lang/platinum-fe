import { useState, useEffect } from "react";
import * as s from "./styles";

const NAV_ITEMS = [
  { label: "Price", id: "price" },
  { label: "Supply", id: "supply" },
  { label: "South Africa", id: "south-africa" },
  { label: "Demand", id: "demand" },
  { label: "Autocatalyst", id: "autocatalyst" },
  { label: "Hydrogen", id: "hydrogen" },
  { label: "Balance", id: "balance" },
  { label: "Forecast", id: "forecast" },
  { label: "Producers", id: "producers" },
  { label: "History", id: "history" },
  { label: "Drivers", id: "drivers" },
  { label: "ETFs", id: "etfs" },
];

export default function SectionNav() {
  const [activeId, setActiveId] = useState("price");

  useEffect(() => {
    const observers = [];

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { rootMargin: "-20% 0px -60% 0px", threshold: 0 },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const goTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    setActiveId(id);
    const offset = 80;
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  };

  return (
    <div style={s.nav}>
      <div style={s.navInner}>
        {NAV_ITEMS.map(({ label, id }) => (
          <button
            key={id}
            style={activeId === id ? s.navBtnActive : s.navBtn}
            onClick={() => goTo(id)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
