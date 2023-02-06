import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel'
import { Link } from 'react-router-dom';

const Slider = () => {
  const items = [
    {
      name: 'fashion',
      title: '물빠진 청바지!',
      text: '이제 막 도착한 패션 청바지를 구경해 보세요.',
    },
    {
      name: 'digital',
      title: '신속한 업무처리!',
      text: '다양한 디지털 상품을 둘러보세요',
    },
    {
      name: 'grocery',
      title: '신선한 식품!',
      text: '농장 직배송으로 더욱 신선한 식료품을 만나보세요.',
    },
  ];

  interface sliderItem{
    name: string;
    title: string;
    text: string;
  }

  return(
    <Carousel autoPlay showThumbs=(false) interval=(6000) showStatus=(false) infiniteLoop=(true) className='carousel'
  )
}