import { IinitialState } from "@custom-types";

type ActionMap<M extends { [index: string]: any }> = {
	[Key in keyof M]: M[Key] extends undefined
		? {
				type: Key;
		  }
		: {
				type: Key;
				payload: M[Key];
		  };
};

export enum Types {
	ConnectAccount = "CONNECT_ACCOUNT",
	DisableButton = "DISABLE_BUTTON",
	EnableButton = "ENABLE_BUTTON",
}

export type StoreActions =
	ActionMap<StorePayload>[keyof ActionMap<StorePayload>];

type StorePayload = {
	[Types.ConnectAccount]: {
		accAddress: string;
		account: any;
	};
	[Types.DisableButton]: undefined;
	[Types.EnableButton]: undefined;
};

export const storeReducer = (state: IinitialState, action: StoreActions) => {
	switch (action.type) {
		case Types.DisableButton:
			return {
				...state,
				isButtonDisabled: true,
			};
		case Types.EnableButton:
			return {
				...state,
				isButtonDisabled: false,
			};
		case Types.ConnectAccount:
			return {
				...state,
				isButtonDisabled: false,
				accAddress: action.payload.accAddress,
				acc: action.payload.account,
			};

		default:
			return state;
	}
};
