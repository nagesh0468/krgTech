import '../components/List.css';

const List = ({list,page,selectPage}) => {

    return(
        <div>
    {
        list.length > 0 && <div className='products' >
            {
                list.slice(page*6-6, page*6).map((item) => (
                    <span className='products__single'>
                        <img src={item.images[0]} alt={item.title}  />
                        <span>{item.title}</span>
                    </span>
                ))
            }
        </div>
    }

    {
        list.length > 0 && <div className='pagination' >
            <span className={page > 1 ? "" : "pagination__disable"} onClick={ () => selectPage(page-1)} >◀</span>

            {
                [...Array(list.length / 6)].map((_,i) => (
                    <span key={i} className={page === i+1 ? "pagination__selected" : "" } onClick={() => selectPage(i+1)} >{i+1}</span>
                ))
            }
            
            <span className={page < list.length/6 ? "" : "pagination__disable" } onClick={() => selectPage(page + 1)} >▶</span>
        </div>
    }
        </div>
    )
}

export default List