export const convertToDate = (dateString: string): string => {
  const d = dateString.split('-');
  return d[0] + '-' + d[2] + '-' + d[1];
};
