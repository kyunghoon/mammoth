import { Now } from './keywords';
import { PartialQuery, Tokenable } from './query';
import { GroupToken, StringToken } from './tokens';

export * from './database';
export * from './columns';
export * from './keywords';

export * from './types';

// TODO: move this to expressions.

export const not = (tokenable: Tokenable) =>
  new PartialQuery(new StringToken(`NOT`), new GroupToken(tokenable.toTokens()));

export const now = () => new PartialQuery(...new Now().toTokens());
