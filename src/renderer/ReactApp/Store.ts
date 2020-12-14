import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import { IPickStateProps } from '#RendererTypes';

import { Reducer } from './Slice';

export const Store = configureStore({ reducer: Reducer });

export type StoreState = ReturnType<typeof Store.getState>;

// prettier-ignore
export type PickStateProps<Selections extends keyof StoreState> =
    IPickStateProps<StoreState, Selections>;

// prettier-ignore
export type AppThunk<ReturnType = void> =
    ThunkAction<ReturnType, StoreState, unknown, Action<string>>;
