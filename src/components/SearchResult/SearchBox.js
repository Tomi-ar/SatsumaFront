import './search.css'

const SearchBox = (props) => {
  return (
    <div className="search-box">
      <div id={props._id} className="container-fluid">
        <div className='row mt-1'>
          <p className='col-8 search-box__titulo-material'>{props.material}</p>
          <div className='col-4 text-center mt-3'>
            <a href={"search/"+props._id} className='search-box__img'>
              <i className='fi fi-bs-trash'></i>
            </a>
          </div>
        </div>
        <div className='row'>
          <p className='col-8 search-box__titulo-material mb-2'>{props.macro_categoria}</p>
          <p className='col-4 search-box__titulo-macro text-center mb-2'>{props.categoria1}</p>
        </div>
      </div>
      {/* <div className="search-box__img">
        <a href="a algun lugar">
          <i>Img tacho</i>
        </a>
      </div> */}
    </div>
  );
};

export default SearchBox;


/*{ <div className="search-box">
<div id={props._id} className="search-box__desc">
  <div className='search-box__titulo'>
    <p className='search-box__titulo-material'>{props.material}</p>
    <p className='search-box__titulo-macro'>{props.macro_categoria}</p>
  </div>
  <div>
    <p>{props.categoria1}</p>
  </div>
</div>
<div className="search-box__img">
  <a href="a algun lugar">
    <i>Img tacho</i>
  </a>
</div>
</div> }*/
