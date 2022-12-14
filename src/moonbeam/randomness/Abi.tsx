//合约ABI
const abi: any = [
  {
    anonymous: false,
    inputs: [],
    name: "FulFillmentFailed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "FulFillmentSucceeded",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
    ],
    name: "fulfillRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
    ],
    name: "getRequest",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "refundAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "contractAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "fee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "gasLimit",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "salt",
            type: "bytes32",
          },
          {
            internalType: "uint32",
            name: "numWords",
            type: "uint32",
          },
          {
            internalType:
              "enum Randomness.RandomnessSource",
            name: "randomnessSource",
            type: "uint8",
          },
          {
            internalType: "uint32",
            name: "fulfillmentBlock",
            type: "uint32",
          },
          {
            internalType: "uint64",
            name: "fulfillmentEpochIndex",
            type: "uint64",
          },
          {
            internalType: "uint32",
            name: "expirationBlock",
            type: "uint32",
          },
          {
            internalType: "uint64",
            name: "expirationEpochIndex",
            type: "uint64",
          },
          {
            internalType:
              "enum Randomness.RequestStatus",
            name: "status",
            type: "uint8",
          },
        ],
        internalType: "struct Randomness.Request",
        name: "request",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
    ],
    name: "getRequestStatus",
    outputs: [
      {
        internalType:
          "enum Randomness.RequestStatus",
        name: "status",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "feeIncrease",
        type: "uint256",
      },
    ],
    name: "increaseRequestFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
    ],
    name: "purgeExpiredRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "relayEpochIndex",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "refundAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "gasLimit",
        type: "uint64",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "numWords",
        type: "uint8",
      },
      {
        internalType: "uint64",
        name: "delay",
        type: "uint64",
      },
    ],
    name: "requestLocalVRFRandomWords",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "refundAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "gasLimit",
        type: "uint64",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "numWords",
        type: "uint8",
      },
    ],
    name: "requestRelayBabeEpochRandomWords",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "requiredDeposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export default abi;
