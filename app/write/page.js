import Title from '@/components/title'

export default function Write() {
    return (
        <section className="boardWrap">
            <Title title="작업물 추가" />

            <div className="writeForm">
                <form action="/api/work/post/" method="POST">
                    <input name="title" placeholder="제목" type="text" />
                    <input name="tag" placeholder="태그" type="text" />
                    <textarea name="desc" placeholder="내용"></textarea>
                    
                    <span className="btnWrap">
                        <button className="postBtn bk" type="submit">작성</button>
                    </span>
                </form>
            </div>
		</section>
    )
}