import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";
import { FormEvent, useState } from "react";

const availableWeekdays = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
]

export function NewHabitForm() {
    const [title, setTitle] = useState('')
    const [weekdays, setWeekdays] = useState<number[]>([])

    function createNewHabit(event: FormEvent) {
        event.preventDefault()
        console.log(title, weekdays)
    }

    function handleToggleWeekday(weekday: number) {
        if (weekdays.includes(weekday)) {
            const weekdaysWithRemovedOne = weekdays.filter(day => day !== weekday)
            setWeekdays(weekdaysWithRemovedOne)
        } else {
            const weekdaysWithAddedOne = [...weekdays, weekday]
            setWeekdays(weekdaysWithAddedOne)
        }
    }

    return (
        <form onSubmit={createNewHabit} className="w-full flex flex-col mt-6">
            <label htmlFor="title" className="font-semibold leading-tight">
                Qual seu comprometimento?
            </label>

            <input
                type="text"
                id="title"
                placeholder="ex.: Exercícios, dormir bem, etc..."
                className="p-4 rounded-lg mt-4 bg-zinc-800 text-white placeholder:text-zinc-400"
                autoFocus
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />

            <label htmlFor="" className="font-semibold leading-tight mt-4">
                Qual a recorrência?
            </label>

            <div className="mt-3 flex flex-col gap-2">
                {availableWeekdays.map((weekday, index) => {
                    return (
                        <Checkbox.Root
                            key={weekday}
                            className="flex items-center gap-3 group"
                            onCheckedChange={() => handleToggleWeekday(index)}
                        >

                            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500">
                                <Checkbox.Indicator>
                                    <Check size={20} className="text-white" />
                                </Checkbox.Indicator>
                            </div>

                            <span className="text-white leading-tight">
                                {weekday}
                            </span>
                        </Checkbox.Root>
                    )
                })}
            </div>

            <button type="submit" className="mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold bg-green-600 hover:bg-green-500">
                <Check size={20} weight="bold" />
                Confirmar
            </button>
        </form>
    )
}