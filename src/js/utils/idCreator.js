const idCreator = () => {
    const id = `f${(~~(Math.random() * 1e8)).toString(16)}`;
    return id;
  }
export default idCreator;