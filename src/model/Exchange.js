/*
 * BrainRex API
 * The Brainrex API is a collection of analytics tools and data integrations made for blockchain developers. In particular we offer Natural Language Processing and Anomaly detection algorithms that have been fine tune to understand text data and time series in the domain speficic setting of cryptocurrency and blockchain technology. This technology is intended to be use as building blocks to bigger applications, we offer examples on how to use them for Trading Backtesting and Smart Contract anomaly monitoring.
 *
 * OpenAPI spec version: 1.0.2
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.44
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';

/**
 * The Exchange model module.
 * @module model/Exchange
 * @version 1.0.2
 */
export class Exchange {
  /**
   * Constructs a new <code>Exchange</code>.
   * @alias module:model/Exchange
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Exchange</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Exchange} obj Optional instance to populate.
   * @return {module:model/Exchange} The populated <code>Exchange</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Exchange();
      if (data.hasOwnProperty('exchange'))
        obj.exchange = ApiClient.convertToType(data['exchange'], 'String');
    }
    return obj;
  }
}

/**
 * Name of the digital asset exchange to get data from
 * @member {String} exchange
 */
Exchange.prototype.exchange = undefined;

