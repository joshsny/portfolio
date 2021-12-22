import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('API_KEY', process.env.REVUE_API_KEY);
  const result = await axios
    .get('https://www.getrevue.co/api/v2/subscribers', {
      headers: {
        Authorization: `Token ${process.env.REVUE_API_KEY}`
      }
    })
    .catch((err) => {
      console.log('err', err);
    });

  console.log('REVUE_RESULT', result);

  // console.log(result);
  const data = result.data;

  if (!(result.status === 200)) {
    return res.status(500).json({ error: 'Error retrieving subscribers' });
  }

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  );

  return res.status(200).json({ count: data.length });
}
