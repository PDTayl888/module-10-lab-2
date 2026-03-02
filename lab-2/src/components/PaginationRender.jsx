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
  return (
    <>
      <div className="border border-black p-8 m-8">
        <h3 className="m-4 text-3xl">Pagination Demo</h3>

        <div>
          <div>
            <label htmlFor="itemsPerPageSelect">Items per page: </label>

            <select
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(e.target.value)}
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
          <li key={index} className="border border-black p-2 m-2">{item}</li>
          ))}
        </ol>

        <div className="border border-black p-4 m-4">
          <button className="border border-black">Previous </button>
          <span>
            Page{" "}
            <input
              min="1"
              max="13"
              type="number"
              value="1"
              className="border border-black "
            />
            of 13{" "}
          </span>
          <button className="border border-black">Next</button>
        </div>
        <div className="border border-black p-4 m-2">
          Showing items 1 - 10 (Total on this page: 10){" "}
        </div>

        <div>
          <button disabled="" className="border border-black ">
            1
          </button>

          <button className="border border-black ">2 </button>

          <button className="border border-black ">3 </button>

          <button className="border border-black ">4</button>
          <button className="border border-black ">5</button>

          <button className="border border-black ">6 </button>
          <button className="border border-black ">7</button>

          <button className="border border-black ">8 </button>

          <button className="border border-black ">9</button>

          <button className="border border-black ">10</button>

          <button className="border border-black ">11 </button>

          <button className="border border-black ">12 </button>

          <button className="border border-black ">13</button>
        </div>
      </div>
    </>
  );
}
