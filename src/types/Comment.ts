import { Review } from './Review';

export type Comment = Review & {

  offerId?: string;
};
