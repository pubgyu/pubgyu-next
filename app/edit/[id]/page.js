import Title from '@/components/title'
import {useParams} from 'next/navigation'
import { connectDB } from '@/util/database'
import { ObjectId } from 'mongodb'

export default async function Edit(props) {
    let db = (await connectDB).db('pub-data');
	let result = await db.collection('post').findOne({_id : new ObjectId(props.params.id)});
    
    return (
        <section className="boardWrap">
			<Title title="게시물 수정" />

            <div className="writeForm">
                <form action="/api/work/update/" method="POST">
                    <input name="title" placeholder="제목" type="text" defaultValue={result.title}/>
                    <input name="tag" placeholder="태그" type="text" defaultValue={result.tag}/>
                    <textarea name="desc" placeholder="내용" defaultValue={result.desc}></textarea>
                    
                    <span className="btnWrap">
                        <button className="postBtn bk" type="submit">수정</button>
                    </span>

                    <input className="invislble" name="_id" type="text" defaultValue={result._id} readOnly/>
                </form>
            </div>
		</section>
    )
}