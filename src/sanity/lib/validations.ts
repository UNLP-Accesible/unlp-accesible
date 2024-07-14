import { Rule } from 'sanity';

export const required = (Rule: Rule) => Rule.required();

export const maxItemsAllowed = (maxCount: number) => (Rule: Rule) =>
  Rule.custom((value: unknown[]) => {
    if (value?.length > maxCount) {
      return `The maximum number of items allowed is ${maxCount}.`;
    }
    return true;
  });

export const isValidUrl = (type: string | string[]) => (Rule: Rule) =>
  Rule.uri({
    scheme: Array.isArray(type) ? type : [type],
  });
