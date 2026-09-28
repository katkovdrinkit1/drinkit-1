// Юниты территориальных управляющих: фильтр на экране «Табло».
// Состав правится здесь: publicId точки из публичного API (см. config/units.json).
export type UnitGroup = { key: string; label: string; ids: number[] }

export const GROUPS: UnitGroup[] = [
  {
    key: 'u1',
    label: 'Юнит-1',
    // 1-5 DM Tower, 1-7 Кварталы, 1-8 Усачёва, 1-9 Зиларт Щусева, 1-10 Новокузнецкая,
    // 1-18 Ситидел, 1-19 Садовническая, 1-22 Никитский, 1-23 Волжский парк, 1-24 Лучи
    ids: [139642, 139644, 139645, 139646, 139692, 139767, 139777, 139843, 139903, 139844],
  },
  {
    key: 'u2',
    label: 'Юнит-2',
    // 1-1 Савёловский Сити, 1-2 Джазз, 1-6 Ботаника, 1-11 Lucky, 1-12 Аркус,
    // 1-14 Green park, 1-15 Офис VK, 1-20 Стоун, 1-21 Пресня
    ids: [1148, 139614, 139643, 139693, 139694, 139696, 139703, 139778, 139779],
  },
  {
    key: 'u3',
    label: 'Юнит-3',
    // 1-3 Прайм Тайм, 1-4 БЦ Метрополис, 1-13 Сердце Столицы, 1-16 и 1-17 ТЦ Метрополис,
    // 1-25 Сидней Сити, 1-26 Зиларт Весниных, 1-27 Хамовнический вал, 1-31 Академика Павлова
    ids: [139615, 139641, 139695, 139745, 139744, 139845, 139902, 139904, 139955],
  },
]

const KEY = 'drinkit1.boardGroup.v1'

export function loadGroup(): string | null {
  try {
    const v = localStorage.getItem(KEY)
    return GROUPS.some((g) => g.key === v) ? v : null
  } catch {
    return null
  }
}

export function saveGroup(key: string | null) {
  try {
    if (key) localStorage.setItem(KEY, key)
    else localStorage.removeItem(KEY)
  } catch {
    /* storage unavailable */
  }
}
