import { GROUPS } from '@/lib/groups'
import { cn } from '@/lib/utils'

type Props = {
  group: string | null
  onGroup: (key: string | null) => void
  total: number
  className?: string
}

// Кнопки юнитов территориальных управляющих. Выбор общий для всех экранов.
export function UnitFilter({ group, onGroup, total, className }: Props) {
  const active = GROUPS.find((g) => g.key === group) ?? null
  return (
    <div className={cn('mb-3', className)}>
      <div className="grid grid-cols-3 gap-2 text-[13px] font-medium" role="group" aria-label="Фильтр по юниту">
        {GROUPS.map((g) => (
          <button
            key={g.key}
            type="button"
            aria-pressed={group === g.key}
            onClick={() => onGroup(group === g.key ? null : g.key)}
            className={cn('h-9 rounded-full border whitespace-nowrap', group === g.key ? 'border-brand bg-brand text-white' : 'border-line bg-white text-ink')}
          >
            {g.label} · {g.ids.length}
          </button>
        ))}
      </div>
      <p className="mt-1.5 px-1 text-[12px] leading-4 text-dim">
        {active ? `Показан ${active.label}. Нажмите ещё раз, чтобы увидеть все ${total}.` : `Все точки: ${total}. Выберите юнит, чтобы смотреть только свои.`}
      </p>
    </div>
  )
}
