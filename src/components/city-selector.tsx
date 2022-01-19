import React, { FunctionComponent } from "react";

const cities = [
  "Tirana",
  "Paris",
  "London",
  "Helsinki",
  "Berlin",
  "Mariehamn",
  "Tallinn",
  "Budapest",
  "Tokyo",
  "Rome",
  "Washington D.C.",
  "Buenos Aires,",
  "Bangkok",
  "Cape Town",
  "Wellington",
  "Sarajevo",
  "Sofia",
  "Pristina",
];

const CitySelector: FunctionComponent<{
  city: string;
  onChange: (city: string) => void;
}> = ({ city, onChange }) => {
  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <select value={city} onChange={handleChange}>
        {cities.map((c) => (
          <option key={c} value={c}>
            {" "}
            {c}{" "}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CitySelector;
