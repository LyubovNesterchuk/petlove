// 'use client';

// import { useEffect, useState } from 'react';
// import { useRouter, useSearchParams } from 'next/navigation';
// import AsyncSelect from 'react-select/async';
// import styles from './NoticesFilters.module.css';
// import { City } from "@/types/city"

// const API = process.env.NEXT_PUBLIC_API_URL;

// type Option = {
//   value: string;
//   label: string;
// };

// export const NoticesFilters = () => {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const [categories, setCategories] = useState<string[]>([]);
//   const [sexList, setSexList] = useState<string[]>([]);
//   const [speciesList, setSpeciesList] = useState<string[]>([]);

//   /* ================= URL UPDATE ================= */

//   const updateParam = (key: string, value?: string) => {
//     const params = new URLSearchParams(searchParams.toString());

//     if (!value) params.delete(key);
//     else params.set(key, value);

//     params.set('page', '1');
//     params.set('perPage', '6');

//     router.push(`/notices?${params.toString()}`);
//   };

//   const resetFilters = () => {
//     router.push('/notices');
//   };

//   /* ================= FETCH STATIC FILTERS ================= */

//   useEffect(() => {
//     const fetchFilters = async () => {
//       const [categoriesRes, sexRes, speciesRes] = await Promise.all([
//         fetch(`${API}/notices/categories`).then(r => r.json()),
//         fetch(`${API}/notices/sex`).then(r => r.json()),
//         fetch(`${API}/notices/species`).then(r => r.json()),
//       ]);

//       setCategories(categoriesRes);
//       setSexList(sexRes);
//       setSpeciesList(speciesRes);
//     };

//     fetchFilters();
//   }, []);

//   /* ================= CITIES SEARCH ================= */

//  const loadCities = async (inputValue: string): Promise<Option[]> => {
//   if (inputValue.length < 3) return [];

//   const res = await fetch(
//     `${API}/cities?keyword=${inputValue}`
//   );

//   const data: City[] = await res.json();

//   return data.map((city) => ({
//     value: city._id,
//     label: `${city.cityEn}, ${city.stateEn}`,
//   }));
// };

//   /* ================= CURRENT LOCATION ================= */

// //   const currentLocationId = searchParams.get('location');

// //  const loadCurrentCity = async (
// //   locationId: string
// // ): Promise<Option | null> => {
// //   const res = await fetch(`${API}/cities/locations`);
// //   const data: City[] = await res.json();

// //   const city = data.find(c => c._id === locationId);
// //   if (!city) return null;

// //   return {
// //     value: city._id,
// //     label: `${city.cityEn}, ${city.stateEn}`,
// //   };
// // };

// const locationId = searchParams.get('location');


// const [currentCity, setCurrentCity] = useState<Option | null>(null);



// useEffect(() => {
//   if (!locationId) return;

//   const fetchCity = async () => {
//     const res = await fetch(`${API}/cities/locations`);
//     const data: City[] = await res.json();

//     const city = data.find(c => c._id === locationId);
//     if (!city) return;

//     setCurrentCity({
//       value: city._id,
//       label: `${city.cityEn}, ${city.stateEn}`,
//     });
//   };

//   fetchCity();
// }, [locationId]);
//   /* ================= RENDER ================= */

//   return (
//     <form className={styles.filters}>
//       {/* SEARCH */}
//       <input
//         type="text"
//         placeholder="Search"
//         defaultValue={searchParams.get('search') ?? ''}
//         onChange={(e) => updateParam('search', e.target.value)}
//       />

//       {/* CATEGORY */}
//       <select
//         value={searchParams.get('category') ?? ''}
//         onChange={(e) => updateParam('category', e.target.value)}
//       >
//         <option value="">Category</option>
//         {categories.map(cat => (
//           <option key={cat} value={cat}>
//             {cat}
//           </option>
//         ))}
//       </select>

//       {/* SEX */}
//       <select
//         value={searchParams.get('sex') ?? ''}
//         onChange={(e) => updateParam('sex', e.target.value)}
//       >
//         <option value="">Sex</option>
//         {sexList.map(sex => (
//           <option key={sex} value={sex}>
//             {sex}
//           </option>
//         ))}
//       </select>

//       {/* SPECIES */}
//       <select
//         value={searchParams.get('species') ?? ''}
//         onChange={(e) => updateParam('species', e.target.value)}
//       >
//         <option value="">Type</option>
//         {speciesList.map(spec => (
//           <option key={spec} value={spec}>
//             {spec}
//           </option>
//         ))}
//       </select>

//       {/* LOCATION (ASYNC) */}
//       <AsyncSelect
//         className={styles.select}
//         cacheOptions
//         loadOptions={loadCities}
//         defaultOptions={false}
//         value={currentCity}
//         placeholder="Location"
//         isClearable
//         onChange={(option) =>
//           updateParam('location', option?.value)
//         }
//         noOptionsMessage={() => 'Enter at least 3 characters'}
//       />

