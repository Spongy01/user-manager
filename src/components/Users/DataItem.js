import "./DataItem.css";

const DataItem =(props)=>{
    return(
        <li className='item'>
            {props.data}
        </li>
    )
};

export default DataItem;