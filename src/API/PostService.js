

export default class PostService{

    static async getall(){
        const response = await fetch('https://jsonplaceholder.typicode.com/posts').then(res=>{
            return res.json();
            });
            return response; 
        }
}