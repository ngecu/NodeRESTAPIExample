import {v4 as uuidv4} from 'uuid';

let users = []



export const createUser = (req,res)=>{
    console.log("POST route reached");
    const user =req.body

    const userId = uuidv4();
    
    const userWithId = { ...user,id:userId}
    

    users.push(userWithId);

    res.send(`user with name ${user.name} added `) 

}

export const getUsers = (req,res)=>{
    console.log(users)
    res.send(users);
}

export const getUser = (req,res)=>{
    const {id} = req.params;

    const foundUser = users.find((user)=> user.id === id);
    res.send(foundUser)
}


export const deleteUser = (req,res)=>{
    const {id} = req.params;

    users = users.filter((user)=>user.id !== id );

    res.send(`User with the id ${id} deleted from the database`);

}

export const updateUser = (req,res)=>{
    const {id} = req.params
    const {firstName} = req.body

    const userToBeUpdated = users.find((user)=>user.id === id);

    if(firstName){
        userToBeUpdated.firstName = firstName;
    }

}