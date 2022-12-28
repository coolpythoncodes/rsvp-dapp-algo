import React, { useEffect, useState } from "react";
import * as backend from "smart-contract/build/index.main.mjs";
import { useStoreContext } from "context/StoreContext";
import { useRouter } from "next/router";
import { formatWalletAddress } from "helper";
import { RsvpDetailsType } from "@custom-types";
import { toast } from "react-hot-toast";
import { Types } from "reducer";
import { Button } from "components/input";

const Event = () => {
	const router = useRouter();
	const { id } = router.query;

	const { reach, state, dispatch } = useStoreContext();
	const [ctcInfo, setCtcInfo] = useState();
	const [rsvpDetails, setRsvpDetails] = useState<RsvpDetailsType>();

	const register = async () => {
		if (!state.account) {
			toast.error("Please connect your account");
			return;
		}
		const currentNetworkTime = await reach.getNetworkTime();
		if (currentNetworkTime >= rsvpDetails?.details.deadline!) {
			toast.error("Reservation period is over");
			return;
		}
		try {
			const ctcGuest = state.account.contract(backend, ctcInfo);
			// const accountAddress = await ctcGuest.getContractAddress()
			dispatch({ type: Types.DisableButton });
			await ctcGuest.a.Guest.register();
			const isReserved = await ctcGuest.unsafeViews.Info.reserved(
				state.accAddress
			);
			// const isReserved = await ctcGuest.unsafeViews.Info.reserved(accountAddress)
			console.log("isReserved", isReserved);
			dispatch({ type: Types.EnableButton });
		} catch (error) {
			if (error) {
				toast.error('Opps! something went wrong')
				dispatch({ type: Types.EnableButton });

			}
			console.error(error);
		}
	};

	const getReservationDetails = async () => {
		try {
			const ctcGuest = state?.account?.contract(backend, ctcInfo);
			// const accountAddress = await ctcGuest.getContractAddress();
			console.log("accountAddress", state.accAddress);
			// const ctcGuest = account.contract(backend, { "type": "BigNumber", "hex": "0x75" })
			const details = await ctcGuest.unsafeViews.Info.details();
			const isReserved = await ctcGuest.unsafeViews.Info.reserved(
				state.accAddress
			);
			const noOfReservations = await ctcGuest.unsafeViews.Info.howMany();
			const eventDetails = {
				details,
				isReserved,
				noOfReservations
			};
			console.log(eventDetails);
			return eventDetails;
		} catch (error) {
			toast.error("Opps!there seems to be no event here, kindly check the link sent to you");
			console.log('reserve error',error);
		}
	};

	useEffect(() => {
		if (id) {
			const ctcInfo = reach.bigNumberify(+id);
			setCtcInfo(ctcInfo);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id]);

	useEffect(() => {
		if (state.account) {
			getReservationDetails().then((res) => setRsvpDetails(res));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [state?.account, rsvpDetails, rsvpDetails?.noOfReservations]);

	return (
		<div className="text-white layout-container">
			{!state.account ? (
				<div className="grid place-items-center h-screen">
					<p>Kindly connect your account</p>
				</div>
			) : (
				<div className="pt-20">
					{rsvpDetails ? (
						<div>
							<h1 className="text-3xl font-bold">Event details</h1>
							<div className="text-left space-y-5 my-5">
								<p>Party Name: {rsvpDetails?.details?.name}</p>
								<p>
									Reservation:{" "}
									{reach.formatCurrency(rsvpDetails?.details?.reservation)}{" "}
									{reach.standardUnit}
								</p>
								<p>
									Deadline in blocks:{" "}
									{reach.bigNumberToNumber(rsvpDetails?.details?.deadline)}
								</p>
								<p>
									Host Address:{" "}
									{formatWalletAddress(rsvpDetails?.details?.host)}{" "}
								</p>
								<p>
									Total no of reservation:{" "}
									{reach.bigNumberToNumber(rsvpDetails.noOfReservations)}
								</p>
							</div>
							{rsvpDetails.isReserved ? null : (
								<div>
									<p className="mb-5">You have not made any reservation yet</p>
									<Button
										title="Pay reservation"
										onClick={register}
										disabled={state.isButtonDisabled}
									/>
								</div>
							)}
						</div>
					) : null}
				</div>
			)}
		</div>
	);
};

export default Event;
