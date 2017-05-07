import React from 'react';

const FilteredFruitList = ({fruit, filter}) => {
  const fruitList = !filter ?  fruit : fruit.filter(i => i.fruit_type == filter);

  return(
    <ul className="fruit-list">
      {fruitList.map((i,idx) => <li key={idx}>{i.char}</li>)}
    </ul>
  )
    
}



FilteredFruitList.defaultProps = {
  fruit: [],
  filter: null
}

export default FilteredFruitList;
