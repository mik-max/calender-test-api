import loadSqlQueries from "../utils.js";
import sql from 'mssql'
import configData from '../../config.js'
import { config } from "dotenv";

const getEvents = async () => {
     try {
          let pool = await sql.connect(configData.sql);
          let sqlQueries = await loadSqlQueries('data/events');
          const list = await pool.request().query(sqlQueries.eventslists)
          return list.recordset;
     } catch (error) {
          return error.message
     }
} 

const getById = async (id) => {
     try {
          let pool = await sql.connect(configData.sql)
          let sqlQueries = await loadSqlQueries('data/events');
          const oneEvent = await pool.request().input('id', sql.Int, id).query(sqlQueries.eventsById)
          return oneEvent.recordset;
     } catch (error) {
          return error.message
     }
}

const createEvents = async (eventData) => {
    let randomId = Math.floor(10 + Math.random() * 100);
    let randomUserId = `user${randomId}`
     try {
          
          let pool = await sql.connect(configData.sql)
          let sqlQueries = await loadSqlQueries('data/events')
          const insertEvent = await pool.request()
          .input('title', sql.NVarChar(100), eventData.title)
          .input('userId', sql.NVarChar(50), randomUserId)
          .input('details', sql.NVarChar(500), eventData.details)
          .input('startDate', sql.Date, eventData.startDate)
          .input('attendance', sql.Int, eventData.attendance)
          .input('endDate', sql.Date, eventData.endDate)
          .input('venue', sql.NVarChar(30), eventData.venue)
          .query(sqlQueries.createEvents)
          return insertEvent.recordset;
     } catch (error) {
          // console.log(error)
          return error.message
     }
}
const updateEvents = async (id, eventData) => {
     try {
          let pool = await sql.connect(configData.sql)
          let sqlQueries = await loadSqlQueries('data/events')
          const update = await pool.request()
          .input('id', sql.Int, id)
          .input('title', sql.NVarChar(100), eventData.title)
          .input('details', sql.NVarChar(500), eventData.details)
          .input('startDate', sql.Date, eventData.startDate)
          .input('attendance', sql.Int, eventData.attendance)
          .input('endDate', sql.Date, eventData.endDate)
          .input('venue', sql.NVarChar(30), eventData.venue)
          .query(sqlQueries.updateEvents);
          return update.recordset;
     } catch (error) {
          return error.message;
     }
}
const deleteEvents = async (id) => {
     try {
          let pool = await sql.connect(configData.sql)
          let sqlQueries = await loadSqlQueries('data/events');
          const deleted = await pool.request()
          .input('id', sql.Int, id)
          .query(sqlQueries.deleteEvents);
          return deleted.recordset;
     } catch (error) {
         return error.message; 
     }
}

export {getById, getEvents, createEvents, updateEvents, deleteEvents}