import styles from '../styles/pages/GalleryPage.module.css';
import ImageCard from '../components/ImageCard';
import SelectInput from '../components/SelectInput';
import { useEffect, useState } from 'react';
import { getSpecificNasaData } from '../data/apiNasa';
import { datePickerFormat } from '../utilities/datePickerFormat';
import { subtractDays } from '../utilities/subtractDate';
import MiniSpinner from '../components/MiniSpinner';
import { AstronomyData } from '../types/types';

function GalleryPage() {
  const [images, setImages] = useState<AstronomyData[] | []>([]);
  const [loading, setLoading] = useState(false);
  const [selectedDays, setSelectedDays] = useState('7');
  const [loadMore, setLoadMore] = useState(10);

  // useEffect hook for handling data fetching not a good approach,
  // however, since it's a small data it's fine just to do it like this,
  // otherwise I would use TanStack library

  useEffect(() => {
    const startDate = subtractDays(new Date(), Number(selectedDays));
    const endDate = datePickerFormat();

    setLoading(true);
    async function getData() {
      const data = await getSpecificNasaData(startDate, endDate);

      setImages(data);
      setLoading(false);
    }
    getData();
  }, [selectedDays]);

  function handleLoadMore() {
    setLoadMore((prev) => prev + 7);
  }

  let content = (
    <>
      <ul className={styles.list}>
        {images.slice(0, loadMore).map(
          (image) =>
            image.hdurl && (
              <li key={image.title}>
                <ImageCard title={image.title} url={image.hdurl} />
              </li>
            )
        )}
      </ul>

      <div className={styles.loadMore}>
        {images.length > loadMore && (
          <button onClick={handleLoadMore}>load more</button>
        )}
      </div>
    </>
  );

  if (loading) content = <MiniSpinner />;

  return (
    <div className={styles.container}>
      <div className={styles.selectContainer}>
        <p>Gallery</p>

        <SelectInput
          selectedDays={selectedDays}
          setSelectedDays={setSelectedDays}
        />
      </div>

      {content}
    </div>
  );
}

export default GalleryPage;
