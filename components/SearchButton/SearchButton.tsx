import Button from '../UI/Buttons/Buttons';
import css from './SearchButton.module.css';

interface Props {
  onClick: () => void;
}

const SearchButton = ({ onClick }: Props) => {
  return (
    <Button className={css.button} onClick={onClick}>
      Search
    </Button>
  );
};

export default SearchButton;
