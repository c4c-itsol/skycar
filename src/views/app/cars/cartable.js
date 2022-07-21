/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/display-name */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-key */
import React from 'react';
import { useTable, usePagination, useSortBy } from 'react-table';
import { Card, CardBody, CardTitle } from 'reactstrap'; //
import DatatablePagination from 'components/DatatablePagination';
// import IntlMessages from 'helpers/IntlMessages';
import products from 'views/app/cars/cardata'
// import products from 'data/products';

function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    headerGroups,
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 6 },
    },
    useSortBy,
    usePagination
  );

  return (
    <>
      <table {...getTableProps()} className="r-table table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, columnIndex) => (
                <th
                  key={`th_${columnIndex}`}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={
                    column.isSorted
                      ? column.isSortedDesc
                        ? 'sorted-desc'
                        : 'sorted-asc'
                      : ''
                  }
                >
                  {column.render('Header')}
                  <span />
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell, cellIndex) => (
                  <td
                    key={`td_${cellIndex}`}
                    {...cell.getCellProps({
                      className: cell.column.cellClass,
                    })}
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <DatatablePagination
        page={pageIndex}
        pages={pageCount}
        canPrevious={canPreviousPage}
        canNext={canNextPage}
        pageSizeOptions={[4, 10, 20, 30, 40, 50]}
        showPageSizeOptions={false}
        showPageJump={false}
        defaultPageSize={pageSize}
        onPageChange={(p) => gotoPage(p)}
        onPageSizeChange={(s) => setPageSize(s)}
        paginationMaxSize={pageCount}
      />
    </>
  );
}

const CarTable = () => {
  const cols = React.useMemo(
    () => [
      {
        Header: 'Car Name',
        accessor: 'Car_Name',
        cellClass: 'text-muted',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Brand',
        accessor: 'Brand',
        cellClass: 'text-muted',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Model',
        accessor: 'Model',
        cellClass: 'text-muted',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Type',
        accessor: 'Type',
        cellClass: 'text-muted',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Seating Capacity',
        accessor: 'Seating_Capacity',
        cellClass: 'text-muted',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Plate Number',
        accessor: 'Plate_Number',
        cellClass: 'text-muted',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Car Status',
        accessor: 'Car_Status',
        cellClass: 'text-muted',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Fuel Type',
        accessor: 'Fuel_Type',
        cellClass: 'text-muted',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Fuel Capacity',
        accessor: 'Fuel_Capacity',
        cellClass: 'text-muted',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Year Of Manuacturing',
        accessor: 'Year_Of_Manuacturing',
        cellClass: 'text-muted',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Colour',
        accessor: 'Colour',
        cellClass: 'text-muted',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Hourly Charge',
        accessor: 'Hourly_Charge',
        cellClass: 'text-muted',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Daily Charge',
        accessor: 'Daily_Charge',
        cellClass: 'text-muted',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Weekly Charge',
        accessor: 'Weekly_Charge',
        cellClass: 'text-muted',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Monthly Charge',
        accessor: 'Monthly_Charge',
        cellClass: 'text-muted',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Action',
        accessor: 'Action',
        cellClass: 'text-muted',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
    ],
    []
  );

  return (
    <Card className="h-100">
      <CardBody>
        <CardTitle>
          {/* <IntlMessages id="manage-cars.subtitle" /> */}
        </CardTitle>
        <Table columns={cols} data={products} />
      </CardBody>
    </Card>
  );
};

export default CarTable;
