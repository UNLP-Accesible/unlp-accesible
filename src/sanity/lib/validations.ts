import { type Rule } from 'sanity';

export const required = (rule: Rule) => rule.required();

export const maxItemsAllowed = (maxCount: number) => (rule: Rule) =>
  rule.custom((value: unknown[]) => {
    if (value?.length > maxCount) {
      return `The maximum number of items allowed is ${maxCount}.`;
    }
    return true;
  });

export const isValidUrl = (type: string | string[]) => (rule: Rule) =>
  rule.uri({
    scheme: Array.isArray(type) ? type : [type],
  });
