import { useState } from "react";

export const usePagination = ({
  totalItems,
  itemsPerPage = 10,
  initialPage = 1,
}) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));

  let pageOverflow = currentPage;
  if (pageOverflow > totalPages) {
    pageOverflow = totalPages;
  }
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return {
    currentPage: pageOverflow,
    totalPages,
    startIndex,
    endIndex,
    setPage: (page) => setCurrentPage(page),
    nextPage: () => setCurrentPage((prev) => prev + 1),
    prevPage: () => setCurrentPage((prev) => prev - 1),
    canNextPage: pageOverflow < totalPages,
    canPrevPage: pageOverflow > 1,
  };
};
