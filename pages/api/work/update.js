import { connectDB } from "@/util/database"
import { ObjectId } from 'mongodb'

export default async function handler(req,res){
    let db = (await connectDB).db('pub-data');

    // update
    async function insert() {
        if (req.body.title != '' && req.body.tag != '' && req.body.desc != '') {
            try {
                // 정상 post - update DB
                await db.collection('post').updateOne({_id : new ObjectId(req.body._id)}, 
                {$set : {
                    title : req.body.title,
                    tag : req.body.tag,
                    desc : req.body.desc
                }});
                res.redirect(302, '/work');
            } catch(e) {
                // 예외
            }
        }else {
            // 예외
            return res.status(500).json('제대로 써라');
        }
    }
    if (req.method == 'POST') insert();
}