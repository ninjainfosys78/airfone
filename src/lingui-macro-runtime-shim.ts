/**
 * Runtime replacement for `@lingui/macro`.
 *
 * The SDK's compiled dist still has `import { t } from '@lingui/macro'`
 * because tsup doesn't run the lingui babel plugin. In the browser, the
 * macro package eagerly imports its babel plugin (which calls Buffer.from
 * via js-sha256) and crashes. Aliasing `@lingui/macro` to this shim in
 * the customer app's vite config skips the babel chain entirely — every
 * SDK call site already passes explicit { id, message } so no compile-
 * time message-id generation is needed.
 */

import { i18n } from '@lingui/core';

type TArgs = { id: string; message?: string; values?: Record<string, unknown> };

export function t(arg: TArgs | string): string {
  if (typeof arg === 'string') return arg;
  const { id, message, values } = arg;
  return i18n._(id, values, { message });
}

export const plural = (value: number, options: Record<string, string>): string => {
  const key = value === 1 ? 'one' : 'other';
  return (options[String(value)] ?? options[key] ?? options.other ?? '').replace(
    '#',
    String(value)
  );
};

export const select = (value: string, options: Record<string, string>): string =>
  options[value] ?? options.other ?? '';

export const Trans = ({ id, message, children }: { id?: string; message?: string; children?: unknown }): unknown =>
  children ?? message ?? id ?? '';

// MessageDescriptor passthrough — `msg` from @lingui/macro normally
// produces a tagged descriptor at compile time. Without the macro we
// just preserve the { id, message } object so consumers can hand it to
// i18n._() later.
export const msg = (arg: TArgs | string) =>
  typeof arg === 'string' ? { id: arg } : arg;
