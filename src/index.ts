export function arrayRemove(list: any[], key: any): boolean {
  for (let i = 0; i < list.length; ++i) {
    if (list[i] === key) {
      list.splice(i, 1);
      return true;
    }
  }
  return false;
}

export function arrayRemoveAll(list: any[], key: any): number {
  let removals = 0;
  while (arrayRemove(list, key)) {
    ++removals;
  }
  return removals;
}
