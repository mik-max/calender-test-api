import 'dotenv/config'
import assert from 'assert';
const {
     PORT,
     HOST,
     HOST_URL,
     COOKIE_ENCRYPT_PWD,
     SQL_DATABASE,
     SQL_SERVER,
     SQL_USER ,
     SQL_PASSWORD ,
     OKTA_ORG_URL,
     OKTA_CLIENT_ID,
     OKTA_CLIENT_SECRET
} = process.env;
const sqlEncript = process.env.SQL_ENCRYPT === true;
 let configData = {
     port: PORT,
     host: HOST,
     url: HOST_URL,
     cookiePwd: COOKIE_ENCRYPT_PWD,
     sql:{
          server: SQL_SERVER,
          database: SQL_DATABASE,
          user: SQL_USER,
          password: SQL_PASSWORD,
          options:{
               encrypt:true,
               enableArithAbort:true,
          }
     },
     okta:{
          url: OKTA_ORG_URL,
          clientId: OKTA_CLIENT_ID,
          clientSecret: OKTA_CLIENT_SECRET,
     }
}
export default configData;


