import { Filter } from "firebase-admin/firestore";

export default async function addMovieToDb(collection, res, data) {
    if(collection!=null && data!=null) {
        

        let ref = await collection.where(
            Filter.or(
                Filter.where('id', '==', data.id),
                Filter.where('kp-id', '==', data.id)
            )
        ).get()
    
        if(ref.empty) {
            data['kp-id'] = data.id
            delete(data.id)
            const result = await collection.add(data)
            return res.send((await result.get()).data())
        }
    
        return res.send('already exist')
    }
    
    return res.send('data is not defined')
}