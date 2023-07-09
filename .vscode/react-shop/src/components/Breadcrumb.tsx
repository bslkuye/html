import { Category } from '../constants/category';
import styles from './Breadcrumb.module.css'

type BreadCrumbs = {
  category?: string;
  crumb?: string;
} & typeof defaultProps;

const defaultProps = {
  category: '',
  curmb: '',
};

const BreadCrumb = ({ category, crumb }: BreadCrumbs): JSX.Element => {
  return(
    <div className={styles.breadcrumbs}>
      <ul>
        <li>{!!Category[category] ? Category[category] : category}</li>
        <li>{crumb}</li>
      </ul>
    </div>
  );
};

BreadCrumb.defaultProps = defaultProps;

export default BreadCrumb;