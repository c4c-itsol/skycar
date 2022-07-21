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
import bookingData from './bookingdata'
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

const BookingTable = () => {
    const cols = React.useMemo(
        () => [
          {
            Header: 'Customer Name',
            accessor: 'Customer_Name',
            cellClass: 'text-muted',
            Cell: (props) => <>{props.value}</>,
            sortType: 'basic',
          },
          {
            Header: 'Booking On',
            accessor: 'Booking_on',
            cellClass: 'text-muted',
            Cell: (props) => <>{props.value}</>,
            sortType: 'basic',
          },
          {
            Header: 'Booking From',
            accessor: 'Booking_From',
            cellClass: 'text-muted',
            Cell: (props) => <>{props.value}</>,
            sortType: 'basic',
          },
          {
            Header: 'Booking To',
            accessor: 'Booking_To',
            cellClass: 'text-muted',
            Cell: (props) => <>{props.value}</>,
            sortType: 'basic',
          },
          {
            Header: 'Car Name',
            accessor: 'Car_Name',
            cellClass: 'text-muted',
            Cell: (props) => <>{props.value}</>,
            sortType: 'basic',
          },
          {
            Header: 'Car Type',
            accessor: 'Car_Type',
            cellClass: 'text-muted',
            Cell: (props) => <>{props.value}</>,
            sortType: 'basic',
          },
          {
            Header: 'Booking Status',
            accessor: 'Booking_Status',
            cellClass: 'text-muted',
            Cell: (props) => <>{props.value}</>,
            sortType: 'basic',
          },
          {
            Header: 'Remark',
            accessor: 'Remark',
            cellClass: 'text-muted',
            Cell: (props) => <>{props.value}</>,
            sortType: 'basic',
          },
          {
            Header: 'Total Charge',
            accessor: 'Total_Charges',
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
        <Table columns={cols} data={bookingData} />
      </CardBody>
    </Card>
  );
};

export default BookingTable;
