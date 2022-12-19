const formatWalletAddress = (address:string) =>
    `${address?.substring(0, 5)}...${address?.substring(address.length, address.length - 5)}`;


export {
    formatWalletAddress
}