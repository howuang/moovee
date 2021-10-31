import React from 'react'
import { Pagination } from 'react-bootstrap'

const MoviesPagination = ({ setCurrentPage, currentPage, totalPage }) => {
    const handleFirst = (e) => {
      console.log(e.target.value)
    setCurrentPage(1);
  };
  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };
  const handleLast = () => {
    setCurrentPage(totalPage);
  };
    const handleNext = (e) => {
      console.log(e.target.value)
    setCurrentPage(currentPage + 1);
  };
  const handleNumber = (number) => {
    setCurrentPage(number);
  };
  return (
    <Pagination>
      <Pagination.First disabled={currentPage === 1} onClick={handleFirst} />
      <Pagination.Prev disabled={currentPage === 1} onClick={handlePrev} />
      <Pagination.Item
        active={currentPage === 1}
        onClick={() => handleNumber(1)}
        value={"1"}
      >
        {1}
      </Pagination.Item>
      {currentPage > 2 && <Pagination.Ellipsis />}
      {currentPage < totalPage && currentPage > 1 ? (
        <Pagination.Item
          active
          onClick={() => handleNumber(currentPage)}
          value={currentPage}
        >
          {currentPage}
        </Pagination.Item>
      ) : null}
      {totalPage > currentPage + 1 && <Pagination.Ellipsis />}

      <Pagination.Item
        active={currentPage === totalPage}
        onClick={() => handleNumber(totalPage)}
        value={totalPage}
      >
        {totalPage}
      </Pagination.Item>
      <Pagination.Next
        disabled={currentPage === totalPage}
        onClick={handleNext}
      />
      <Pagination.Last
        disabled={currentPage === totalPage}
        onClick={handleLast}
      />
    </Pagination>
  );
};

export default MoviesPagination
