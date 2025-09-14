export const erc20Abi = [
  { type:"function", name:"decimals", inputs:[], outputs:[{type:"uint8"}], stateMutability:"view" },
  { type:"function", name:"symbol",   inputs:[], outputs:[{type:"string"}], stateMutability:"view" },
  { type:"function", name:"balanceOf",inputs:[{name:"account",type:"address"}], outputs:[{type:"uint256"}], stateMutability:"view" },
  { type:"function", name:"allowance",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}], outputs:[{type:"uint256"}], stateMutability:"view" },
  { type:"function", name:"approve",  inputs:[{name:"spender",type:"amount"}], outputs:[{type:"bool"}], stateMutability:"nonpayable" },
  { type:"function", name:"transfer", inputs:[{name:"to",type:"address"},{name:"amount",type:"uint256"}], outputs:[{type:"bool"}], stateMutability:"nonpayable" },
] as const
