import React from 'react'


const SmsPagination = (props) => {
  const max_page = props.max_page;
  const current_page = props.current_page;
  const next_page = props.next_page;
  const prev_page = props.prev_page;
  const btnLength = 10;
  const paginationBtns = [];

  if(max_page<=btnLength) {
    for(let i=0; i<max_page; i++) {
      paginationBtns.push(
        <a href='#' onClick={()=>props.changePage(i+1)} className={current_page=== i+1 ? 'active' : ''}>{i+1}</a>
      )
    }
  }

  if(max_page>btnLength && current_page < btnLength/2) {
    for(let i=0; i<btnLength/2; i++) {
      paginationBtns.push(
        <a href='#' onClick={()=>props.changePage(i+1)} className={current_page=== i+1 ? 'active' : ''}>{i+1}</a>
      )
    }
    paginationBtns.push(
      <a href='#' disabled>...</a>
    )

    for(let i=max_page-(btnLength/2-1); i<max_page; i++) {
      paginationBtns.push(
        <a href='#' onClick={()=>props.changePage(i+1)} className={current_page=== i+1 ? 'active' : ''}>{i+1}</a>
      )
    }
  }
  if(max_page>btnLength && current_page>=btnLength/2 && current_page<=max_page-7 && current_page>(btnLength/2-1)) {
    paginationBtns.push(
      <>
      <a href='#' onClick={()=>props.changePage(1)} className={current_page=== 1 ? 'active' : ''}>1</a>
      <a href='#'>...</a>
      </>
    )
    for(let i=current_page-2; i<current_page+btnLength/2-2; i++) {
      paginationBtns.push(
        <a href='#' onClick={()=>props.changePage(i)} className={current_page=== i ? 'active' : ''}>{i}</a>
      )
    }

    paginationBtns.push(
      <a href='#'>...</a>
    )

    for(let i=max_page-2; i<max_page; i++) {
      paginationBtns.push(
        <a href='#' onClick={()=>props.changePage(i+1)} className={current_page=== i+1 ? 'active' : ''}>{i+1}</a>
      )
    }
  }

  if(max_page>btnLength && current_page > max_page -7) {
    for(let i=0; i<1; i++) {
      paginationBtns.push(
        <a href='#' onClick={()=>props.changePage(i+1)} className={current_page=== i+1 ? 'active' : ''}>{i+1}</a>
      )
    }
    paginationBtns.push(
      <a href='#' disabled>...</a>
    )

    for(let i=max_page -7-1; i<max_page; i++) {
      paginationBtns.push(
        <a onClick={()=>props.changePage(i+1)} className={current_page=== i+1 ? 'active' : ''}>{i+1}</a>
      )
    }
  }


  return(
    <div className='paginations'>
      {/* <a href='#'>пред</a> */}
      {paginationBtns}
      {/* <a href='#'>след</a> */}
    </div>
  )
}


export default SmsPagination;