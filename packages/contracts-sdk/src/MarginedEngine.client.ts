/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.30.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
import {Uint128, Side, PositionFilter, PnlCalcOption, Direction, Addr, ArrayOfPosition, Position, Integer, AssetInfo, Boolean} from "./types";
import {InstantiateMsg, ExecuteMsg, QueryMsg, MigrateMsg, ConfigResponse, PauserResponse, HooksResponse, LastPositionIdResponse, StateResponse, TickResponse, TicksResponse, PositionUnrealizedPnlResponse} from "./MarginedEngine.types";
export interface MarginedEngineReadOnlyInterface {
  contractAddress: string;
  config: () => Promise<ConfigResponse>;
  state: () => Promise<StateResponse>;
  getPauser: () => Promise<PauserResponse>;
  isWhitelisted: ({
    address
  }: {
    address: string;
  }) => Promise<Boolean>;
  getWhitelist: () => Promise<HooksResponse>;
  position: ({
    positionId,
    vamm
  }: {
    positionId: number;
    vamm: string;
  }) => Promise<Position>;
  allPositions: ({
    limit,
    orderBy,
    startAfter,
    trader
  }: {
    limit?: number;
    orderBy?: number;
    startAfter?: number;
    trader: string;
  }) => Promise<ArrayOfPosition>;
  positions: ({
    filter,
    limit,
    orderBy,
    side,
    startAfter,
    vamm
  }: {
    filter: PositionFilter;
    limit?: number;
    orderBy?: number;
    side?: Side;
    startAfter?: number;
    vamm: string;
  }) => Promise<ArrayOfPosition>;
  tick: ({
    entryPrice,
    side,
    vamm
  }: {
    entryPrice: Uint128;
    side: Side;
    vamm: string;
  }) => Promise<TickResponse>;
  ticks: ({
    limit,
    orderBy,
    side,
    startAfter,
    vamm
  }: {
    limit?: number;
    orderBy?: number;
    side: Side;
    startAfter?: Uint128;
    vamm: string;
  }) => Promise<TicksResponse>;
  unrealizedPnl: ({
    calcOption,
    positionId,
    vamm
  }: {
    calcOption: PnlCalcOption;
    positionId: number;
    vamm: string;
  }) => Promise<PositionUnrealizedPnlResponse>;
  cumulativePremiumFraction: ({
    vamm
  }: {
    vamm: string;
  }) => Promise<Integer>;
  marginRatio: ({
    positionId,
    vamm
  }: {
    positionId: number;
    vamm: string;
  }) => Promise<Integer>;
  freeCollateral: ({
    positionId,
    vamm
  }: {
    positionId: number;
    vamm: string;
  }) => Promise<Integer>;
  balanceWithFundingPayment: ({
    positionId
  }: {
    positionId: number;
  }) => Promise<Uint128>;
  positionWithFundingPayment: ({
    positionId,
    vamm
  }: {
    positionId: number;
    vamm: string;
  }) => Promise<Position>;
  lastPositionId: () => Promise<LastPositionIdResponse>;
}
export class MarginedEngineQueryClient implements MarginedEngineReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.config = this.config.bind(this);
    this.state = this.state.bind(this);
    this.getPauser = this.getPauser.bind(this);
    this.isWhitelisted = this.isWhitelisted.bind(this);
    this.getWhitelist = this.getWhitelist.bind(this);
    this.position = this.position.bind(this);
    this.allPositions = this.allPositions.bind(this);
    this.positions = this.positions.bind(this);
    this.tick = this.tick.bind(this);
    this.ticks = this.ticks.bind(this);
    this.unrealizedPnl = this.unrealizedPnl.bind(this);
    this.cumulativePremiumFraction = this.cumulativePremiumFraction.bind(this);
    this.marginRatio = this.marginRatio.bind(this);
    this.freeCollateral = this.freeCollateral.bind(this);
    this.balanceWithFundingPayment = this.balanceWithFundingPayment.bind(this);
    this.positionWithFundingPayment = this.positionWithFundingPayment.bind(this);
    this.lastPositionId = this.lastPositionId.bind(this);
  }

  config = async (): Promise<ConfigResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      config: {}
    });
  };
  state = async (): Promise<StateResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      state: {}
    });
  };
  getPauser = async (): Promise<PauserResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      get_pauser: {}
    });
  };
  isWhitelisted = async ({
    address
  }: {
    address: string;
  }): Promise<Boolean> => {
    return this.client.queryContractSmart(this.contractAddress, {
      is_whitelisted: {
        address
      }
    });
  };
  getWhitelist = async (): Promise<HooksResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      get_whitelist: {}
    });
  };
  position = async ({
    positionId,
    vamm
  }: {
    positionId: number;
    vamm: string;
  }): Promise<Position> => {
    return this.client.queryContractSmart(this.contractAddress, {
      position: {
        position_id: positionId,
        vamm
      }
    });
  };
  allPositions = async ({
    limit,
    orderBy,
    startAfter,
    trader
  }: {
    limit?: number;
    orderBy?: number;
    startAfter?: number;
    trader: string;
  }): Promise<ArrayOfPosition> => {
    return this.client.queryContractSmart(this.contractAddress, {
      all_positions: {
        limit,
        order_by: orderBy,
        start_after: startAfter,
        trader
      }
    });
  };
  positions = async ({
    filter,
    limit,
    orderBy,
    side,
    startAfter,
    vamm
  }: {
    filter: PositionFilter;
    limit?: number;
    orderBy?: number;
    side?: Side;
    startAfter?: number;
    vamm: string;
  }): Promise<ArrayOfPosition> => {
    return this.client.queryContractSmart(this.contractAddress, {
      positions: {
        filter,
        limit,
        order_by: orderBy,
        side,
        start_after: startAfter,
        vamm
      }
    });
  };
  tick = async ({
    entryPrice,
    side,
    vamm
  }: {
    entryPrice: Uint128;
    side: Side;
    vamm: string;
  }): Promise<TickResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      tick: {
        entry_price: entryPrice,
        side,
        vamm
      }
    });
  };
  ticks = async ({
    limit,
    orderBy,
    side,
    startAfter,
    vamm
  }: {
    limit?: number;
    orderBy?: number;
    side: Side;
    startAfter?: Uint128;
    vamm: string;
  }): Promise<TicksResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      ticks: {
        limit,
        order_by: orderBy,
        side,
        start_after: startAfter,
        vamm
      }
    });
  };
  unrealizedPnl = async ({
    calcOption,
    positionId,
    vamm
  }: {
    calcOption: PnlCalcOption;
    positionId: number;
    vamm: string;
  }): Promise<PositionUnrealizedPnlResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      unrealized_pnl: {
        calc_option: calcOption,
        position_id: positionId,
        vamm
      }
    });
  };
  cumulativePremiumFraction = async ({
    vamm
  }: {
    vamm: string;
  }): Promise<Integer> => {
    return this.client.queryContractSmart(this.contractAddress, {
      cumulative_premium_fraction: {
        vamm
      }
    });
  };
  marginRatio = async ({
    positionId,
    vamm
  }: {
    positionId: number;
    vamm: string;
  }): Promise<Integer> => {
    return this.client.queryContractSmart(this.contractAddress, {
      margin_ratio: {
        position_id: positionId,
        vamm
      }
    });
  };
  freeCollateral = async ({
    positionId,
    vamm
  }: {
    positionId: number;
    vamm: string;
  }): Promise<Integer> => {
    return this.client.queryContractSmart(this.contractAddress, {
      free_collateral: {
        position_id: positionId,
        vamm
      }
    });
  };
  balanceWithFundingPayment = async ({
    positionId
  }: {
    positionId: number;
  }): Promise<Uint128> => {
    return this.client.queryContractSmart(this.contractAddress, {
      balance_with_funding_payment: {
        position_id: positionId
      }
    });
  };
  positionWithFundingPayment = async ({
    positionId,
    vamm
  }: {
    positionId: number;
    vamm: string;
  }): Promise<Position> => {
    return this.client.queryContractSmart(this.contractAddress, {
      position_with_funding_payment: {
        position_id: positionId,
        vamm
      }
    });
  };
  lastPositionId = async (): Promise<LastPositionIdResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      last_position_id: {}
    });
  };
}
export interface MarginedEngineInterface extends MarginedEngineReadOnlyInterface {
  contractAddress: string;
  sender: string;
  updateConfig: ({
    feePool,
    initialMarginRatio,
    insuranceFund,
    liquidationFee,
    maintenanceMarginRatio,
    owner,
    partialLiquidationRatio,
    tpSlSpread
  }: {
    feePool?: string;
    initialMarginRatio?: Uint128;
    insuranceFund?: string;
    liquidationFee?: Uint128;
    maintenanceMarginRatio?: Uint128;
    owner?: string;
    partialLiquidationRatio?: Uint128;
    tpSlSpread?: Uint128;
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  updatePauser: ({
    pauser
  }: {
    pauser: string;
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  addWhitelist: ({
    address
  }: {
    address: string;
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  removeWhitelist: ({
    address
  }: {
    address: string;
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  openPosition: ({
    baseAssetLimit,
    leverage,
    marginAmount,
    side,
    stopLoss,
    takeProfit,
    vamm
  }: {
    baseAssetLimit: Uint128;
    leverage: Uint128;
    marginAmount: Uint128;
    side: Side;
    stopLoss?: Uint128;
    takeProfit: Uint128;
    vamm: string;
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  updateTpSl: ({
    positionId,
    stopLoss,
    takeProfit,
    vamm
  }: {
    positionId: number;
    stopLoss?: Uint128;
    takeProfit?: Uint128;
    vamm: string;
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  closePosition: ({
    positionId,
    quoteAssetLimit,
    vamm
  }: {
    positionId: number;
    quoteAssetLimit: Uint128;
    vamm: string;
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  triggerTpSl: ({
    positionId,
    quoteAssetLimit,
    vamm
  }: {
    positionId: number;
    quoteAssetLimit: Uint128;
    vamm: string;
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  liquidate: ({
    positionId,
    quoteAssetLimit,
    vamm
  }: {
    positionId: number;
    quoteAssetLimit: Uint128;
    vamm: string;
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  payFunding: ({
    vamm
  }: {
    vamm: string;
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  depositMargin: ({
    amount,
    positionId,
    vamm
  }: {
    amount: Uint128;
    positionId: number;
    vamm: string;
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  withdrawMargin: ({
    amount,
    positionId,
    vamm
  }: {
    amount: Uint128;
    positionId: number;
    vamm: string;
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  setPause: ({
    pause
  }: {
    pause: boolean;
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}
export class MarginedEngineClient extends MarginedEngineQueryClient implements MarginedEngineInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.updateConfig = this.updateConfig.bind(this);
    this.updatePauser = this.updatePauser.bind(this);
    this.addWhitelist = this.addWhitelist.bind(this);
    this.removeWhitelist = this.removeWhitelist.bind(this);
    this.openPosition = this.openPosition.bind(this);
    this.updateTpSl = this.updateTpSl.bind(this);
    this.closePosition = this.closePosition.bind(this);
    this.triggerTpSl = this.triggerTpSl.bind(this);
    this.liquidate = this.liquidate.bind(this);
    this.payFunding = this.payFunding.bind(this);
    this.depositMargin = this.depositMargin.bind(this);
    this.withdrawMargin = this.withdrawMargin.bind(this);
    this.setPause = this.setPause.bind(this);
  }

  updateConfig = async ({
    feePool,
    initialMarginRatio,
    insuranceFund,
    liquidationFee,
    maintenanceMarginRatio,
    owner,
    partialLiquidationRatio,
    tpSlSpread
  }: {
    feePool?: string;
    initialMarginRatio?: Uint128;
    insuranceFund?: string;
    liquidationFee?: Uint128;
    maintenanceMarginRatio?: Uint128;
    owner?: string;
    partialLiquidationRatio?: Uint128;
    tpSlSpread?: Uint128;
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_config: {
        fee_pool: feePool,
        initial_margin_ratio: initialMarginRatio,
        insurance_fund: insuranceFund,
        liquidation_fee: liquidationFee,
        maintenance_margin_ratio: maintenanceMarginRatio,
        owner,
        partial_liquidation_ratio: partialLiquidationRatio,
        tp_sl_spread: tpSlSpread
      }
    }, _fee, _memo, _funds);
  };
  updatePauser = async ({
    pauser
  }: {
    pauser: string;
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_pauser: {
        pauser
      }
    }, _fee, _memo, _funds);
  };
  addWhitelist = async ({
    address
  }: {
    address: string;
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      add_whitelist: {
        address
      }
    }, _fee, _memo, _funds);
  };
  removeWhitelist = async ({
    address
  }: {
    address: string;
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      remove_whitelist: {
        address
      }
    }, _fee, _memo, _funds);
  };
  openPosition = async ({
    baseAssetLimit,
    leverage,
    marginAmount,
    side,
    stopLoss,
    takeProfit,
    vamm
  }: {
    baseAssetLimit: Uint128;
    leverage: Uint128;
    marginAmount: Uint128;
    side: Side;
    stopLoss?: Uint128;
    takeProfit: Uint128;
    vamm: string;
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      open_position: {
        base_asset_limit: baseAssetLimit,
        leverage,
        margin_amount: marginAmount,
        side,
        stop_loss: stopLoss,
        take_profit: takeProfit,
        vamm
      }
    }, _fee, _memo, _funds);
  };
  updateTpSl = async ({
    positionId,
    stopLoss,
    takeProfit,
    vamm
  }: {
    positionId: number;
    stopLoss?: Uint128;
    takeProfit?: Uint128;
    vamm: string;
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_tp_sl: {
        position_id: positionId,
        stop_loss: stopLoss,
        take_profit: takeProfit,
        vamm
      }
    }, _fee, _memo, _funds);
  };
  closePosition = async ({
    positionId,
    quoteAssetLimit,
    vamm
  }: {
    positionId: number;
    quoteAssetLimit: Uint128;
    vamm: string;
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      close_position: {
        position_id: positionId,
        quote_asset_limit: quoteAssetLimit,
        vamm
      }
    }, _fee, _memo, _funds);
  };
  triggerTpSl = async ({
    positionId,
    quoteAssetLimit,
    vamm
  }: {
    positionId: number;
    quoteAssetLimit: Uint128;
    vamm: string;
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      trigger_tp_sl: {
        position_id: positionId,
        quote_asset_limit: quoteAssetLimit,
        vamm
      }
    }, _fee, _memo, _funds);
  };
  liquidate = async ({
    positionId,
    quoteAssetLimit,
    vamm
  }: {
    positionId: number;
    quoteAssetLimit: Uint128;
    vamm: string;
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      liquidate: {
        position_id: positionId,
        quote_asset_limit: quoteAssetLimit,
        vamm
      }
    }, _fee, _memo, _funds);
  };
  payFunding = async ({
    vamm
  }: {
    vamm: string;
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      pay_funding: {
        vamm
      }
    }, _fee, _memo, _funds);
  };
  depositMargin = async ({
    amount,
    positionId,
    vamm
  }: {
    amount: Uint128;
    positionId: number;
    vamm: string;
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      deposit_margin: {
        amount,
        position_id: positionId,
        vamm
      }
    }, _fee, _memo, _funds);
  };
  withdrawMargin = async ({
    amount,
    positionId,
    vamm
  }: {
    amount: Uint128;
    positionId: number;
    vamm: string;
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      withdraw_margin: {
        amount,
        position_id: positionId,
        vamm
      }
    }, _fee, _memo, _funds);
  };
  setPause = async ({
    pause
  }: {
    pause: boolean;
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      set_pause: {
        pause
      }
    }, _fee, _memo, _funds);
  };
}