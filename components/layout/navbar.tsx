import React from "react";
import { Button } from "components/input";
import Link from "next/link";
import { useStoreContext } from "context/StoreContext";
import { formatWalletAddress } from "helper";

const Navbar = () => {
	const { connectAccount, state } = useStoreContext();
	return (
		<div className="fixed top-0 left-0 w-full h-20 z-50 bg-white flex">
			<div className="layout-container flex items-center justify-between">
				<Link href="/" className="text-2xl font-bold">
					RSVP
				</Link>
				<div className="space-x-5">
					<Button title="Create event" />
					<Button
						handleClick={connectAccount}
                        disabled={state.isButtonDisabled}
						title={state.accAddress ? formatWalletAddress(state.accAddress) : "Connect account"}
					/>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
