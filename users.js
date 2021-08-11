
import { v4 as uuidv4 } from 'uuid';
let users =[];
export const recieveusers= (req,res) => {
    console.log(users)
    res.send(users)  ;
    res.status(404).send('this is an error');
};
export const createusers =(req,res) => {
    const user = req.body;
    users.push({...user,id:uuidv4()});
    
    res.send(`user with the name ${user.firstName} added`);
};
export const holdusers= (req ,res) => {
    const { id } = req.params;
    const findUser =users.find((user) =>user.id == id);
    res.send(findUser)
};
export const removeusers=(req,res)=>{
    const { id } = req.params;
    users = users.filter((user)=>user.id != id);
    res.send(`user withe the ${id} deleted from the database`)
};
export const includeusers =(req,res)=>{
    const { id } = req.params;
    const {firstName,lastName,age} =req.body;
    const user = users.find((user)=>user.id == id);

    if(firstName) user.firstName =firstName;
    if(lastName) user.lastName= lastName;
    if(age) user.age = age;
    res.send(`user with the ${id} has been updated`)
};