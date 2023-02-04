const ProductsLoad = ({ limit }: { limit: number }): JSX.Element => {
  return(
    <>
      {0 < limit ? (
        Array.from(Array(limit)).map((elm, index) => {
          return(
            <div key={index} className='card bordered animation-pulse'>
              <div className="h-80 rounded bg-gray-100"></div>
              <div></div>
            </div>
          )
        })
      )}
    </>
  )
}

export default ProductsLoad;