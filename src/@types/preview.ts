import {
  AddonOptions,
  AddonSetting,
  AnyFunctionReturns,
  ContextNode,
  GenericObject,
  GenericProp,
  StringObject,
  WrapperSettings,
} from './index';
import { Component } from 'vue';

export type Memorize = <T, U extends any[]>(
  fn: (...arg: U) => T,
  resolver?: (...arg: U) => unknown
) => (...arg: U) => T;

export type Singleton = <T, U extends any[]>(fn: (...arg: U) => T) => (...arg: U) => T;

export type AggregateComponents = <T>(
  h: AnyFunctionReturns<T>
) => (
  ...arg: [ContextNode['components'], GenericProp, AddonOptions, number]
) => AnyFunctionReturns<T>;

export type AggregateContexts = <T>(
  h: AnyFunctionReturns<T>
) => (...arg: [ContextNode[], GenericObject, AnyFunctionReturns<any>]) => T;

export type GetMergedSettings = (...arg: [Partial<AddonSetting>, Partial<AddonSetting>]) => ContextNode;

export type GetContextNodes = (settings: WrapperSettings) => ContextNode[];

export type GetPropsByParamName = (params: ContextNode['params'], name?: string) => GenericProp;

export type GetPropsMap = (nodes: ContextNode[], state: StringObject) => GenericObject;
