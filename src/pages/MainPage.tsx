import styles from '../styles/pages/MainPage.module.css';
import AstronomyCard from '../components/AstronomyCard';
import { useEffect, useState } from 'react';
import { getNasaData } from '../data/apiNasa';
import { AstronomyData } from '../types/types';
import { datePickerFormat } from '../utilities/datePickerFormat';
import MiniSpinner from '../components/MiniSpinner';
import ErrorPage from './ErrorPage';

function MainPage() {
  const [datePicker, setDatePicker] = useState(() => datePickerFormat());
  const [data, setData] = useState<AstronomyData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // useEffect hook for handling data fetching not a good approach,
  // however, since it's a small data it's fine just to do it like this,
  // otherwise I would use TanStack library.
  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const data = await getNasaData(datePicker);
        setData(data);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) setError(error.message);
      }
    }
    getData();
  }, [datePicker]);

  if (error) return <ErrorPage error={error} />;
  if (!data) return;

  let content = <AstronomyCard data={data} />;

  if (loading) content = <MiniSpinner />;

  return (
    <div>
      <div className={styles.datePicker}>
        <label>Choose Another Date:</label>
        <input
          type='date'
          value={datePicker}
          onChange={(e) => setDatePicker(e.target.value)}
          max={datePickerFormat()}
        />
      </div>

      {content}
    </div>
  );
}

export default MainPage;
