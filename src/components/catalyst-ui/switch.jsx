import * as Headless from '@headlessui/react'
import clsx from 'clsx'

export function SwitchGroup({ className, ...props }) {
  return (
    <div
      data-slot="control"
      {...props}
      className={clsx(
        className,
        // Basic groups
        'space-y-3 **:data-[slot=label]:font-normal',
        // With descriptions
        'has-data-[slot=description]:space-y-6 has-data-[slot=description]:**:data-[slot=label]:font-medium'
      )}
    />
  )
}

export function SwitchField({ className, ...props }) {
  return (
    <Headless.Field
      data-slot="field"
      {...props}
      className={clsx(
        className,
        // Base layout
        'grid grid-cols-[1fr_auto] items-center gap-x-8 gap-y-1 sm:grid-cols-[1fr_auto]',
        // Control layout
        '*:data-[slot=control]:col-start-2 *:data-[slot=control]:self-center',
        // Label layout
        '*:data-[slot=label]:col-start-1 *:data-[slot=label]:row-start-1 *:data-[slot=label]:justify-self-start',
        // Description layout
        '*:data-[slot=description]:col-start-1 *:data-[slot=description]:row-start-2',
        // With description
        'has-data-[slot=description]:**:data-[slot=label]:font-medium'
      )}
    />
  )
}

const colors = {
  'dark/zinc': [
    '[--switch-bg-ring:theme(colors.zinc.950/90%)] [--switch-bg:theme(colors.zinc.900)] dark:[--switch-bg-ring:transparent] dark:[--switch-bg:var(--color-white)]/25',
    '[--switch-ring:theme(colors.zinc.950/90%)] [--switch-shadow:var(--color-black)]/10 [--switch:white] dark:[--switch-ring:theme(colors.zinc.700/90%)]',
  ],
  'dark/white': [
    '[--switch-bg-ring:theme(colors.zinc.950/90%)] [--switch-bg:theme(colors.zinc.900)] dark:[--switch-bg-ring:transparent] dark:[--switch-bg:var(--color-white)]',
    '[--switch-ring:theme(colors.zinc.950/90%)] [--switch-shadow:var(--color-black)]/10 [--switch:white] dark:[--switch-ring:transparent] dark:[--switch:theme(colors.zinc.900)]',
  ],
  dark: [
    '[--switch-bg-ring:theme(colors.zinc.950/90%)] [--switch-bg:theme(colors.zinc.900)] dark:[--switch-bg-ring:var(--color-white)]/15',
    '[--switch-ring:theme(colors.zinc.950/90%)] [--switch-shadow:var(--color-black)]/10 [--switch:white]',
  ],
  zinc: [
    '[--switch-bg-ring:theme(colors.zinc.700/90%)] [--switch-bg:theme(colors.zinc.600)] dark:[--switch-bg-ring:transparent]',
    '[--switch-shadow:var(--color-black)]/10 [--switch:white] [--switch-ring:theme(colors.zinc.700/90%)]',
  ],
  white: [
    '[--switch-bg-ring:var(--color-black)]/15 [--switch-bg:white] dark:[--switch-bg-ring:transparent]',
    '[--switch-shadow:var(--color-black)]/10 [--switch-ring:transparent] [--switch:theme(colors.zinc.950)]',
  ],
  red: [
    '[--switch-bg-ring:var(--color-red-700)]/90 [--switch-bg:var(--color-red-600)] dark:[--switch-bg-ring:transparent]',
    '[--switch:white] [--switch-ring:var(--color-red-700)]/90 [--switch-shadow:var(--color-red-900)]/20',
  ],
  orange: [
    '[--switch-bg-ring:var(--color-orange-600)]/90 [--switch-bg:var(--color-orange-500)] dark:[--switch-bg-ring:transparent]',
    '[--switch:white] [--switch-ring:var(--color-orange-600)]/90 [--switch-shadow:var(--color-orange-900)]/20',
  ],
  amber: [
    '[--switch-bg-ring:var(--color-amber-500)]/80 [--switch-bg:var(--color-amber-400)] dark:[--switch-bg-ring:transparent]',
    '[--switch-ring:transparent] [--switch-shadow:transparent] [--switch:theme(colors.amber.950)]',
  ],
  yellow: [
    '[--switch-bg-ring:var(--color-yellow-400)]/80 [--switch-bg:var(--color-yellow-300)] dark:[--switch-bg-ring:transparent]',
    '[--switch-ring:transparent] [--switch-shadow:transparent] [--switch:theme(colors.yellow.950)]',
  ],
  lime: [
    '[--switch-bg-ring:var(--color-lime-400)]/80 [--switch-bg:var(--color-lime-300)] dark:[--switch-bg-ring:transparent]',
    '[--switch-ring:transparent] [--switch-shadow:transparent] [--switch:theme(colors.lime.950)]',
  ],
  green: [
    '[--switch-bg-ring:var(--color-green-700)]/90 [--switch-bg:var(--color-green-600)] dark:[--switch-bg-ring:transparent]',
    '[--switch:white] [--switch-ring:var(--color-green-700)]/90 [--switch-shadow:var(--color-green-900)]/20',
  ],
  emerald: [
    '[--switch-bg-ring:theme(colors.emerald.600/90%)] [--switch-bg:theme(colors.emerald.500)] dark:[--switch-bg-ring:transparent]',
    '[--switch:white] [--switch-ring:theme(colors.emerald.600/90%)] [--switch-shadow:theme(colors.emerald.900/20%)]',
  ],
  teal: [
    '[--switch-bg-ring:var(--color-teal-700)]/90 [--switch-bg:var(--color-teal-600)] dark:[--switch-bg-ring:transparent]',
    '[--switch:white] [--switch-ring:var(--color-teal-700)]/90 [--switch-shadow:var(--color-teal-900)]/20',
  ],
  cyan: [
    '[--switch-bg-ring:var(--color-cyan-400)]/80 [--switch-bg:var(--color-cyan-300)] dark:[--switch-bg-ring:transparent]',
    '[--switch-ring:transparent] [--switch-shadow:transparent] [--switch:theme(colors.cyan.950)]',
  ],
  sky: [
    '[--switch-bg-ring:theme(colors.sky.600/80%)] [--switch-bg:theme(colors.sky.500)] dark:[--switch-bg-ring:transparent]',
    '[--switch:white] [--switch-ring:theme(colors.sky.600/80%)] [--switch-shadow:theme(colors.sky.900/20%)]',
  ],
  blue: [
    '[--switch-bg-ring:var(--color-blue-700)]/90 [--switch-bg:var(--color-blue-600)] dark:[--switch-bg-ring:transparent]',
    '[--switch:white] [--switch-ring:var(--color-blue-700)]/90 [--switch-shadow:var(--color-blue-900)]/20',
  ],
  indigo: [
    '[--switch-bg-ring:var(--color-indigo-600)]/90 [--switch-bg:var(--color-indigo-500)] dark:[--switch-bg-ring:transparent]',
    '[--switch:white] [--switch-ring:var(--color-indigo-600)]/90 [--switch-shadow:var(--color-indigo-900)]/20',
  ],
  violet: [
    '[--switch-bg-ring:theme(colors.violet.600/90%)] [--switch-bg:theme(colors.violet.500)] dark:[--switch-bg-ring:transparent]',
    '[--switch:white] [--switch-ring:theme(colors.violet.600/90%)] [--switch-shadow:theme(colors.violet.900/20%)]',
  ],
  purple: [
    '[--switch-bg-ring:var(--color-purple-600)]/90 [--switch-bg:var(--color-purple-500)] dark:[--switch-bg-ring:transparent]',
    '[--switch:white] [--switch-ring:var(--color-purple-600)]/90 [--switch-shadow:var(--color-purple-900)]/20',
  ],
  fuchsia: [
    '[--switch-bg-ring:theme(colors.fuchsia.600/90%)] [--switch-bg:theme(colors.fuchsia.500)] dark:[--switch-bg-ring:transparent]',
    '[--switch:white] [--switch-ring:theme(colors.fuchsia.600/90%)] [--switch-shadow:theme(colors.fuchsia.900/20%)]',
  ],
  pink: [
    '[--switch-bg-ring:var(--color-pink-600)]/90 [--switch-bg:var(--color-pink-500)] dark:[--switch-bg-ring:transparent]',
    '[--switch:white] [--switch-ring:var(--color-pink-600)]/90 [--switch-shadow:var(--color-pink-900)]/20',
  ],
  rose: [
    '[--switch-bg-ring:theme(colors.rose.600/90%)] [--switch-bg:theme(colors.rose.500)] dark:[--switch-bg-ring:transparent]',
    '[--switch:white] [--switch-ring:theme(colors.rose.600/90%)] [--switch-shadow:theme(colors.rose.900/20%)]',
  ],
}

