// https://github.com/Automattic/mongoose/blob/582156858db3ca7fbaa8950dc997e0d9e8117b21/types/document.d.ts#L22-L26
class PropertyCasingValidByFilter {
  _id: string // MongoDB "_id" 인 경우
  __v: string // MongoDB "__v" 인 경우
}
