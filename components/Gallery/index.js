import './index.css';
import {Component} from 'react';
import Thumbnail from '../Thumbnail';
let data=[
    {
      id: 0,
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-img.png',
      thumbnailUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-thumbnail-img.png',
      imageAltText: 'nature mountain with pond',
      thumbnailAltText: 'nature mountain with pond thumbnail',
    },
    {
      id: 1,
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-sunset-img.png',
      thumbnailUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-sunset-thumbnail-img.png',
      imageAltText: 'nature sunset',
      thumbnailAltText: 'nature sunset thumbnail',
    },
    {
      id: 2,
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-img.png',
      thumbnailUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-thumbnail-img.png',
      imageAltText: 'nature mountain with ocean',
      thumbnailAltText: 'nature mountain with ocean thumbnail',
    },
    {
      id: 3,
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-img.png',
      thumbnailUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-thumbnail-img.png',
      imageAltText: 'nature mountain with forest',
      thumbnailAltText: 'nature mountain with forest thumbnail',
    },
    {
      id: 4,
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-leaves-img.png',
      thumbnailUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-leaves-thumbnail-img.png',
      imageAltText: 'nature leaves',
      thumbnailAltText: 'nature leaves thumbnail',
    },
    {
      id: 5,
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-tree-img.png',
      thumbnailUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-tree-thumbnail-img.png',
      imageAltText: 'nature tree',
      thumbnailAltText: 'nature tree thumbnail',
    },
    {
      id: 6,
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-waterfall-img.png',
      thumbnailUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-waterfall-thumbnail-img.png',
      imageAltText: 'nature waterfall',
      thumbnailAltText: 'nature waterfall thumbnail',
    },
    {
      id: 7,
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-river-img.png',
      thumbnailUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-river-thumbnail-img.png',
      imageAltText: 'nature river',
      thumbnailAltText: 'nature river thumbnail',
    },
  ]

class Gallery extends Component{
  state={selected:data[1]}
    onSelected=(val)=>{
      this.setState({
        selected:val
      })
    }
    render(){
        let {selected}=this.state
        return(
            <div className='main-cont'>
                <img src={selected.imageUrl} className='res-image'></img>
                <h4>Nature Photography</h4>
                {/* <p>Nature photography by Harinadh</p> */}
                <div>
                <ul>
                    {data.map(each=>
                        <Thumbnail data={each} onSelected={this.onSelected} isSelect={each.imageUrl==selected.imageUrl}/>
                    )}
                </ul>
                </div>
            </div>
            

        )
    }
}

export default Gallery