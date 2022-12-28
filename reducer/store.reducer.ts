import { IcheckinUsers, IinitialState } from "@custom-types";

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
	DeployContractInfo = "DEPLOY_CONTRACT_INFO",
	AddRegisteredGuest = "ADD_REGISTERED_GUEST",
	AddCheckinGuest = "ADD_CHECKIN_GUEST",
	ClearEventsData = "CLEAR_EVENTS_DATA"
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
	[Types.DeployContractInfo]: {
		ctcInfo: any;
	};
	[Types.AddRegisteredGuest]: {
		registeredUser: string;
	};
	[Types.ClearEventsData]: undefined;
	[Types.AddCheckinGuest]: {
		checkinUser: IcheckinUsers;
	};
};

export const storeReducer = (state: IinitialState, action: StoreActions) => {
	switch (action.type) {
		case Types.DisableButton:
			return {
				...state,
				isButtonDisabled: true
			};
		case Types.EnableButton:
			return {
				...state,
				isButtonDisabled: false
			};
		case Types.ConnectAccount:
			return {
				...state,
				isButtonDisabled: false,
				accAddress: action.payload.accAddress,
				account: action.payload.account
			};

		case Types.DeployContractInfo:
			return {
				...state,
				ctcInfo: action.payload.ctcInfo
			};

		case Types.AddRegisteredGuest:
			return {
				...state,
				registeredUsers: [
					...state.registeredUsers!,
					action.payload.registeredUser
				]
			};

		case Types.AddCheckinGuest:
			return {
				...state,
				checkinUsers: [
					...state.checkinUsers!,
					{
						address: action.payload.checkinUser.address,
						didShow: action.payload.checkinUser.didShow,
						time: action.payload.checkinUser.time
					}
				]
			};

		case Types.ClearEventsData:
			return {
				...state,
				registeredUsers: [],
				checkinUsers: []
			};

		default:
			return state;
	}
};
