import { useState } from "react";

export const pagination = ({totalItems, itemsPerPage = 10, initialPage = 1} => {
    const [currentPage, setCurrentPage] = useState(initialPage);

    const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));

    const pageOverflow = currentPage;
    if (pageOverflow > totalPages) {
        pageOverflow = totalPages;
    }
const startIndex = (currentPage-1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;

})