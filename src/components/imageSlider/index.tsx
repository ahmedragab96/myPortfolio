import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { images } from '../../assets'
 
class Gallery extends React.Component {
  state = {
    currentIndex: 0,
    itemsInSlide: 1,
    responsive: { 0: { items: 3 } },
    galleryItems: this.galleryItems(),
  }
 
  galleryItems() {
    return Array(7)
      .fill(7, 0, 7)
      .map((item: any, i: any) => <img alt='img' src={images.darkLogo} style={{ margin: 20, width: 20, height: 20}}/>)
  }
 
  slidePrevPage = () => {
    const currentIndex = this.state.currentIndex - this.state.itemsInSlide
    this.setState({ currentIndex })
  }
 
  slideNextPage = () => {
    const {
      itemsInSlide,
      galleryItems: { length },
    } = this.state
    let currentIndex = this.state.currentIndex + itemsInSlide
    if (currentIndex > length) currentIndex = length
 
    this.setState({ currentIndex })
  }
 
  handleOnSlideChange = (event: any) => {
    const { itemsInSlide, item } = event
    this.setState({ itemsInSlide, currentIndex: item })
  }
 
  render() {
    const { currentIndex, galleryItems, responsive } = this.state
 
    return (
      <div>
        <AliceCarousel
          items={galleryItems}
          slideToIndex={currentIndex}
          responsive={responsive}
          onInitialized={this.handleOnSlideChange}
          onSlideChanged={this.handleOnSlideChange}
          onResized={this.handleOnSlideChange}
          dotsDisabled={true}
          stagePadding={{
            paddingLeft: 20,
            paddingRight: 20
          }}
        />
        <button onClick={this.slidePrevPage}>Prev Page</button>
        <button onClick={this.slideNextPage}>Next Page</button>
      </div>
    )
  }
}

export default Gallery;