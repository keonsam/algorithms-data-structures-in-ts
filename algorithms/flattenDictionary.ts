type Directory = {
  [key: string]: unknown;
};

type T = keyof Directory;

export function flattenDictionary(obj: Directory) {
  const flattenObj: Directory = {};
  function flattenDictionaryHelper(directory: Directory, propName: T) {
    if (typeof directory !== "object") {
      flattenDictionary[propName as T] = directory;
      return;
    }

    for (let prop in directory) {
      if (!propName) {
        flattenDictionaryHelper(directory[prop as T] as Directory, propName + prop);
      } else {
        flattenDictionaryHelper(directory[prop as T] as Directory, propName + "." + prop);
      }
    }
  }

  flattenDictionaryHelper(obj, "");
  return flattenObj;
}

console.log(
  flattenDictionary({
    key1: "f",
    key2: {
      a: "1",
      b: "2",
      c: "3",
      key3: {
        d: "4",
        e: "5",
        f: "6",
      },
    },
  })
);
