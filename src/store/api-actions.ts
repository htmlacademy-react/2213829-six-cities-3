import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/Offer';
import { Comment } from '../types/Comment';

export const logoutAction = createAsyncThunk<void, void>(
  'auth/logout',
  async () => {
    const response = await fetch('/api/auth/logout', {
      method: 'POST',
    });

    if (!response.ok) {
      throw new Error('Failed to log out');
    }
  }
);

export const checkAuthAction = createAsyncThunk<unknown, void>(
  'auth/check',
  async () => {
    const response = await fetch('/api/auth/check');

    if (!response.ok) {
      throw new Error('Failed to check authentication');
    }

    return (await response.json()) as unknown;
  }
);

export const loginAction = createAsyncThunk<{ token: string }, { login: string; password: string }>(
  'auth/login',
  async (credentials) => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error('Failed to log in');
    }

    return (await response.json()) as { token: string };
  }
);

export const clearErrorAction = createAction('error/clear');

export const postCommentAction = createAsyncThunk<Comment, { id: string; comment: string; rating: number }>(
  'comments/post',
  async (commentData) => {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify(commentData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to post comment');
    }

    return (await response.json()) as Comment;
  }
);

export const loadOfferCommentsAction = createAsyncThunk<Comment[], string>(
  'comments/load',
  async (offerId) => {
    const response = await fetch(`/api/offers/${offerId}/comments`);

    if (!response.ok) {
      throw new Error('Failed to load comments');
    }

    return (await response.json()) as Comment[];
  }
);

export const loadOfferAction = createAsyncThunk<Offer, string>(
  'offer/load',
  async (offerId) => {
    const response = await fetch(`/api/offers/${offerId}`);

    if (!response.ok) {
      throw new Error('Failed to load offer');
    }

    return (await response.json()) as Offer;
  }
);

export const loadOffersAction = createAsyncThunk<Offer[], void>(
  'offers/load',
  async () => {
    const response = await fetch('/api/offers');

    if (!response.ok) {
      throw new Error('Failed to load offers');
    }

    return (await response.json()) as Offer[];
  }
);
