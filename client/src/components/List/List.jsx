import React from 'react'
import './List.scss'
import Card from '../Card/Card'
import useFetch from "../../hooks/useFetch";

const List = ({subCats,maxPrice,sort,catId}) => {
// console.log("subCats --->",subCats);
// console.log("maxPrice --->",maxPrice);
// console.log("sort, --->",sort);
// console.log("catId --->",catId);

    const{data,loading,error}=useFetch(
      `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
        (item) => `&[filters][sub_categories][id][$eq]=${item}`
      )}&[filters][price][$lte]=${maxPrice}`
    );
        // console.log('data for List',data);
        // console.log('error for List',error);
  return (
    <div className='list'>
        {/* <div>List components</div> */}
        {
        loading 
            ? "loading" 
            :data?.map((item)=><Card item={item} key={item.id}/>)}
    </div>
  );
};

export default List
