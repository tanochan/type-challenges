// keyof: https://typescriptbook.jp/reference/type-reuse/keyof-type-operator
// Mapped type: https://typescriptbook.jp/reference/type-reuse/mapped-types

type MyPick<T, K extends keyof T> = {
    [k in K]: T[k]
}
