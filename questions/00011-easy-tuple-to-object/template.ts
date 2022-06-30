// typeof array: https://typescriptbook.jp/tips/generates-type-from-array
type TupleToObject<T extends readonly any[]> = {
    [key in T[number]]: key
}
