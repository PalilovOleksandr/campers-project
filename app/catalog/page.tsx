import Filters from '@/components/Filters/Filters';
import css from './page.module.css';
import CampersList from '@/components/CampersList/CampresList';

export default function CampersPage() {
  return (
    <div className={css.wrapper}>
      <Filters />
      <CampersList />
    </div>
  );
}
