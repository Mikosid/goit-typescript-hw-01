function merge<T extends {}>(objA: T, objB: T): T {
  return Object.assign(objA, objB);
}
