// import { config } from 'dotenv'
// import sql from 'mssql'
// const events = require('./events')
// const client = async (server, config) => {
//      let pool = null;
//      const clodsePool = async() => {
//           try{
//                await pool.close();
//                pool = null
//           }catch(err){
//                pool = null
//                console.log(err)
//           };
//      };
//      const getConnection = async () => {
//           try{
//                if(pool){
//                     return pool
//                }
//                pool = await sql.connect(config)
//                pool.on('error', async err => {
//                     console.log(err)
//                     await clodsePool();
//                });
//                return pool;
//           } catch (err) {
//                console.log(err);
//                pool = null;
//           };
//      };
//      return {
//           events: await events.register({sql, getConnection})
//      }
// }

// export default client;