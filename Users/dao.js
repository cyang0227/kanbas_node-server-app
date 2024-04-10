import model from './model';
export const createUser = (user) => model.create(user);
export const findAllUsers = () => model.find();
export const findUserById = (id) => model.findById(id);
export const findUserByUsername = (username) => model.findOne({ username });
export const findUserByCredentials = (credentials, password) => model.findOne({ credentials, password });

export const updateUser = (id, user) => model.updateOne({ _id: id }, { $set: user });
export const deleteUser = (id) => model.deleteOne({ _id: id });