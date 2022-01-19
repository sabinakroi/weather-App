import React, { FunctionComponent } from "react";

interface LocationTableProps {
  locations: string[];
}

export const LocationTable: FunctionComponent<LocationTableProps> = ({
  locations,
}) => (
  <div>
    <h2>Locations</h2>
    <tbody>
      {locations.map((location, index) => (
        <tr key={index}>
          <td>{location}</td>
        </tr>
      ))}
    </tbody>
  </div>
);
