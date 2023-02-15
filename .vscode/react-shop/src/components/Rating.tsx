import styles from './Rating.module.css'

type Rating = {
  rete?: number;
  count?: number;
} & typeof defaultProps;

const defaultProps = {
  rate: 0,
  count: 0,
};

const Rating = ({ rate, count }: Rating): JSX.Element => {
  const stars = Array.from(Array(10));
  return(
    <div className={styles.starContainer}>
      <div className={styles.starRating}>
        {stars.map(($elm, index) => {
          
          if((rate * 2) < index + 1){
            return index % 2 == 0 ? 
            <input type='radio' name='rating-10' key={`rating${index}`} className={`${styles.star} ${styles.uncheck}`} disabled checked={index + 1 <= rate}></input>
            :
            <input type='radio' name='rating-10' key={`rating${index}`} className={`${styles.starr} ${styles.uncheck}`} disabled checked={index + 1 <= rate}></input>
          }else{
            return index % 2 == 0 ? 
          <input type='radio' name='rating-10' key={`rating${index}`} className={styles.star} disabled checked={index + 1 <= rate}></input>
          :
          <input type='radio' name='rating-10' key={`rating${index}`} className={styles.starr} disabled checked={index + 1 <= rate}></input>
          }

          })
        }
      </div>
      <div className="ml-2">
        {rate} / {count} 참여
      </div>
    </div>
  );
};

Rating.defaultProps = defaultProps;

export default Rating;