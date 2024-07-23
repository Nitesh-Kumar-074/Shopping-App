import conf from '../conf/conf.js'
import {Client,Account,ID} from 'appwrite'

export class Authentication{
       client = new Client();
       account;
       constructor(){
              this.client.setEndpoint(conf.endPoint)
              .setProject(conf.projectId)

              this.account = new Account(this.client)
       }

       async createAccount({email,password,name}){
              try {
                     const userAccount = await this.account
                     .create(ID.unique(),email,password,name)
                     if(userAccount){
                            return this.login({email,password})
                     }
                     else{
                            return userAccount
                     }
              } catch (error) {
                     console.log("Appwrite error :: signup error",error);
              }
       }
       async login({email,password}){
              try {
                     return await this.account
                     .createEmailPasswordSession(email,password)
              } catch (error) {
                     console.log("Appwrite error :: login error",error); 
              }
       }
       async logout(){
              try {
                     await this.account.deleteSessions()
                     return true
              } catch (error) {
                     console.log("Appwrite error :: logout error",error);      
              }
              return false
       }

       async getCurrentUser(){
              try {
                     return await this.account.get()
              } catch (error) {
                     console.log("Appwrite error :: getCurrentUser error",error);
              }
       }
}

const userAuthentication = new Authentication()

export default userAuthentication
