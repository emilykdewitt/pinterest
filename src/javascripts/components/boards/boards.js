import boardsData from '../../helpers/data/boardsData';

const initBoards = () => {
  boardsData.loadBoards()
    .then((response) => {
      console.error('resp', response.data.boards);
    })
    .catch(err => console.error('error from loadBoards', err));
};

export default { initBoards };