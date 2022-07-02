// never型: https://typescriptbook.jp/reference/statements/never
type First<T extends any[]> = T extends [] ? never : T[0]