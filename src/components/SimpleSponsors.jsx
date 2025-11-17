import "./SimpleSponsors.css";

export default function SimpleSponsors() {
  const sponsors = [
    "Sohan Scientific Instruments",
    "Rohan Scientific & Chemical Co",
    "Nanoglobal",
  ];

  return (
    <div className="simple-sponsor-section">
      <h2 className="simple-sponsor-title">Sponsors</h2>

      <div className="simple-sponsor-container">
        {sponsors.map((name, index) => (
          <div key={index} className="simple-sponsor-box">
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}
