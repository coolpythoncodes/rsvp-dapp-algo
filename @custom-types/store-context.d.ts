import { StoreActions } from "reducer";

export interface StoreContextProviderProps {
	children: React.ReactNode;
}

export interface IcheckinUsers {
	address: string;
	didShow: boolean;
	time: number;
};

export interface IinitialState {
	account: null | any;
	isButtonDisabled: boolean;
	accAddress: null | string;
	name?: string;
	reservation?: number;
	host?: "";
	registeredUsers?: string[];
	ctcInfo?: any;
	checkinUsers?: IcheckinUsers[];
}

export interface StoreContextInterface {
	state: IinitialState;
	dispatch: React.Dispatch<StoreActions>;
	connectAccount: () => void;
	suStr: string;
	reach: any;
	toAu: (value: number) => void;
}
