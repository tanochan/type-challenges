// readonly: https://typescriptbook.jp/reference/values-types-variables/object/readonly-vs-const
type MyReadonly<T> = {
    readonly [key in keyof T]: T[key]
}
