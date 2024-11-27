import libraryModel from '../models/library/model.js';
import groupModel from '../models/group/model.js';
import messageModel from '../models/message/model.js';
import contactModel from '../models/contact/model.js'
import nodemailer from 'nodemailer';

const index=async function(req,res){
    try{
        const group = await groupModel.find()
        const library = await libraryModel.find()
        const message = await messageModel.find()
        const contact = await contactModel.find()
        res.render('index',{x1:group,x2:library,x3:message,x4:contact})
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
  
}


const filterlib = async function(req, res) {
    var { libid } = req.body;
    console.log('libid received:', libid);

    try {
      var resultfromdb = await messageModel.find({ libs: libid });
      console.log(resultfromdb);
      res.send({ resultfromdb: resultfromdb });
    

    } catch (err) {
      res.status(500).json({ message: 'Error fetching data from database', error: err.message });
    }
  };

  const filtermsg = async function(req, res) {
    var { msgid } = req.body;
    console.log('msgid received:', msgid);

    try {
      var resultfromdb = await messageModel.find({ _id: msgid });
      console.log(resultfromdb);
      res.send({ resultfromdb: resultfromdb });

    } catch (err) {
      res.status(500).json({ message: 'Error fetching data from database', error: err.message });
    }
  };


const filtergrp = async function(req, res) {
    var { grpid } = req.body;
    console.log('grpid received:', grpid);

    try {
      var resultfromdb = await contactModel.find({ grp: grpid });
      console.log(resultfromdb);
      res.send({ resultfromdb: resultfromdb });

    } catch (err) {
      res.status(500).json({ message: 'Error fetching data from database', error: err.message });
    }
  };

  const filtercont = async function(req, res) {
    var { contrid } = req.body;
    console.log('contrid received:', contrid);

    try {
      var resultfromdb = await contactModel.find({ _id: contrid });
      console.log(resultfromdb);
      res.send({ resultfromdb: resultfromdb });

    } catch (err) {
      res.status(500).json({ message: 'Error fetching data from database', error: err.message });
    }
  };


const libraries= async function(req,res){
   
    try{
        const library = await libraryModel.find()
        res.render('user/libraries',{lib:library})
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
}
const groups=async function(req,res){
    try{
        const group = await groupModel.find()
        res.render('user/groups',{grp:group})
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
}
const messages= async function(req,res){

    try{
        let anslibraries = await libraryModel.find()
        let ansmsg= await messageModel.find()

       
        
        res.render('user/messages',{x1:anslibraries,x2:ansmsg})
    }
    catch(err){
        res.status(400).json({message: err.message});
    }

}
const contacts= async function(req,res){


    try{
        let ansgroups = await groupModel.find()
        let ansmsg= await contactModel.find()
        
        res.render('user/contacts',{x1:ansgroups,x2:ansmsg})
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
    
}

const libActionPage =async function(req,res){

    try{
         var{library}=req.body;
         const newLibrary = new libraryModel({
            library ,
        });
         const savedUser = await newLibrary.save();
        //  res.status(201).json(savedUser);
        res.redirect('/libraries'); 
    }
    catch(err){
        res.status(400).json({ message: err.message });
    }
}


const groupActionPage= async function(req,res){
    try{
        const{group}=req.body;
        const newGroup= new groupModel({
            group,
        })
        const savedgrp = await newGroup.save();
        // res.status(201).json(savedgrp);
        res.redirect('/groups'); 
    }
    catch(err){
        res.status(400).json({message:err.message})
    }
}



    const messageActionPage= async function(req,res){
        try{
            const{libs,message}=req.body;
            const newGroup= new messageModel({
                libs,
                message
            })
            console.log(newGroup)
            const savedmsg = await newGroup.save();
            res.redirect('/messages'); 
        }
        catch(err){
            res.status(400).json({message:err.message})
        }
    }

const contactActionPage= async function(req,res){
    try{
        const{grp,name,number,email}=req.body;
        const newGroup= new contactModel({
            grp,
            name,
            number,
            email

        })
        console.log(newGroup)
        const savedcont = await newGroup.save();
        // res.status(201).json(savedcont);
        res.redirect('/contacts'); 
    }
    catch(err){
        res.status(400).json({message:err.message})
    }
}

//   mail--------
// Controller to handle sending emails
const sendMessage = async (req, res) => {
    const { name, number, email, message } = req.body;

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Change to your email service provider
        secure:true,
        port: 465, // Change to your email service provider's port
        auth: {
            user: 'ishwarsinghbhandari5@gmail.com', // replace with your email
            pass: 'omwo xaqq gplf bbes'   // replace with your email password
        }
    });

    // Email options
    const mailOptions = {
        from: `ishwarsinghbhandari5@gmail.com`, // sender's email address
        to: `${email}`, // receiver's email address
        subject: `Message from ${name}`,
        text: `
            Name: ${name}
            Phone Number: ${number}
            Email: ${email}
            Message: ${message}.

        `
    };
    console.log(mailOptions)

    try {
        console.log(mailOptions)
        // Send email
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        res.json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('An error occurred while sending the email.');
    }
};



  

export{
    index,
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
    
}