export function Switch({ color = 'dark/zinc', className, ...props }) {
  return (
    <Headless.Switch
      data-slot="control"
      {...props}
      className={clsx(
        className,
        // Base styles
        'group relative isolate inline-flex h-6 w-10 cursor-default rounded-full p-[3px] sm:h-5 sm:w-8',
        // Transitions
        'transition duration-0 ease-in-out data-changing:duration-200',
        // Outline and background color in forced-colors mode so switch is still visible
        'forced-colors:outline forced-colors:[--switch-bg:Highlight] dark:forced-colors:[--switch-bg:Highlight]',
        // Unchecked
        'bg-zinc-200 ring-1 ring-inset ring-black/5 dark:bg-white/5 dark:ring-white/15',
        // Checked
        'data-checked:bg-(--switch-bg) data-checked:ring-(--switch-bg-ring) dark:data-checked:bg-(--switch-bg) dark:data-checked:ring-(--switch-bg-ring)',
        // Focus
        'focus:outline-hidden data-focus:outline data-focus:outline-2 data-focus:outline-offset-2 data-focus:outline-blue-500',
        // Hover
        'data-hover:data-checked:ring-(--switch-bg-ring) data-hover:ring-black/15',
        'dark:data-hover:data-checked:ring-(--switch-bg-ring) dark:data-hover:ring-white/25',
        // Disabled
        'data-disabled:bg-zinc-200 data-disabled:data-checked:bg-zinc-200 data-disabled:opacity-50 data-disabled:data-checked:ring-black/5',
        'dark:data-disabled:bg-white/15 dark:data-disabled:data-checked:bg-white/15 dark:data-disabled:data-checked:ring-white/15',
        // Color specific styles
        colors[color]
      )}
    >
      <span
        aria-hidden="true"
        className={clsx(
          // Basic layout
          'pointer-events-none relative inline-block size-[1.125rem] rounded-full sm:size-3.5',
          // Transition
          'translate-x-0 transition duration-200 ease-in-out',
          // Invisible border so the switch is still visible in forced-colors mode
          'border border-transparent',
          // Unchecked
          'bg-white shadow ring-1 ring-black/5',
          // Checked
          'group-data-checked:bg-(--switch) group-data-checked:shadow-(--switch-shadow) group-data-checked:ring-(--switch-ring)',
          'group-data-checked:translate-x-4 sm:group-data-checked:translate-x-3',
          // Disabled
          'group-data-checked:group-data-disabled:bg-white group-data-checked:group-data-disabled:shadow group-data-checked:group-data-disabled:ring-black/5'
        )}
      />
    </Headless.Switch>
  )
}
