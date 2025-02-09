// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/Script.sol";
import {NeuraLecto} from "../src/Neura.sol";

contract DeployNeuraLecto is Script {
    function run() external {
        vm.startBroadcast();
        NeuraLecto neuraLecto = new NeuraLecto();
        vm.stopBroadcast();
    }
}
