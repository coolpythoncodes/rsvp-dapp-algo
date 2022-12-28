export type RsvpDetailsType = {
	noOfReservations: number;
    isReserved:boolean;
	details: {
		name: string;
		reservation: number;
        deadline: number;
        host:string;
        
	};
};
