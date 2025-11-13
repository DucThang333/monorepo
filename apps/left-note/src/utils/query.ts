import { StateEnum } from "@left-note/types/state";
import { UseMutationResult } from "@tanstack/react-query";

export function parseStateEnum<TData = any, TError = Error, TVariables = any, TContext = unknown>(
  mutate: UseMutationResult<TData, TError, TVariables, TContext>
) {
  if (mutate.isIdle) {
    return StateEnum.IDLE;
  }
  if (mutate.isPending) {
    return StateEnum.LOADING;
  }
  if (mutate.isSuccess) {
    return StateEnum.SUCCESS;
  }
  if (mutate.isError) {
    return StateEnum.ERROR;
  }
  return StateEnum.IDLE;
}