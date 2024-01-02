import { useState, useEffect } from 'react';

export interface VehicleData {
  Location: string;
  Timestamp: Date;
  NumberPlate: string;
}

const useStationsInfo = () => {
  const [vehicleDatas, setVehicleDatas] = useState<VehicleData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVehicleDatas = async () => {
      try {
        const response = await fetch('http://localhost:3000/vehicleDatas'); // Replace with your backend endpoint URL
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setVehicleDatas(data);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchVehicleDatas();
  }, []);

  return { vehicleDatas, loading, error };
};

export default useStationsInfo;
