import useSWR from 'swr';

import fetcher from 'lib/fetcher';
import { Views } from 'lib/types';
import MetricCard from 'components/metrics/Card';

export default function AnalyticsCard() {
  const { data } = useSWR<Views>('/api/views', fetcher);

  const pageViews = new Number(data?.total);
  const link = 'https://joshua.pl';

  return (
    <MetricCard
      header="Blog Readers"
      link={link}
      metric={pageViews}
      isCurrency={false}
    />
  );
}
