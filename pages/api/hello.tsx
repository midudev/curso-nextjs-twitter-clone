import { NextApiRequest, NextApiResponse } from 'next'

interface HelloResponse {
  userName: string
}

export default (_req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200
  const data: HelloResponse = {
    userName: 'Vrime',
  }
  res.json(data)
}
