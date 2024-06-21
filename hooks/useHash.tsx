'use client';
// import { useParams } from 'next/navigation';
// import { useEffect, useState } from 'react';

// // const getHash = () =>
// //   typeof window !== 'undefined'
// //     ? decodeURIComponent(window.location.hash)
// //     : undefined;

// const useHash = () => {
//   const [hash, setHash] = useState('');
//   const params = useParams();

//   useEffect(() => {
//     const currentHash = window.location.hash;
//     setHash(currentHash);
//     //     const handleHashChange = () => {
//     //       setHash(getHash());
//     //     };
//     //     window.addEventListener('hashchange', handleHashChange);
//     //     return () => {
//     //       window.removeEventListener('hashchange', handleHashChange);
//     //     };
//   }, [params]);
//   return hash;
// };
// export default useHash;

'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const useHash = () => {
  const [hash, setHash] = useState('');
  const params = useParams();
  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
    };

    handleHashChange(); // Set initial hash

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [params]);

  return hash;
};

export default useHash;
