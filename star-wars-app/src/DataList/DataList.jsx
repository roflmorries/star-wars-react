import React from 'react'



export default function DataList({data, category, onItemClick, onLoadMore, url}) {
    const itemsList = item => {
        switch (category) {
            case 'people':
                return `Name: ${item.name} | Height: ${item.height} | Mass: ${item.mass} | Birth Year: ${item.birth_year}`;
            case 'planets':
                return `Name: ${item.name} | Rotation: ${item.rotation_period} | Climate: ${item.climate} | Terrain: ${item.terrain}`;
            case 'vehicles':
                return `Name: ${item.name} | Model: ${item.model} | Price: ${item.cost_in_credits} | Max speed: ${item.max_atmosphering_speed}`;
            default:
                return '';
        };
    };
    console.log(data);
  return (
    <div className='data-list__container'>
        {data.map((item, index) => (
            <div key={index} onClick={() => onItemClick(item.url)}>
                <a href='#'>{itemsList(item)}</a>
            </div>
        ))}
        {url && <button className='load-more__button' onClick={onLoadMore}>Load More</button>}
    </div>
  )
}
