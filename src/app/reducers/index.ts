import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { redAuth}  from "./redAuth";


export interface State {
  redAuth : redAuth
}

export const reducers: ActionReducerMap<State> = {
  redAuth: redAuth
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
