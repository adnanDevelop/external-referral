const Pagination = ({ setPage }: { setPage: (page: number) => void }) => {
  const handleClick = (page: number) => {
    setPage(page);
  };

  return (
    <div className="join">
      <button className="join-item btn" onClick={() => handleClick(1)}>
        «
      </button>
      <button className="join-item btn" onClick={() => handleClick(2)}>
        ‹
      </button>
      <button className="join-item btn" onClick={() => handleClick(1)}>
        1
      </button>
      <button className="join-item btn btn-disabled">...</button>
      <button className="join-item btn" onClick={() => handleClick(100)}>
        100
      </button>
      <button className="join-item btn" onClick={() => handleClick(2)}>
        ›
      </button>
      <button className="join-item btn" onClick={() => handleClick(100)}>
        »
      </button>
    </div>
  );
};

export default Pagination;
