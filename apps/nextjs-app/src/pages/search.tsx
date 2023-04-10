// pages/search.tsx
import { FunctionComponent, useEffect, useState } from "react";

const Search: FunctionComponent = () => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <div>
      {hydrated ? (
        <component-gallery></component-gallery>
      ) : (
        <div>Loading component gallery...</div>
      )}
    </div>
  );
};

export default Search;
