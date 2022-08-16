import React from 'react';

function useMediaQuery(query: string): boolean {

  const getMatches = React.useCallback((query: string): boolean => {
    if (typeof window === 'undefined') {
      return false
    }

    return window.matchMedia(query).matches;
  }, [])

  const [matches, setMatches] = React.useState<boolean>(getMatches(query))

  const handleChange = React.useCallback((query: string) => {
    setMatches(getMatches(query))
  }, [getMatches])


  React.useEffect(() => {
    const matchMedia = window.matchMedia(query);
    handleChange(query);

    matchMedia.addEventListener('change', () => handleChange(query));
    return () => {
      matchMedia.removeEventListener('change', () => handleChange(query));
    }
  }, [query])

  return matches;
}

export default useMediaQuery;
