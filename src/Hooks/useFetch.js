import { useEffect, useState } from 'react';

export default function useFetch() {
  const [allItemsData, setAllItemsData] = useState([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    loadAllItems();
  }, []);

  async function loadAllItems() {
    try {
      const response = await fetch(
        'https://fetch-me.vercel.app/api/shopping/items'
      );
      if (response.ok) {
        const results = await response.json();
        setAllItemsData(results.data);
      } else {
        throw new Error('Error: 404 not found');
      }
    } catch (error) {
      setHasError(true);
    }
  }
  return { hasError, allItemsData };
}
