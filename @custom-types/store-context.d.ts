import { StoreActions } from "reducer";

export interface StoreContextProviderProps {
	children: React.ReactNode;
}

export interface IinitialState {
	account: null | string;
	isButtonDisabled: boolean;
    accAddress: null | string;
}

export interface StoreContextInterface {
	state: IinitialState;
	dispatch: React.Dispatch<StoreActions>;
	connectAccount: () => void;
}
