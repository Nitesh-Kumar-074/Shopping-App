import conf from "../conf/conf";
import {Client,ID,Databases,Storage,Query} from 'appwrite'

export class Service{
       client = new Client();
       database;
       bucket; 
       constructor(){
              this.client.setEndpoint(conf.endPoint)
              .setProject(conf.projectId)

              this.database = new Databases(this.client)
              this.bucket = new Storage(this.client)
       }
       async createPost({title,slug,content,featuredImage,userId,price,sellerEmail}){
              try {
                     return await this.database.createDocument(
                            conf.databaseId,
                            conf.collectionId,
                            slug,
                            {
                                   title,
                                   content,
                                   featuredImage,
                                   userId,
                                   price,
                                   sellerEmail
                            }
                     )
              } catch (error) {
                     console.log("Appwrite error :: createPost error",error);
              }
       }
       async updatePost(slug,{title,content,featuredImage,price,sellerEmail}){
              try {
                     return await this.database.updateDocument(
                            conf.databaseId,
                            conf.collectionId,
                            slug,
                            {
                                   title,
                                   content,
                                   featuredImage,
                                   price,
                                   sellerEmail
                            }
                     )
              } catch (error) {
                     console.log("Appwrite error :: updatePost error",error); 
              }
       }
       async deletePost(slug){
              try {
                     await this.database.deleteDocument(
                            conf.databaseId,
                            conf.collectionId,
                            slug
                     )
                     return true
              } catch (error) {
                     console.log("Appwrite error :: deletePost error",error);
              }
              return false;
       }

       async getPost(slug){
              try {
                     return await this.database.getDocument(
                            conf.databaseId,
                            conf.collectionId,
                            slug
                     )
              } catch (error) {
                     console.log("Appwrite error :: getPost error",error);
              }
       }

       async getPostsOfCurrentUser(userId){ // This will show the all posts of current user 
              try {
                     return await this.database.listDocuments(
                            conf.databaseId,
                            conf.collectionId,
                            [
                                  Query.equal("userId",[userId])
                            ]
                     )
              } catch (error) {
                     console.log("Appwrite error :: getPostsOfCurrentUser error",error);
              }
       }

       async getAllPosts(){
              try {
                     return await this.database.listDocuments(
                            conf.databaseId,
                            conf.collectionId
                     )
              } catch (error) {
                     console.log("Appwrite error :: getAllPosts error",error);
              }
       }

       async uploadFile(file){
              try {
                     return await this.bucket.createFile(
                            conf.bucketId,
                            ID.unique(),
                            file
                     )
              } catch (error) {
                     console.log("Appwrite error :: uploadFile error",error);      
              }
       }

       async deleteFile(fileId){
              try {
                     return await this.bucket.deleteFile(
                            conf.bucketId, 
                            fileId
                     )
              } catch (error) {
                     console.log("Appwrite service :: deleteFile error :: ",error)
                     return false
              }
       }

       getFilePreview(fileId){
              return this.bucket.getFilePreview(
                     conf.bucketId,
                     fileId
              )
       }
}

const service = new Service()
export default service