//       {/* SORT */}
//       <div className={styles.radios}>
//         <label>
//           <input
//             type="radio"
//             name="sort"
//             checked={searchParams.get('sort') === 'popular'}
//             onChange={() => updateParam('sort', 'popular')}
//           />
//           Popular
//         </label>

//         <label>
//           <input
//             type="radio"
//             name="sort"
//             checked={searchParams.get('sort') === 'price'}
//             onChange={() => updateParam('sort', 'price')}
//           />
//           Price
//         </label>
//       </div>

//       {/* RESET */}
//       <button
//         type="button"
//         className={styles.reset}
//         onClick={resetFilters}
//       >
//         Reset
//       </button>
//     </form>
//   );
// };

'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import AsyncSelect from 'react-select/async';
import styles from './NoticesFilters.module.css';
import { City } from '@/types/city';

type Option = {
  value: string;
  label: string;
};

export const NoticesFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [categories, setCategories] = useState<string[]>([]);
  const [sexList, setSexList] = useState<string[]>([]);
  const [speciesList, setSpeciesList] = useState<string[]>([]);
  const [currentCity, setCurrentCity] = useState<Option | null>(null);

  /* ================= URL UPDATE ================= */

  const updateParam = (key: string, value?: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (!value) params.delete(key);
    else params.set(key, value);

    params.set('page', '1');
    params.set('perPage', '6');

    router.push(`/notices?${params.toString()}`);
  };

  const resetFilters = () => {
    router.push('/notices');
  };

  /* ================= FETCH STATIC FILTERS ================= */

  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const [categoriesRes, sexRes, speciesRes] = await Promise.all([
          fetch('/api/notices/categories'),
          fetch('/api/notices/sex'),
          fetch('/api/notices/species'),
        ]);

        if (!categoriesRes.ok || !sexRes.ok || !speciesRes.ok) {
          throw new Error('Failed to fetch filters');
        }

        setCategories(await categoriesRes.json());
        setSexList(await sexRes.json());
        setSpeciesList(await speciesRes.json());
      } catch (error) {
        console.error('Filters fetch error:', error);
      }
    };

    fetchFilters();
  }, []);

  /* ================= CITIES SEARCH ================= */

  const loadCities = async (inputValue: string): Promise<Option[]> => {
    if (inputValue.length < 3) return [];

    const res = await fetch(`/api/cities?keyword=${inputValue}`);
    if (!res.ok) return [];

    const data: City[] = await res.json();

    return data.map((city) => ({
      value: city._id,
      label: `${city.cityEn}, ${city.stateEn}`,
    }));
  };

  /* ================= CURRENT LOCATION ================= */

  const locationId = searchParams.get('location');

  useEffect(() => {
    if (!locationId) {
      setCurrentCity(null);
      return;
    }

    const fetchCity = async () => {
      try {
        const res = await fetch('/api/cities/locations');
        if (!res.ok) return;

        const data: City[] = await res.json();
        const city = data.find((c) => c._id === locationId);

        if (!city) return;

        setCurrentCity({
          value: city._id,
          label: `${city.cityEn}, ${city.stateEn}`,
        });
      } catch (error) {
        console.error('City fetch error:', error);
      }
    };

    fetchCity();
  }, [locationId]);

  /* ================= RENDER ================= */

  return (
    <form className={styles.filters}>
      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search"
        defaultValue={searchParams.get('search') ?? ''}
        onChange={(e) => updateParam('search', e.target.value)}
      />

      {/* CATEGORY */}
      <select
        value={searchParams.get('category') ?? ''}
        onChange={(e) => updateParam('category', e.target.value)}
      >
        <option value="">Category</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {/* SEX */}
      <select
        value={searchParams.get('sex') ?? ''}
        onChange={(e) => updateParam('sex', e.target.value)}
      >
        <option value="">Sex</option>
        {sexList.map((sex) => (
          <option key={sex} value={sex}>
            {sex}
          </option>
        ))}
      </select>

      {/* SPECIES */}
      <select
        value={searchParams.get('species') ?? ''}
        onChange={(e) => updateParam('species', e.target.value)}
      >
        <option value="">Type</option>
        {speciesList.map((spec) => (
          <option key={spec} value={spec}>
            {spec}
          </option>
        ))}
      </select>

      {/* LOCATION */}
      <AsyncSelect
        className={styles.select}
        cacheOptions
        loadOptions={loadCities}
        defaultOptions={false}
        value={currentCity}
        placeholder="Location"
        isClearable
        onChange={(option) => updateParam('location', option?.value)}
        noOptionsMessage={() => 'Enter at least 3 characters'}
      />

      {/* SORT */}
      <div className={styles.radios}>
        <label>
          <input
            type="radio"
            name="sort"
            checked={searchParams.get('sort') === 'popular'}
            onChange={() => updateParam('sort', 'popular')}
          />
          Popular
        </label>

        <label>
          <input
            type="radio"
            name="sort"
            checked={searchParams.get('sort') === 'price'}
            onChange={() => updateParam('sort', 'price')}
          />
          Price
        </label>
      </div>

      {/* RESET */}
      <button type="button" className={styles.reset} onClick={resetFilters}>
        Reset
      </button>
    </form>
  );
};
