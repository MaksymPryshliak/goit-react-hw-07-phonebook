export const getContacts = ({ contacts }) => contacts.items;

export const getFilteredContacts = ({ contacts, filter }) => {
  if (!filter) {
    return contacts.items;
  }
  const normalizedFilter = filter.toLocaleLowerCase();
  const result = contacts.items.filter(({ name }) => {
    const normalizedName = name.toLocaleLowerCase();
    return normalizedName.includes(normalizedFilter);
  });
  return result;
};