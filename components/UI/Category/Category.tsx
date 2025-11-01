import css from './Category.module.css';

interface CategoryProps {
  icons: string;
  text: string;
  isActive?: boolean;
  onClick?: () => void;
}

const Category = ({ icons, text, isActive, onClick }: CategoryProps) => {
  return (
    <li
      className={`${css.container} ${isActive ? css.active : ''}`}
      onClick={onClick}
    >
      <svg className={css.svg}>
        <use href={`/icons/categories.svg#${icons}`}></use>
      </svg>
      <p className={css.text}>{text}</p>
    </li>
  );
};

export default Category;
