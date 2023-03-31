export enum ROUTE {
  ADMIN = '/admin',
  SHOP = '/',
  PRODUCT = '/product',
}

export enum COL {
  ID = 'ID',
  NAME = 'Назва',
  DESCRIPTION = 'Опис',
  PRICE = 'Ціна',
  IMAGE = 'Фото',
  RATING = 'Рейтинг',
  STOCK = 'Cток',
  CATEGORY = 'Категорія'
}

export const sortableCols = [COL.ID, COL.PRICE, COL.RATING, COL.STOCK];
