export interface SectionItem<T = any> {
  title: string;
  data: T[];
}

/**
 *  A function to reduce a flat array into a sections array.
 *  Format: SectionItem, { title: string, data: array }
 * @param property recieves a property to group from in the items array
 * @returns a function to be passed to a array reducer
 */
export const makeSectionByProperty = (property: string) => {
  return (accum: SectionItem[], current: any): SectionItem[] => {
    const newData = accum.find(x => x.title === current[property]);

    if (!newData) {
      return [...accum, {title: current[property], data: [current]}];
    }

    newData.data.push(current);
    return accum;
  };
};

/**
 *  A function to filter an array for items which given property includes the search query.
 * @param property recieves a property to filter from in the items array
 * @param searchQuery recieves an array used to search in the items property
 * @return a function to be passed to a array filter
 */
export const makeSearchByProperty = (property: string, searchQuery: string) => {
  return (currentItem: any) => {
    return currentItem[property]
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
  };
};
