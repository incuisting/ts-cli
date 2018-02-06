import { createAction } from 'typesafe-actions';

export type History = Array<{ squares: Array<string | null>; }>;
export type XIsNext = boolean;
export type StepNumber = number;

export interface HandleClick {
  history: Array<{
    squares: Array<string | null>
  }>;
  xIsNext: boolean;
  stepNumber: number;
}

export interface JumpTo {
  xIsNext: boolean;
  stepNumber: number;
}

export const gameActions = {
  handleClick: createAction(
    'HANDLE_CLICK',
    (
      history: History,
      stepNumber: StepNumber,
      xIsNext: XIsNext
    ) => {
      return {
        type: 'HANDLE_CLICK',
        payload: {
          history,
          stepNumber,
          xIsNext
        }
      };
    }
  ),
  jumpTo: createAction(
    'JUMP_TO',
    (
      stepNumber: StepNumber,
      xIsNext: XIsNext
    ) => {
      return {
        type: 'JUMP_TO',
        payload: {
          stepNumber,
          xIsNext
        }
      };
    }
  )
};
