import axios from 'axios';

// The function below returns a promise
const loadBoards = () => axios.get('../db/boards.json');

export default { loadBoards };
