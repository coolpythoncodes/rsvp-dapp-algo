import React, { useState } from "react";
import * as backend from "smart-contract/build/index.main.mjs";
import { Button, TextInput } from "components/input";
import { useStoreContext } from "context/StoreContext";
import { toast } from "react-hot-toast";
import { Types } from "reducer";
import { useRouter } from "next/router";

const CreateEventFom = () => {
	const { state, suStr, reach, dispatch, toAu } = useStoreContext();
	const router = useRouter();
	const initialFormData = {
		name: "",
		reservation: "",
		deadline: "",
		host: ""
	};
	const [formData, setFormData] = useState(initialFormData);

	const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	type registerType = {
		what: string[];
		when: any;
	};

	type checkinType = {
		when: any;
		what: [string, boolean];
	};

	const events = {
		register: async ({ when, what: [who_] }: registerType) => {
			// const who = reach.formatAddress(who_);

			dispatch({
				type: Types.AddRegisteredGuest,
				payload: {
					registeredUser: who_
				}
			});
			console.log(`${who_} registered at ${when}`);
			const now = parseInt(await reach.getNetworkTime());
			console.log("now", now, "when", parseInt(when));
		},
		checkin: async ({ when, what: [who_, showed_] }: checkinType) => {
			dispatch({
				type: Types.AddCheckinGuest,
				payload: {
					checkinUser: {
						address: who_,
						didShow: showed_,
						time: when
					}
				}
			});
			console.log(
				`${who_} did ${showed_ ? "" : " not"} show ${
					showed_ ? `at ${when}` : ""
				}`
			);
		}
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch({
			type: Types.DisableButton
		});
		if (!state.account || !state.accAddress) {
			toast.error("Please connect an account");
			dispatch({
				type: Types.EnableButton
			});
			return;
		}
		const notification = toast.loading("Creating your event");
		dispatch({ type: Types.ClearEventsData });
		try {
			const ctcHost = state.account.contract(backend);
			const currentNetworkTime = await reach.getNetworkTime();
			const ctcInfo = await reach.withDisconnect(() =>
				ctcHost.p.Admin({
					details: {
						...formData,
						reservation: toAu(+formData.reservation),
						deadline: currentNetworkTime.add(+formData.deadline),
						host: state.accAddress,
					},
					launched: reach.disconnect
				})
			);
			ctcHost.e.register.monitor(events.register);
			ctcHost.e.checkin.monitor(events.checkin);
			dispatch({
				type: Types.DeployContractInfo,
				payload: {
					ctcInfo
				}
			});
			dispatch({
				type: Types.EnableButton
			});
			toast.success("Event created", {
				id: notification
			});
			const hexInNumber = reach.bigNumberToNumber(JSON.parse(ctcInfo));
			router.push(`/host/${hexInNumber}`);
		} catch (error) {
			console.error(error);
			toast.error("Something went wrong", {
				id: notification
			});
			dispatch({
				type: Types.EnableButton
			});
		}
	};

	return (
		<form onSubmit={handleSubmit} className="w-full mt-10 space-y-5">
			<TextInput
				id="name"
				name="name"
				placeholder="Type event name"
				label="name your event"
				type="text"
				value={formData.name}
				handleTextChange={handleTextChange}
				required
			/>
			<TextInput
				id="reservation"
				name="reservation"
				placeholder="Type event reservation amount"
				label={`reservation amount (${suStr})`}
				type="number"
				value={formData.reservation}
				handleTextChange={handleTextChange}
				required
			/>
			<TextInput
				id="deadline"
				name="deadline"
				placeholder="Deadline for event"
				label="Event start time"
				type="number"
				value={formData.deadline}
				handleTextChange={handleTextChange}
				required
			/>
			<Button title="Create event" className="w-full mt-5" />
		</form>
	);
};

export default CreateEventFom;
