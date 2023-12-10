import React, { useEffect, useRef } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_CLIENTS } from '@/graphql/querys';
import chart from 'chart.js/auto';
import { BarChart } from '@/components/BarChart';

export const Graphql = () => {
  const { loading, error, data } = useQuery(GET_ALL_CLIENTS);

  if (loading) return <h2>Cargando..</h2>;
  if (error) return <h2>Error: {error.message}</h2>;

  return (
    <div style={{ height: '100vh' }}>
      <div className='contentwithoutsidebar3'>
        <h4 className='text-center'>
          <b>Reporte de graphql</b>
        </h4>
        <BarChart data={data?.allClient} />
      </div>
    </div>
  );
};
