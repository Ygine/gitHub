import React from 'react';

export const useGetUser = () => {
  const [loading, setLoading] = React.useState(false);

  return {
    loading,
    setLoading,
  }
};
