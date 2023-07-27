import { connectDB } from "@/util/database"
import { ObjectId } from 'mongodb'

export default async function handler(req,res){
    let db = (await connectDB).db('pub-data');
    
    // delete
    async function remove() {
        try {
            // 정상 post - delete DB
            await db.collection('post').deleteOne({_id : new ObjectId(req.query.delete)});
            // res.redirect(302, '/work');
            res.status(200).json('삭제완료')
        } catch(e) {
            // 예외
        }
    }
    if (req.method == 'DELETE') remove();
}