import { GameState } from '../reducer/game';
import { FetchState } from '../reducer/fetch';

interface StoreEnhancerState { }

export interface RootState extends StoreEnhancerState {
    game: GameState;
    fetch: FetchState;
}
