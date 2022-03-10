import { combineReducers } from "redux";
import { CategoryState } from "../../types/category";
import { RecordState } from "../../types/record";
import { UserState } from "../../types/user";
import categoryReducer from "./categoryReducer";
import recordReducer from "./recordReducer";
import userReducer from "./userReducer";

export interface AppState {
  user: UserState;
  categories: CategoryState;
  records: RecordState;
}

const rootReducer = combineReducers<AppState>({
  user: userReducer,
  categories: categoryReducer,
  records: recordReducer,
});

export default rootReducer;
