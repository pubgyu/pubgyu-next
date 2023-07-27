import { connectDB } from "@/util/database"

export default async function handler(req,res){

    async function insert() {
        if (req.body.title != '' && req.body.tag != '' && req.body.desc != '') {
            try {
                // 정상 post
                let db = (await connectDB).db('pub-data');
                await db.collection('post').insertOne(req.body);
                res.redirect(302, '/work');
            } catch(e) {
                // 예외
            }
        }else {
            // 예외
            return res.status(500).json('제대로 써라');
        }
    }

    if (req.method == 'POST') {
        insert();
    }
    
}