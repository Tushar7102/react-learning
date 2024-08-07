function Pagination({current,total,onChange}) {



  const prev = (
    <button
    
      data-testid="prev-page"
      disabled={current==1} 
      onClick={()=>onChange(current-1)}
    >
      Prev
    </button>
  );
  const currentPage = <p style={{display:"inline-block"}} data-testid="current-page" >{current}</p>;
  const next = (
    <button
      data-testid="next-page"
      disabled={current==total} 
      onClick={()=>onChange(current+1)}
    >
      Next
    </button>
  );
  return (
  <div data-testid="page-container" style={{textAlign:"center"}}>
      <div>
      {prev}
      {currentPage}
      {next}
      </div>
      <div>
        Total Pages: <b data-testid="total-pages">{total}</b>
      </div>
    </div>
  );
}

export default Pagination;
