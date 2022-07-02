// index signature: https://typescript-jp.gitbook.io/deep-dive/type-system/index-signatures#stringtonumberindekusanowotsu
type Length<T extends readonly any[]> = T['length']