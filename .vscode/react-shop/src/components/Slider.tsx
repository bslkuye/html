import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel'
import { Link } from 'react-router-dom';
import styles from './Slider.module.css'

const Slider = () => {
  const items = [
    {
      name: 'fashion',
      title: '물빠진 청바지!',
      text: '이제 막 도착한 패션 청바지를 구경해 보세요.',
      link: './src/assets/img/img_shop_fashion.jpeg'
    },
    {
      name: 'digital',
      title: '신속한 업무처리!',
      text: '다양한 디지털 상품을 둘러보세요',
      link: './src/assets/img/img_shop_digital.jpeg'
    },
    {
      name: 'grocery',
      title: '신선한 식품!',
      text: '농장 직배송으로 더욱 신선한 식료품을 만나보세요.',
      link: './src/assets/img/img_shop_grocery.jpeg'
    },
  ];

  interface sliderItem{
    name: string;
    title: string;
    text: string;
    link: string;
  }

  return(
    <div>
      <Carousel autoPlay showThumbs={false} showArrows={true} interval={6000} showStatus={false} infiniteLoop={true} className='carousel'>
        {items.map((item: sliderItem, index: number) => {
          return(
            <div key={item.name} className={styles.carouselSlider}>
              <div className={styles.carouselDescription}>
                <h2 className={styles.carouselTitle}>{item.title}</h2>
                <p className={styles.carouselText}>{item.text}</p>
                <a href={item.name} className={styles.carouselBtn}>바로가기</a>
              </div>
              <img src={item.link} alt={item.name}></img>
            </div>
          );
        })}
      </Carousel>    
    </div>
  )
}

export default Slider;