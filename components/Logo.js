import Link from 'next/link'

function Logo({ isLight }) {
  const colors = { accent: 'text-primary', main: 'text-blueGrey-900' }
  if (isLight === 'true') {
    colors.main = 'text-white'
  }

  return (
    <Link href="/">
      <a className={`text-2xl font-bold md:text-[1.75rem] ${colors.main}`}>
        RaceIn<span className={colors.accent}>Utah</span>
      </a>
    </Link>
  )
}

export default Logo
