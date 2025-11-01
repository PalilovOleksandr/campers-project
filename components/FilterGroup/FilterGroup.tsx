import Category from '../UI/Category/Category';
import css from './FilterGroup.module.css';

interface FilterGroupProps {
  title: string;
  filters: { icon: string; text: string }[];
  selected: string[];
  onToggle: (filter: string) => void;
}

const FilterGroup = ({
  title,
  filters,
  selected,
  onToggle,
}: FilterGroupProps) => {
  return (
    <section className={css.group}>
      <h3 className={css.title}>{title}</h3>
      <ul className={css.list}>
        {filters.map(({ icon, text }) => (
          <Category
            key={text}
            icons={icon}
            text={text}
            isActive={selected.includes(text)}
            onClick={() => onToggle(text)}
          />
        ))}
      </ul>
    </section>
  );
};

export default FilterGroup;
