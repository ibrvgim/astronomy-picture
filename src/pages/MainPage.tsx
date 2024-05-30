import styles from '../styles/pages/MainPage.module.css';
import AstronomyCard from '../components/AstronomyCard';
import { useEffect, useState } from 'react';
import { getNasaData } from '../data/apiNasa';
import { AstronomyData } from '../types/types';
import { datePickerFormat } from '../utilities/datePickerFormat';
import MiniSpinner from '../components/MiniSpinner';
import { subtractDays } from '../utilities/subtractDate';

function MainPage() {
  // to avoid situations when current day may not have data yet,
  // I subtract 1 day from current date to guarantee existence of the data.
  const [datePicker, setDatePicker] = useState(() =>
    subtractDays(new Date(), 1)
  );
  const [data, setData] = useState<AstronomyData | null>(null);
  const [loading, setLoading] = useState(false);

  // useEffect hook for handling data fetching not a good approach,
  // however, since it's a small data it's fine just to do it like this,
  // otherwise I would use TanStack library.
  useEffect(() => {
    setLoading(true);
    async function getData() {
      const data = await getNasaData(datePicker);
      setData(data);
      setLoading(false);
    }
    getData();
  }, [datePicker]);

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
