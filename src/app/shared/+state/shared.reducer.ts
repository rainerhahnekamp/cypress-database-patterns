import { createReducer, on } from '@ngrx/store';
import { sharedActions } from './shared.actions';

export const sharedFeatureKey = 'shared';

export interface User {
  id: number;
  email: string;
  firstname: string;
  name: string;
  anonymous: boolean;
}

export interface SharedReducer {
  loaded: boolean;
  user: User;
}

const initialState: SharedReducer = {
  loaded: false,
  user: null
};

export const reducer = createReducer<SharedReducer>(
  initialState,
  on(sharedActions.loadUserSuccess, sharedActions.signInUserSuccess, (state, { user }) => ({
    ...state,
    user,
    loaded: true
  })),
  on(sharedActions.signOutUserSuccess, (state, { user }) => ({ ...state, user }))
);
