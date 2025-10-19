/* eslint-disable @typescript-eslint/no-empty-object-type */

export * from './background-color/index';
export * from './color/index';
export * from './font-family/index';
export * from './font-size/index';
export * from './line-height/index';
export * from './text-style/index';
export * from './text-style-kit/index';

/**
 * The available text style attributes.
 */
export interface TextStyleAttributes extends Record<string, any> {}
