import './style.css';
import {Component} from 'react';

class Thumbnail extends Component{
    render(){
        let {data,onSelected,isSelect}=this.props;
        let {thumbnailUrl,imageAltText,thumbnailAltText}=data;
        let selected=()=>{
            onSelected(data)
        }
        let active=isSelect?"active-img":"";
        return(
            <div>
                <img src={thumbnailUrl} alt={thumbnailAltText} onClick={selected} className={`${active}` }></img>
            </div>
        )
    }
}

export default Thumbnail;