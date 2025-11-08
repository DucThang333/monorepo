import { useSelector } from "react-redux";
import { RootState } from "@left-note/deps/store";

export const getNoteSettingState = () => {
  const noteSetting = useSelector((state: RootState) => state.noteSetting);
  return noteSetting;
}