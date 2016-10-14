export interface IAppData {
  name: string
  profilePic: string,
  logo: string,
  titles: string[],
  menu: any[],
  social: any[]
}

const INITIAL_STATE = {};

export function dataReducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    default:
      return action.payload || state;
  }
}
