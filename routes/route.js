import express from 'express';
import {
index ,
filterlib,
filtergrp,
filtermsg,
filtercont,
libraries,
groups,
messages,
contacts,
libActionPage,
groupActionPage,
messageActionPage,
contactActionPage,
sendMessage,
} from '../controllers/controllers.js';

import {
    deleteLibrary,
    deleteGroup
    } from '../controllers/deletecontroller.js';


export  const allroute= express.Router();

allroute
.get('/',index)
.get('/libraries',libraries)
.get('/groups',groups)
.get('/messages',messages)
.get('/contacts',contacts)

.post('/library',libActionPage)
.post('/group',groupActionPage)
.post('/message',messageActionPage)
.post('/contact',contactActionPage)
.post('/filter-by-lib',filterlib)
.post('/filter-by-grp',filtergrp)
.post('/filter-by-msg',filtermsg)
.post('/filter-by-contr',filtercont)
.post('/send-message',sendMessage)
.post('/delete-library',deleteLibrary)
.post('/delete-group',deleteGroup)

