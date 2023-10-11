const hre = require("hardhat");


async function main() {
    const Drive = await hre.ethers.deployContract("Drive");
    const drive = await Drive.waitForDeployment();

    console.log(`Module deployed to :  ${drive.address}`);
}

main()
.catch((error) =>{
    console.error(error);
    process.exitCode(1);
});