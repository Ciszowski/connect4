import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { redAuth } from "./redAuth";
import { redGame } from "./redGame"


export interface State {
  redAuth : redAuth,
  redGame: redGame
}

export const reducers: ActionReducerMap<State> = {
  redAuth: redAuth,
  redGame: redGame
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
