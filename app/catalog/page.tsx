// import CampersList from '@/components/CampersList/CampresList';
// import { getCampers } from '@/lib/api';
import css from './page.module.css';

import Filters from '@/components/Filters/Filters';

const Catalog = async () => {
  // const catalog = await getCampers();

  return (
    <section className={css.section}>
      <Filters />
    </section>
  );
};

export default Catalog;
