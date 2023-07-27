import Link from 'next/link'
import { connectDB } from '@/util/database'
import Title from '@/components/title'
import Item from './item'

export const dynamic = 'force-dynamic';

export default async function Work() {
	let db = (await connectDB).db('pub-data');
	let result = await db.collection('post').find().toArray();
	result.map((_this,i)=>{
		_this._id = _this._id.toString();
		return _this;
	})
	return (
		<section className="boardWrap">
			<Title title="Work" />

			<Link className="addBtn" href="/write">add</Link>

			<article className="workListWrap">
				<Item result={result} />
			</article>
		</section>
	)
}
