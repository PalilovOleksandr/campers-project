import css from './Category.module.css';

interface CategoryProps {
  icons: string;
  text: string;
}

const Category = ({ icons, text }: CategoryProps) => {
  return (
    <li className={css.container}>
      <svg className={css.svg}>
        <use href={`/icons/categories.svg#${icons}`}></use>
      </svg>
      <p className={css.text}>{text}</p>
    </li>
  );
};

export default Category;
