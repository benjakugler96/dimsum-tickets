import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { DSDataGrid } from '@elliemae/ds-datagrids';
import columns from './columns';
import { randomEntities } from '../utils/randomData';
import { getMoreRowsSuccess, getRows } from '../store/actions/grid';

const GridContainer = styled.div`
  height: 100vh;
`;

export default () => {
  const dispatch = useDispatch();
  const { rows, loading } = useSelector((state) => state?.grid);
  console.log('rows hola', rows);

  const onInfiniteScrolling = async () => {
    dispatch(getRows());
    let newRows = [];
    await new Promise((res) => {
      setTimeout(() => {
        newRows = randomEntities(50);
        res();
      }, 1500);
    });
    dispatch(getMoreRowsSuccess(newRows));
  };

  return (
    <GridContainer>
      <DSDataGrid
        columns={columns}
        rows={rows}
        minColumnWidth={150}
        searchFilters
        fluidHeight
        resizeableColumns
        infiniteScrolling
        onInfiniteScrolling={onInfiniteScrolling}
      />
    </GridContainer>
  );
};
