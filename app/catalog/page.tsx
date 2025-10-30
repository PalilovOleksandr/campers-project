import { getCampers } from '@/lib/api/api';
import css from './page.module.css';
import CampersList from '@/components/CampersList/CampresList';
import Filters from '@/components/Filters/Filters';

const Catalog = async () => {
  const catalog = await getCampers({ page: 1, limit: 4 });

  return (
    <section className={css.section}>
      <Filters />
      {catalog?.total > 0 && <CampersList items={catalog.items} />}
    </section>
  );
};

export default Catalog;
