import { Link } from "react-router-dom";
import bgImage from "../../public/Background.jpg";

export function Saved() {
    const locations = [
        {
          name: 'Location 1 Name',
          address: 'Address 1',
          googleMapsLink: 'https://maps.google.com/?q=Address+1',
          photoLink: 'https://example.com/photo1.jpg',
        },
        {
          name: 'Location 2 Name',
          address: 'Address 2',
          googleMapsLink: 'https://maps.google.com/?q=Address+2',
          photoLink: 'https://example.com/photo2.jpg',
        },
        {
          name: 'Location 3 Name',
          address: 'Address 3',
          googleMapsLink: 'https://maps.google.com/?q=Address+3',
          photoLink: 'https://example.com/photo3.jpg',
        },
        {
          name: 'Location 4 Name',
          address: 'Address 4',
          googleMapsLink: 'https://maps.google.com/?q=Address+4',
          photoLink: 'https://example.com/photo4.jpg',
        },
      ];
  return (
    <>
        <img className="backgroundImage" src={bgImage} alt="vancouver skyline background" />
        <div className="containerSavedCentering">
        <div className="mainContainer-saved">
            <h1 className="header-saved">Saved Locations</h1>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}>Name:</th>
            <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}>Address:</th>
            <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}>Photo:</th>
          </tr>
        </thead>
        <tbody>
          {locations.map((location, index) => (
            <tr key={index}>
              <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>{location.name}</td>
              <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>
                <a href={location.googleMapsLink} target="_blank" rel="noopener noreferrer">
                  {location.address}
                </a>
              </td>
              <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>
                <a href={location.photoLink} target="_blank" rel="noopener noreferrer">
                  View Photo
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button>
            <Link to={"/"}>Go Back</Link>
        </button>
        </div>
        </div>
        
    </>
  );
}