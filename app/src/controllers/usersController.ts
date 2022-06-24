import users from "../models/User.js";

class UserController {
    static listUsers = (req, res) => {
        users.find((err, users) => {
            res.status(200).json(users);
        });
    }

    static listUserById = (req, res) => {
        const id = req.params.id;

        users.findById(id, (err, users) => {
            if(err) {
                res.status(404).send({message: `${err.message} - User not found!`});
            } else {
                res.status(200).send(users);
            }
        });
    }

    static addUser = (req, res) => {
        let user = new users(req.body);

        user.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - Something went wrong, the user has not been added!`});
            } else {
                res.status(201).send(user.toJSON());
            }
        });
    }

    static updateUser = (req, res) => {
        const id = req.params.id;

        users.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: "User updated successfully!"});
            } else {
                res.status(500).send({message: err.message});
            }
        });
    }

    static deleteUser = (req, res) => {
        const id = req.params.id;

        users.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: "User deleted sucessfully!"});
            } else {
                res.status(500).send({message: err.message});
            }
        });
    }
}

export default UserController;