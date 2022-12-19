import { createContext, useContext, useReducer } from "react";
import {
	StoreContextInterface,
	StoreContextProviderProps,
} from "@custom-types";
import { initialState } from "helper";
import { loadStdlib } from "@reach-sh/stdlib";
import { toast } from "react-hot-toast";
import { storeReducer, Types } from "reducer";
const reach = loadStdlib("ALGO");

const StoreContext = createContext<StoreContextInterface | null>(null);

const StoreContextProvider = ({ children }: StoreContextProviderProps) => {
	const [state, dispatch] = useReducer(storeReducer, initialState);
	const startingBalance = reach.parseCurrency(100);

	const connectAccount = async () => {
		dispatch({
			type: Types.DisableButton,
		});
		try {
			const account = await reach.newTestAccount(startingBalance);
			const accAddress = await account.getAddress();
			dispatch({
				type: Types.ConnectAccount,
				payload: {
					accAddress,
					account,
				},
			});
		} catch (error) {
			toast.error("Could not connect account");
		}
	};
	return (
		<StoreContext.Provider value={{ state, dispatch, connectAccount }}>
			{children}
		</StoreContext.Provider>
	);
};

const useStoreContext = () => useContext(StoreContext) as StoreContextInterface;

export { StoreContextProvider, useStoreContext };
