"use client"; // Ensures this runs only on the client side

import { useState, useEffect } from "react";
import { ethers } from "ethers";

const MetaMaskAutoConnect = () => {
    const [account, setAccount] = useState(null);

    useEffect(() => {
        const connectMetaMask = async () => {
            if (typeof window !== "undefined" && window.ethereum) {
                try {
                    const accounts = await window.ethereum.request({ method: "eth_accounts" });

                    if (accounts.length > 0) {
                        setAccount(accounts[0]);
                        console.log("Reconnected with:", accounts[0]);

                        const provider = new ethers.BrowserProvider(window.ethereum);
                        const signer = await provider.getSigner();
                        console.log("Signer Address:", await signer.getAddress());
                    } else {
                        const newAccounts = await window.ethereum.request({ method: "eth_requestAccounts" });
                        setAccount(newAccounts[0]);
                        console.log("Connected:", newAccounts[0]);
                    }
                } catch (error) {
                    console.error("Error connecting to MetaMask:", error);
                }
            } else {
                console.error("MetaMask is not installed. Please install it.");
            }
        };

        connectMetaMask();
    }, []);
};

export default MetaMaskAutoConnect;
