
// const apiPath = "https://federicoshytte.dk";

import axios from "axios"
const postHeader = {
    "Content-Type": "application/json"
};
const apiPath = "http://83.221.156.59"
export async function mintCoint(owner){
    let response = await fetch("/api/minting/mint", {
		method: "post",
		headers: postHeader,
		body: JSON.stringify({
			owner,
		})
	});
	if (!response.ok) {
		throw new Error(response.statusText);
	}
}
export async function checkMint() {
    console.log(`${apiPath}/api/minting/check`)
    let response = await fetch(`${apiPath}/api/minting/check`)
    let data = response.text();
}

