import { useState, useEffect } from 'react';

export interface Station {
  title: string;
  station_tag: string;
  installed_date: Date;
  address: string;
  location: { latitude: number; longitude: number };
  uptime: number;
}

const useStationsInfo = () => {
  const [stations, setStations] = useState<Station[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStations = async () => {
      try {
        const response = await fetch('http://localhost:3000/stations'); // Replace with your backend endpoint URL
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setStations(data);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchStations();
  }, []);

  return { stations, loading, error };
};

export default useStationsInfo;
