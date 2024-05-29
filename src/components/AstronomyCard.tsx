import styles from '../styles/components/AstronomyCard.module.css';
import { AstronomyData } from '../types/types';
import { datePickerFormat } from '../utilities/datePickerFormat';
import { formatDate } from '../utilities/formatDate';

function AstronomyCard({
  data,
  datePicker,
  setDatePicker,
}: {
  data: AstronomyData;
  datePicker: string;
  setDatePicker: (date: string) => void;
}) {
  const { title, hdurl, date, explanation, copyright } = data;

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={styles.datePicker}>
          <label>Select Another Date:</label>
          <input
            type='date'
            value={datePicker}
            onChange={(e) => setDatePicker(e.target.value)}
            max={datePickerFormat()}
          />
        </div>

        <div className={styles.infoContainer}>
          <h1>{title}</h1>
          <time dateTime={date}>{formatDate(date)}</time>
          {copyright && <span>Provided by {copyright}</span>}

          <p>{explanation}.</p>
        </div>
      </div>

      <img src={hdurl} alt={title} draggable={false} />
    </div>
  );
}

export default AstronomyCard;
