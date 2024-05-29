import AstronomyCard from '../components/AstronomyCard';
import { useEffect, useState } from 'react';
import { getNasaData } from '../data/apiNasa';
import { AstronomyData } from '../types/types';
import { datePickerFormat } from '../utilities/datePickerFormat';
import MiniSpinner from '../components/MiniSpinner';

function MainPage() {
  const [datePicker, setDatePicker] = useState(() => datePickerFormat());
  const [data, setData] = useState<AstronomyData | null>(null);
  const [loading, setLoading] = useState(false);

  // useEffect hook for handling data fetching not a good approach,
  // however, since it's a small data it's fine just to do it like this,
  // otherwise I would use TanStack library

  useEffect(() => {
    setLoading(true);
    async function getData() {
      const data = await getNasaData(datePicker);
      setData(data);
      setLoading(false);
    }
    getData();
  }, [datePicker]);

  if (loading) return <MiniSpinner />;
  if (!data) return;

  return (
    <div>
      <AstronomyCard
        data={data}
        datePicker={datePicker}
        setDatePicker={setDatePicker}
      />
    </div>
  );
}

export default MainPage;
