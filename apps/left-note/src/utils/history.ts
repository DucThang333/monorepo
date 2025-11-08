import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const goBack = (router: AppRouterInstance) => {
  if(window.history.length > 1) {
    router.back()
  } else {
    router.push('/')
  }
};