'use client'

import Link from 'next/link'

export default function Item ({result}) {
    const deleteApi = (_id, item) => {
        // 파라미터 버전
        fetch(`/api/work/${_id}`,{
            method : 'DELETE'
        }).then(()=>{
            deleteItem(item);
        })
        
        // fetch('/api/work/update/', {
        //     method : 'DELETE',
        //     body : _id,
        // }).then((r)=>{
        //     if(r.status == 200) {
        //         return r.json()
        //     } else {
        //         //서버가 에러코드전송시 실행할코드
        //         console.log('server error');
        //     }
        // })
        // .then((result)=>{ 
        //     //성공시 실행할코드
        //     deleteItem(item);
        // }).catch((error)=>{
        //     //인터넷문제 등으로 실패시 실행할코드
        //     console.log(error)
        // })
    }

    const deleteItem = (item) => {
        item.className += ' remove';
        setTimeout(() => {
            item.style.display = 'none';
        },600)
    }

    return (
        <>
        {
            result.map((_this,i)=>{
                let link = `/edit/${_this._id.toString()}`
                return (
                    <div className="item" key={i}>
                        <Link href={link}>
                            <strong className="title">{_this.title}</strong>
                            <img className="thumbImg" src={_this.thumbImg} alt="" />
                        </Link>
                        <button className="removeBtn" onClick={(e)=>{
                            deleteApi(_this._id, e.target.parentNode);
                        }}>remove</button>
                    </div>
                )
            })
        }
        </>
    )
}