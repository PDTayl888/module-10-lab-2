import { useState } from "react";
import { usePagination } from "../hooks/usePagination";

export function PaginationRender() {
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const dummyData = [];

  for (let i = 0; i < 258; i++) {
    const item = "ITEM: " + (i + 1);
    dummyData.push(item);
  }

  const {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    setPage,
    nextPage,
    prevPage,
    canNextPage,
    canPrevPage,
  } = usePagination({ totalItems: dummyData.length, itemsPerPage });

  const showItems = dummyData.slice(startIndex, endIndex);
  const pageSelect = [];
  for (let i = 1; i <= totalPages; i++) {
    pageSelect.push(i);
  }
  return (
    <>
      <div className="border border-black p-8 m-8">
        <h3 className="m-4 text-3xl">Pagination Demo</h3>

        <div>
          <div>
            <label htmlFor="itemsPerPageSelect">Items per page: </label>

            <select
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
              id="itemsPerPageSelect"
              className="border border-black"
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>
          <div>Total Items: {dummyData.length}</div>
        </div>

        <ol className="p-0">
          {showItems.map((item, index) => (
            <li key={index} className="border border-black p-2 m-2">
              {item}
            </li>
          ))}
        </ol>

        <div className="border border-black p-4 m-4">
          <button onClick={prevPage} className="border border-black" disabled={!canPrevPage}>
            Previous{" "}
          </button>
          <span>
            Page{" "}
            <input
              min="1"
              max={totalPages}
              type="number"
              value={currentPage}
              onChange={(e) => setPage(Number(e.target.value))}
              className="border border-black "
            />
            of 13{" "}
          </span>
          <button onClick={nextPage} className="border border-black" disabled={!canNextPage}>
            Next
          </button>
        </div>
        <div className="border border-black p-4 m-2">
          Showing items {startIndex + 1} - {endIndex} (Total on this page:{" "}
          {showItems.length}
        </div>

        <div>
          {pageSelect.map((pageNumber) => (
            <button
              onClick={() => setPage(pageNumber)}
              key={pageNumber}
              className="border border-black p-2 m-2"
            >
              {pageNumber}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
