import Link from 'next/link'
import UserInfo from '@/components/userInfo'

export default function Nav({session}) {
    return (
		<aside className="sidebarWrap">
			<header>
				<h1 className="tit">pubgyu's Dashboard</h1>
				<UserInfo session={session} />
			</header>
			<nav className="navWrap">
				<Link href="/">Home</Link>
				{
					(!session) ? '' : <Link href="/work">Work</Link>
				}
			</nav>
		</aside>
    )
}