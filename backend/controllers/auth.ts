import { Request, Response } from 'express';

const authRedirect = (req: Request, res: Response) => {
  res.json('This authentication works just fine ... at the moment!');
  // route back to authorisation endPoint
};

export default authRedirect;
