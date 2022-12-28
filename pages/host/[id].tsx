import React, { useEffect, useState } from "react";
import { Button } from "components/input";
import { useRouter } from "next/router";
import { useStoreContext } from "context/StoreContext";
import * as backend from "smart-contract/build/index.main.mjs";
import { formatWalletAddress } from "helper";
import { Types } from "reducer";
import { toast } from "react-hot-toast";

const Host = () => {
	const [hexInNumber, setHexInNumber] = useState();
	const { reach, state, dispatch } = useStoreContext();
	const router = useRouter();
	const { id } = router.query;
	const sleep = (milliseconds: number) =>
		new Promise((resolve) => setTimeout(resolve, milliseconds));

	const copyToClipboard = async (button: any) => {
		navigator.clipboard.writeText(`localhost:3000/event/${hexInNumber}`);
		const origInnerHTML = button.innerHTML;
		button.innerHTML = "Copied!";
		button.disabled = true;
		await sleep(1000);
		button.innerHTML = origInnerHTML;
		button.disabled = false;
	};

	const didShow = async (acc: string, showed: boolean) => {
		const currentNetworkTime = await reach.getNetworkTime();
		const ctc = state.account.contract(backend, JSON.parse(state.ctcInfo));
		const details = await ctc.unsafeViews.Info.details();
		console.log("event details", details);
		if (currentNetworkTime < parseInt(details.deadline)) {
			toast.error(
				"Event has not started yet!. Guest can only be checked when event starts"
			);
			return;
		}
		// console.log('acc',acc, 'showed', showed)
		dispatch({
			type: Types.DisableButton
		});
		if (!state.account) {
			toast.error("Please connect an account");
			dispatch({
				type: Types.EnableButton
			});
			return;
		}
		// console.log(ctc)
		await ctc.a.Host.checkin(acc, showed);

		dispatch({
			type: Types.EnableButton
		});
		// ctc.e.checkin.monitor((e)=>{console.log('checkin', e)});
	};

	useEffect(() => {
		if (id) {
			setHexInNumber(reach.bigNumberify(+id));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id]);

	return (
		<div className="layout-container pt-10">
			<p className="text-white text-xl">Share event to family and friends</p>
			<pre className="bg-[rgba(255,255,255,0.3)] rounded-[10px] text-[18px] my-[30px] p-5 text-left">
				{hexInNumber ? `localhost:3000/event/${hexInNumber}` : null}
				{/* {ctcInfo} */}
			</pre>

			<Button
				title="Copy to clipboard"
				onClick={(e: any) => copyToClipboard(e.currentTarget)}
			/>

			<div>
				{state.registeredUsers?.length ? (
					<>
						<h1 className="mb-5">Registered Guest</h1>
						<div className="space-y-5">
							{state.registeredUsers.map((item, index) => (
								<div key={`registered-${index}`} className="flex items-center space-x-5">
									{state?.checkinUsers?.filter((user) => user.address === item)
										.length ? (
										<>
											{state?.checkinUsers
												?.filter((user) => user.address === item)
												.map((item, index) => (
													<div key={index}>
														<p>{formatWalletAddress(item.address)}</p>
														<p>{item.didShow ? `Showed at ${(item.time)}` : "did not Showed"}</p>
													</div>
												))}
										</>
									) : (
										<>
											<p>{formatWalletAddress(item)} </p>

											<div className="flex items-center space-x-2">
												<button
													className="border rounded-md p-1 border-green-600 bg-green-600"
													onClick={() => didShow(item, true)}
												>
													present
												</button>
												<button
													className="border rounded-md p-1 border-red-600 bg-red-600"
													onClick={() => didShow(item, false)}
												>
													absent
												</button>
											</div>
										</>
									)}
								</div>
							))}
						</div>
					</>
				) : (
					<p>No one has made any reservation yet</p>
				)}
			</div>
		</div>
	);
};

export default Host;
